import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, AlertTriangle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Student, ActivityItem } from '@/types/student';

interface ActionSuiteProps {
  student: Student;
  onAddActivity: (activity: Omit<ActivityItem, 'id' | 'timestamp'>) => void;
}

export function ActionSuite({ student, onAddActivity }: ActionSuiteProps) {
  const [escalateOpen, setEscalateOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);

  const handleEmail = () => {
    const subject = encodeURIComponent(`VCU SFMC - Account Balance Follow-Up: ${student.name} (${student.id})`);
    const body = encodeURIComponent(
      `Dear ${student.name},\n\nI hope this message finds you well. I'm reaching out regarding your current account balance for the ${student.semester} semester.\n\nPlease let me know if you'd like to schedule a time to discuss your financial aid options.\n\nBest regards,\nVCU Student Financial Management Center`
    );
    window.open(`mailto:${student.email}?subject=${subject}&body=${body}`);
    
    onAddActivity({
      type: 'email',
      description: 'Email sent to student',
      studentId: student.id,
    });
  };

  const handleEscalate = () => {
    setEscalateOpen(false);
    onAddActivity({
      type: 'escalation',
      description: 'Case escalated to supervisor for review',
      studentId: student.id,
    });
  };

  const handleSchedule = () => {
    setScheduleOpen(false);
    onAddActivity({
      type: 'appointment',
      description: 'Appointment scheduled via EAB Navigate',
      studentId: student.id,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="space-y-3"
    >
      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
        Actions
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Button
          onClick={handleEmail}
          className="h-14 bg-action-email hover:bg-action-email/90 text-white flex-col gap-1"
        >
          <Mail className="h-5 w-5" />
          <span className="text-xs">Email Student</span>
        </Button>
        
        <Button
          onClick={() => setEscalateOpen(true)}
          className="h-14 bg-action-escalate hover:bg-action-escalate/90 text-foreground flex-col gap-1"
        >
          <AlertTriangle className="h-5 w-5" />
          <span className="text-xs">Escalate to Supervisor</span>
        </Button>
        
        <Button
          onClick={() => setScheduleOpen(true)}
          className="h-14 bg-action-schedule hover:bg-action-schedule/90 text-white flex-col gap-1"
        >
          <Calendar className="h-5 w-5" />
          <span className="text-xs">Schedule Appointment</span>
        </Button>
      </div>

      {/* Escalate Dialog */}
      <Dialog open={escalateOpen} onOpenChange={setEscalateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Escalate Case to Supervisor</DialogTitle>
            <DialogDescription>
              Are you sure you want to escalate {student.name}'s case to your supervisor for review?
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="bg-muted p-3 rounded-lg text-sm">
              <p><strong>Student:</strong> {student.name} ({student.id})</p>
              <p><strong>Gap Amount:</strong> ${student.gapAmount.toLocaleString()}</p>
              <p><strong>Risk Level:</strong> {student.riskLevel}</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEscalateOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEscalate} className="bg-action-escalate text-foreground hover:bg-action-escalate/90">
              Confirm Escalation
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Schedule Dialog */}
      <Dialog open={scheduleOpen} onOpenChange={setScheduleOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Schedule Appointment (EAB Navigate)</DialogTitle>
            <DialogDescription>
              Schedule a consultation appointment with {student.name}.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-3">
            <div className="bg-muted p-3 rounded-lg text-sm">
              <p><strong>Student:</strong> {student.name}</p>
              <p><strong>Email:</strong> {student.email}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              This will log the appointment request and notify the student via their registered email.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setScheduleOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSchedule} className="bg-action-schedule hover:bg-action-schedule/90 text-white">
              Confirm Appointment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
