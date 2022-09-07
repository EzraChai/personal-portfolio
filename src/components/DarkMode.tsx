import SunSvg from "../images/Sun.svg"
import MoonSvg from "../images/Moon.svg"
import { useEffect, useState } from 'react';


export default function DarkMode() {

    const [theme, setTheme] = useState<string>(localStorage.getItem("theme") ?? "light")

    const toggleDarkMode = () => {
        setTheme((prev) => prev === "dark"? "light": "dark")
    }

    useEffect(() => {
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    },[theme])

    return (
        <button className={theme &&"rounded-md p-1 border-2 dark:border-zinc-200 border-zinc-500"} onClick={toggleDarkMode}>{theme==="light"?<img height={"20"} width={"20"} src={SunSvg}/>:<img height={"20"} width={"20"} src={MoonSvg}/>}</button>
    )
}