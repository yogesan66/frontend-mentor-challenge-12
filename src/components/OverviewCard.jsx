import up from "../assets/images/icon-up.svg";
import down from "../assets/images/icon-down.svg";

const OverviewCard = ({ data }) => {
  return (
    <div className="bg-theme-light-cardBg dark:hover:bg-theme-dark-cardHover hover:bg-theme-light-cardHover transition-all duration-200  dark:bg-theme-dark-cardBg min-w-64 rounded-md p-6 pr-8 flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="text-sm font-bold  dark:text-theme-dark-textLight text-theme-light-textMuted tracking-wide">
          {data.name}
        </p>
        <img src={data.image} />
      </div>
      <div className="flex justify-between items-end">
        <p className="text-theme-light-textDark  dark:text-theme-dark-textWhite font-bold text-4xl">
          {data.count}
        </p>
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
            {data.percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
