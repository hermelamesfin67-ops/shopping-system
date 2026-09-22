"use client"
import { ProductCard } from '@/components/product-card';
import TitleSubTitle from '@/components/title-description';
import { PRODUCTS } from '@/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function OurProducts() {
  return (
    <section className="space-y-8">
      <TitleSubTitle
        title='Our Products'
        subTitle='Explore Our Products'
      >
        <div className="flex items-center gap-2">
          <button
            className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-neutral-800 hover:bg-neutral-200 transition-colors cursor-pointer"
            aria-label="Previous category"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-neutral-800 hover:bg-neutral-200 transition-colors cursor-pointer"
            aria-label="Next category"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </TitleSubTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  )
}

export default OurProducts