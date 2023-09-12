import React from "react"
import Image from "next/image"
import { aluminumProducts } from './productsData'
import Link from "next/link"

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">อลูมิเนียม</h2>

        <div className="mt-6 md:grid md:gap-6 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4 mb-12 ">
        {aluminumProducts.map((product) => (
          
 <Link key={product.id} href={`/product/${product.id}`}>
    <div  style={{ boxShadow: '0px 1.2px 3px 0.9px rgba(0, 0, 0, 0.27)',borderRadius:"10px" }}
    className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
      <div
        className="w-full h-full bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${product.src})`,
          width: '300px', // ปรับขนาดกว้างของรูปภาพตามที่คุณต้องการ
          height: '300px', // ปรับขนาดสูงของรูปภาพตามที่คุณต้องการ
        }}
      ></div>
    </div>
    <h3 className="mt-4 text-sm text-gray-700">{product.title.length > 35? `${product.title.substring(0, 35)}...` : product.title}</h3>
   
  </Link>
))}

        </div>
      </div>
    </div>
  )
}
