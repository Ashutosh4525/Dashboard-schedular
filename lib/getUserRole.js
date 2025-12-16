export function getUserRole() {
  if (typeof document === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith("role="));

  return match ? match.split("=")[1] : null;
}
