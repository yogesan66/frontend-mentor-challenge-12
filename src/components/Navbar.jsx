import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("isDarkMode");
    const isDark = theme === "true";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setDarkMode(newMode);
    localStorage.setItem("isDarkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between w-full items-center max-h-max my-0 sm:my-10">
      <div className="w-full flex pb-5 sm:pb-0 flex-col gap-1 border-b-[0.1px] border-theme-light-textMuted/70 sm:border-0">
        <p className="text-theme-light-textDark dark:text-theme-dark-textWhite font-bold text-3xl">
          Social Media Dashboard
        </p>
        <p className="text-theme-light-textMuted dark:text-theme-dark-textLight font-bold text-sm">
          Total Followers: 23,004
        </p>
      </div>
      <div className="pb-9 sm:pb-0  mt-5 sm:mt-0 text-theme-light-toggle w-full  sm:max-w-max font-bold flex justify-between sm:justify-start gap-3 items-center">
        <p className="text-sm text-theme-light-textMuted dark:text-theme-dark-textLight">
          Dark Mode
        </p>
        <div
          onClick={toggleDarkMode}
          className={
            "w-12 h-6  rounded-full duration-300 transition-all relative cursor-pointer px-[3px] hover:bg-gradient-to-r hover:from-theme-dark-toggleGradientFrom hover:to-theme-dark-toggleGradientTo" +
            (isDarkMode
              ? " bg-gradient-to-r from-theme-dark-toggleGradientFrom to-theme-dark-toggleGradientTo"
              : " bg-theme-light-toggle")
          }
        >
          <span
            className={
              "absolute w-[1.1rem] duration-300 transition-all h-[1.1rem]  rounded-full bg-theme-light-topBg top-[3px] dark:bg-theme-dark-topBg" +
              (isDarkMode ? " translate-x-0" : " translate-x-[1.5rem]")
            }
          ></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
