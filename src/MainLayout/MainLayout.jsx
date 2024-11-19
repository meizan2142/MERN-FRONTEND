import { Outlet } from "react-router-dom"

export const MainLayout = () => {
    return (
        <div>
            <div>navbar</div>
            <div><Outlet/></div>
            <div>footer</div>
        </div>
    )
}
