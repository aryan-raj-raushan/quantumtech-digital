import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export const projects = [
  {
    id: 1,
    slug: "social-media-app",
    title: "Next-Gen Banking UI",
    description:
      "A dark-themed social media application interface shown on a smartphone.",
    imgKey: "dark mode social media app on phone",
  },
  {
    id: 2,
    slug: "fintech-dashboard",
    title: "Fintech Dashboard",
    description:
      "A fintech application dashboard with payment details, displayed on a smartphone next to a keyboard.",
    imgKey: "fintech app on phone next to keyboard",
  },
  {
    id: 3,
    slug: "digital-marketing-agency-site",
    title: "Digital Marketing Agency Site",
    description:
      "A digital marketing agency website homepage, shown on a smartphone with a sleek, modern design.",
    imgKey: "digital marketing agency website on phone",
  },
];

export const projectData: any = {
  "social-media-app": {
    title: "Next-Gen Banking UI",
    category: "Web & App Design",
    description:
      "A revolutionary banking interface designed for simplicity, security, and a seamless user experience. It empowers users with intuitive financial management tools, all within a stunning, modern design.",
    challenge:
      "The primary challenge was to demystify complex banking operations. We needed to create a dashboard that was both powerful for seasoned users and approachable for beginners, all while ensuring bank-grade security and flawless performance across all devices.",
    solution:
      "We developed a modular, widget-based dashboard allowing for deep personalization. By leveraging cutting-edge data visualization, we transformed complex transaction histories and investment data into beautiful, interactive charts. The implementation of biometric authentication and end-to-end encryption guarantees user data is always secure.",
    images: {
      hero: {
        alt: "Main dashboard of a modern banking application",
        key: "banking application dashboard view",
      },
      gallery: [
        {
          alt: "Detailed view of a transaction history page",
          key: "banking app transaction history detail",
        },
        {
          alt: "Analytics dashboard showing spending habits",
          key: "banking app spending analytics",
        },
        {
          alt: "Close-up of banking app UI elements",
          key: "banking app ui elements close up",
        },
      ],
      gallery2: [
        {
          alt: "User setting up a new payment on the banking app",
          key: "user making payment on banking app",
        },
        {
          alt: "Security features page on the banking app",
          key: "banking app security features",
        },
      ],
    },
    stats: [
      {
        value: 50,
        suffix: "%",
        label: "Faster Onboarding",
        description: "Streamlined user registration process.",
      },
      {
        value: 2,
        suffix: "M+",
        label: "Transactions Processed",
        description: "Securely handled within the first year.",
      },
      {
        value: 4.9,
        suffix: "/5",
        label: "User Rating",
        description: "Overwhelmingly positive feedback on app stores.",
      },
      {
        value: 99.9,
        suffix: "%",
        label: "Service Uptime",
        description: "Uninterrupted access to banking services.",
      },
    ],
  },
  "fintech-dashboard": {
    title: "Fintech Dashboard",
    category: "Web & App Design",
    description:
      "A comprehensive fintech dashboard designed for clarity and efficiency. It provides users with a detailed overview of their finances, payment histories, and investment portfolios, all wrapped in a secure and user-friendly design.",
    challenge:
      "The main goal was to simplify complex financial data into an easily digestible format without sacrificing functionality. Security was paramount, requiring multi-layered protection and compliance with financial regulations while maintaining a fast, responsive user interface.",
    solution:
      "We designed a modular dashboard with customizable widgets, allowing users to prioritize the information that matters most to them. By integrating advanced data visualization libraries, we transformed dense datasets into interactive charts and graphs. End-to-end encryption and biometric authentication were implemented to ensure top-tier security.",
    images: {
      hero: {
        alt: "Main dashboard of a fintech application",
        key: "fintech application dashboard view",
      },
      gallery: [
        {
          alt: "A user analyzing stock market data on the fintech platform",
          key: "user analyzing stock data on fintech platform",
        },
        {
          alt: "Mobile version of the fintech app showing a transaction summary",
          key: "fintech app mobile transaction summary",
        },
        {
          alt: "Close-up on a pie chart showing portfolio distribution",
          key: "fintech app portfolio pie chart",
        },
      ],
      gallery2: [
        {
          alt: "Card management screen on the fintech app",
          key: "fintech app card management screen",
        },
        {
          alt: "Security settings page on the fintech dashboard",
          key: "fintech dashboard security settings page",
        },
      ],
    },
    stats: [
      {
        value: 40,
        suffix: "%",
        label: "Faster Transactions",
        description: "Optimized payment processing flows.",
      },
      {
        value: 99.9,
        suffix: "%",
        label: "Uptime",
        description: "Ensuring reliable access to financial data.",
      },
      {
        value: 500,
        suffix: "K+",
        label: "Active Users",
        description: "Growing user base relying on the platform daily.",
      },
      {
        value: 90,
        suffix: "%",
        label: "Positive Feedback",
        description: "Users praising the intuitive and clean UI.",
      },
    ],
  },
  "digital-marketing-agency-site": {
    title: "Digital Marketing Agency Site",
    category: "Web Development",
    description:
      "A cutting-edge website for a digital marketing agency, designed to convert visitors into leads. The site showcases their services, portfolio, and expertise through a dynamic and engaging user experience.",
    challenge:
      "The challenge was to stand out in a crowded market. The website needed to be visually stunning, incredibly fast, and optimized for search engines to rank high for competitive keywords, all while clearly communicating the agency's value proposition.",
    solution:
      "We built a statically generated site for unparalleled performance and SEO. Interactive case studies and a dynamic service calculator were developed to engage users and provide immediate value. A/B testing on call-to-action buttons and headlines led to a significant increase in conversion rates.",
    images: {
      hero: {
        alt: "Homepage of a digital marketing agency website",
        key: "digital marketing agency website homepage",
      },
      gallery: [
        {
          alt: "Portfolio section of the marketing agency site",
          key: "marketing agency portfolio section",
        },
        {
          alt: "Contact form and map on the marketing agency site",
          key: "marketing agency contact form",
        },
        {
          alt: "Team page of the marketing agency",
          key: "marketing agency team page",
        },
      ],
      gallery2: [
        {
          alt: "Blog section of the marketing agency website",
          key: "marketing agency blog section",
        },
        {
          alt: "Services page of the marketing agency",
          key: "marketing agency services page",
        },
      ],
    },
    stats: [
      {
        value: 60,
        suffix: "%",
        label: "Lead Increase",
        description:
          "Increase in qualified leads within the first three months.",
      },
      {
        value: 1.2,
        suffix: "s",
        label: "Load Time",
        description: "Achieving an exceptional page load speed.",
      },
      {
        value: 20,
        suffix: "%",
        label: "Bounce Rate Drop",
        description: "Reduced bounce rate through engaging content.",
      },
      {
        value: 1,
        suffix: "#",
        label: "SERP Ranking",
        description: "Top ranking for primary target keywords.",
      },
    ],
  },
};

export const footerSections = [
  {
    title: "Quick Links",
    links: [
      {
        name: "Home",
        href: "/#",
      },
      {
        name: "Services",
        href: "/#services",
      },
      {
        name: "Portfolio",
        href: "/#portfolio",
      },
      {
        name: "About",
        href: "/#about",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "Contact Us",
        href: "/contact",
      },
      {
        name: "Careers",
        href: "#",
      },
      {
        name: "Privacy Policy",
        href: "#",
      },
      {
        name: "Terms of Service",
        href: "#",
      },
    ],
  },
];
export const socialLinks = [
  {
    icon: <Linkedin size={20} />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/quantumtech-digital",
  },
  {
    icon: <Instagram size={20} />,
    name: "Instagram",
    url: "https://www.instagram.com/quantumtech_digital/",
  },
  {
    icon: <Github size={20} />,
    name: "Github",
  },
  {
    icon: <Twitter size={20} />,
    name: "Twitter",
  },
];
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechVision",
    content:
      "Working with this agency transformed our brand completely. Their strategic approach and creative execution exceeded all expectations, driving growth and engagement.",
    avatar: "/testimonial-1.avif",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    content:
      "The ROI we achieved through their campaigns was phenomenal. They truly understand digital marketing and deliver tangible results every single time.",
    avatar: "/testimonial-2.avif",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, StyleHub",
    content:
      "From concept to execution, they were professional, creative, and incredibly responsive. Our online sales increased by a staggering 200% in just one quarter!",
    avatar: "/testimonial-3.avif",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "VP Marketing, InnovateLabs",
    content:
      "Their team brought fresh perspectives and innovative solutions to every challenge we faced. I highly recommend their services to any business looking to scale.",
    avatar: "/testimonial-4.jpeg",
  },
  {
    id: 5,
    name: "Jessica Williams",
    role: "Product Manager, NexGen",
    content:
      "The user experience design they delivered was intuitive and beautiful. Our customer satisfaction scores have never been higher. An absolute pleasure to work with.",
    avatar: "/testimonial-5.avif",
  },
  {
    id: 6,
    name: "Chris Martinez",
    role: "CTO, DataStream",
    content:
      "Their technical expertise in web development is second to none. They built a scalable and secure platform that has become the backbone of our operations.",
    avatar: "/testimonial-6.avif",
  },
];
