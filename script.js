function addItem() {
  const item = document.createElement("div");
  item.className = "item";
  const boxText = document.querySelector("#addItemText").value;
  if (boxText === "") {
    alert("write a name for your item in the box above");
    return;
  }
  const name = document.createTextNode(boxText);
  item.appendChild(name);

  document.querySelector("#items").appendChild(item);

  document.querySelector("#addItemText").value = "";
}

const addItemButton = document.querySelector("#addItemButton");
addItemButton.addEventListener("click", () => addItem());

function clearAll() {
  const items = document.querySelector("#items");
  items.outerHTML = `<div class="items" id="items"></div>`;
}

const clearAllButton = document.querySelector("#clearAll");
clearAllButton.addEventListener("click", () => clearAll());

function removeItem(e) {
  if (e.target.className === "item") {
    e.target.remove();
  }
}

const allItems = document.querySelector("#items");
allItems.addEventListener("click", removeItem);
