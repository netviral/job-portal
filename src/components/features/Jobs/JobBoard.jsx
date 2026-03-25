import React from 'react';
import { Database, Plus } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const JobBoard = ({ selectedJob }) => {
    if (!selectedJob) {
        return (
            <div className="h-[40vh] flex flex-col items-center justify-center text-center animate-in space-y-12">
                <Database size={44} className="text-muted-fg opacity-20" strokeWidth={1} />
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground tracking-tight uppercase leading-none">Explore Jobs</h3>
                    <p className="text-label max-w-xs mx-auto opacity-60">Browse the directory and select a listing to view detailed job requirements.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-in space-y-16 pb-24">
            <div className="space-y-10 pb-10 border-b border-border">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                    <div className="space-y-6 flex-1">
                        <h1 className="text-2xl font-bold text-foreground leading-tight tracking-tighter uppercase">{selectedJob.title}</h1>
                        <div className="flex items-center gap-4">
                            <div className="h-3 w-3 bg-primary rounded-sm" />
                            <h2 className="text-lg font-bold text-muted leading-none tracking-tight uppercase tracking-widest">{selectedJob.company}</h2>
                        </div>
                        <div className="flex flex-wrap gap-12 mt-12 pt-8 border-t border-border">
                            {[
                                { l: 'LOCATION', v: selectedJob.location, c: 'text-foreground' },
                                { l: 'POSITION TYPE', v: selectedJob.type, c: 'text-foreground' },
                                { l: 'COMPENSATION', v: selectedJob.salary, c: 'text-primary' }
                            ].map((x, i) => (
                                <div key={i} className="space-y-2">
                                    <p className="text-label">{x.l}</p>
                                    <p className={cn("text-xs font-bold tracking-tight uppercase tracking-widest", x.c)}>{x.v}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:pt-2">
                        <Button size="sm" className="bg-primary hover:bg-primary-hover text-foreground font-bold h-10 px-8 text-xs uppercase tracking-widest rounded-lg shadow-xl shadow-primary/20 transition-all w-full lg:w-auto">
                            Submit Application
                        </Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-12">
                <section className="space-y-6 max-w-3xl">
                    <h3 className="text-label text-foreground border-l border-primary pl-4 py-0.5 leading-none">Role Overview</h3>
                    <p className="text-sm text-muted leading-relaxed font-medium tracking-tight uppercase opacity-80">{selectedJob.description}</p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <section className="space-y-8">
                        <h3 className="text-label text-foreground border-l border-border pl-4 py-0.5 leading-none">Core Responsibilities</h3>
                        <ul className="space-y-6">
                            {selectedJob.responsibilities.map((res, i) => (
                                <li key={i} className="flex gap-6 items-start">
                                    <div className="h-px w-6 bg-primary mt-2.5 shrink-0 opacity-40 shadow-xl" />
                                    <span className="text-xs text-muted font-bold uppercase tracking-widest leading-[1.8]">{res}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="space-y-8">
                        <h3 className="text-label text-foreground border-l border-border pl-4 py-0.5 leading-none">Candidate Requirements</h3>
                        <ul className="space-y-6">
                            {selectedJob.requirements.map((req, i) => (
                                <li key={i} className="flex gap-6 items-start text-muted">
                                    <Plus size={14} className="text-primary mt-1 shrink-0" strokeWidth={3} />
                                    <span className="text-xs text-muted font-bold uppercase tracking-widest leading-[1.8]">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <Card className="p-12 border-border bg-card rounded-3xl shadow-3xl">
                    <h3 className="text-label text-foreground mb-10 border-b border-border pb-6">Benefits & Perks</h3>
                    <div className="flex flex-wrap gap-4">
                        {selectedJob.benefits.map((ben, i) => (
                            <Badge key={i} variant="secondary" className="px-6 py-2.5 bg-background text-muted uppercase tracking-widest text-label border-border font-bold shadow-inner">
                                {ben}
                            </Badge>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default JobBoard;
