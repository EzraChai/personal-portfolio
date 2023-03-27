import SunSvg from "../assets/Sun.svg";
import MoonSvg from "../assets/Moon.svg";
import { useEffect, useState } from "react";

export default function DarkMode() {
    const [theme, setTheme] = useState<string>(() =>
        localStorage.getItem("theme") ?? "light"
    );

    const toggleDarkMode = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    if(theme !== ""){
        return (
            <button
                aria-label="Dark mode toggle button"
                className={
                    theme &&
                    "rounded-md border-2 border-zinc-600 p-1 dark:border-zinc-200 "
                }
                onClick={toggleDarkMode}>
                {theme === "light" ? (
                    <img
                        aria-hidden="true"
                        alt={"Sun icon"}
                        height={"20"}
                        width={"20"}
                        src={SunSvg.src}
                    />
                ) : (
                    <img
                        aria-hidden="true"
                        alt={"Moon icon"}
                        height={"20"}
                        width={"20"}
                        src={MoonSvg.src}
                    />
                )}
            </button>
        );
    }
}
