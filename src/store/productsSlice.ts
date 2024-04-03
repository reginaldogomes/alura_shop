import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Defina a interface para o estado do produto
interface ProductState {
  products: Array<{
    id: number
    name: string
    description: string
    price: number
  }>
}

// Estado inicial
const initialState: ProductState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductState['products']>) => {
      state.products = action.payload
    },
  },
})

// Ações
export const { setProducts } = productsSlice.actions

// Seletor
export const selectProducts = (state: RootState) => state.products.products

// Reducer
export default productsSlice.reducer
