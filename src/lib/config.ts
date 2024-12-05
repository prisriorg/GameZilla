const url =
  process.env.NODE_ENV === "development"
    ? "https://localhost:3000"
    : "https://gamezilla.pages.dev";
const config = {
  SiteName: "GameZilla",
  Author: "GameZilla",
  Description:
    "Gamezilla is the ultimate hub for gamers! Discover top game reviews, tips, and the latest trends to level up your play",
  Category: ["Sabji", "Achar", "Dish"],
  Keywords: ["gamezilla"],
  pages: [
    "About Us",
    // "Recipes",
    "Contact Us",
    "Privacy Policy",
    "DMCA",
    "Terms and Conditions",
  ],
  SiteUrl: url,
  SiteLogo: url + "/Gamezilla.webp",
  Display: "standalone",
  Google: "IjpB6DWYatr-VvIQexfolJP7robbqrbXA8QAUnPcH0Y",
  rss: url + "/feed.xml",
  instagram: "",
  youtube: "",
};

export default config;
