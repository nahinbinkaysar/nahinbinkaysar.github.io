import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    // Toggle between light and dark
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
            {/* Sun - visible in light mode */}
            <Sun className={`h-5 w-5 transition-all ${theme === "dark"
                    ? "scale-0 rotate-90 absolute"
                    : "scale-100 rotate-0"
                }`} />

            {/* Moon - visible in dark mode */}
            <Moon className={`h-5 w-5 transition-all ${theme === "dark"
                    ? "scale-100 rotate-0"
                    : "scale-0 -rotate-90 absolute"
                }`} />

            <span className="sr-only">Toggle theme</span>
        </button>
    )
}