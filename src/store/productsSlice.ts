// /store/productsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProducts } from '@/services/productService'

interface ProductState {
  products: any[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
}

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async () => {
    const response = await fetchProducts()
    return response
  },
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadProducts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  },
})

export default productsSlice.reducer
