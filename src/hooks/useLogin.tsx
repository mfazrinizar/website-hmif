import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getDataUser } from "@/lib/networks/adminQueries";

async function isLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUser() {
      const user = await getDataUser();
      user ? navigate("/admin/dashboard") : navigate("/admin");
    }

    checkUser();
  }, []);
}

export { isLogin };
