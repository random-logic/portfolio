"use client";

import { MouseEvent } from "react";
import Link from "next/link";

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
  offset?: number; // Optional offset for fixed headers
  className?: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ href, children, offset = 0, className }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default ScrollLink;
