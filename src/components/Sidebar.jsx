import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const menu = [
    { id: 1, label: "Dashboard", icon: "📊", to: "/dashboard" },
    { id: 2, label: "Users", icon: "👥", to: "/dashboard?tab=users" },
    { id: 3, label: "Reports", icon: "📑", to: "/dashboard?tab=reports" },
    { id: 4, label: "Analytics", icon: "📈", to: "/dashboard?tab=analytics" },
    { id: 5, label: "Settings", icon: "⚙️", to: "/dashboard?tab=settings" },
  ];

  return (
    <aside className="w-72 p-6 flex flex-col gap-6 glass ">
      <div>
        <div className="text-3xl font-extrabold">My<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-pink-300 to-amber-300">Dash</span></div>
        <div className="text-sm opacity-70 mt-1">Modern admin panel</div>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {menu.map((m) => (
          <Link
            key={m.id}
            to={m.to}
            className="flex items-center gap-3 p-3 rounded-md hover:bg-black/10 transition "
          >
            <span className="text-lg">{m.icon}</span>
            <span className="font-medium">{m.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto">
        <button
          onClick={() => navigate("/")}
          className="w-full py-2 rounded-md bg-red-500 text-white hover:brightness-95 transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
