import { navItems } from "@/lib/link";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <footer
      id="footer"
      className="flex flex-col justify-between gap-8 py-8 md:flex-row"
    >
      <div className="flex flex-col justify-center gap-4 text-center">
        <img
          src="/img/logo-hmif.png"
          alt="logo-hmif"
          className="mx-auto size-28"
        />
        <div className="flex flex-col justify-center text-primary">
          <h1 className="text-xl font-bold md:text-2xl xl:text-3xl">
            HMIF UNSRI
          </h1>
          <p className="text-xs font-medium xl:text-sm">
            Kuatkan Formasi Wujudkan Inovasi
          </p>
        </div>
      </div>
      <div className="space-y-4 text-center md:w-1/4 md:text-start">
        <h3 className="text-xl font-medium">Address</h3>
        <p>
          Jl. Raya Palembang - Prabumulih No. Km. 32, Indralaya Indah, Kec.
          Indralaya, Kabupaten Ogan Ilir, Sumatera Selatan 30862
        </p>
      </div>
      <ul className="flex flex-col items-center space-y-4 md:items-start">
        <li className="text-xl font-medium">Contact Us</li>
        <li className="flex items-center gap-2">
          <InstagramLogoIcon className="size-6" /> <p>hmif.unsri</p>
        </li>
        <li className="flex items-center gap-2">
          <Mail className="size-6" /> <p>hmif.unsri@gmail.com</p>
        </li>
      </ul>
      <ul className="flex flex-col items-center gap-4 md:items-start">
        {" "}
        <li className="text-xl font-medium">Navigations</li>
        {navItems.map((item) => (
          <NavLink
            key={item.path + item.name}
            to={item.path}
            className={cn("font-regular text-base xl:text-lg", {
              "font-medium text-primary": pathname === item.path,
            })}
          >
            {item.name}
          </NavLink>
        ))}
      </ul>
    </footer>
  );
}
