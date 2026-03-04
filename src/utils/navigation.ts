// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Productos", url: "/products/" },
  { name: "Servicios", url: "/services/" },
  { name: "Blog", url: "#" },
  { name: "Contacto", url: "/contact/"},
];
// An array of links for footer
const footerLinks = [
  {
    section: "Soluciones",
    links: [
      { name: "Líneas de Filtración", url: "/products/" },
      { name: "Servicios de Ingeniería", url: "/services/" },
    ],
  },
  {
    section: "Micrafil",
    links: [
      { name: "Nuestra Experiencia", url: "/services/" },
      { name: "Testimonios", url: "/products#testimonials" },
      { name: "Blog Técnico", url: "/blog/", badge: "Próximamente" },
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