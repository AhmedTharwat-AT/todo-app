import { useEffect } from "react";

function Header() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, []);

  function handleDarkmode() {
    const isDark = localStorage.getItem("theme") ? true : false;
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <header className="flex items-center justify-between">
      <h1 className="bp:text-4xl text-3xl font-bold tracking-[1rem] text-gray-100">
        TODO
      </h1>
      <span
        onClick={handleDarkmode}
        className="bp:h-7 bp:w-7 aspect-square h-6 w-6 cursor-pointer bg-icon-light bg-cover bg-no-repeat dark:bg-icon-dark"
      ></span>
    </header>
  );
}

export default Header;
