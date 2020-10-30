import axios from "axios";

const form = document.querySelector('[name="dop-select-number-form"]');
const selects = form.querySelectorAll('.form-control-lg');

// fetches mandatory data
pageInitializer();

form.addEventListener('change', HandleSelectChange);

function HandleSelectChange(e) {
  // if it's the last select, it won't run this function.
  if (e.target.name === 'lengths') return;

  const currentSelect = e.target;
  const nextSelect = getNextSelectSibling(currentSelect);
  const endpoint = nextSelect.name;
  const id = currentSelect.value;

  removeDisabledAttributeFrom(nextSelect);
  revertIfDefaultOptionIsChosenOn(currentSelect);

  // if default option is chosen, won't call axios
  if (currentSelect.value === 'default') return;

  axios.get(`/resources/${endpoint}/${id}`)
    .then(res => {
      createOptionElements(res.data, nextSelect);
      revertIfDefaultOptionIsChosenOn(nextSelect);
    })
    .catch(err => console.log(err));
}

function pageInitializer() {
  axios.get('/resources/categories')
    .then(res => createOptionElements(res.data, selects[0]))
    .catch(err => console.log(err));
}

function revertIfDefaultOptionIsChosenOn(select) {
  if (select.value !== 'default') return;

  let selectedIndex = null;
  for (let i = 0; i < selects.length; i++) {
    if (selects[i].id === select.id) {
      selectedIndex = i;
    }

    if (selectedIndex !== null && i > selectedIndex) {
      clearEveryOptionExceptDefault(selects[i]);
      selects[i].disabled = true;
    }
  }
}

function clearEveryOptionExceptDefault(select) {
  const defaultOption = select.querySelector('[value="default"]');
  select.innerHTML = '';
  select.appendChild(defaultOption);
}

function getNextSelectSibling(currentSelect) {
  // runs within the column of selects
  if (currentSelect.parentElement.parentElement.className !== 'col-md') {
    let nextSelect = currentSelect.parentElement.nextElementSibling.lastElementChild;
    if (nextSelect.tagName === 'SELECT') return nextSelect;
  }

  // runs if it's the first element in the row
  if (currentSelect.parentElement.parentElement.nextElementSibling) {
    let grandParentElement = currentSelect.parentElement.parentElement.nextElementSibling;
    return grandParentElement.firstElementChild.lastElementChild;
  }

  // runs if it's the last element in the column
  let grandParentElement = currentSelect.parentElement.nextElementSibling.firstElementChild;
  return grandParentElement.firstElementChild.lastElementChild;
}

function createOptionElements(data, parentElement) {
  // wipes out every option except the default-option
  clearEveryOptionExceptDefault(parentElement);

  data.forEach(childElement => {
    // return a value which matches a database entity
    let id = getCorrectIdFrom(parentElement, childElement);

    const option = document.createElement('option');
    option.setAttribute('value', id);
    option.textContent = childElement.name;
    parentElement.appendChild(option);
  });
}

function getCorrectIdFrom(parentElement, childElement) {
  if (parentElement.name === 'categories') return childElement.categoryid;
  if (parentElement.name === 'products') return childElement.productid;
  if (parentElement.name === 'types') return childElement.typeid;
  if (parentElement.name === 'heights') return childElement.heightid;
  if (parentElement.name === 'lengths') return childElement.lengthid;
}

function removeDisabledAttributeFrom(select) {
  const typeOfElement = select.tagName;

  if (typeOfElement === 'SELECT') {
    select.removeAttribute('disabled');
  }
}