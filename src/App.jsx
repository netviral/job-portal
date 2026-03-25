import React, { useState, useEffect } from 'react';
import {
  Home, User, Bell, LogOut,
  ChevronRight, Sun, GripVertical,
  ShieldCheck, GraduationCap as GradIcon,
  Briefcase as JobIcon
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { USER_PROFILE } from './data';
import { useTheme } from './ThemeContext';

// UI Components
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// Layout Components
import NavButton from './components/layout/NavButton';
import SubNavButton from './components/layout/SubNavButton';

// Features Components
import Dashboard from './components/features/Dashboard/Dashboard';
import StudentProfile from './components/features/Profile/StudentProfile';
import JobBoard from './components/features/Jobs/JobBoard';
import JobListSidebar from './components/features/Jobs/JobListSidebar';
import ApplicationsLog from './components/features/Applications/ApplicationsLog';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeSubTab, setActiveSubTab] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [profileData, setProfileData] = useState(USER_PROFILE);
  const [selectedJob, setSelectedJob] = useState(null);

  // Resizable Sidebar Logic
  const storedWidth = localStorage.getItem('sidebarWidth');
  const [sidebarWidth, setSidebarWidth] = useState(storedWidth ? parseInt(storedWidth) : 380);
  const [isResizing, setIsResizing] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    if (sidebarWidth) {
      localStorage.setItem('sidebarWidth', sidebarWidth.toString());
    }
  }, [sidebarWidth]);

  // Tab-specific default widths
  useEffect(() => {
    if (!isMobile && !isResizing) {
      if (activeTab === 'profile') setSidebarWidth(280);
      if (activeTab === 'jobs') setSidebarWidth(360);
    }
  }, [activeTab, isMobile]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing) return;
      let newWidth = e.clientX - (isSidebarCollapsed ? 64 : 256);
      if (newWidth < 220) newWidth = 220;
      if (newWidth > 700) newWidth = 700;
      setSidebarWidth(newWidth);
    };
    const handleMouseUp = () => setIsResizing(false);

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, isSidebarCollapsed]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'profile') {
      setActiveSubTab('academic');
    } else if (tab === 'jobs') {
      setActiveSubTab('all');
      setSelectedJob(null);
    } else {
      setActiveSubTab(null);
    }
  };

  const hasSecondarySidebar = activeTab === 'profile' || activeTab === 'jobs';
  const isDetailView = (activeTab === 'jobs' && selectedJob) || activeTab === 'profile' || activeTab === 'notifications';

  return (
    <div className="flex h-screen w-screen bg-[var(--panel-main)] overflow-hidden text-muted font-sans tracking-tight antialiased selection:bg-primary/30">
      {/* Structural Sidebar - Standard SaaS Density */}
      <aside
        className={cn(
          "flex flex-col border-r border-border bg-[var(--panel-primary)] transition-all duration-300 ease-in-out z-50",
          isSidebarCollapsed ? "w-16" : "w-64",
          isMobile && !isSidebarCollapsed ? "fixed inset-0 z-[60] shadow-2xl" : ""
        )}
      >
        <div className="h-16 flex items-center px-6 mb-2">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-primary rounded-lg shadow-xl shadow-primary/10 flex items-center justify-center text-white shrink-0">
              <GradIcon size={18} fill="currentColor" />
            </div>
            {!isSidebarCollapsed && (
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-foreground leading-none tracking-tight">CareerHub</span>
                <span className="text-label mt-1 opacity-70">Recruitment</span>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 px-3 flex flex-col gap-0.5 overflow-y-auto mt-2">
          <NavButton icon={<Home size={18} />} label="Dashboard" active={activeTab === 'dashboard'} collapsed={isSidebarCollapsed} onClick={() => handleTabChange('dashboard')} />
          <NavButton icon={<User size={18} />} label="Student Profile" active={activeTab === 'profile'} collapsed={isSidebarCollapsed} onClick={() => handleTabChange('profile')} />
          <NavButton icon={<JobIcon size={18} />} label="Job Board" active={activeTab === 'jobs'} collapsed={isSidebarCollapsed} onClick={() => handleTabChange('jobs')} />
          <NavButton icon={<Bell size={18} />} label="My Applications" active={activeTab === 'notifications'} collapsed={isSidebarCollapsed} onClick={() => handleTabChange('notifications')} />
        </nav>

        <div className="p-3 mb-4 flex flex-col gap-0.5 border-t border-border pt-4">
          <button onClick={toggleTheme} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:text-foreground hover:bg-card-hover transition-all w-full">
            {theme === 'dark' ? <Sun size={18} /> : <span>🌒</span>}
            {!isSidebarCollapsed && <span className="text-sm font-semibold">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
          </button>
          <NavButton icon={<LogOut size={18} />} label="Sign Out" collapsed={isSidebarCollapsed} onClick={() => console.log('Logout')} />
        </div>
      </aside>

      {/* Persistent Channel Sidebar */}
      <aside
        style={{ width: hasSecondarySidebar ? (isMobile ? '100%' : `${sidebarWidth}px`) : '0px' }}
        className={cn(
          "border-r border-border bg-[var(--panel-secondary)] transition-all duration-300 ease-out overflow-hidden flex flex-col flex-shrink-0 relative group shrink-0",
          !hasSecondarySidebar && "border-none",
          isDetailView && "sidebar-recede",
          isMobile && hasSecondarySidebar ? "fixed inset-0 z-[55] bg-[var(--panel-secondary)]" : ""
        )}
      >
        <div className="flex flex-col h-full w-full">
          <AnimatePresence mode="wait">
            {activeTab === 'profile' && (
              <motion.div key="profile-nav" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col h-full">
                <div className="p-6 pb-4 h-16 items-center flex border-b border-border">
                  <h3 className="text-label text-muted-fg uppercase tracking-widest font-bold">Profile Sections</h3>
                </div>
                <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-0.5 mt-2">
                  <SubNavButton label="Education" active={activeSubTab === 'academic'} onClick={() => setActiveSubTab('academic')} />
                  <SubNavButton label="Personal Info" active={activeSubTab === 'personal'} onClick={() => setActiveSubTab('personal')} />
                  <SubNavButton label="Skillset" active={activeSubTab === 'skills'} onClick={() => setActiveSubTab('skills')} />
                  <SubNavButton label="Leadership" active={activeSubTab === 'responsibility'} onClick={() => setActiveSubTab('responsibility')} />
                  <SubNavButton label="Experience" active={activeSubTab === 'experience'} onClick={() => setActiveSubTab('experience')} />
                </div>
              </motion.div>
            )}
            {activeTab === 'jobs' && (
              <motion.div key="jobs-nav" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                <JobListSidebar selectedJob={selectedJob} onSelectJob={setSelectedJob} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Resizer Handle */}
        {!isMobile && hasSecondarySidebar && (
          <div
            onMouseDown={handleMouseDown}
            className={cn(
              "absolute right-0 top-0 w-4 h-full cursor-col-resize group/handle z-[70] flex items-center justify-center -mr-2 opacity-100",
            )}
          >
            <div className={cn(
              "h-full transition-all duration-300",
              isResizing ? "w-[2px] bg-primary/40" : "w-[1px] bg-border group-hover/handle:bg-primary/20 group-hover/handle:w-[2px]"
            )} />
            <div className={cn(
              "absolute h-9 w-5 bg-card border border-border rounded-lg flex items-center justify-center shadow-2xl z-[75] transition-all duration-300 text-foreground",
              isResizing ? "opacity-100 scale-110 border-primary/20" : "opacity-70 group-hover/handle:opacity-100 group-hover/handle:scale-105"
            )}>
              <GripVertical size={12} className={cn("transition-colors", isResizing ? "text-primary/60" : "text-muted-fg/40")} />
            </div>
          </div>
        )}
      </aside>

      {/* Main Orchestration Node */}
      <main className={cn("flex-1 flex flex-col overflow-hidden relative transition-all duration-500 bg-[var(--panel-main)]", isDetailView && "main-focus")}>
        <header className="h-16 flex items-center justify-between px-6 lg:px-10 border-b border-border bg-[var(--panel-main)]/90 backdrop-blur-xl z-20 sticky top-0 shrink-0">
          <div className="flex items-center gap-4 text-sm font-semibold text-muted">
            {isMobile && (
              <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="p-2 hover:bg-card-hover rounded-lg">
                <ChevronRight size={20} className={cn("transition-transform", !isSidebarCollapsed ? "rotate-180" : "")} />
              </button>
            )}
            <span className="hover:text-foreground transition-colors cursor-pointer capitalize">{activeTab}</span>
            {activeSubTab && (
              <div className="hidden sm:flex items-center gap-1.5 opacity-60">
                <ChevronRight size={14} className="text-muted-fg" />
                <span className="text-foreground capitalize">{activeSubTab.toString().replace(/([A-Z])/g, ' $1').toLowerCase()}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-foreground tracking-tight"> {profileData.basicDetails.firstName} {profileData.basicDetails.lastName} </p>
              <p className="text-label mt-0.5 opacity-60">{profileData.basicDetails.rollNumber}</p>
            </div>
            <Avatar className="h-8 w-8 border border-border ring-2 ring-transparent hover:ring-primary/50 transition-all cursor-pointer">
              <AvatarFallback className="bg-muted text-foreground font-bold text-xs">IK</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-12 lg:p-20 bg-[var(--panel-main)]">
          <div className="max-w-4xl mx-auto space-y-20">
            <RenderPlatformContent
              tab={activeTab}
              subTab={activeSubTab}
              profileData={profileData}
              setProfileData={setProfileData}
              selectedJob={selectedJob}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

const RenderPlatformContent = ({ tab, subTab, profileData, setProfileData, selectedJob }) => {
  switch (tab) {
    case 'dashboard':
      return <Dashboard />;
    case 'profile':
      return <StudentProfile subTab={subTab} data={profileData} setData={setProfileData} />;
    case 'jobs':
      return <JobBoard selectedJob={selectedJob} />;
    case 'notifications':
      return <ApplicationsLog />;
    default:
      return <Dashboard />;
  }
};

export default App;
