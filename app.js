// b.001

let items = JSON.parse(localStorage.getItem("items")) || [
  { name: "Kartoffeln", amount: 1 },
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

    li.innerHTML =
      item.name +
      " <button onclick='minus(" +
      i +
      ")'>-</button> " +
      item.amount +
      " <button onclick='plus(" +
      i +
      ")'>+</button>";

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

render();
