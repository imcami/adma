"use client";
import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import links from "../data/links"; // Aquí tienes los links con las rutas tipo '#inicio', '#nosotros', etc.

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="flex justify-center">
      <nav
        className={`flex fixed transition-all duration-300 ease-in-out p-3
          ${scrolled ? 'bg-yellow-400 bg-opacity-90 backdrop-blur-xl shadow-xl' : 'bg-yellow-600 bg-opacity-80 backdrop-blur-sm'}
          z-50 rounded-2xl`}
      >
        <NavigationMenu>
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
      </nav>
    </header>
  );
}
