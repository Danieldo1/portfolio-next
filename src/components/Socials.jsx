import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";


export const socialData = [
  {
    name: "Instagram",
    link: "https://instagram.com",
    Icon: Instagram,
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    Icon: Facebook,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com",
    Icon: Linkedin,
  },
  {
    name: "Github",
    link: "https://github.com/sanidhyy/modern-portfolio",
    Icon: Github,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name !== social.link
              ? "hover:bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;