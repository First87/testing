import React from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "./components/Header"
import Footer from "./components/Footer"

const callouts = [
    {
      name: 'อลูมิเนียม',
      description: 'Work from home accessories',
      imageSrc: 'https://drive.google.com/uc?export=download&id=1MDWAhkubEf6XtzAAJRRM68UZyeclX30Y',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '/aluminum/products',
    },
    {
      name: 'สแตนเลส',
      description: 'Journals and note-taking',
      imageSrc: 'https://drive.google.com/uc?export=download&id=1nz9VWfqXSR1L9xMCfb9zJaa2JB3rEGrK',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '/stainless/products',
    },
    {
      name: 'กระจก',
      description: 'Daily commute essentials',
      imageSrc: 'https://drive.google.com/uc?export=download&id=1nyd6R2hU6GGtVXDGfoh5BNcdlD1Se2Sn',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '/mirror/products',
    },
    {
        name: 'อุปกรณ์ตกแต่งสแตนเลส',
        description: 'Daily commute essentials',
        imageSrc: 'https://drive.google.com/uc?export=download&id=1--OZSnB4rwp2k-H1UraMbQ_gV99tsl7b',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '/accessoriesstainless/products',
      },
      {
        name: 'งานฝ้าและเครื่องมือช่าง',
        description: 'Daily commute essentials',
        imageSrc: 'https://drive.google.com/uc?export=download&id=1dvObmOuRkHZ3zXoDfDGkuN_8x6bCmVlK',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '/ceilingtools/products',
      },
      {
        name: 'แผ่นหลังคา',
        description: 'Daily commute essentials',
        imageSrc: 'https://drive.google.com/uc?export=download&id=1ztjmZtASppD8-AMbj6cWiMAYaxOw3UiW',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '/roof/products',
      },
  ]
export default function products() {
  return (
    <>
    <Header />
    
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">หมวดหมู่สินค้า</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}