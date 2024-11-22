import Hero from "../../Components/HomeComponents/Hero"
import FeaturedSection from "../../Components/HomeComponents/Sections/FeaturedSection"
import Testimonial from "../../Components/HomeComponents/Sections/Testimonial"

export const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className=" md:mx-10 lg:mx-36 mobileS:mx-2 mobileM:mx-5 mobileL:mx-9">
        <h1 className="my-16 text-4xl font-bold text-center">Fetured Products</h1>
        <FeaturedSection />
      </div>
      <div className="md:mx-10 lg:mx-36 mobileS:mx-2 mobileM:mx-5 mobileL:mx-9 desktop:mt-24">
        <h1 className="my-16 text-4xl font-bold text-center">Testimonial</h1>
        <Testimonial/>
      </div>
    </div>
  )
}