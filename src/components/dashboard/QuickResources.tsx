import { ExternalLink, ChevronDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const resources = [
  { name: 'VCU Scholarships Database', url: 'https://vcu.academicworks.com/' },
  { name: 'Degree Requirements FAQ', url: 'https://bulletin.vcu.edu/academic-regs/ugrad/ugrad-degree-reqs/' },
  { name: 'Emergency Aid Application', url: 'https://advocacy.vcu.edu/resources/vcu-division-of-student-affairs-student-emergency-fund/' },
  { name: 'Payment Plan Options', url: 'https://sfs.vcu.edu/billing-and-payments/installment-plan/' },
  { name: 'Financial Aid Appeals', url: 'https://sfs.vcu.edu/financial-aid/keeping-your-aid/special-circumstances/' },
  { name: 'Work-Study Programs', url: 'https://sfs.vcu.edu/financial-aid/types-of-aid/federal-work-study/' },
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
