import React from 'react';
import { Edit3, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ProfileRow = ({ icon, title, subtitle }) => (
    <Card className="p-8 bg-card border-border rounded-2xl flex items-center justify-between group hover:border-primary/20 transition-all shadow-sm">
        <div className="flex items-center gap-6">
            <div className="h-10 w-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted group-hover:text-primary transition-all shadow-inner">
                {icon}
            </div>
            <div>
                <h4 className="text-md font-semibold text-foreground mb-1.5 leading-tight tracking-tight">{title}</h4>
                <p className="text-label">{subtitle}</p>
            </div>
        </div>
        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all translate-x-3 group-hover:translate-x-0">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted hover:text-foreground"><Edit3 size={14} /></Button>
            <Trash2 size={16} className="text-muted-fg hover:text-red-500 cursor-pointer p-0.5 transition-colors" />
        </div>
    </Card>
);

export default ProfileRow;
