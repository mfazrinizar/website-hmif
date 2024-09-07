import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navItems } from "@/lib/link";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav
      id="navbar"
      className="fixed left-0 right-0 flex items-center justify-between bg-white p-5 md:px-12 xl:px-20"
    >
      <div className="flex gap-4">
        <img
          src="/img/logo-hmif.png"
          alt="logo-hmif"
          className="size-12 xl:size-16"
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
      <ul className="hidden gap-2 lg:flex xl:gap-4">
        {" "}
        {navItems.map((item) => (
          <NavLink
            key={item.path + item.name}
            to={item.path}
            className={cn("px-1 text-base xl:text-lg", {
              "border-b-2 border-primary text-primary": pathname === item.path,
            })}
          >
            {item.name}
          </NavLink>
        ))}
      </ul>
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <Menu className="text-primary" />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <ul className="flex flex-col gap-8">
            {" "}
            {navItems.map((item) => (
              <NavLink
                key={item.path + item.name}
                to={item.path}
                className={cn("px-1 text-lg", {
                  "border-b-2 border-primary text-primary":
                    pathname === item.path,
                })}
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
