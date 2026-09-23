export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  btnLinks: [
    {
      id: 1,
      label: "Contact our team",
      href: "/About",
    },
    {
      id: 2,
      label: "Check out our content",
      href: "/MX",
    },
    {
      id: 3,
      label: "See our jobs",
      href: "/In",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

export const CardOneConfig = [
  {
    id: 1,
    title: "Easy connection",
    sub: "We provide professional and structured documentation so you can connect in hours instead of days.",
  },
  {
    id: 2,
    title: "Fast API callback",
    sub: "Once your trade is initiated, you will receive a callback quickly.",
  },
  {
    id: 3,
    title: "Cloud-based platform",
    sub: "With high availability, scalability and tightened security.",
  },
  {
    id: 4,
    title: "Distributed Services",
    sub: "We use distributed services to display cashier counters at locations closest to users, reducing network latency.",
  },
];

export const CardCountryConfig = [
  [
    {
      id: 10,
      title: "Brazil",
      code: "BR",
      icon: "br",
    },
    {
      id: 4,
      title: "Argentina",
      code: "ARS",
      icon: "ar",
    },
    {
      id: 3,
      title: "Colombia",
      code: "CO",
      icon: "co",
    },
  ],
  [
    {
      id: 11,
      title: "India",
      code: "INDIA",
      icon: "in",
    },
    {
      id: 9,
      title: "Korea",
      code: "KR",
      icon: "ko",
    },
    {
      id: 7,
      title: "Indonesia",
      code: "ID",
      icon: "id",
    },
    {
      id: 13,
      title: "Vietnam",
      code: "VN",
      icon: "vn",
    },
    {
      id: 12,
      title: "Cambodia",
      code: "KH",
      icon: "kh",
    },
  ],
];

export const MobileNavbarList = [
  {
    title: "Solution",
    label: "Solution",
    id: 1,
    child: [
      {
        id: 11,
        title: "Payins",
        href: "/Payins",
        target: "_self",
      },
      {
        id: 12,
        title: "Payouts",
        href: "/Payouts",
        target: "_self",
      },
    ],
  },
  {
    title: "Company",
    label: "Company",
    id: 3,
    child: [
      {
        title: "About us",
        href: "/About",
        id: 33,
        target: "_self",
      },
      {
        title: "Terms & Conditions",
        href: "/Terms",
        id: 36,
        target: "_self",
      },
      {
        title: "AML POLICY",
        href: "/Aml",
        id: 35,
        target: "_self",
      },
      {
        title: "Privacy Policy",
        href: "/support/PRIVACIDAD-Vellpay.pdf",
        id: 34,
        target: "_blank",
      },
      {
        title: "Jobs",
        href: "/In",
        id: 31,
        target: "_self",
      },
    ],
  },
  {
    title: "Resource",
    label: "Resource",
    id: 2,
    child: [
      {
        title: "Integration",
        href: "/Int",
        id: 21,
        target: "_self",
      },
      {
        title: "FA&Q",
        href: "/Faq",
        id: 22,
        target: "_self",
      },
      {
        title: "API Document",
        href: "https://docs.vellpay.com/",
        id: 23,
        target: "_blank",
      },
    ],
  },
];

export const AppsList = [
  // {
  //   id: 1,
  //   href: "https://x.com/vellpay",
  //   target: "_blank",
  // },
  // {
  //   id: 3,
  //   href: "https://www.linkedin.com/company/vellpay",
  //   target: "_blank",
  // },
  // {
  //   id: 4,
  //   href: "https://www.instagram.com/vellpay_mkt/",
  //   target: "_blank",
  // },
  {
    id: 5,
    href: "mailto:service@vellpay.com",
    target: "_blank",
  },
];
