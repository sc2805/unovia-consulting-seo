"use client";

// =============================================================================
// Navbar — Responsive sticky navigation with dropdown menus & mobile drawer
// =============================================================================

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/constants";

type NavLink = (typeof NAV_LINKS)[number];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenMobileAccordion(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const hasChildren = (link: NavLink): link is NavLink & { children: readonly { label: string; href: string }[] } =>
    "children" in link && Array.isArray(link.children);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const isLinkActive = (link: NavLink) => {
    if (pathname === link.href) return true;
    if (hasChildren(link)) {
      return link.children.some((child) => pathname === child.href || pathname.startsWith(child.href + "/"));
    }
    return pathname.startsWith(link.href + "/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-white border-b border-transparent"
      }`}
      id="navbar"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo variant={scrolled ? "dark" : "dark"} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = isLinkActive(link);

              if (hasChildren(link)) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "text-navy-800 bg-navy-50"
                          : "text-gray-600 hover:text-navy-800 hover:bg-gray-50"
                      }`}
                      id={`nav-link-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Desktop Dropdown */}
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                        openDropdown === link.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-white rounded-xl border border-gray-100 shadow-xl shadow-navy-800/8 py-2 min-w-[240px]">
                        {link.children.map((child) => {
                          const isChildActive = pathname === child.href || pathname.startsWith(child.href + "/");
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                                isChildActive
                                  ? "text-navy-800 bg-navy-50 font-medium"
                                  : "text-gray-600 hover:text-navy-800 hover:bg-gray-50"
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-navy-800 bg-navy-50"
                      : "text-gray-600 hover:text-navy-800 hover:bg-gray-50"
                  }`}
                  id={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-800 text-white text-sm font-semibold rounded-lg hover:bg-navy-700 transition-all duration-300 shadow-md shadow-navy-800/20 hover:shadow-lg hover:shadow-navy-800/25 hover:-translate-y-0.5"
              id="nav-cta"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-navy-800 hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        style={{ top: "64px" }}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl md:hidden transition-all duration-300 transform max-h-[calc(100vh-4rem)] overflow-y-auto ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="p-4 space-y-1">
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(link);

            if (hasChildren(link)) {
              const isAccordionOpen = openMobileAccordion === link.label;
              return (
                <div key={link.href}>
                  <button
                    onClick={() =>
                      setOpenMobileAccordion(isAccordionOpen ? null : link.label)
                    }
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "text-navy-800 bg-navy-50"
                        : "text-gray-600 hover:text-navy-800 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isAccordionOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isAccordionOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 py-1 space-y-0.5">
                      <Link
                        href={link.href}
                        className="block px-4 py-2.5 rounded-lg text-sm text-navy-700 font-semibold hover:bg-gray-50 transition-colors"
                      >
                        All {link.label} →
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                            pathname === child.href
                              ? "text-navy-800 bg-navy-50 font-medium"
                              : "text-gray-500 hover:text-navy-800 hover:bg-gray-50"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "text-navy-800 bg-navy-50"
                    : "text-gray-600 hover:text-navy-800 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 pb-1">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-navy-800 text-white text-sm font-semibold rounded-xl hover:bg-navy-700 transition-colors"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
