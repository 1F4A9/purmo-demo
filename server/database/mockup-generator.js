const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// product
let categories = [
  { name: 'compact radiator', id: uuidv4(), categoryid: '1' },
  { name: 'towel radiator', id: uuidv4(), categoryid: '2' },
  { name: 'horizontal decorative radiators', id: uuidv4(), categoryid: '3' },
  { name: 'vertical decorativ radiators', id: uuidv4(), categoryid: '4' },
];

// model
let products = [
  { categoryid: '1', productid: '1', name: 'PURMO Compact', id: uuidv4() },
  { categoryid: '1', productid: '2', name: 'PURMO Ventil Compact', id: uuidv4() },
  { categoryid: '1', productid: '3', name: 'PURMO Ventil Compact M', id: uuidv4() },
  { categoryid: '1', productid: '4', name: 'PURMO Plan Compact', id: uuidv4() },
  { categoryid: '1', productid: '5', name: 'PURMO Plan Ventil Compact', id: uuidv4() },
  { categoryid: '1', productid: '6', name: 'PURMO Plan Ventil Compact M', id: uuidv4() },
  { categoryid: '1', productid: '7', name: 'PURMO Ramo Compact', id: uuidv4() },
  { categoryid: '1', productid: '8', name: 'PURMO Ramo Ventil Compact', id: uuidv4() },
  { categoryid: '1', productid: '9', name: 'PURMO Ramo Ventil Compact M', id: uuidv4() },
  { categoryid: '1', productid: '10', name: 'PURMO Vertical', id: uuidv4() },

  { categoryid: '2', productid: '11', name: 'PURMO Arran', id: uuidv4() },

  { categoryid: '3', productid: '12', name: 'PURMO Faro H', id: uuidv4() },
  { categoryid: '3', productid: '13', name: 'PURMO Kos H', id: uuidv4() },

  { categoryid: '4', productid: '14', name: 'PURMO Faro V', id: uuidv4() },
  { categoryid: '4', productid: '15', name: 'PURMO Kos V', id: uuidv4() },
  { categoryid: '4', productid: '16', name: 'PURMO Paros V', id: uuidv4() },
  { categoryid: '4', productid: '17', name: 'PURMO Tinos V', id: uuidv4() },
];

// type
let types = [
  { productid: '1', typeid: '1', name: '10', id: uuidv4() },
  { productid: '1', typeid: '1', name: '11', id: uuidv4() },
  { productid: '1', typeid: '1', name: '20', id: uuidv4() },
  { productid: '1', typeid: '1', name: '21', id: uuidv4() },
  { productid: '1', typeid: '1', name: '22', id: uuidv4() },
  { productid: '1', typeid: '1', name: '30', id: uuidv4() },
  { productid: '1', typeid: '1', name: '33', id: uuidv4() },

  { productid: '2', typeid: '1', name: '10', id: uuidv4() },
  { productid: '2', typeid: '1', name: '11', id: uuidv4() },
  { productid: '2', typeid: '1', name: '20', id: uuidv4() },
  { productid: '2', typeid: '1', name: '21', id: uuidv4() },
  { productid: '2', typeid: '1', name: '22', id: uuidv4() },
  { productid: '2', typeid: '1', name: '30', id: uuidv4() },
  { productid: '2', typeid: '1', name: '33', id: uuidv4() },
  { productid: '2', typeid: '1', name: '44', id: uuidv4() },

  { productid: '3', typeid: '1', name: '11', id: uuidv4() },
  { productid: '3', typeid: '1', name: '20', id: uuidv4() },
  { productid: '3', typeid: '1', name: '21', id: uuidv4() },
  { productid: '3', typeid: '1', name: '22', id: uuidv4() },
  { productid: '3', typeid: '1', name: '30', id: uuidv4() },
  { productid: '3', typeid: '1', name: '33', id: uuidv4() },

  { productid: '4', typeid: '1', name: '10', id: uuidv4() },
  { productid: '4', typeid: '1', name: '11', id: uuidv4() },
  { productid: '4', typeid: '1', name: '20', id: uuidv4() },
  { productid: '4', typeid: '1', name: '21', id: uuidv4() },
  { productid: '4', typeid: '1', name: '22', id: uuidv4() },
  { productid: '4', typeid: '1', name: '30', id: uuidv4() },
  { productid: '4', typeid: '1', name: '33', id: uuidv4() },

  { productid: '5', typeid: '1', name: '10', id: uuidv4() },
  { productid: '5', typeid: '1', name: '11', id: uuidv4() },
  { productid: '5', typeid: '1', name: '20', id: uuidv4() },
  { productid: '5', typeid: '1', name: '21', id: uuidv4() },
  { productid: '5', typeid: '1', name: '22', id: uuidv4() },
  { productid: '5', typeid: '1', name: '30', id: uuidv4() },
  { productid: '5', typeid: '1', name: '33', id: uuidv4() },
  { productid: '5', typeid: '1', name: '44', id: uuidv4() },

  { productid: '6', typeid: '1', name: '11', id: uuidv4() },
  { productid: '6', typeid: '1', name: '20', id: uuidv4() },
  { productid: '6', typeid: '1', name: '21', id: uuidv4() },
  { productid: '6', typeid: '1', name: '22', id: uuidv4() },
  { productid: '6', typeid: '1', name: '30', id: uuidv4() },
  { productid: '6', typeid: '1', name: '33', id: uuidv4() },

  { productid: '7', typeid: '1', name: '11', id: uuidv4() },
  { productid: '7', typeid: '1', name: '20', id: uuidv4() },
  { productid: '7', typeid: '1', name: '21', id: uuidv4() },
  { productid: '7', typeid: '1', name: '22', id: uuidv4() },
  { productid: '7', typeid: '1', name: '30', id: uuidv4() },
  { productid: '7', typeid: '1', name: '33', id: uuidv4() },

  { productid: '8', typeid: '1', name: '11', id: uuidv4() },
  { productid: '8', typeid: '1', name: '20', id: uuidv4() },
  { productid: '8', typeid: '1', name: '21', id: uuidv4() },
  { productid: '8', typeid: '1', name: '22', id: uuidv4() },
  { productid: '8', typeid: '1', name: '30', id: uuidv4() },
  { productid: '8', typeid: '1', name: '33', id: uuidv4() },
  { productid: '8', typeid: '1', name: '44', id: uuidv4() },

  { productid: '9', typeid: '1', name: '11', id: uuidv4() },
  { productid: '9', typeid: '1', name: '20', id: uuidv4() },
  { productid: '9', typeid: '1', name: '21', id: uuidv4() },
  { productid: '9', typeid: '1', name: '22', id: uuidv4() },
  { productid: '9', typeid: '1', name: '30', id: uuidv4() },
  { productid: '9', typeid: '1', name: '33', id: uuidv4() },

  { productid: '10', typeid: '1', name: '10', id: uuidv4() },
  { productid: '10', typeid: '1', name: '20', id: uuidv4() },
  { productid: '10', typeid: '1', name: '21', id: uuidv4() },
  { productid: '10', typeid: '1', name: '22', id: uuidv4() },

  { productid: '11', typeid: '1', name: 'E0', id: uuidv4() },

  { productid: '12', typeid: '1', name: '20', id: uuidv4() },
  { productid: '12', typeid: '1', name: '21', id: uuidv4() },
  { productid: '12', typeid: '1', name: '22', id: uuidv4() },
  { productid: '12', typeid: '1', name: '33', id: uuidv4() },

  { productid: '13', typeid: '1', name: '20', id: uuidv4() },
  { productid: '13', typeid: '1', name: '21', id: uuidv4() },
  { productid: '13', typeid: '1', name: '22', id: uuidv4() },
  { productid: '13', typeid: '1', name: '33', id: uuidv4() },

  { productid: '14', typeid: '1', name: '21', id: uuidv4() },
  { productid: '14', typeid: '1', name: '22', id: uuidv4() },

  { productid: '15', typeid: '1', name: '21', id: uuidv4() },
  { productid: '15', typeid: '1', name: '22', id: uuidv4() },

  { productid: '16', typeid: '1', name: '11', id: uuidv4() },
  { productid: '16', typeid: '1', name: '21', id: uuidv4() },

  { productid: '17', typeid: '1', name: '11', id: uuidv4() },
  { productid: '17', typeid: '1', name: '21', id: uuidv4() },

];

// height
let heights = [
  { typeid: '1', heightid: '1', name: '300', id: uuidv4() },
  { typeid: '1', heightid: '1', name: '400', id: uuidv4() },
  { typeid: '1', heightid: '1', name: '500', id: uuidv4() },
  { typeid: '1', heightid: '1', name: '600', id: uuidv4() },
  { typeid: '1', heightid: '1', name: '700', id: uuidv4() },
  { typeid: '1', heightid: '1', name: '800', id: uuidv4() },
];

// length
let lengths = [
  { heightid: '1', lengthid: '1', name: '300', id: uuidv4() },
  { heightid: '1', lengthid: '1', name: '400', id: uuidv4() },
  { heightid: '1', lengthid: '1', name: '500', id: uuidv4() },
  { heightid: '1', lengthid: '1', name: '600', id: uuidv4() },
  { heightid: '1', lengthid: '1', name: '700', id: uuidv4() },
  { heightid: '1', lengthid: '1', name: '800', id: uuidv4() },
  { heightid: '1', lengthid: '1', name: '900', id: uuidv4() },
  { heightid: '1', lengthid: '1', name: '1000', id: uuidv4() },
  { heightid: '1', lengthid: '1', name: '1500', id: uuidv4() },
  { heightid: '1', lengthid: '1', name: '2000', id: uuidv4() },
];

let content = {
  categories,
  products,
  types,
  heights,
  lengths,
};

fs.writeFile(path.join(__dirname, '/data.json'), JSON.stringify(content), (err) => {
  if (err) return console.log(err);
});
