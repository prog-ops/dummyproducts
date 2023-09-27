import ProductsList from "@/components/ProductsList";

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

async function getProducts() {
  const response = await fetch(
      'https://dummyjson.com/products',
      {cache: "no-store"}
  )
  const data = await response.json()
  console.log('data', data)
  return data?.products as any[]
}

export default async function Home() {
  const products = await getProducts()
  return (
      <div>
        <ProductsList products={products} />
      </div>
  )
}
