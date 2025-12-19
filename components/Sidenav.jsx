'use client'
import { useState,useEffect } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { RxHamburgerMenu} from "react-icons/rx";
import Link from "next/link";
import { sidebarConfig } from "@/lib/sidebarConfig";
import LogoutButton from "./LogOut";


const Sidenav= () => {
  const [collapsed, setCollapsed] = useState(false);
  const [role, setRole] = useState(null);
  const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
    // const cookie = document.cookie
    //   .split("; ")
    //   .find(row => row.startsWith("role="));

    // setRole(cookie?.split("=")[1] || null);
    // setMounted(true);
    //  const fetchUser = async () => {
    //   try {
    //     const res = await fetch("/api/auth/me");
    //     const user = await res.json();
    //     setRole(user?.role || null);
    //   } catch {
    //     setRole(null);
    //   } 
      // finally {
      //   setLoading(false);
      // }
    // };

    fetch("/api/auth/me")
      .then(res => res.json())
      .then(data => {
        setRole(data?.role || null);
        setMounted(true);
      })
      .catch(() => setMounted(true));
  }, []);

  // if (loading) return null;
  if (!mounted) return null;
  const menuItems = sidebarConfig[role] || [];


  return (
    <>
     <div className="flex h-screen" >
   <Sidebar collapsed={collapsed}>   
        <Menu style={{paddingTop:"50px"}}>
          {/* <MenuItem icon={<BiHome />}component={<Link href="/dashboard"/>}> Dashboard</MenuItem>
          <SubMenu icon={<FaBookmark/>} label="Booking" >
            <MenuItem icon={<RxDotFilled />}component={<Link href="/category-list"/>}> View Regular Booking </MenuItem>
            <MenuItem icon={<RxDotFilled />}component={<Link href="/add-category"/>}> Trial Booking </MenuItem>
          </SubMenu>
            <MenuItem icon={<FaCalendarAlt />}component={<Link href="/holiday"/>}> Holiday </MenuItem> */}
            {menuItems.map((item, index) => {
          const Icon = item.icon;

          if (item.children) {
            return (
              <SubMenu
                key={index}
                label={item.label}
                icon={<Icon />}
              >
                {item.children.map((child, idx) => (
                  <MenuItem
                    key={idx}
                    component={<Link href={child.href} />}
                  >
                    {child.label}
                  </MenuItem>
                ))}
              </SubMenu>
            );
          }

          return (
            <MenuItem
              key={index}
              icon={<Icon />}
              component={<Link href={item.href} />}
            >
              {item.label}
            </MenuItem>
          );
        })}
        </Menu>
      </Sidebar> 
      <div style={{width: "100%", height: "55px", backgroundColor: "#f5f5f5", display: "flex", alignItems: "center", justifyContent:"space-between", padding: "0 15px", borderBottom: "1px solid #ddd"}}>
        <button className="sb-button" onClick={() => setCollapsed(!collapsed)} style={{margin: "10px", background: "white", border: "1px solid #ccc", borderRadius: "5px", cursor: "pointer", padding: "5px 8px",}}>
            <RxHamburgerMenu />
          </button> 
          <div className="py-6">
                  {/* <Link href={"/login"}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log out
                  </Link> */}
                  <LogoutButton/>
          </div>
        </div>   
      </div>
    </>
  );
}

export default Sidenav;