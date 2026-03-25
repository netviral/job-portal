import React from 'react';
import { cn } from "@/lib/utils";

const NavButton = ({ icon, label, active, collapsed, onClick }) => (
    <button
        className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 text-sm font-semibold group border border-transparent mb-0.5",
            active
                ? "bg-primary/10 text-primary"
                : "text-muted hover:text-foreground hover:bg-card-hover"
        )}
        onClick={onClick}
    >
        <div className={cn("shrink-0 transition-colors", active ? "text-primary" : "group-hover:text-primary-hover group-hover:scale-110 transition-transform")}>
            {icon}
        </div>
        {!collapsed && <span>{label}</span>}
    </button>
);

export default NavButton;
