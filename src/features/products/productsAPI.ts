// Better naming in /src/features/products/productsAPI.ts
export async function fetchAllProducts(): Promise<Product[]> {
  const response = await fetch('https://fakestoreapi.com/products')
  if (!response.ok) {
    throw new Error('Products could not be fetched.')
  }
  return response.json()
}
