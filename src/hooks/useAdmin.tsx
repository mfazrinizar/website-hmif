import { getUser } from "@/lib/networks/adminQueries";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useLoadWindow from "./useLoadWindow";
import { useEffect } from "react";

function isLogin() {
  const navigate = useNavigate();

  const { data } = useQuery<any, Error>({
    queryKey: ["user"],
    queryFn: () =>
      new Promise<any>((resolve, reject) => {
        getUser()
          .then((res) => {
            if (res) {
              resolve(res);
            } else {
              reject("No data found");
            }
          })
          .catch((err) => {
            reject(err);
          });
      }),
  });

  useEffect(() => {
    if (data) navigate("/admin/dashboard");
    else navigate("/admin");
  }, []);

  //   else console.log("tidak sukses");
}

export { isLogin };
