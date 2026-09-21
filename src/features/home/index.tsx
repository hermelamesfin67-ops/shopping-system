// import BestSellingProducts from './best-selling-products'
// import BrowseByCategory from './browse-by-category'
import Hero from './hero'

function HomePage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20">
            <Hero />
            {/* <BrowseByCategory /> */}
            {/* <BestSellingProducts /> */}
        </div>
    )
}

export default HomePage