import { Provider } from "react-redux"
import { store } from "@/store/store"

import ProductsList from "@/components/ProductsList"
import Image from "next/image"

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ProductsList />
      </main>
    </Provider>
  )
}
