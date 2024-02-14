"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = {
  "/": "Home",
  "/about": "About",
  "/blog": "Blog",
  "/portfolio": "Portfolio",
};

const EXTERNAL = {
  "/rss.xml": <FontAwesomeIcon icon={faRss} />,
  "mailto:dominiccarrington@mail.com": <FontAwesomeIcon icon={faEnvelope} />,
  "//github.com/dominiccarrington": <FontAwesomeIcon icon={faGithub} />,
  "//linkedin.com/in/dominic-carrington-0b00a2207/": (
    <FontAwesomeIcon icon={faLinkedin} />
  ),
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-y-2 px-8 py-2 md:py-4 md:flex-row border-b border-b-slate-700 mb-4">
      <ul className="flex justify-center gap-x-4 text-xl md:order-2 md:ml-auto md:justify-end">
        {Object.keys(EXTERNAL).map((href) => (
          <li key={href}>
            <a href={href} target="_blank">
              {EXTERNAL[href as keyof typeof EXTERNAL]}
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex gap-x-4 md:justify-start">
        {Object.keys(LINKS).map((href) => (
          <li className="flex w-full items-center justify-center" key={href}>
            <Link
              href={href}
              className={`${pathname === href ? "font-semibold underline" : ""}`}
            >
              {LINKS[href as keyof typeof LINKS]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
