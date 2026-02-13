import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/shared/components/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  const navItems = useMemo(
    () => [
      { name: "Inicio", href: "/" },
      { name: "Conocenos", href: "/conocenos" },
      { name: "Tickets", href: "/tickets" },
      { name: "Contactanos", href: "/contactanos" },
    ],
    []
  );

  const attractionItems = useMemo(
    () => [
      { name: "Tirolesa", href: "/atracciones/tirolesa" },
      { name: "Carros RC", href: "/atracciones/carros-rc" },
      { name: "Tobogan Arcoiris", href: "/atracciones/tobogan-arcoiris" },
      { name: "Trampolin ninos", href: "/atracciones/trampolin-ninos" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.05;
      setIsScrolled(window.scrollY >= threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-4 z-50 transition-colors duration-300"
    >
      <div
        className={`container mx-auto rounded-lg border px-6 py-4 transition-colors duration-300 ${
          isScrolled
            ? "border-white/20 bg-[hsl(var(--night-blue))]"
            : "border-white/40 bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-white">🎢 LaMontadera</span>
            </Link>
          </motion.div>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  to={item.href}
                  className={`relative font-medium transition-colors ${
                    pathname === item.href ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 hover:w-full" />
                </Link>
              </motion.div>
            ))}

            <div className="group relative">
              <Link
                to="/atracciones"
                className={`relative font-medium transition-colors ${
                  pathname.startsWith("/atracciones")
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Atracciones
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
              <div className="absolute left-0 mt-3 w-56 rounded-xl border border-white/15 bg-[hsl(var(--night-blue))] p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:opacity-100">
                {attractionItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Button
              variant="default"
              className="bg-gradient-sunset font-semibold shadow-lg transition-opacity hover:opacity-90"
            >
              Comprar Entradas
            </Button>
          </div>

          <button className="p-2 text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-4 pb-4 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 font-medium text-white/80 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/atracciones"
              className="block py-2 font-medium text-white/80 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Atracciones
            </Link>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Detalle atracciones</p>
              <div className="mt-2 space-y-2">
                {attractionItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block font-medium text-white/80 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Button
              variant="default"
              className="w-full bg-gradient-sunset font-semibold transition-opacity hover:opacity-90"
            >
              Comprar Entradas
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
