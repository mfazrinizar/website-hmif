import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export default function NavTabs({ children } : Props) {
  return (
    <TabsList className="flex flex-col gap-2 md:flex-row md:gap-0">
      {children}
    </TabsList>
  );
}
