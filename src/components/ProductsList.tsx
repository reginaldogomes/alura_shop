// path/filename: components/Home.js
'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts, selectProducts } from '@/store/productsSlice'
import { getData } from '@/utils/fetchData'

const ProductsList = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getData('https://fakestoreapi.com/products')
      dispatch(setProducts(data))
    }

    loadProducts()
  }, [dispatch])

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsList
