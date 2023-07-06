import { Link, Outlet } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}

type Theme = ThemeEnum.LIGHT | ThemeEnum.DARK;

export function Layout() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return ThemeEnum.DARK;
    }
    return localStorage?.theme ?? ThemeEnum.LIGHT;
  });
  const handleToggleTheme = () => {
    const doc = document.querySelector("html");

    if (doc) {
      if (theme === ThemeEnum.DARK) {
        doc.className = ThemeEnum.LIGHT;
        localStorage.setItem("theme", ThemeEnum.LIGHT);
        setTheme(ThemeEnum.LIGHT);
        return;
      }
      doc.className = ThemeEnum.DARK;
      localStorage.setItem("theme", ThemeEnum.DARK);
      setTheme(ThemeEnum.DARK);
    }
  };

  return (
    <div className="min-h-[100vh] grid grid-rows-[60px_1fr]">
      <header className="shadow-md bg-palette-white-paper dark:bg-palette-dark-paper">
        <div className="max-w-[1440px] px-6 h-full items-center flex-1 ] w-full mx-auto flex justify-between">
          <Link to="/">
            <h4 className="font-bold text-lg text-palette-light-text dark:text-palette-dark-text">
              Where in the world?
            </h4>
          </Link>
          <button
            className="flex items-center gap-2 font-semibold py-2 px-3 rounded-md cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-white"
            onClick={handleToggleTheme}
          >
            <FaMoon />
            {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </header>
      <main className="h-full">
        <div className="max-w-[1440px] mx-auto p-6 h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
