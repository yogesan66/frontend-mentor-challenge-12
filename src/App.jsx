import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OverviewCard from "./components/OverviewCard";
import SocialMediaCard from "./components/SocialMediaCard";
import { overviewList, socialMediaList } from "./mock-data";

function App() {
  return (
    <div className=" relative w-screen min-h-screen overflow-y-auto bg-theme-light-bg dark:bg-theme-dark-bg font-inter">
      <div className="bg-theme-light-topBg dark:bg-theme-dark-topBg h-64 sm:h-60"></div>
      <div className="absolute top-0 left-0 w-full p-7 md:p-0 flex justify-center">
        <div>
          <Navbar />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {socialMediaList.map((item, index) => (
              <SocialMediaCard key={index} data={item} />
            ))}
          </div>
          <div className="mt-12 pb-7">
            <p className="text-theme-light-textMuted dark:text-theme-dark-textWhite font-bold text-2xl mb-6">
              Overview - Today
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
              {overviewList.map((item, index) => (
                <OverviewCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
