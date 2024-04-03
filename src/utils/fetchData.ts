// Simula o carregamento de dados, como de uma API
export const getData = async (url: string) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}