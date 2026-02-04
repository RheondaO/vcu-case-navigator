import { motion, AnimatePresence } from 'framer-motion';
import { Mail, AlertTriangle, Calendar, MessageSquare, Settings } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ActivityItem } from '@/types/student';

interface ActivityTimelineProps {
  activities: ActivityItem[];
}

const iconMap = {
  email: Mail,
  escalation: AlertTriangle,
  appointment: Calendar,
  note: MessageSquare,
  system: Settings,
};

const colorMap = {
  email: 'bg-action-email text-white',
  escalation: 'bg-action-escalate text-foreground',
  appointment: 'bg-action-schedule text-white',
  note: 'bg-muted text-muted-foreground',
  system: 'bg-muted text-muted-foreground',
};

export function ActivityTimeline({ activities }: ActivityTimelineProps) {
  const formatTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="px-4 py-3 border-b border-border">
        <h3 className="font-semibold text-sm">Activity Timeline</h3>
      </div>
      
      <ScrollArea className="h-64">
        <div className="p-4">
          <AnimatePresence mode="popLayout">
            {activities.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                No activity recorded yet
              </p>
            ) : (
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
                
                <div className="space-y-4">
                  {activities.map((activity, index) => {
                    const Icon = iconMap[activity.type];
                    return (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ delay: index * 0.05 }}
                        className="relative pl-10"
                      >
                        <div className={`absolute left-2 w-5 h-5 rounded-full flex items-center justify-center ${colorMap[activity.type]}`}>
                          <Icon className="h-3 w-3" />
                        </div>
                        
                        <div>
                          <p className="text-sm">{activity.description}</p>
                          <p className="text-xs text-muted-foreground">
                            {formatTime(activity.timestamp)}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </ScrollArea>
    </div>
  );
}
