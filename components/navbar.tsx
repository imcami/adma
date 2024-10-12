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
import {  FaInstagram, FaWhatsapp } from "react-icons/fa";


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
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b-1 border-b-gray-90 bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo a la izquierda */}
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/logo.png"
            alt="ADMA Real Estate Photography Logo"
            width={160}
            height={110}
            className="inline-block rounded-xl"
          />
        </Link>

        {/* Links centrados */}
        <nav className="hidden sm:flex justify-center w-full">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8 items-center">
              {links.map((link) => (
                <NavigationMenuItem key={link.url}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.url}
                      className="text-black hover:text-gray-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Iconos de redes sociales al extremo derecho */}
        <div className="flex gap-4 items-center">
         
          <Link href="https://wa.me/18495153010" className="text-black hover:text-gray-600 transition-colors">
            <FaWhatsapp size={28} />
          </Link>
           <Link
            href="https://www.instagram.com/adma.reph?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="text-black hover:text-gray-600 transition-colors"
          >
            <FaInstagram size={28} />
          </Link>
        </div>

        {/* Botón para menú móvil */}
        <button onClick={toggleMenu} className="text-black sm:hidden p-2">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú desplegable para dispositivos móviles */}
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
    </header>
  );
}
