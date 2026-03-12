"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, Squares2X2Icon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { HomeIcon as HomeIconSolid, Squares2X2Icon as Squares2X2IconSolid, ClipboardDocumentListIcon as ClipboardDocumentListIconSolid } from "@heroicons/react/24/solid";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function BottomNav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", outlineIcon: HomeIcon, solidIcon: HomeIconSolid },
    { href: "/dashboard", label: "Dashboard", outlineIcon: Squares2X2Icon, solidIcon: Squares2X2IconSolid },
    { href: "/task", label: "Task", outlineIcon: ClipboardDocumentListIcon, solidIcon: ClipboardDocumentListIconSolid },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/70 backdrop-blur-xl border border-black/5 rounded-2xl shadow-xl p-2 flex justify-between items-center z-50">
      {links.map((link) => {
        const isActive = pathname === link.href;
        const Icon = isActive ? link.solidIcon : link.outlineIcon;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex flex-col items-center justify-center w-full py-2 px-2 transition-all gap-1 rounded-xl",
              isActive
                ? "text-black bg-black/5 font-bold"
                : "text-gray-500 hover:text-gray-900 hover:bg-black/5"
            )}
          >
            <Icon className={cn("w-5 h-5", isActive && "text-black")} />
            <span className="text-[10px] font-medium">{link.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
