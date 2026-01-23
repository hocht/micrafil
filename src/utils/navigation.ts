// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Productos", url: "/products" },
  { name: "Servicios", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Documentación", url: "/welcome-to-docs/" },
      { name: "Herramientas y Equipamiento", url: "/products" },
      { name: "Servicios de Construcción", url: "/services" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Sobre nosotros", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Empleos", url: "#" },
      { name: "Clientes", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook:  "https://www.facebook.com/micrafil",
  x:         "https://twitter.com/",
  github:    "https://github.com/",
  google:    "https://share.google/AI1agTEYIF9HwtOnZ",
  slack:     "https://slack.com/",
  instagram: "https://instagram.com/micrafil/",        // ← AGREGAR
  linkedin:  "https://www.linkedin.com/company/micrafil/",  // ← AGREGAR
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};