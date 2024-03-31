// src/utils/getData.ts
import axios from 'axios'

const endpoint = process.env.API_ENDPOINT_PRODUCTS

async function getData(endpoint: string): Promise<any> {
  try {
    const response = await axios.get(endpoint)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export default getData
