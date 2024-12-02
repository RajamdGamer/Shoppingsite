import React from "react";
import { navigation } from "../constants";
const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="flex justify-between items-center">
        <a href="/">
                   <img src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="Logo" width={60} height={30} />
                   </a>
          <ul className="flex-1 flex justify-center items-center  gap-16">
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-sans leading-normal text-lg text-slate-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>

    
  );
};

export default Navbar;
