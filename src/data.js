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

export const JOB_POSTINGS = [
    {
        id: "J-001",
        title: "Software Development Engineer (Campus)",
        company: "Goldman Sachs",
        location: "Bangalore / Remote",
        type: "Full-Time",
        salary: "₹24,00,000 - ₹32,00,000",
        description: "Join the Global Technology division at Goldman Sachs to build high-performance systems for global financial markets. We are looking for exceptional problem solvers from the Class of 2025.",
        responsibilities: [
            "Design and develop scalable microservices in Java/Python",
            "Collaborate with global teams to solve low-latency trading challenges",
            "Write clean, unit-tested, and maintainable production-grade code"
        ],
        requirements: [
            "Currently pursuing B.Tech/M.Tech in CS or related fields",
            "Strong understanding of Data Structures and Algorithms",
            "Proficient in at least one object-oriented language"
        ],
        benefits: ["Performance Bonus", "Medical Insurance", "Relocation Support", "Learning Stipend"]
    },
    {
        id: "J-002",
        title: "Product Management Intern",
        company: "Razorpay",
        location: "Bangalore",
        type: "Internship (6 Months)",
        salary: "₹80,000 / Month",
        description: "Razorpay is looking for PM interns who can own features from ideation to launch. Work closely with design and engineering teams to build the future of payments in India.",
        responsibilities: [
            "Conduct market research and user interviews to define product roadmap",
            "Create detailed PRDs and wireframes for new payment modules",
            "Analyze product metrics to drive growth and user retention"
        ],
        requirements: [
            "Pre-final year student from Tier-1 institutions",
            "Strong first-principles thinking and analytical skills",
            "Basic understanding of SQL and product analytics tools"
        ],
        benefits: ["Full PPO Potential", "Free Meals", "Casual Work Environment"]
    },
    {
        id: "J-003",
        title: "Associate Cloud Engineer",
        company: "Amazon Web Services",
        location: "Hyderabad",
        type: "Full-Time",
        salary: "₹18,00,000 - ₹22,00,000",
        description: "Help global customers build scalable infra on AWS. This is a technical role involving deep dive into cloud services, networking, and serverless compute.",
        responsibilities: [
            "Architect cloud solutions for Fortune 500 clients",
            "Automate infrastructure deployments using CloudFormation",
            "Troubleshoot complex networking and security issues"
        ],
        requirements: [
            "Degree in CS/IT or equivalent (Class of 2024/2025)",
            "AWS Cloud Practitioner or Solutions Architect Associate is a plus",
            "Good communication skills for client interactions"
        ],
        benefits: ["AWS Certifications", "RSUs", "Global Exposure"]
    }
];

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
