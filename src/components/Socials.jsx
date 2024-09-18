import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";


export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/dani8l_sp/",
    Icon: Instagram,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/daniel.speranskiy1",
    Icon: Facebook,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/daniil-speranskii/",
    Icon: Linkedin,
  },
  {
    name: "Github",
    link: "https://github.com/Danieldo1",
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
          <social.Icon aria-hidden className='' />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;