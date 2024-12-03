import { Outlet, ScrollRestoration } from "react-router-dom";
import { Suspense, memo } from "react";
import { Toaster } from "sonner";

const AdminLayout = memo(() => {
  return (
    <Suspense fallback={null}>
      <ScrollRestoration />
      <div className="mx-auto flex flex-col scroll-smooth font-poppins">
        <main className="mx-auto w-full overflow-hidden px-5 md:px-12 xl:px-20">
          <Outlet />
          <Toaster />
        </main>
      </div>
    </Suspense>
  );
});

export default AdminLayout;
