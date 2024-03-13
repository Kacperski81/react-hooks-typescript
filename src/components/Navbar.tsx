import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../utils/Theme";

const styles = {
    nav: {
        width: "100%",
        maxWidth: "800px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline"
    },

    leftNav: {

    },

    links: {
        textDecoration: "none",
        color: "#000",
        marginRight: "10px",
    }

}

export default function Navbar() {
    const { style, setStyle } = useContext(ThemeContext);
    const isCursive = style?.fontFamily === "cursive"

    return (
        <nav style={styles.nav}>
            <div>
                <Link style={styles.links} to="/">Home</Link>
                <Link style={styles.links} to="/person">Person</Link>
            </div>
            <div>
                <button onClick={() => {
                    setStyle({ fontFamily: isCursive ? "Times New Roman" : "cursive" })
                }}>
                    {isCursive ? "Normal" : "Cursive"}
                </button>
            </div>
        </nav>
    )
}