import ProductCard from "../ProductCard"

const FeaturedSection = () => {
    return (
        <div className="grid desktop:grid-cols-3 desktop:mx-60 laptopL:grid-cols-3 laptopL:mx-5 lg:grid-cols-2 lg:gap-5 md:grid-cols-2 md:gap-4 mobileL:space-y-4 mobileM:space-y-4 mobileS:space-y-4">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    )
}

export default FeaturedSection