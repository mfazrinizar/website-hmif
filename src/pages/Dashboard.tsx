import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableDashboard from "@/components/Admin-Dashboard/TableDashboard";
import FormDashboard from "@/components/Admin-Dashboard/FormDashboard";
import { isLogin } from "@/hooks/useLogin";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "@/lib/networks/adminQueries";
import { toast } from "sonner";
import { DashboardProvider } from "@/lib/context/dashboardContext";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { PinRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const pages = [
  "academic_competition",
  "academic_competition_details",
  "academic_scholarship",
  "academic_scholarship_details",
  "academic_seminar",
  "academic_seminar_details",
  "proker",
  "member",
];

export default function Dashboard() {
  const navigate = useNavigate();

  isLogin();

  function logOut() {
    // need backend
    // document.cookie =
    //   "supabase_token=; Max-Age=0; Path=/; Secure; HttpOnly; SameSite=Strict";
    // window.location.reload();
    signOutUser();
    toast("Anda berhasil log out!");
    navigate("/admin");
  }

  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  return (
    <section id="admin-dashboard">
      <Tabs>
        <SidebarProvider
          open={isOpenSidebar}
          className="w-screen"
          style={{
            "--sidebar-width": "20vw",
            "--sidebar-width-mobile": "20rem",
          }}
        >
          <Sidebar>
            <SidebarHeader>
              <div className="mt-3 flex items-center gap-4">
                <img
                  src="/img/logo-hmif.png"
                  alt="logo-hmif"
                  className="size-12 xl:size-10"
                />
                <div className="flex flex-col justify-center text-primary">
                  <h1 className="text-xl font-bold md:text-2xl xl:text-xl">
                    HMIF UNSRI
                  </h1>
                  <p className="text-xs font-medium xl:text-xs">
                    Kuatkan Formasi Wujudkan Inovasi
                  </p>
                </div>
              </div>
            </SidebarHeader>
            <hr className="m-5" />
            <SidebarContent>
              <TabsList className="flex flex-col">
                {pages.map((item, key) => (
                  <TabsTrigger value={item} key={key + item} className="my-2">
                    {item}
                  </TabsTrigger>
                ))}
                {pages.map((item, key) => (
                  <TabsTrigger value={item} key={key + item} className="my-2">
                    {item}
                  </TabsTrigger>
                ))}
                <Button
                  variant={"destructive"}
                  onClick={() => logOut()}
                  className="mt-5"
                >
                  Log Out
                </Button>
              </TabsList>
            </SidebarContent>
          </Sidebar>
          <main className="-ml-20 w-[80vw] px-10">
            <button
              onClick={() => setIsOpenSidebar((e) => !e)}
              className="group top-0 -ml-5 mt-5 flex rounded-md"
            >
              <div className="scale-125 rounded-md bg-gray-100 p-2 hover:bg-gray-200">
                <PinRightIcon
                  className={cn(`group-hover:rotate-180`, {
                    "rotate-180 group-hover:rotate-0": isOpenSidebar,
                  })}
                />
              </div>
            </button>
            {pages.map((item, key) => (
              <TabsContent
                value={item}
                id={item}
                key={key + item}
                className="max-w-screen overflow-x-auto"
              >
                <DashboardProvider>
                  <FormDashboard tableName={item} />
                  <TableDashboard tableName={item} />
                </DashboardProvider>
              </TabsContent>
            ))}
          </main>
        </SidebarProvider>
      </Tabs>
    </section>
  );
}
