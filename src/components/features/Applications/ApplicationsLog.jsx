import React from 'react';
import { MessageSquare, CheckCircle } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { NOTIFICATIONS } from '../../../data';

const ApplicationsLog = () => (
    <div className="space-y-2 animate-in max-w-3xl mx-auto pb-24">
        <div className="p-8 pb-4">
            <h3 className="text-label text-foreground pb-8 border-b border-border">Application Status Log</h3>
        </div>
        {NOTIFICATIONS.map(notif => (
            <Card key={notif.id} className="group p-6 bg-card border-border rounded-2xl flex items-center justify-between hover:bg-card-hover transition-all duration-300 cursor-pointer shadow-black/20 overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary/10 group-hover:bg-primary transition-all duration-500" />
                <div className="flex items-center gap-8 flex-1 min-w-0">
                    <div className="h-10 w-10 flex items-center justify-center bg-background border border-border rounded-xl group-hover:text-primary transition-colors shadow-inner shrink-0 group-hover:rotate-12 transition-transform">
                        <MessageSquare size={18} />
                    </div>
                    <div className="min-w-0">
                        <p className="text-sm font-bold text-foreground tracking-tight leading-none truncate uppercase tracking-widest">{notif.message}</p>
                        <p className="text-label mt-3 opacity-60">{notif.time}</p>
                    </div>
                </div>
                <CheckCircle size={20} className="text-muted-fg group-hover:text-emerald-500 transition-colors cursor-pointer mr-2" />
            </Card>
        ))}
    </div>
);

export default ApplicationsLog;
