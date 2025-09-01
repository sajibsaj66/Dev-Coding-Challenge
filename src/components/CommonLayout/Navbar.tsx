/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navigationLinks = [
  { href: "#", label: "Home" },
  {
    label: "Products",
    submenu: true,
    items: [
      { href: "#", label: "Payments" },
      { href: "#", label: "Insurance" },
      { href: "#", label: "Developer API" },
    ],
  },
  {
    label: "Resources",
    submenu: true,
    items: [
      { href: "#", label: "Product A" },
      { href: "#", label: "Product B" },
      { href: "#", label: "Product C" },
    ],
  },
  { href: "#", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (label: any) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <header className="bg-[#53389E] fixed top-0 w-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 text-xl font-bold">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu viewport={false} className="max-md:hidden">
            <NavigationMenuList className="gap-4">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index} className="relative">
                  {link.submenu ? (
                    <>
                      <NavigationMenuTrigger className="px-2 py-1 text-white hover:bg-transparent font-medium  cursor-pointer">
                        {link.label}
                      </NavigationMenuTrigger>

                      {/* Submenu positioned below the label */}
                      <NavigationMenuContent className="absolute left-0 top-full mt-2  shadow-lg border rounded-md p-2 min-w-40 z-50 cursor-pointer">
                        <ul className="space-y-1">
                          {link.items.map((item, i) => (
                            <li key={i}>
                              <NavigationMenuLink
                                href={item.href}
                                className="block px-2 py-1 rounded hover:bg-gray-100"
                              >
                                {item.label}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={link.href}
                      className="font-medium text-white hover:bg-transparent"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side (desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" className="text-white cursor-pointer" size="sm">
            Sign In
          </Button>
          <Button
            className="bg-[#7F56D9] hover:bg-[#7F56D9] cursor-pointer"
            size="sm"
          >
            Sign Up 
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-2">
          {navigationLinks.map((link, index) => (
            <div key={index}>
              {link.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(link.label)}
                    className="flex w-full items-center justify-between px-2 py-2 rounded hover:bg-gray-100 font-medium"
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        activeSubmenu === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSubmenu === link.label && (
                    <ul className="pl-4 mt-1 space-y-1">
                      {link.items.map((item, i) => (
                        <li key={i}>
                          <a
                            href={item.href}
                            className="block px-2 py-1 rounded hover:bg-gray-100"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  className="block px-2 py-2 rounded hover:bg-gray-100 font-medium"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}

          {/* Mobile actions */}
          <div className="flex flex-col gap-2 mt-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button className="bg-[#7F56D9]" size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
