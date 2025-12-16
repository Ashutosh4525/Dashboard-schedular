import { BiHome } from "react-icons/bi";
import { HiArchiveBox } from "react-icons/hi2";
import { RxDotFilled } from "react-icons/rx";
import { FaBookmark, FaCalendarAlt } from "react-icons/fa";

export const sidebarConfig = {
  admin: [
    {
      label: "Dashboard",
      href: "/admin",
      icon: BiHome,
    },
    {
      label: "Booking",
      icon: FaBookmark,
      children: [
        { label: "View Regular Booking", href: "/admin/categories", icon:RxDotFilled },
        { label: "Trial Booking", href: "/admin/categories/add", icon:RxDotFilled },
      ],
    },
    {
      label: "Holiday",
      href:"/holiday",
      icon: FaCalendarAlt,
    },
  ],

  parent: [
    {
      label: "Dashboard",
      href: "/parent",
      icon: BiHome,
    },
    {
      label: "My Children",
      href: "/parent/children",
      icon: HiArchiveBox,
    },
  ],

  student: [
    {
      label: "Dashboard",
      href: "/student",
      icon: BiHome,
    },
    {
      label: "My Courses",
      href: "/student/courses",
      icon: HiArchiveBox,
    },
  ],

  teacher: [
    {
      label: "Dashboard",
      href: "/teacher",
      icon: BiHome,
    },
    {
      label: "My Classes",
      href: "/teacher/classes",
      icon: HiArchiveBox,
    },
  ],
};
