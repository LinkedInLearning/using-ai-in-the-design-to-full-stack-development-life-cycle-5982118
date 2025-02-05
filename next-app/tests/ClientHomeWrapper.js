"use client"; // ✅ Ensures Client Component behavior

import Home from "@/app/page"; // Adjust path if needed

export default function ClientHomeWrapper() {
  return <Home className="Home" />;
}
