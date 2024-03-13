import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { ThemeContext } from "../../utils/Theme";

export default function Layout() {
    const { style } = useContext(ThemeContext)
    return (
        <div style={style}>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}