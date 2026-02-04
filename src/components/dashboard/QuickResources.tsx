import { ExternalLink, ChevronDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const resources = [
  { name: 'VCU Scholarships Database', url: 'https://www.vcu.edu/scholarships' },
  { name: 'Degree Requirements FAQ', url: 'https://www.vcu.edu/degree-faq' },
  { name: 'Emergency Aid Application', url: 'https://www.vcu.edu/emergency-aid' },
  { name: 'Payment Plan Options', url: 'https://www.vcu.edu/payment-plans' },
  { name: 'Financial Aid Appeals', url: 'https://www.vcu.edu/aid-appeals' },
  { name: 'Work-Study Programs', url: 'https://www.vcu.edu/work-study' },
];

export function QuickResources() {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className="bg-card rounded-lg border border-border">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button className="flex items-center justify-between w-full px-4 py-3 border-b border-border hover:bg-muted/50 transition-colors">
            <h3 className="font-semibold text-sm">Quick Resources</h3>
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <div className="p-2">
            {resources.map((resource) => (
              <Button
                key={resource.name}
                variant="ghost"
                size="sm"
                className="w-full justify-between text-left h-auto py-2 px-3"
                onClick={() => window.open(resource.url, '_blank')}
              >
                <span className="text-sm">{resource.name}</span>
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </Button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
