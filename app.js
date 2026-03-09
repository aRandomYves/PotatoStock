// b.2

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
    let li = document.createElement("li");

    let name = document.createTextNode(`${item.name} `);
    let number = document.createTextNode(`(${item.amount}) `);

    let increaseItem = document.createElement("button");
    increaseItem.textContent = "+";
    increaseItem.onclick = () => plus(i);

    let reduceItem = document.createElement("button");
    reduceItem.textContent = "-";
    reduceItem.onclick = () => minus(i);

    let deleteItem = document.createElement("button");
    deleteItem.textContent = "delete";
    deleteItem.onclick = () => deleteItemFnc(i);

    li.append(name);
    li.append(number);
    li.append(increaseItem);
    li.append(reduceItem);
    li.append(deleteItem);

    list.appendChild(li);
  });
}

function plus(i) {
  items[i].amount++;
  save();
  render();
}

function minus(i) {
  if (items[i].amount > 0) {
    items[i].amount--;
  }
  save();
  render();
}

function addItem() {
  let name = document.getElementById("newItem").value;

  items.push({
    name: name,
    amount: 0,
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
