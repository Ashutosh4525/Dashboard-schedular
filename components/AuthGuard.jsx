'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AuthGuard({ role, children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/auth/me", { withCredentials: true })
      .then(res => {
        if (!res.data || (role && res.data.role !== role)) {
          router.replace("/login");
        } else {
          setLoading(false);
        }
      })
      .catch(() => router.replace("/login"));
  }, []);

  if (loading) return null;

  return children;
}
