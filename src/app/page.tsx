'use client'
import ProductsList from '@/components/Products/ProductsList'
import { store } from '@/store/store'
import { Provider } from 'react-redux'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Provider store={store}>
        <ProductsList />
      </Provider>
    </main>
  )
}
