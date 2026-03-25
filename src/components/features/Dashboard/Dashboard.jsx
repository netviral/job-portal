import React from 'react';
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ANNOUNCEMENTS } from '../../../data';

const Dashboard = () => (
    <div className="space-y-16 animate-in">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-12 border-b border-border">
            <div className="max-w-xl space-y-4">
                <h1 className="text-3xl font-bold text-foreground tracking-tight leading-none capitalize">Dashboard.</h1>
                <p className="text-sm text-muted leading-relaxed font-medium max-w-[340px]">Monitor your recruitment progress, active drives, and institutional updates.</p>
            </div>
            <div className="flex gap-4">
                {[
                    { label: 'Live Jobs', value: '12', color: 'text-primary' },
                    { label: 'Shortlisted', value: '03', color: 'text-foreground' }
                ].map((stat, i) => (
                    <Card key={i} className="px-6 py-5 bg-card border-border min-w-[150px] rounded-xl text-center shadow-sm">
                        <p className="text-label mb-1.5 opacity-60"> {stat.label} </p>
                        <p className={cn("text-2xl font-bold leading-none tracking-tight", stat.color)}>{stat.value}</p>
                    </Card>
                ))}
            </div>
        </div>

        <div className="space-y-8">
            <div className="flex items-center justify-between px-4 py-1 border-l-2 border-primary">
                <h3 className="text-label text-muted">Latest Announcements</h3>
                <Badge variant="outline" className="text-label opacity-60 border-border">Real-time</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ANNOUNCEMENTS.map(ann => (
                    <Card key={ann.id} className="p-8 bg-card border-border rounded-2xl group hover:border-primary/20 transition-all duration-300 shadow-sm">
                        <div className="flex justify-between items-center mb-8">
                            <Badge variant={ann.priority === 'High' ? "destructive" : "outline"} className="px-3 py-1 text-label border-none">
                                {ann.priority} Priority
                            </Badge>
                            <span className="text-label">{ann.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">{ann.title}</h3>
                        <p className="text-sm leading-relaxed text-muted font-medium line-clamp-2">{ann.content}</p>
                    </Card>
                ))}
            </div>
        </div>
    </div>
);

export default Dashboard;
