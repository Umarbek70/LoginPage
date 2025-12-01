import React from "react";

export default function Topbar({ theme, setTheme, lang, setLang }) {


  
  return (


    <div className="flex items-center justify-between p-4 mb-4 glass rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition"
        >
          {theme === "light" ? "🌙 Light" : "☀️ Dark"}
        </button>


      </div>

      <div className="flex items-center gap-3">
        <div className="text-sm opacity-80">Welcome back</div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-amber-400 flex items-center justify-center font-bold logo-gradient">
          U
        </div>
      </div>
    </div>
  );
}
