import { Outlet, ScrollRestoration } from "react-router-dom";
import { Suspense, memo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AppLayout = memo(() => {
  return (
    <Suspense fallback={null}>
      <ScrollRestoration />
      <div className="font-poppins mx-auto flex flex-col scroll-smooth">
        <Navbar />
        <main className="mx-auto mt-24 w-full overflow-hidden px-5 md:px-12 lg:mt-32 xl:px-20">
          <Outlet />
          <Footer />
        </main>
      </div>
    </Suspense>
  );
});

export default AppLayout;
