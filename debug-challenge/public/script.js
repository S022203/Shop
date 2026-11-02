// Debug challenge: this file has a bug too.

/**
 * Fetches the list of products from the shop's API.
 * @returns {Promise<Object[]>} The product objects.
 */
async function getProducts() {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
}

/**
 * Displays products as a list.
 * @param {Object[]} products - The product objects.
 */
function showProducts(products) {
  const list = document.querySelector('#products');
  list.innerHTML = '';
  if (products.length === 0) {
    list.textContent = 'No products found.';
    return;
  }
  for (const product of products) {
    const item = document.createElement('li');
    const stockText = product.stock > 0 ? 'In stock' : 'Sold out';
    item.textContent = `${product.name} (${product.category}): £${product.price.toFixed(2)} - ${stockText}`;
    list.append(item);
  }
}

/** Loads the products and shows them, or shows a message if it fails. */
async function init() {
  try {
    showProducts(getProducts());
  } catch (error) {
    console.error(error);
    document.querySelector('#products').textContent =
      'Sorry, the products could not be loaded.';
  }
}

init();
