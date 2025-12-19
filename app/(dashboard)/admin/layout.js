import AuthGuard from "@/components/AuthGuard";
import Sidenav from "@/components/Sidenav";

export default function AdminLayout({ children }) {
  return (
    <AuthGuard role="admin">
      <div className="flex h-screen">
        <Sidenav />
        <main className="flex-1">{children}</main>
      </div>
    </AuthGuard>
  );
}
