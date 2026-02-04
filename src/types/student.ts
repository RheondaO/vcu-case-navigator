export type RiskLevel = 'Low' | 'Medium' | 'High';
export type StudentLevel = 'Freshman' | 'Sophomore' | 'Junior' | 'Senior' | 'Graduate';
export type ResidencyStatus = 'In-State' | 'Out-of-State';
export type CaseStatus = 'New' | 'Contacted' | 'In Progress' | 'Resolved';

export interface Student {
  id: string;
  name: string;
  email: string;
  residency: ResidencyStatus;
  gapAmount: number;
  riskLevel: RiskLevel;
  riskScore: number;
  creditHours: number;
  semester: string;
  studentLevel: StudentLevel;
  hasInstallmentPlan: boolean;
  status: CaseStatus;
  grants: number;
  loans: number;
  lastUpdated: Date;
}

export interface ActivityItem {
  id: string;
  type: 'email' | 'escalation' | 'appointment' | 'note' | 'system';
  description: string;
  timestamp: Date;
  studentId: string;
}

export interface FilterState {
  search: string;
  riskLevel: RiskLevel | 'All';
  status: CaseStatus | 'All';
}
