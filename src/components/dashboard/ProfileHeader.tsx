import { motion } from 'framer-motion';
import { RefreshCw, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Student } from '@/types/student';
import { getRiskColor, getRiskTextColor } from '@/data/students';
import { cn } from '@/lib/utils';

interface ProfileHeaderProps {
  student: Student;
  onRefresh: () => void;
}

export function ProfileHeader({ student, onRefresh }: ProfileHeaderProps) {
  return (
    <motion.div
      key={student.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-start justify-between gap-4 pb-4 border-b border-border"
    >
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
          <User className="h-6 w-6 text-muted-foreground" />
        </div>
        
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">{student.name}</h2>
            <Badge 
              variant="outline" 
              className={cn('text-xs', getRiskTextColor(student.riskLevel))}
            >
              {student.riskLevel} Risk
            </Badge>
          </div>
          <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
            <span>{student.studentLevel}</span>
            <span>•</span>
            <span>{student.id}</span>
            <span>•</span>
            <span>{student.semester}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Last updated: {student.lastUpdated.toLocaleDateString()} at {student.lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
      
      <Button variant="ghost" size="icon" onClick={onRefresh}>
        <RefreshCw className="h-4 w-4" />
      </Button>
    </motion.div>
  );
}
