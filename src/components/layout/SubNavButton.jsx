import React from 'react';
import { cn } from "@/lib/utils";

const SubNavButton = ({ label, active, onClick }) => (
    <button
        className={cn(
            "w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 border border-transparent",
            active
                ? "bg-primary/15 text-foreground shadow-sm"
                : "text-muted hover:text-foreground hover:bg-card-hover font-semibold"
        )}
        onClick={onClick}
    >
        {label}
    </button>
);

export default SubNavButton;
