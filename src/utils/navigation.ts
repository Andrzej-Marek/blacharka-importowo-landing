// An array of links for navigation bar
const navBarLinks = [
  { name: "Strona Główna", url: "/" },
  // { name: "Products", url: "/products" },
  // { name: "Services", url: "/services" },
  // { name: "Blog", url: "/blog" },
  { name: "Kontakt", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
