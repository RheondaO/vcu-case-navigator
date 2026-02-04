import { motion } from 'framer-motion';
import { Student } from '@/types/student';
import { formatCurrency, getRiskColor } from '@/data/students';
import { cn } from '@/lib/utils';

interface CaseCardProps {
  student: Student;
  isSelected: boolean;
  onClick: () => void;
}

export function CaseCard({ student, isSelected, onClick }: CaseCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={cn(
        'p-3 rounded-lg border cursor-pointer transition-colors',
        isSelected
          ? 'bg-primary/10 border-primary shadow-sm'
          : 'bg-card border-border hover:bg-muted/50'
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className={cn('w-2 h-2 rounded-full shrink-0', getRiskColor(student.riskLevel))} />
            <h4 className="font-medium text-sm truncate">{student.name}</h4>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">{student.id}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="font-bold text-sm financial-figure">{formatCurrency(student.gapAmount)}</p>
          <p className="text-xs text-muted-foreground">Gap</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
        <span>{student.creditHours} Credits</span>
        <span>{student.residency}</span>
      </div>
    </motion.div>
  );
}
