import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import instagram from "./assets/images/icon-instagram.svg";
import youtube from "./assets/images/icon-youtube.svg";

const socialMediaList = [
  {
    name: "facebook",
    username: "@nathanf",
    usersCount: "1987",
    todayChange: 12,
    trend: "positive",
    background: "bg-social-facebook",
    image: facebook,
  },
  {
    name: "twitter",
    username: "@nathanf",
    usersCount: "1044",
    todayChange: 99,
    trend: "positive",
    background: "bg-social-twitter",
    image: twitter,
  },
  {
    name: "instagram",
    username: "@realnathanf",
    usersCount: "11k",
    todayChange: 1099,
    trend: "positive",
    background:
      "bg-gradient-to-r from-social-instagram-from via-social-instagram-via to-social-instagram-to",
    image: instagram,
  },
  {
    name: "youtube",
    username: "Nathan F.",
    usersCount: "8239",
    todayChange: 144,
    trend: "negative",
    background: "bg-social-youtube",
    image: youtube,
  },
];

const overviewList = [
  {
    name: "Page views",
    count: "87",
    percentage: "3",
    trend: "positive",
    image: facebook,
  },
  {
    name: "Likes",
    count: "52",
    percentage: "2",
    trend: "negative",
    image: facebook,
  },
  {
    name: "Likes",
    count: "5462",
    percentage: "2257",
    trend: "positive",
    image: instagram,
  },
  {
    name: "Profile views",
    count: "52k",
    percentage: "1375",
    trend: "positive",
    image: instagram,
  },
  {
    name: "Retweets",
    count: "117",
    percentage: "303",
    trend: "positive",
    image: twitter,
  },
  {
    name: "Likes",
    count: "507",
    percentage: "553",
    trend: "positive",
    image: twitter,
  },
  {
    name: "Likes",
    count: "107",
    percentage: "19",
    trend: "negative",
    image: youtube,
  },
  {
    name: "Total views",
    count: "1407",
    percentage: "12",
    trend: "negative",
    image: youtube,
  },
];

export { socialMediaList, overviewList };
