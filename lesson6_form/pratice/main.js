const productList = document.getElementById('product-list');
const productForm = document.getElementById('create-product-form');

const { quality: qualityFieldSet } = productForm.elements;
const productFormFields = ['title', 'version', 'model', 'quality'];

let productQuality = null;

Array
  .from(qualityFieldSet)
  .forEach(qualityRadio => {
    qualityRadio.addEventListener('change', (e) => productQuality = e.target.value);
  });

productForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newProduct = createProduct();
  addProductToList(newProduct);
});

function createProduct() {
  return Array
    .from(productForm.elements)
    .filter(element => productFormFields.includes(element.id))
    .reduce((acc, curr) => ({
      [curr.id]: curr.value,
      ...acc
    }), { quality: productQuality });
}

function addProductToList(newProduct) {
  const pContainer = document.createElement('div');
  pContainer.style.padding = '1rem';
  pContainer.style.border = '1px solid black';
  productFormFields.forEach(field => {
    const pField = document.createElement('p');
    pField.textContent = `Product ${field}: ${newProduct[field]}`;
    pContainer.appendChild(pField);
  });
  productList.appendChild(pContainer);
}