import axios from 'axios';

// ****************** available endpoints *************************
// axios.get('/resources')
// axios.get('/resources/products/3')
// axios.get('/resources/types/1')
// axios.get('/resources/heights/1')
// axios.get('/resources/lengths/1')

const selectCategory = document.querySelector(".select__category");
const selectProduct = document.querySelector(".select__product");

// const config = {
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
// };

// axios
//   .post(
//     "https://purmo-dop.webservice.pl/src//ajax/get-data.php?",
//     "siteid=2&mode=1",
//     config
//   )
//   .then((response) => {
//     console.log(response.data.content.categories);
//     response.data.content.categories.forEach((radiator) => {
//       const option = document.createElement("option");
//       option.setAttribute("value", radiator.id);
//       option.textContent = radiator.name;
//       selectCategory.appendChild(option);
//     });
//   });

// selectCategory.addEventListener("change", (e) => {
//   selectProduct.removeAttribute("disabled");
//   console.log(e.target.value);
//   axios
//     .post(
//       "https://purmo-dop.webservice.pl/src//ajax/get-data.php?",
//       `siteid=2&mode=1&categoryid=${e.target.value}`,
//       config
//     )
//     .then((response) => {
//       console.log(response.data.content.products);
//       response.data.content.products.forEach((product) => {
//         const option = document.createElement("option");
//         option.setAttribute("value", product.id);
//         option.textContent = product.name;
//         selectProduct.appendChild(option);
//       });
//     });
// });