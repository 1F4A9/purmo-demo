import axios from "axios";

const selectCategory = document.querySelector(".select__category");
const selectProduct = document.querySelector(".select__product");
const selectType = document.querySelector(".select__type");

// axios.get('/resources')
//   .then(res => console.log(res.data));

const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

let categoryId;
let productId;

axios
  .post(
    "https://purmo-dop.webservice.pl/src//ajax/get-data.php?",
    "siteid=2&mode=1",
    config
  )
  .then((response) => {
    console.log(response.data.content.categories);
    response.data.content.categories.forEach((radiator) => {
      const option = document.createElement("option");
      option.setAttribute("value", radiator.id);
      option.textContent = radiator.name;
      selectCategory.appendChild(option);
    });
  });

selectCategory.addEventListener("change", (e) => {
  selectProduct.removeAttribute("disabled");

  while (selectProduct.firstChild) {
    selectProduct.removeChild(selectProduct.firstChild);
  }

  categoryId = e.target.value;
  axios
    .post(
      "https://purmo-dop.webservice.pl/src//ajax/get-data.php?",
      `siteid=2&mode=1&categoryid=${categoryId}`,
      config
    )
    .then((response) => {
      console.log(response.data.content.products);
      const option = document.createElement("option");
      option.textContent = "Choose a model ...";
      selectProduct.appendChild(option);

      response.data.content.products.forEach((product) => {
        const option = document.createElement("option");
        option.setAttribute("value", product.id);
        option.textContent = product.name;
        selectProduct.appendChild(option);
      });
    });
});

selectProduct.addEventListener("change", (e) => {
  selectType.removeAttribute("disabled");

  while (selectType.firstChild) {
    selectType.removeChild(selectType.firstChild);
  }

  productId = e.target.value;
  axios
    .post(
      "https://purmo-dop.webservice.pl/src//ajax/get-data.php?",
      `siteid=2&mode=1&categoryid=${categoryId}&productid=${productId}`,
      config
    )
    .then((response) => {
      console.log(response.data.content.types);
      const option = document.createElement("option");
      option.textContent = "Choose the type ...";
      selectType.appendChild(option);

      response.data.content.types.forEach((type) => {
        const option = document.createElement("option");
        option.setAttribute("value", type.id);
        option.textContent = type.name;
        selectType.appendChild(option);
      });
    });
});
