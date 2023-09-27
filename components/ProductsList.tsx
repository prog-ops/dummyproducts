'use client'

import { sliceStartAtom, sliceEndAtom, currentPageAtom } from '../storage/atoms'
import { useAtom } from 'jotai'
import Link from "next/link";
import Product from "@/app/dummyproducts/[product]/page";

// export default function ProductsList({ products }: any){
export default function ProductsList({ products }: { products: any[] }){
  const [currentSliceStart, setCurrentSliceStart] = useAtom(sliceStartAtom)
  const [currentSliceEnd, setCurrentSliceEnd] = useAtom(sliceEndAtom)
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom)

  const nextPage = () => {
    setCurrentSliceStart(currentSliceStart + 4)
    setCurrentSliceEnd(currentSliceEnd + 4)
    setCurrentPage(currentPage + 1)
  }

  const previousPage = () => {
    setCurrentSliceStart(currentSliceStart - 4)
    setCurrentSliceEnd(currentSliceEnd - 4)
    setCurrentPage(currentPage - 1)
  }

  return (
      <div>
        <h1>Products</h1>
        <div>
          {products.slice(currentSliceStart, currentSliceEnd).map((product: any) => (
              <div key={product.id}>
                <Link href={`/dummyproducts/${product.id}`}>
                  <Product product={product}/>
                </Link>
              </div>
          ))}
          {currentSliceEnd < products.length && <button onClick={nextPage}>Load more products</button>}
        </div>
      </div>
  )
}
