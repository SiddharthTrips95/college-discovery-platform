"use client";

export default function LogoutButton() {
  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
    <button
      onClick={logout}
      className="bg-red-500 text-white px-3 py-2 rounded"
    >
      Logout
    </button>
  );
}