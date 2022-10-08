import React from 'react'
import DetailsProduct from '@/components/product/DetailsProduct'
import SlideProduct from '@/components/product/SlideProduct'
const MainProduct = () => {
  return (
      <main className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <SlideProduct/>
        <DetailsProduct/>
      </main>
  )
}

export default MainProduct