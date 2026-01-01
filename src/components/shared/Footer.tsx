"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { footerSections, socialLinks } from "@/constants/const";
const Footer = () => {
  const router = useRouter();

  const handleSocialClick = () => {
    toast.info("Feature Not Implemented 🚧", {
      description:
        "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };
  const handleNavClick = (e: any) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const [path, id] = href.split("#");
    if (path === "/" || path === "") {
      // Handles both '/#section' and '#section'
      router.push("/");
      setTimeout(() => {
        if (id) {
          const targetElement = document.getElementById(id);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        } else {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      handleSocialClick(); // For unimplemented links like 'Careers'
    }
  };

  return (
    <footer className="bg-[#0C0D0D] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <p className="text-2xl font-bold text-white tracking-wider glow-effect">
              Quantumtech Digital
            </p>
            <p className="text-gray-400">
              Creative solutions that drive results.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <p className="font-semibold text-white mb-6">{section.title}</p>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href === "/contact") {
                          e.preventDefault();
                          router.push("/contact");
                        } else if (link.href.includes("#")) {
                          handleNavClick(e);
                        } else {
                          e.preventDefault();
                          handleSocialClick();
                        }
                      }}
                      className="text-gray-400 hover:text-accent-purple transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-semibold text-white mb-6">Connect With Us</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={handleSocialClick}
                  className="text-gray-400 hover:text-accent-purple transition-colors duration-300"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AGENCY. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
