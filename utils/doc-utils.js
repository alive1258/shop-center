import homeProductsData from '../app/data/products'

// Function to get product by ID
const getProductById = id => {
  // Find the product in the product data array
  return homeProductsData.find(product => product.id == id)
}

export default getProductById
