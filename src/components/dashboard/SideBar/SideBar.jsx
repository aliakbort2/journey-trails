"use client";

import React from "react";
import {
  FaUser,
  FaPlus,
  FaListAlt,
  FaTicketAlt,
  FaHeart,
  FaClipboardList,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation"; // App Router

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white">
      <div className="p-4 text-2xl font-bold text-center border-b border-gray-700">
        <Link href="/" className="text-blue-500">
          JourneyTrails
        </Link>
      </div>

      <nav className="flex-1 mt-4 space-y-2 px-2">
        <SidebarItem
          icon={<FaUser size={20} />}
          label="Profile"
          href="/dashboard/profile"
          isActive={pathname === "/dashboard/profile"}
        />
        <SidebarItem
          icon={<FaPlus size={20} />}
          label="Add Place"
          href="/dashboard/add-place"
          isActive={pathname === "/dashboard/add-place"}
        />
        <SidebarItem
          icon={<FaListAlt size={20} />}
          label="Destinations"
          href="/dashboard/destinations"
          isActive={pathname === "/dashboard/destinations"}
        />
          <SidebarItem
          icon={<FaUser size={20} />}
          label="Manage Users"
          href="/dashboard/manage-users"
          isActive={pathname === "/dashboard/manage-users"}
        />
        <SidebarItem
          icon={<FaTicketAlt size={20} />}
          label="All Bookings"
          href="/dashboard/all-bookings"
          isActive={pathname === "/dashboard/all-bookings"}
        />
        <SidebarItem
          icon={<FaHeart size={20} />}
          label="My Wishlist"
          href="/dashboard/wishlist"
          isActive={pathname === "/dashboard/wishlist"}
        />
        <SidebarItem
          icon={<FaClipboardList size={20} />}
          label="My Bookings"
          href="/dashboard/my-bookings"
          isActive={pathname === "/dashboard/my-bookings"}
        />
      </nav>

      <div className="p-4 border-t border-gray-700">
        <p className="text-sm text-center">© 2024 JourneyTrails</p>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, href, isActive }) => (
  <Link href={href} passHref>
    <div
      className={`flex items-center p-3 space-x-3 cursor-pointer ${
        isActive
          ? "bg-blue-600 text-white font-bold border-l-4 border-blue-400"
          : "hover:bg-gray-700"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  </Link>
);

export default Sidebar;
