import jwt from "jsonwebtoken";

// const SUPABASE_SECRET_KEY = import.meta.env.VITE_SUPABASE_SECRET_KEY;

const SUPABASE_SECRET = import.meta.env.VITE_SUPABASE_SECRET_KEY;

export const validateToken = (
  req: { cookies: { accessToken: any }; user: string | jwt.JwtPayload },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { error: string }): void; new (): any };
    };
  },
  next: () => void,
) => {
  const token = req.cookies?.accessToken;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    // Verifikasi token dengan secret dari Supabase
    const decoded = jwt.verify(token, SUPABASE_SECRET);

    // Simpan informasi pengguna dalam objek request
    req.user = decoded;

    next();
  } catch (err) {
    console.error("JWT verification error:", err);
    if (err instanceof Error) console.log(err.message);
    res.status(403).json({ error: "Forbidden: Invalid token" });
  }
};
