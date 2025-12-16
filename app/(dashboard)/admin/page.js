'use client'
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { RxHamburgerMenu, RxDotFilled } from "react-icons/rx";
import { BiHome } from "react-icons/bi";
import { FaBookmark, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

export default function Admin() {
   const [collapsed, setCollapsed] = useState(false);
  return (
   <>
   {/* <div className="flex h-screen" >
   <Sidebar collapsed={collapsed}>   
        <Menu style={{paddingTop:"50px"}}>
          <MenuItem icon={<BiHome />}component={<Link href="/home"/>}> Dashboard</MenuItem>
          <SubMenu icon={<FaBookmark/>} label="Booking" >
            <MenuItem icon={<RxDotFilled />}component={<Link href="/category-list"/>}> View Regular Booking </MenuItem>
            <MenuItem icon={<RxDotFilled />}component={<Link href="/add-category"/>}> Trial Booking </MenuItem>
          </SubMenu>
            <MenuItem icon={<FaCalendarAlt />}component={<Link href="/holiday"/>}> Holiday </MenuItem>
        </Menu>
      </Sidebar> 
      <div style={{width: "100%", height: "55px", backgroundColor: "#f5f5f5", display: "flex", alignItems: "center", justifyContent:"space-between", padding: "0 15px", borderBottom: "1px solid #ddd"}}>
        <button className="sb-button" onClick={() => setCollapsed(!collapsed)} style={{margin: "10px", background: "white", border: "1px solid #ccc", borderRadius: "5px", cursor: "pointer", padding: "5px 8px",}}>
            <RxHamburgerMenu />
          </button> 
          <div className="py-6">
                  <Link href={"/login"}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log out
                  </Link>
          </div>
        </div>   
      </div> */}
   </>
  );
}
