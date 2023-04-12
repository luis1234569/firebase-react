import React from "react";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error.message);
    }
  };

  if(loading) return <p>loading</p>

  return (
    <div>
      home hola {user?.displayName || user?.email} <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}

export default Home;
