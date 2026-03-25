import React, { useState, useEffect } from 'react';
import { Search, Filter, Briefcase } from 'lucide-react';
import { cn } from "@/lib/utils";

const JobListSidebar = ({ selectedJob, onSelectJob }) => {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch jobs:", err);
                setLoading(false);
            });
    }, []);

    const filters = ['All', 'Full-time', 'Internship'];

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = activeFilter === 'All' || job.type === activeFilter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="flex flex-col h-full bg-[var(--panel-secondary)]">
            <div className="p-4 space-y-4 border-b border-border">
                <div className="relative">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                    <input
                        type="text"
                        placeholder="Search jobs..."
                        className="w-full bg-card border border-border rounded-lg pl-9 pr-4 py-2 text-xs text-foreground placeholder-muted-fg focus:outline-none focus:ring-1 focus:ring-primary/50"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={cn(
                                "px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border transition-all whitespace-nowrap",
                                activeFilter === f
                                    ? "bg-primary/10 text-primary border-primary/20"
                                    : "text-muted border-transparent hover:bg-card-hover"
                            )}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-1 mt-2">
                {loading ? (
                    <div className="p-8 text-center space-y-3">
                        <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto opacity-40" />
                        <p className="text-label">Syncing directory...</p>
                    </div>
                ) : filteredJobs.length > 0 ? (
                    filteredJobs.map(job => (
                        <button
                            key={job.id}
                            className={cn(
                                "w-full text-left px-4 py-3 rounded-lg transition-all duration-200 border border-transparent",
                                selectedJob?.id === job.id
                                    ? "bg-primary/15 text-foreground font-bold shadow-sm"
                                    : "hover:bg-card-hover text-muted hover:text-foreground"
                            )}
                            onClick={() => onSelectJob(job)}
                        >
                            <div className="font-semibold text-sm leading-none truncate">{job.title}</div>
                            <div className="text-label mt-2 truncate">{job.company}</div>
                        </button>
                    ))
                ) : (
                    <div className="p-8 text-center space-y-3">
                        <Briefcase size={24} className="mx-auto text-muted opacity-20" />
                        <p className="text-label">No matching jobs.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobListSidebar;
