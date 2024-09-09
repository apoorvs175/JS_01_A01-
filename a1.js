
// Item Class
class Item {
  constructor(id, name, quantity, price) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}

// Inventory Management Functions
function addItem(inventory, item) {
  inventory.push(item);
}

function updateItem(inventory, id, newDetails) {
  const itemIndex = inventory.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    Object.assign(inventory[itemIndex], newDetails);
  }
}

function deleteItem(inventory, id) {
  const itemIndex = inventory.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    inventory.splice(itemIndex, 1);
  }
}

// Additional Utility Functions
function getItem(inventory, id) {
  return inventory.find(item => item.id === id);
}

function printInventory(inventory) {
  inventory.forEach(item => {
    console.log(`ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}`);
  });
}

// Example usage
let inventory = [];

// Initial Inventory
addItem(inventory, new Item(1, 'Apple', 10, 0.5));
addItem(inventory, new Item(2, 'Banana', 5, 0.3));
addItem(inventory, new Item(3, 'Orange', 8, 0.7));

// Print Inventory
console.log('Initial Inventory:');
printInventory(inventory);

// Update an Item
updateItem(inventory, 1, { quantity: 12, price: 0.55 });
console.log('Updated Inventory:');
printInventory(inventory);

// Delete an Item
deleteItem(inventory, 2);
console.log('After Deletion:');
printInventory(inventory);

// Get and Print a Specific Item
const specificItem = getItem(inventory, 3);
console.log('Get Item:', specificItem);