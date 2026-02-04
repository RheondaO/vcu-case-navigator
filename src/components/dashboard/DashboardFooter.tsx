import { User, FileText, MessageSquare, FolderOpen, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const footerLinks = [
  { icon: User, label: 'Student Profile' },
  { icon: FileText, label: 'Case Details' },
  { icon: MessageSquare, label: 'Advisor Notes' },
  { icon: FolderOpen, label: 'Document Management' },
  { icon: LogOut, label: 'Log Out' },
];

export function DashboardFooter() {
  return (
    <footer className="border-t border-border bg-muted/30 py-3 px-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {footerLinks.map((link, index) => (
          <div key={link.label} className="flex items-center">
            <Button variant="ghost" size="sm" className="h-8 gap-2 text-xs">
              <link.icon className="h-3 w-3" />
              <span className="hidden sm:inline">{link.label}</span>
            </Button>
            {index < footerLinks.length - 1 && (
              <Separator orientation="vertical" className="h-4 mx-1" />
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}
