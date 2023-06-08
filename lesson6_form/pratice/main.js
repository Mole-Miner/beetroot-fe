const title = document.getElementById('title');
const version = document.getElementById('version');
const model = document.getElementById('model');
const newProduct = document.getElementById('product-new');
const usedProduct = document.getElementById('product-used');

const createBtn = document.getElementById('create-product-button');
const productList = document.getElementById('product-list');

createBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const createdProduct = document.createElement('div');

  const pTitle = document.createElement('p');
  pTitle.textContent = `Product title: ${title.value}`;

  const pVersion = document.createElement('p');
  pVersion.textContent = `Product Version: ${version.value}`;

  const pModel = document.createElement('p');
  pModel.textContent = `Product model: ${model.value}`;

  const b = document.createElement('b');

  createdProduct.append(pTitle, pVersion, pModel, b);

  productList.appendChild(createdProduct);
});