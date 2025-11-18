import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </>
  );
}

export default App;
