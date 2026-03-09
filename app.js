// b.6

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

    let stockHeader = document.createElement("article");
    stockHeader.classList = "article-header";

    let stockActions = document.createElement("article");
    stockActions.classList = "article-actions";

    let name = document.createElement("h2");
    name.textContent = item.name;
    let number = document.createElement("h3");
    number.textContent = item.amount;

    let increaseItem = document.createElement("button");
    increaseItem.className = "material-icons inp";
    increaseItem.textContent = "keyboard_arrow_up";
    increaseItem.onclick = () => plus(i);

    let reduceItem = document.createElement("button");
    reduceItem.classList = "material-icons inp";
    reduceItem.textContent = "keyboard_arrow_down";
    reduceItem.onclick = () => minus(i);

    let deleteItem = document.createElement("button");
    deleteItem.classList = "material-icons inp";
    deleteItem.textContent = "delete";
    deleteItem.onclick = () => deleteItemFnc(i);

    stockHeader.append(name);
    stockHeader.append(number);

    let lstArticelBody = [increaseItem, reduceItem, deleteItem];
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
