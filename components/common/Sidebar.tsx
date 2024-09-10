"use client";
import { Award, File, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLinks = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard />,
    href: "/",
  },
  {
    name: "Skill Test",
    icon: <Award />,
    href: "/skill-test",
  },
  {
    name: "Intership",
    icon: <File />,
    href: "/intership",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[300px] hidden lg:block border-r h-full">
      <div className="flex flex-col h-full p-3 gap-y-2">
        {SidebarLinks.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className={`flex items-center px-8 py-4 rounded-3xl cursor-pointer transition-colors hover:bg-gray-100 ${
              pathname === link.href ? "bg-gray-100 text-blue-500" : ""
            }`}
          >
            <div className="w-6 h-6">{link.icon}</div>
            <div className="ml-4">{link.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
