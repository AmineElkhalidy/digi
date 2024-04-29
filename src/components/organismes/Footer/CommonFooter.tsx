import LinkedIn from "~/assets/svg/linkedin.svg";
import Discord from "~/assets/svg/discord.svg";
import Github from "~/assets/svg/github.svg";

import { Logo } from "@/components/atoms/Logo";
import Link from "next/link";
import { links } from "@/constants/navLinks";
import { NavLink } from "@/components/atoms/NavLink";

const CommonFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark">
      <div className="max-w-screen-xl mx-auto pt-16 px-6 xl:px-0">
        <div className="flex justify-between items-center  py-8 mb-8 border-y border-y-gray-800">
          <Link href="/" className="inline-flex items-center gap-x-2">
            <Logo
              className="rounded w-16 h-16 bg-main"
              pathClassName="fill-white"
            />
            <span className="text-white text-lg font-bold">Digi.</span>
          </Link>
          <div className="flex gap-8 text-white">
            {links.map((link, idx) => (
              <NavLink key={idx} href={link.path} variant="white">
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <p className="text-white">
            &copy; {currentYear}{" "}
            <Link href="/" className="underline decoration-main">
              Digi
            </Link>
            . All rights reserved.{" "}
          </p>
          <div className="flex gap-8 text-white">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block p-2 rounded-full bg-white"
            >
              <span className="sr-only">Visit our linkedin page</span>
              <LinkedIn />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block p-2 rounded-full bg-white"
            >
              <span className="sr-only">Visit our discord server</span>
              <Discord />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block p-2 rounded-full bg-white"
            >
              <span className="sr-only">Visit our linkedin page</span>
              <Github />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { CommonFooter };
