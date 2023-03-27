import SunSvg from "../images/Sun.svg";
import MoonSvg from "../images/Moon.svg";
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
                    alt={"Image of the sun"}
                    height={"20"}
                    width={"20"}
                    src={SunSvg}
                />
            ) : (
                <img
                    aria-hidden="true"
                    alt={"Image of the moon"}
                    height={"20"}
                    width={"20"}
                    src={MoonSvg}
                />
            )}
        </button>
    );
}
