// ...existing code...
import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-:[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/">
          <h1
            className={
              isDark
                ? "text-2xl font-bold"
                : "text-2xl font-bold tracking-tight"
            }
          >
            Klimate
          </h1>
        </Link>

        {/* Theme toggle - moved inside the container so it sits on the same line */}
        <button
          type="button"
          aria-label="Toggle theme"
          className="ml-4 flex h-10 w-10 items-center justify-center rounded-md hover:bg-muted/50 transition-colors"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? (
            <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
          ) : (
            <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />
          )}
        </button>
      </div>

      {/* ...existing code... */}
    </header>
  );
};

export default Header;
