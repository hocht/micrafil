
const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Produits", url: "/fr/products" },
  { name: "Services", url: "/fr/services" },
  { name: "Blog", url: "#" },
  { name: "Contact", url: "/fr/contact" },
];

const footerLinks = [
  {
    section: "Solutions",
    links: [
      { name: "Filtration Lines", url: "/en/products" },
      { name: "Engineering Services", url: "/en/services" },
      { name: "Experts", url: "#", badge: "Coming Soon" },
    ],
  },
  {
    section: "Micrafil",
    links: [
      { name: "Our Experience", url: "/en/services" },
      { name: "Testimonials", url: "/en/products#testimonials" },
      { name: "Technical Blog", url: "/en/blog", badge: "Coming Soon" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
  instagram: "#",        
  linkedin: "#",          
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};