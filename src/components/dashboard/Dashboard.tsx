import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { Student, FilterState, ActivityItem } from '@/types/student';
import { students as initialStudents, generateInitialActivities } from '@/data/students';

import { SearchBar } from './SearchBar';
import { FilterDropdowns } from './FilterDropdowns';
import { CaseQueue } from './CaseQueue';
import { ProfileHeader } from './ProfileHeader';
import { CalculationSnapshot } from './CalculationSnapshot';
import { WhatIfSandbox } from './WhatIfSandbox';
import { ActionSuite } from './ActionSuite';
import { ActivityTimeline } from './ActivityTimeline';
import { QuickResources } from './QuickResources';
import { EngagementChart } from './EngagementChart';
import { DashboardFooter } from './DashboardFooter';

export function Dashboard() {
  const [students] = useState<Student[]>(initialStudents);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(students[0] || null);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    riskLevel: 'All',
    status: 'All',
  });
  const [activities, setActivities] = useState<Record<string, ActivityItem[]>>(() => {
    const initial: Record<string, ActivityItem[]> = {};
    students.forEach((s) => {
      initial[s.id] = generateInitialActivities(s.id);
    });
    return initial;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentActivities = useMemo(() => {
    if (!selectedStudent) return [];
    return activities[selectedStudent.id] || [];
  }, [selectedStudent, activities]);

  const handleAddActivity = useCallback((activity: Omit<ActivityItem, 'id' | 'timestamp'>) => {
    const newActivity: ActivityItem = {
      ...activity,
      id: `${activity.studentId}-${Date.now()}`,
      timestamp: new Date(),
    };
    
    setActivities((prev) => ({
      ...prev,
      [activity.studentId]: [newActivity, ...(prev[activity.studentId] || [])],
    }));
  }, []);

  const handleRefresh = useCallback(() => {
    if (selectedStudent) {
      setSelectedStudent({
        ...selectedStudent,
        lastUpdated: new Date(),
      });
    }
  }, [selectedStudent]);

  // Sidebar content (shared between desktop and mobile)
  const SidebarContent = (
    <div className="flex flex-col h-full bg-sidebar">
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <div>
            <h1 className="font-bold text-lg">VCU SFMC Advisor Case Management</h1>
            <p className="text-xs text-muted-foreground">What-If Gap Analysis</p>
          </div>
        </div>
      </div>
      
      {/* Search & Filters */}
      <div className="p-3 space-y-3 border-b border-sidebar-border">
        <SearchBar
          value={filters.search}
          onChange={(search) => setFilters((f) => ({ ...f, search }))}
        />
        <FilterDropdowns
          riskLevel={filters.riskLevel}
          status={filters.status}
          onRiskLevelChange={(riskLevel) => setFilters((f) => ({ ...f, riskLevel }))}
          onStatusChange={(status) => setFilters((f) => ({ ...f, status }))}
        />
      </div>
      
      {/* Case Queue */}
      <div className="flex-1 min-h-0 p-2">
        <CaseQueue
          students={students}
          filters={filters}
          selectedStudentId={selectedStudent?.id || null}
          onSelectStudent={(student) => {
            setSelectedStudent(student);
            setMobileMenuOpen(false);
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h1 className="font-bold">SFMC Advisor</h1>
        </div>
        
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-80">
            {SidebarContent}
          </SheetContent>
        </Sheet>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-80 border-r border-border flex-shrink-0">
          {SidebarContent}
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Primary Workspace */}
          <div className="flex-1 overflow-auto p-4 lg:p-6">
            <AnimatePresence mode="wait">
              {selectedStudent ? (
                <motion.div
                  key={selectedStudent.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 max-w-3xl"
                >
                  <ProfileHeader
                    student={selectedStudent}
                    onRefresh={handleRefresh}
                  />
                  
                  <CalculationSnapshot student={selectedStudent} />
                  
                  <WhatIfSandbox student={selectedStudent} />
                  
                  <ActionSuite
                    student={selectedStudent}
                    onAddActivity={handleAddActivity}
                  />
                </motion.div>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <p>Select a student from the case queue</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Rail */}
          {selectedStudent && (
            <aside className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-border p-4 lg:p-6 space-y-4 overflow-auto">
              <ActivityTimeline activities={currentActivities} />
              <QuickResources />
              <EngagementChart student={selectedStudent} />
            </aside>
          )}
        </main>
      </div>

      {/* Footer */}
      <DashboardFooter />
    </div>
  );
}
