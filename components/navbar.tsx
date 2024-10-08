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
    <header className="flex justify-center w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src="/logo.png"
              alt="ADMA Real Estate Photography Logo"
              width={210}
              height={140}
              className="inline-block rounded-xl"
            />
          </Link>
        </div>
      </div>
      <nav
        className={`fixed transition-all duration-300 ease-in-out p-4 w-full sm:w-auto
          ${
            scrolled
              ? "bg-yellow-400 bg-opacity-80 backdrop-blur-lg shadow-xl"
              : "bg-yellow-200 hover:bg-yellow-300 bg-opacity-60 backdrop-blur-md"
          }
          z-50 rounded-b-3xl sm:rounded-3xl mt-20`}
      >
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="sm:hidden flex items-center justify-between w-full">
            <h1 className="font-semibold text-xl text-black">ADMA</h1>
            <button onClick={toggleMenu} className="text-black p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <NavigationMenu className="hidden sm:flex">
            <NavigationMenuList className="flex">
              {links.map((link) => (
                <NavigationMenuItem key={link.url}>
                  <NavigationMenuLink asChild>
                    <a
                      href={link.url}
                      className="hover:bg-yellow-200 hover:border-yellow-300 hover:shadow-xl hover:text-black rounded-xl m-2 p-2 font-light transition-colors duration-300 ease-in-out"
                    >
                      {link.name}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>


        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-yellow-500 bg-opacity-90 backdrop-blur-xl shadow-xl p-8 rounded-b-3xl sm:hidden transition-transform duration-300 ease-in-out">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="block text-center text-white font-medium text-lg hover:bg-yellow-200 hover:text-black rounded-lg py-3 transition-colors duration-300 ease-in-out"
                onClick={toggleMenu} 
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
