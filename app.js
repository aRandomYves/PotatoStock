// b.8

let items = JSON.parse(localStorage.getItem("items")) || [
  { name: "Kartoffeln", amount: 0 },
  { name: "Milch", amount: 0 },
];

function save() {
  localStorage.setItem("items", JSON.stringify(items));
}

function render() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  items.forEach((item, i) => {
    let stockArticle = document.createElement("article");
    stockArticle.classList = `article-wrapper ${item.amount === 0 ? "zero" : ""}`;

    let name = document.createElement("h2");
    name.textContent = item.name;
    let number = document.createElement("h3");
    number.textContent = item.amount;

    let increaseItem = document.createElement("button");
    increaseItem.className = "material-icons inp btn_prim";
    increaseItem.textContent = "add";
    increaseItem.onclick = () => plus(i);

    let reduceItem = document.createElement("button");
    reduceItem.classList = "material-icons inp btn_prim";
    reduceItem.textContent = "remove";
    reduceItem.onclick = () => minus(i);

    let deleteItem = document.createElement("button");
    deleteItem.classList = "material-icons inp btn_prim";
    deleteItem.textContent = "delete";
    deleteItem.onclick = () => deleteItemFnc(i);

    function moveItemFnc(from, to) {
      let item = items.splice(from, 1)[0];
      items.splice(to, 0, item);

      save();
      render();
    }

    let moveItemUp = document.createElement("button");
    moveItemUp.classList = "material-icons inp btn_sec";
    moveItemUp.textContent = "keyboard_arrow_up";
    moveItemUp.onclick = () => moveItemFnc(i, i - 1);

    let moveItemDown = document.createElement("button");
    moveItemDown.classList = "material-icons inp btn_sec";
    moveItemDown.textContent = "keyboard_arrow_down";
    moveItemDown.onclick = () => moveItemFnc(i, i + 1);

    let stockHeader = document.createElement("article");
    stockHeader.classList = "article-header";

    let stockActions = document.createElement("article");
    stockActions.classList = "article-actions";

    stockHeader.append(name);
    stockHeader.append(number);

    let lstArticelBody = [
      increaseItem,
      reduceItem,
      deleteItem,
      moveItemUp,
      moveItemDown,
    ];
    lstArticelBody.forEach((e) => {
      stockActions.append(e);
    });

    stockArticle.append(stockHeader);
    stockArticle.append(stockActions);

    list.appendChild(stockArticle);
  });
}

function plus(i) {
  items[i].amount += 0.5;
  save();
  render();
}

function minus(i) {
  if (items[i].amount > 0) {
    items[i].amount -= 0.5;
  }
  save();
  render();
}

function addItem() {
  let name = document.getElementById("newItem").value;

  items.push({
    name: name,
    amount: 1,
  });

  save();
  render();
}

function deleteItemFnc(index) {
  items.splice(index, 1);

  save();
  render();
}

render();
