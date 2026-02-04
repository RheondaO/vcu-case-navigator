import { AnimatePresence } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Student, FilterState } from '@/types/student';
import { CaseCard } from './CaseCard';

interface CaseQueueProps {
  students: Student[];
  filters: FilterState;
  selectedStudentId: string | null;
  onSelectStudent: (student: Student) => void;
}

export function CaseQueue({
  students,
  filters,
  selectedStudentId,
  onSelectStudent,
}: CaseQueueProps) {
  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                         student.id.toLowerCase().includes(filters.search.toLowerCase());
    const matchesRisk = filters.riskLevel === 'All' || student.riskLevel === filters.riskLevel;
    const matchesStatus = filters.status === 'All' || student.status === filters.status;
    
    return matchesSearch && matchesRisk && matchesStatus;
  });

  return (
    <div className="flex flex-col h-full">
      <div className="px-1 py-2 border-b border-border">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          High-Priority Cases ({filteredStudents.length})
        </h3>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="space-y-2 p-1">
          <AnimatePresence mode="popLayout">
            {filteredStudents.map((student) => (
              <CaseCard
                key={student.id}
                student={student}
                isSelected={selectedStudentId === student.id}
                onClick={() => onSelectStudent(student)}
              />
            ))}
          </AnimatePresence>
          
          {filteredStudents.length === 0 && (
            <div className="text-center py-8 text-muted-foreground text-sm">
              No students match the current filters
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
