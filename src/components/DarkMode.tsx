import { useAtom } from "jotai"
import { darkModeToggle } from "./DarkmodeToggleAtom"

export default function DarkMode() {
    const [currentMode, toggleDarkMode] = useAtom(darkModeToggle)

    return (
        <div className="">
            <button onClick={toggleDarkMode}>Clickme</button>
            {currentMode?"true":"false"}
        </div>
    )
}