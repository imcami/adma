"use client";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import links from "../data/links";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 bg-opacity-90 backdrop-blur-md shadow-md transition-all ${
        scrolled ? "bg-white border-b-gray-90 border-b-10 " : "bg-transparent "
      }`}
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.5 }} 
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/logo.webp"
            alt="ADMA Real Estate Photography Logo"
            width={90}
            height={90}
            blurDataURL="/path/to/lowres-image.jpg"
            className="inline-block rounded-full"
          />
        </Link>

        {/* Navigation links */}
        <nav className="hidden sm:flex justify-center w-full">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8 items-center">
              {links.map((link) => (
                <NavigationMenuItem 
                className="hover:scale-110 " key={link.url}>
                  <NavigationMenuLink asChild>
                  <Link
  href={link.url}
  className={`font-sans font-semibold drop-shadow-sm transition-colors duration-300 ${
    scrolled
      ? "text-[--foreground] hover:text-green-600 "
      : "text-[--background]  hover:text-yellow-200 " 
  }`}
>
  {link.name}
</Link>

                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 items-center">
          <Link
            href="https://wa.me/18495153010"
            className={`transition-colors ${
              scrolled ? "text-[--foreground]" : "text-[--background]"
            }`}
          >
            <FaWhatsapp size={28} />
          </Link>
          <Link
            href="https://www.instagram.com/adma.reph"
            className={`transition-colors ${
              scrolled ? "text-[--foreground]" : "text-[--background]"
            }`}
          >
            <FaInstagram size={28} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="text-black sm:hidden p-2">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg sm:hidden">
            {links.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="block p-4 text-black hover:bg-gray-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.header>
  );
}
