import up from "../assets/images/icon-up.svg";
import down from "../assets/images/icon-down.svg";

const SocialMediaCard = ({ data }) => {
  return (
    <div className="relative bg-theme-light-cardBg  dark:bg-theme-dark-cardBg dark:hover:bg-theme-dark-cardHover hover:bg-theme-light-cardHover transition-all duration-200 min-w-64 gap-6 rounded-md  flex flex-col justify-center items-center py-6">
      <div className="flex gap-2 items-center mt-1">
        <img src={data.image} />
        <p className="text-xs text-theme-light-textMuted  dark:text-theme-dark-textLight font-bold">
          {data.username}
        </p>
      </div>

      <div className="flex flex-col gap-1 items-center">
        <p className="text-6xl text-theme-light-textDark dark:text-theme-dark-textWhite font-bold">
          {data.usersCount}
        </p>
        <p className="text-xs dark:text-theme-dark-textLight text-theme-light-textMuted uppercase tracking-[0.5em]">
          {data.name === "youtube" ? "Subscribers" : "Followers"}
        </p>
      </div>

      <div className="flex items-center gap-1">
        <span>
          <img src={data.trend === "positive" ? up : down} />
        </span>
        <span
          className={
            "text-xs font-bold" +
            (data.trend === "positive"
              ? " text-primary-green"
              : " text-primary-red")
          }
        >
          {data.todayChange} Today
        </span>
      </div>
      <div
        className={
          "absolute w-full h-1 top-0 left-0 rounded-t-md " + data.background
        }
      />
    </div>
  );
};

export default SocialMediaCard;
