import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en");
  const [loading, setLoading] = useState(false);
  const limit = 15;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=${limit}`);
        const json = await res.json();
        setUsers(json?.data?.users || []);
      } catch (e) {
        console.error(e);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [page]);

  const stats = [
    { id: 1, title: "Total Users", value: 1200, color: "from-indigo-400 to-pink-400" },
    { id: 2, title: "Active", value: 432, color: "from-emerald-400 to-green-500" },
    { id: 3, title: "Pending", value: 21, color: "from-yellow-400 to-amber-400" },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <Topbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />

        {/* stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map(s => (
            <div key={s.id} className="p-4 rounded-xl glass shadow-md flex flex-col">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-white font-bold mb-3 animate-hue`}></div>
              <div className="text-sm opacity-80">{s.title}</div>
              <div className="text-2xl font-extrabold mt-2">{s.value}</div>
            </div>
          ))}
        </div>

        {/* user table */}
        <div className="mt-8 glass rounded-xl p-4 shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Users</h2>
            <div className="flex items-center gap-2">
              <div className="text-sm opacity-80">Per page: {limit}</div>
            </div>
          </div>

          {loading ? (
            <div className="p-6">Loading...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-left text-sm opacity-80  ">
                    <th className="p-2  text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-pink-800 to-amber-800">User</th>
                    <th className="p-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-pink-800 to-amber-800">Email</th>
                    <th className="p-2  text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-pink-800 to-amber-800">Gender</th>
                    <th className="p-2  text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-pink-800 to-amber-800">Country</th>
                    <th className="p-2  text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-pink-800 to-amber-800">Registered</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr><td colSpan={5} className="p-6 text-center opacity-70">No users</td></tr>
                  ) : users.map((u, i) => (
                    <tr key={i} className="table-row hover:bg-white/5 transition">
                      <td className="p-2 flex items-center gap-3">
                        <img src={u.picture.thumbnail} alt="av" className="w-10 h-10 rounded-full" />
                        <div>
                          <div className="font-medium">{u.name.first} {u.name.last}</div>
                          <div className="text-xs opacity-70">{u.phone}</div>
                        </div>
                      </td>
                      <td className="p-2">{u.email}</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${u.gender === 'male' ? 'bg-blue-500/20 text-blue-200' : 'bg-pink-500/20 text-pink-200'}`}>
                          {u.gender}
                        </span>
                      </td>
                      <td className="p-2">{u.location.country}</td>
                      <td className="p-2 text-sm opacity-80">{new Date(u.registered?.date || Date.now()).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* pagination */}
          <div className="flex items-center justify-between mt-4">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} className="px-3 py-1 rounded-md bg-white/10">Prev</button>
            <div className="text-sm opacity-80">Page: {page}</div>
            <button onClick={() => setPage(p => p + 1)} className="px-3 py-1 rounded-md bg-white/10">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
