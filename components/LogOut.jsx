'use client';

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.replace("/login");
    router.refresh(); // 🔥 forces sidebar + layout re-render
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-800 rounded"
    >
      Logout
    </button>
  );
}
