import Navbar from './components/navbar'
import { BannerCarousel } from './components/carousel'
import { banners } from './data/banners'
import CategorySection from './components/category-section'
import NewProductSection from './components/new-product-section'
import { products } from './data/products'
import { categories } from './data/categories'


export default function EcommerceMain() {
  return (
    <>
      <Navbar />
      <main className='py-10 md:py-20'>
        <BannerCarousel banners={banners} />
        <CategorySection categories={categories} />
        <NewProductSection products={products} />
      </main>
    </>
  )
}
