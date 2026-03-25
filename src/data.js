export const USER_PROFILE = {
    basicDetails: {
        firstName: "Ibrahim",
        lastName: "Khalil",
        email: "ibrahim.khalil@university.edu",
        phone: "+91 98765 43210",
        bio: "Final-year Computer Science student at National Institute of Technology. Enthusiastic about full-stack development, distributed systems, and modern SaaS architecture. Looking for challenging summer internships and full-time software engineering roles.",
        rollNumber: "CS2021-042",
        department: "Computer Science & Engineering",
        graduationYear: "2025"
    },
    education: [
        {
            institution: "National Institute of Technology",
            degree: "B.Tech in Computer Science",
            grade: "8.9 CGPA",
            period: "2021 - 2025"
        },
        {
            institution: "Modern Public School",
            degree: "Higher Secondary (CBSE)",
            grade: "96.4%",
            period: "2019 - 2021"
        }
    ],
    workExperience: [
        {
            company: "Google Summer of Code",
            role: "Contributor (Open Source)",
            startDate: "May 2024",
            description: "Implemented a decentralized indexing layer for a distributed file system."
        },
        {
            company: "Startup Nexus",
            role: "Backend Intern",
            startDate: "Jan 2024",
            description: "Built scalable API end-points for a high-traffic fintech application."
        }
    ],
    skills: [
        { name: "React / Next.js", level: "Expert" },
        { name: "Node.js / Express", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "AWS / Docker", level: "Intermediate" },
        { name: "System Design", level: "Advanced" }
    ],
    positionsOfResponsibility: [
        {
            title: "Placement Coordinator",
            organization: "Training & Placement Cell",
            period: "2023 - Present"
        },
        {
            title: "President",
            organization: "Open Source Developers Club",
            period: "2022 - 2024"
        }
    ]
};

// Job data moved to jobs.json

export const ANNOUNCEMENTS = [
    {
        id: "A-001",
        title: "Mandatory Placement Orientation 2025",
        content: "All final-year students are required to attend the orientation session in the Main Auditorium tomorrow at 10 AM. Registration link is active on the portal.",
        date: "Mar 25, 2026",
        priority: "High",
        postedBy: "Training & Placement Office"
    },
    {
        id: "A-002",
        title: "Resume Verification Deadline Extended",
        content: "The T&P Cell has extended the resume verification deadline to Friday, Mar 27. Ensure all CGPA and internship proofs are uploaded.",
        date: "Mar 24, 2026",
        priority: "Medium",
        postedBy: "Placement Cell"
    }
];

export const NOTIFICATIONS = [
    { id: 1, message: "Goldman Sachs shortlisted you for Technical Round 1.", time: "2 hours ago" },
    { id: 2, message: "Your Resume #1 was approved by the Placement Office.", time: "5 hours ago" },
    { id: 3, message: "New Drive: Microsoft has posted a 2025 SDE role.", time: "1 day ago" }
];
