import React from "react"
import Image from "next/image"
import { accessoriesstainlessProducts } from '../components/productsData'
import Link from "next/link"
// const products = [
//   {
//     id: 1,
//     name: 'แท่นตัดอลูมิเนียม 12 ST-12',
//     href: '#',
//     imageSrc: "https://drive.google.com/uc?export=download&id=1Z68JHIY1xJf7WFxoSX3eeU1SAOP06Ohz",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'อลูมิเนียม',
//   },
//   {
//     id: 1,
//     name: 'ซิลิโคน แวคเกอร์ จีพี สีขาว 280 มล.',
//     href: '#',
//     imageSrc: "https://drive.google.com/uc?export=download&id=1A3VB0Vmv6m9KWHxBoX7nsZsHKzTh0wRl",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'อลูมิเนียม',
//   },
//   {
//     id: 1,
//     name: 'ไส้กรอก สีขาว ขนาด 600 ml',
//     href: '#',
//     imageSrc: "https://drive.google.com/uc?export=download&id=1ATQdsb0i1EuiuC1oF03OQ3usKySvKmlp",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'อลูมิเนียม',
//   },
//   {
//     id: 1,
//     name: 'ฉากอลูมิเนียม Barco 1 นิ้ว x 1 นิ้ว',
//     href: '#',
//     imageSrc: "https://drive.google.com/uc?export=download&id=10nhjLObqmA6Su-k0hIYbL4Z2x7hlumKs",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'สแตนเลส',
//   },
//   {
//     id: 1,
//     name: 'ลวดเชื่อมไฟฟ้า KOBE รุ่น KB-K3026',
//     href: '#',
//     imageSrc: "https://drive.google.com/uc?export=download&id=1HETTYgJ1ATGpwL8zqbFvKp3g2Rnfm3mF",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'สแตนเลส',
//   },
//   {
//     id: 1,
//     name: 'อะลูมิเนียมกล่องลายไม้ 4 นิ้ว',
//     href: '#',
//     imageSrc: "https://drive.google.com/uc?export=download&id=1I-_8o2tqM139vXXT0eAimwRDWOTGrqXT",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'สแตนเลส',
//   },
//   {
//     id: 1,
//     name: 'อะลูมิเนียมกล่องลายไม้ 2 นิ้ว',
//     href: '#',
//     imageSrc: "https://drive.google.com/uc?export=download&id=10uP0OrMdXD4wbOpW3mLUyyWB-6IGbraX",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'สแตนเลส',
//   },
//   {
//     id: 1,
//     name: 'ใบตัดเหล็ก / ตัดสแตนเลส ขนาด 4 นิ้ว',
//     href: '#',
//     imageSrc: "https://drive.google.com/uc?export=download&id=1WX2weJrpvQdpITg_TPgXJdhci6ZY0mbx",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'อลูมิเนียม',
//   },
//   {
//     id: 1,
//     name: 'เกจ์ปรับแรงดันลมอาร์กอน หน้าปัดขนาด 2 นิ้ว',
//     href: '#',
//     imageSrc: "https://drive.google.com/uc?export=download&id=1mAQFKsA0a0nKHVGpz8Enb8bp0k70cLZT",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'สแตนเลส',
//   },
//   {
//     id: 1,
//     name: 'Basic Tee',
//     href: '#',
//     imageSrc: "https://drive.google.com/uc?export=download&id=1pI-Yidarp-rwaIAvzBRHBX7r53cOGvOy",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'สแตนเลส',
//   },
//   {
//     id: 1,
//     name: 'น้ำยาลบรอยเชื่อม สแตนเลส',
//     href: '#',
//     imageSrc: "https://drive.google.com/uc?export=download&id=1fsZf_XxYbvPiZHImeASnLEl7HTNQvE4t",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'สแตนเลส',
//   },
//   {
//     id: 1,
//     name: 'ผงขัดเงาสแตนเลส ใช้ทำความสะอาด สแตนเลส อลูมิเนียม โลหะทุกชนิด ',
//     href: '#',
//     imageSrc: "https://drive.google.com/uc?export=download&id=12_AEaBsyeDl2Kj6WCBERMYfMAT3GAh9f",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'สแตนเลส',
//   },
//    {
//     id: 1,
//     name: 'สายเชื่อมทิกพร้อมหัว WP-26V ข้อต่อ PANA ',
//     href: '#',
//     imageSrc: "https://drive.google.com/uc?export=download&id=1cc8Ns6NL8fUzcW0aNgyzomIr3GrZVnCM",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'สแตนเลส',
//   },
//   // More products...
// ]

export default function Example() {
  return (
    <>
    <Link href="/products"
    className="text-xl text-center font-bold back-products  "
    >หมวดหมู่สินค้า</Link>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center p-6">อุปกรณ์ตกแต่งสแตนเลส</h2>
        <div className="line" style={{margin:"5px auto"}}></div>
        <div className="mt-6 md:grid md:gap-6 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {accessoriesstainlessProducts.map((product) => (
            <Link key={product.id} href={`/accessoriesstainless/${product.id}`}>
              
              <div style={{ boxShadow: '0px 1.2px 3px 0.9px rgba(0, 0, 0, 0.27)', borderRadius: "10px" }}
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-contain"
                  style={{
                    backgroundImage: `url(${product.src})`,
                    width: '300px',
                    height: '300px',
                  }}
                ></div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
              {product.title.length > 35? `${product.title.substring(0, 35)}...` : product.title}
              </h3>
              
             
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
    
  )
}