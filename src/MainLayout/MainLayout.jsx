import { Outlet } from "react-router-dom"
import { Navigationbar } from "../Components/Navbar/Navigationbar"
import Footer from "../Components/Footer/Footer"
export const MainLayout = () => {
    return (
        <div>
            <div>
                <Navigationbar/>
            </div>
            <div><Outlet/></div>
            <div className="mt-24">
                <Footer/>
            </div>
        </div>
    )
}
