import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function Footer() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="footer bg-gray-800 min-h-8 h-8 text-sm height-10 text-white">
        <p className=" text-center hover:text-blue-400">© 2024 Your Company. All rights reserved.</p>
      </div>
    </>
  );
}
export default Footer;