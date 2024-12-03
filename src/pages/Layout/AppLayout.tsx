import { Outlet, ScrollRestoration } from "react-router-dom";
import { Suspense, memo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AppLayout = memo(() => {
  return (
    <Suspense fallback={null}>
      <ScrollRestoration />
      <div className="mx-auto flex flex-col scroll-smooth font-poppins">
        <Navbar />
        <main className="mx-auto mt-32 w-full overflow-hidden px-5 md:px-12 lg:mt-40 xl:px-20">
          <Outlet />
          <Footer />
        </main>
      </div>
    </Suspense>
  );
});

export default AppLayout;
