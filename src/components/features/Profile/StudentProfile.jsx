import React from 'react';
import {
    GraduationCap as GradIcon,
    Briefcase as JobIcon,
    Award,
    Zap
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProfileRow from './ProfileRow';

const StudentProfile = ({ subTab, data, setData }) => {
    if (!subTab) return null;

    const handleInputChange = (field, value) => {
        if (subTab === 'personal') {
            setData({
                ...data,
                basicDetails: { ...data.basicDetails, [field]: value }
            });
        }
    };

    const wrapPortfolio = (title, desc, children) => (
        <div className="space-y-12 animate-in pb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-12 border-b border-border">
                <div className="max-w-xl space-y-3">
                    <h2 className="text-2xl font-bold text-foreground tracking-tight capitalize leading-none">{title}</h2>
                    <p className="text-sm text-muted font-medium leading-relaxed">{desc}</p>
                </div>
                <Button size="sm" className="bg-primary hover:bg-primary-hover text-foreground font-bold h-10 px-8 rounded-lg shadow-xl shadow-primary/20 transition-all text-xs uppercase tracking-widest shrink-0">
                    Save Profile
                </Button>
            </div>
            {children}
        </div>
    );

    switch (subTab) {
        case 'personal': return wrapPortfolio("Basic Information", "Update your primary contact details and personal identity.",
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {[
                    { label: 'First Name', id: 'firstName' },
                    { label: 'Last Name', id: 'lastName' },
                    { label: 'Official Email', id: 'email' },
                    { label: 'Phone Number', id: 'phone' }
                ].map(item => (
                    <div key={item.id} className="space-y-3">
                        <label className="text-label ml-1 opacity-60">{item.label}</label>
                        <Input id={item.id} value={data.basicDetails[item.id]} onChange={(e) => handleInputChange(item.id, e.target.value)} className="h-12 bg-card border-border focus:border-primary/30 text-foreground font-medium rounded-xl text-sm transition-all shadow-inner" />
                    </div>
                ))}
                <div className="md:col-span-2 space-y-3">
                    <label className="text-label ml-1 opacity-60">Professional Summary</label>
                    <textarea className="flex min-h-[140px] w-full rounded-2xl border border-border bg-card px-5 py-4 text-sm font-medium text-foreground transition-all focus:border-primary/30 focus-visible:outline-none shadow-inner" value={data.basicDetails.bio} onChange={(e) => handleInputChange('bio', e.target.value)} />
                </div>
            </div>
        );
        case 'academic': return wrapPortfolio("Education History", "A comprehensive record of your degrees, certifications, and academic performance.",
            <div className="space-y-4 pt-4">
                {data.education.map((item, idx) => (
                    <ProfileRow key={idx} title={item.institution} subtitle={`${item.degree} — ${item.grade}`} icon={<GradIcon size={20} />} />
                ))}
            </div>
        );
        case 'experience': return wrapPortfolio("Work Experience", "Detailed record of your internships, freelance projects, and professional roles.",
            <div className="space-y-4 pt-4">
                {data.workExperience.map((item, idx) => (
                    <ProfileRow key={idx} title={item.company} subtitle={item.role} icon={<JobIcon size={20} />} />
                ))}
            </div>
        );
        case 'skills': return wrapPortfolio("Skills & Competencies", "A showcase of your technical proficiency and industry-relevant skills.",
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {data.skills.map((skill, idx) => (
                    <Card key={idx} className="p-6 bg-card border-border rounded-2xl group hover:border-primary/30 transition-all shadow-xl">
                        <div className="flex justify-between items-center mb-4">
                            <Badge variant="outline" className="text-primary border-none bg-primary/5 text-label px-2 py-0.5">{skill.level}</Badge>
                            <Zap size={14} className="text-muted-fg group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-sm font-bold text-foreground tracking-tight uppercase tracking-widest">{skill.name}</p>
                    </Card>
                ))}
            </div>
        );
        case 'responsibility': return wrapPortfolio("Extra-Curriculars & Leadership", "Roles of responsibility and leadership held within the institution.",
            <div className="space-y-4 pt-4">
                {data.positionsOfResponsibility.map((item, idx) => (
                    <ProfileRow key={idx} title={item.title} subtitle={item.organization} icon={<Award size={20} />} />
                ))}
            </div>
        );
        default: return null;
    }
};

export default StudentProfile;
