import OurProducts from './our-products'
import BrowseByCategory from './browse-by-category'
import Hero from './hero'

function HomePage() {
    return (
        <div className="max-w-7xl md:mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20">
            <Hero />
            <BrowseByCategory />
            <OurProducts />
        </div>
    )
}

export default HomePage