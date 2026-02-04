import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RiskLevel, CaseStatus } from '@/types/student';

interface FilterDropdownsProps {
  riskLevel: RiskLevel | 'All';
  status: CaseStatus | 'All';
  onRiskLevelChange: (value: RiskLevel | 'All') => void;
  onStatusChange: (value: CaseStatus | 'All') => void;
}

export function FilterDropdowns({
  riskLevel,
  status,
  onRiskLevelChange,
  onStatusChange,
}: FilterDropdownsProps) {
  return (
    <div className="flex flex-col gap-2">
      <Select value={riskLevel} onValueChange={onRiskLevelChange}>
        <SelectTrigger className="w-full bg-background">
          <SelectValue placeholder="Risk Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All Risk Levels</SelectItem>
          <SelectItem value="High">High Risk</SelectItem>
          <SelectItem value="Medium">Medium Risk</SelectItem>
          <SelectItem value="Low">Low Risk</SelectItem>
        </SelectContent>
      </Select>

      <Select value={status} onValueChange={onStatusChange}>
        <SelectTrigger className="w-full bg-background">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All Statuses</SelectItem>
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Contacted">Contacted</SelectItem>
          <SelectItem value="In Progress">In Progress</SelectItem>
          <SelectItem value="Resolved">Resolved</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
