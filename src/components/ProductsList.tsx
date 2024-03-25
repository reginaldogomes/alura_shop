'use client'
// path/filename: src/components/ProductList.tsx
import React, { useEffect, useState } from 'react'
import axios from 'axios'

/**
 * Interface for product data structure from fakestoreapi.com.
 */
interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

/**
 * Fetches product list from fakestoreapi.com.
 * @returns Promise<Product[]> A promise that resolves to an array of products.
 */
const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data as Product[]
  } catch (error) {
    console.error('Failed to fetch products:', error)
    throw new Error('Failed to fetch products. Please try again.')
  }
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading products...</p>
  if (error) return <p>Error fetching products: {error}</p>

  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100px' }}
            />
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
