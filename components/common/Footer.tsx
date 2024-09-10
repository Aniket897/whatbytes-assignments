"use client";
import { Award, File, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterLinks = [
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

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 w-full h-[100px] lg:hidden border shadow-sm bg-white">
      <div className="flex  items-center justify-between p-3 gap-2">
        {FooterLinks.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className={`flex items-center justify-center px-8 py-4 w-full rounded-3xl cursor-pointer transition-colors hover:bg-gray-100 ${
              pathname === link.href ? "bg-gray-100 text-blue-500" : ""
            }`}
          >
            <div className="w-6 h-6">{link.icon}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
