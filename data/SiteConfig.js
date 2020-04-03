const config = {
  siteTitle: "CodeFund", // Site title.
  siteTitleShort: "CodeFund", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "CodeFund by Gitcoin", // Alternative site title for SEO.
  siteLogo: "", // Logo used for SEO and manifest.
  siteUrl: "https://codefund.io/", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "CodeFund is an open source ad platform that connects software developers with highly relevant products, services, and brands through ethical advertising.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "", // Username to display in the author segment.
  userEmail: "", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription: "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  avatar: {
    description: "",
    photo: "",
  },
  userLinks: [
    {
      label: "github",
      url: "https://github.com/tiagofsanchez/tfs-starter",
    },
    {
      label: "linkedin",
      url: "https://www.linkedin.com/in/tiago-formosinho-sanchez-3764225/",
    },
    {
      label: "email",
      url: "mailto:tiagofsanchez@gmail.com",
    },
  ],
  menuLinks: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Advertisers",
      url: "/advertisers",
    },
    {
      name: "Publishers",
      url: "/publishers",
    },
    {
      name: "Podcasts",
      url: "/podcasts",
    },
    {
      name: "Blog",
      url: "/blog",
    },
  ],
  copyright: "Copyright © 2020. CodeFund", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#15003e", // Used for setting manifest and progress theme colors.
  backgroundColor: "#f7fafc", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
