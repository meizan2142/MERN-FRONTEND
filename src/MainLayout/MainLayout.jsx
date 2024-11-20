import { Outlet } from "react-router-dom"
import { Navigationbar } from "../Components/Navbar/Navigationbar"
export const MainLayout = () => {
    return (
        <div>
            <div>
                <Navigationbar/>
            </div>
            <div><Outlet/></div>
            <div>footer</div>
        </div>
    )
}
