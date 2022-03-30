import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const route = [
    { id: 1, name: "home", link: "/home" },
    { id: 2, name: "About", link: "/About" },
    { id: 3, name: "Contact us", link: "/contart" },
    { id: 4, name: "Blogs", link: "/ blogs" },
  ];
  return (
    <nav>
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <div
        className={`flex items-center	justify-between	p-5 bg-slate-700 a${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        <h1 className="text-white	">favicon</h1>
        <div className="flex  text-white ">
          {route.map((item) => (
            <Link key={item.id} route={item}></Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
