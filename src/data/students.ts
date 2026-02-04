import { Student, ActivityItem, RiskLevel, CaseStatus, StudentLevel, ResidencyStatus } from '@/types/student';

// Realistic name generator
const firstNames = [
  'Marcus', 'Sarah', 'James', 'Emily', 'Michael', 'Olivia', 'David', 'Sophia', 'Daniel', 'Isabella',
  'William', 'Mia', 'Joseph', 'Charlotte', 'Charles', 'Amelia', 'Thomas', 'Harper', 'Christopher', 'Evelyn',
  'Matthew', 'Abigail', 'Andrew', 'Luna', 'Joshua', 'Ella', 'Brandon', 'Chloe', 'Kevin', 'Avery',
  'Brian', 'Sofia', 'Ryan', 'Camila', 'Justin', 'Victoria', 'Jason', 'Madison', 'Tyler', 'Scarlett',
  'Aaron', 'Aria', 'Eric', 'Grace', 'Adam', 'Zoey', 'Nathan', 'Penelope', 'Jacob', 'Layla',
  'Anthony', 'Nora', 'Steven', 'Riley', 'Raymond', 'Lily', 'Patrick', 'Eleanor', 'Timothy', 'Hannah',
  'Gregory', 'Lillian', 'Jesse', 'Addison'
];

const lastNames = [
  'Thompson', 'Chen', 'Williams', 'Rodriguez', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Moore', 'Jackson',
  'Martin', 'Lee', 'Perez', 'Brown', 'Davis', 'Garcia', 'Miller', 'Wilson', 'Johnson', 'White',
  'Lopez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright',
  'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green', 'Adams', 'Nelson', 'Baker', 'Hall',
  'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts', 'Gomez', 'Phillips', 'Evans', 'Turner', 'Diaz',
  'Parker', 'Cruz', 'Edwards', 'Collins', 'Reyes', 'Stewart', 'Morris', 'Morales', 'Murphy', 'Cook',
  'Rogers', 'Peterson'
];

// Raw CSV data converted
const rawStudentData = [
  { id: 'V0900002', residency: 'In-State', gapAmount: 3124, riskLevel: 'Low', riskScore: 35, creditHours: 16, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: false },
  { id: 'V0900005', residency: 'In-State', gapAmount: 1900, riskLevel: 'Low', riskScore: 19, creditHours: 12, semester: 'Spring 2025', studentLevel: 'Sophomore', hasInstallmentPlan: false },
  { id: 'V0900008', residency: 'In-State', gapAmount: 6997, riskLevel: 'Medium', riskScore: 66, creditHours: 8, semester: 'Spring 2025', studentLevel: 'Graduate', hasInstallmentPlan: false },
  { id: 'V0900010', residency: 'In-State', gapAmount: 7315, riskLevel: 'Medium', riskScore: 68, creditHours: 14, semester: 'Spring 2025', studentLevel: 'Freshman', hasInstallmentPlan: false },
  { id: 'V0900011', residency: 'In-State', gapAmount: 4384, riskLevel: 'Medium', riskScore: 43, creditHours: 14, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: false },
  { id: 'V0900013', residency: 'In-State', gapAmount: 4851, riskLevel: 'Medium', riskScore: 49, creditHours: 13, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: false },
  { id: 'V0900019', residency: 'In-State', gapAmount: 6840, riskLevel: 'Medium', riskScore: 48, creditHours: 14, semester: 'Spring 2025', studentLevel: 'Freshman', hasInstallmentPlan: true },
  { id: 'V0900023', residency: 'In-State', gapAmount: 5280, riskLevel: 'Low', riskScore: 36, creditHours: 16, semester: 'Spring 2025', studentLevel: 'Freshman', hasInstallmentPlan: false },
  { id: 'V0900037', residency: 'In-State', gapAmount: 1877, riskLevel: 'Low', riskScore: 23, creditHours: 16, semester: 'Spring 2025', studentLevel: 'Sophomore', hasInstallmentPlan: false },
  { id: 'V0900043', residency: 'In-State', gapAmount: 2418, riskLevel: 'Low', riskScore: 29, creditHours: 16, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: true },
  { id: 'V0900048', residency: 'In-State', gapAmount: 2874, riskLevel: 'Low', riskScore: 33, creditHours: 9, semester: 'Spring 2025', studentLevel: 'Freshman', hasInstallmentPlan: false },
  { id: 'V0900054', residency: 'In-State', gapAmount: 8906, riskLevel: 'Medium', riskScore: 66, creditHours: 15, semester: 'Spring 2025', studentLevel: 'Freshman', hasInstallmentPlan: true },
  { id: 'V0900059', residency: 'In-State', gapAmount: 2525, riskLevel: 'Low', riskScore: 31, creditHours: 18, semester: 'Spring 2025', studentLevel: 'Freshman', hasInstallmentPlan: false },
  { id: 'V0900073', residency: 'In-State', gapAmount: 4342, riskLevel: 'Medium', riskScore: 48, creditHours: 18, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: false },
  { id: 'V0900081', residency: 'In-State', gapAmount: 4447, riskLevel: 'Low', riskScore: 33, creditHours: 13, semester: 'Spring 2025', studentLevel: 'Junior', hasInstallmentPlan: false },
  { id: 'V0900083', residency: 'In-State', gapAmount: 4174, riskLevel: 'Medium', riskScore: 46, creditHours: 17, semester: 'Spring 2025', studentLevel: 'Junior', hasInstallmentPlan: false },
  { id: 'V0900086', residency: 'In-State', gapAmount: 8341, riskLevel: 'Medium', riskScore: 69, creditHours: 7, semester: 'Spring 2025', studentLevel: 'Junior', hasInstallmentPlan: true },
  { id: 'V0900090', residency: 'In-State', gapAmount: 7594, riskLevel: 'Medium', riskScore: 61, creditHours: 11, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: false },
  { id: 'V0900094', residency: 'In-State', gapAmount: 6269, riskLevel: 'Medium', riskScore: 50, creditHours: 17, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: true },
  { id: 'V0900097', residency: 'In-State', gapAmount: 1992, riskLevel: 'Low', riskScore: 33, creditHours: 13, semester: 'Spring 2025', studentLevel: 'Sophomore', hasInstallmentPlan: true },
  { id: 'V0900098', residency: 'In-State', gapAmount: 7241, riskLevel: 'Medium', riskScore: 60, creditHours: 16, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: true },
  { id: 'V0900100', residency: 'In-State', gapAmount: 6292, riskLevel: 'Medium', riskScore: 53, creditHours: 14, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: true },
  { id: 'V0900101', residency: 'In-State', gapAmount: 1007, riskLevel: 'Low', riskScore: 24, creditHours: 12, semester: 'Spring 2025', studentLevel: 'Sophomore', hasInstallmentPlan: false },
  { id: 'V0900105', residency: 'In-State', gapAmount: 7618, riskLevel: 'Medium', riskScore: 54, creditHours: 14, semester: 'Spring 2025', studentLevel: 'Junior', hasInstallmentPlan: true },
  { id: 'V0900110', residency: 'In-State', gapAmount: 3575, riskLevel: 'Medium', riskScore: 42, creditHours: 18, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: false },
  { id: 'V0900113', residency: 'In-State', gapAmount: 4135, riskLevel: 'Low', riskScore: 37, creditHours: 17, semester: 'Spring 2025', studentLevel: 'Junior', hasInstallmentPlan: true },
  { id: 'V0900115', residency: 'In-State', gapAmount: 6411, riskLevel: 'Medium', riskScore: 57, creditHours: 4, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: false },
  { id: 'V0900116', residency: 'In-State', gapAmount: 1336, riskLevel: 'Low', riskScore: 10, creditHours: 16, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: true },
  { id: 'V0900129', residency: 'In-State', gapAmount: 4406, riskLevel: 'Medium', riskScore: 42, creditHours: 13, semester: 'Spring 2025', studentLevel: 'Freshman', hasInstallmentPlan: false },
  { id: 'V0900132', residency: 'In-State', gapAmount: 2324, riskLevel: 'Low', riskScore: 34, creditHours: 13, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: false },
  { id: 'V0900134', residency: 'In-State', gapAmount: 7320, riskLevel: 'Medium', riskScore: 49, creditHours: 15, semester: 'Spring 2025', studentLevel: 'Graduate', hasInstallmentPlan: false },
  { id: 'V0900138', residency: 'In-State', gapAmount: 5161, riskLevel: 'Medium', riskScore: 54, creditHours: 17, semester: 'Spring 2025', studentLevel: 'Graduate', hasInstallmentPlan: false },
  { id: 'V0900139', residency: 'In-State', gapAmount: 7473, riskLevel: 'High', riskScore: 70, creditHours: 18, semester: 'Spring 2025', studentLevel: 'Freshman', hasInstallmentPlan: false },
  { id: 'V0900159', residency: 'In-State', gapAmount: 8813, riskLevel: 'Medium', riskScore: 62, creditHours: 18, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: true },
  { id: 'V0900162', residency: 'In-State', gapAmount: 6041, riskLevel: 'Medium', riskScore: 57, creditHours: 4, semester: 'Spring 2025', studentLevel: 'Junior', hasInstallmentPlan: false },
  { id: 'V0900165', residency: 'In-State', gapAmount: 4454, riskLevel: 'Low', riskScore: 31, creditHours: 7, semester: 'Spring 2025', studentLevel: 'Graduate', hasInstallmentPlan: false },
  { id: 'V0900166', residency: 'In-State', gapAmount: 5025, riskLevel: 'Low', riskScore: 37, creditHours: 14, semester: 'Spring 2025', studentLevel: 'Graduate', hasInstallmentPlan: true },
  { id: 'V0900168', residency: 'In-State', gapAmount: 6371, riskLevel: 'Medium', riskScore: 60, creditHours: 11, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: true },
  { id: 'V0900170', residency: 'In-State', gapAmount: 6930, riskLevel: 'Medium', riskScore: 61, creditHours: 9, semester: 'Spring 2025', studentLevel: 'Sophomore', hasInstallmentPlan: false },
  { id: 'V0900177', residency: 'In-State', gapAmount: 5053, riskLevel: 'Medium', riskScore: 46, creditHours: 5, semester: 'Spring 2025', studentLevel: 'Junior', hasInstallmentPlan: false },
  { id: 'V0900182', residency: 'In-State', gapAmount: 7026, riskLevel: 'Medium', riskScore: 54, creditHours: 15, semester: 'Spring 2025', studentLevel: 'Sophomore', hasInstallmentPlan: true },
  { id: 'V0900183', residency: 'In-State', gapAmount: 2405, riskLevel: 'Low', riskScore: 35, creditHours: 16, semester: 'Spring 2025', studentLevel: 'Junior', hasInstallmentPlan: true },
  { id: 'V0900187', residency: 'In-State', gapAmount: 3174, riskLevel: 'Low', riskScore: 21, creditHours: 12, semester: 'Spring 2025', studentLevel: 'Junior', hasInstallmentPlan: false },
  { id: 'V0900188', residency: 'In-State', gapAmount: 1510, riskLevel: 'Low', riskScore: 29, creditHours: 16, semester: 'Spring 2025', studentLevel: 'Junior', hasInstallmentPlan: false },
  { id: 'V0900189', residency: 'In-State', gapAmount: 6957, riskLevel: 'Medium', riskScore: 63, creditHours: 14, semester: 'Spring 2025', studentLevel: 'Freshman', hasInstallmentPlan: true },
  { id: 'V0900191', residency: 'In-State', gapAmount: 1543, riskLevel: 'Low', riskScore: 11, creditHours: 17, semester: 'Spring 2025', studentLevel: 'Freshman', hasInstallmentPlan: false },
  { id: 'V0900192', residency: 'In-State', gapAmount: 7322, riskLevel: 'Medium', riskScore: 49, creditHours: 17, semester: 'Spring 2025', studentLevel: 'Junior', hasInstallmentPlan: true },
  { id: 'V0900194', residency: 'In-State', gapAmount: 2081, riskLevel: 'Low', riskScore: 25, creditHours: 13, semester: 'Spring 2025', studentLevel: 'Junior', hasInstallmentPlan: false },
  { id: 'V0900195', residency: 'In-State', gapAmount: 7538, riskLevel: 'Medium', riskScore: 60, creditHours: 18, semester: 'Spring 2025', studentLevel: 'Freshman', hasInstallmentPlan: false },
  { id: 'V0900202', residency: 'In-State', gapAmount: 5089, riskLevel: 'Medium', riskScore: 40, creditHours: 6, semester: 'Spring 2025', studentLevel: 'Freshman', hasInstallmentPlan: true },
  { id: 'V0900203', residency: 'In-State', gapAmount: 1127, riskLevel: 'Low', riskScore: 21, creditHours: 17, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: true },
  { id: 'V0900205', residency: 'In-State', gapAmount: 4301, riskLevel: 'Medium', riskScore: 42, creditHours: 16, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: false },
  { id: 'V0900208', residency: 'In-State', gapAmount: 2384, riskLevel: 'Low', riskScore: 23, creditHours: 12, semester: 'Spring 2025', studentLevel: 'Freshman', hasInstallmentPlan: false },
  { id: 'V0900209', residency: 'In-State', gapAmount: 8163, riskLevel: 'Medium', riskScore: 64, creditHours: 8, semester: 'Spring 2025', studentLevel: 'Junior', hasInstallmentPlan: false },
  { id: 'V0900215', residency: 'In-State', gapAmount: 1645, riskLevel: 'Low', riskScore: 29, creditHours: 15, semester: 'Spring 2025', studentLevel: 'Graduate', hasInstallmentPlan: false },
  { id: 'V0900216', residency: 'In-State', gapAmount: 6958, riskLevel: 'Medium', riskScore: 66, creditHours: 16, semester: 'Spring 2025', studentLevel: 'Junior', hasInstallmentPlan: true },
  { id: 'V0900223', residency: 'In-State', gapAmount: 7778, riskLevel: 'Medium', riskScore: 64, creditHours: 18, semester: 'Spring 2025', studentLevel: 'Freshman', hasInstallmentPlan: true },
  { id: 'V0900226', residency: 'In-State', gapAmount: 5105, riskLevel: 'Low', riskScore: 36, creditHours: 14, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: false },
  { id: 'V0900235', residency: 'In-State', gapAmount: 6496, riskLevel: 'Medium', riskScore: 48, creditHours: 11, semester: 'Spring 2025', studentLevel: 'Junior', hasInstallmentPlan: true },
  { id: 'V0900242', residency: 'In-State', gapAmount: 4274, riskLevel: 'Medium', riskScore: 47, creditHours: 13, semester: 'Spring 2025', studentLevel: 'Senior', hasInstallmentPlan: false },
  { id: 'V0900248', residency: 'In-State', gapAmount: 7930, riskLevel: 'Medium', riskScore: 68, creditHours: 17, semester: 'Spring 2025', studentLevel: 'Freshman', hasInstallmentPlan: false },
  { id: 'V0900249', residency: 'In-State', gapAmount: 2481, riskLevel: 'Low', riskScore: 34, creditHours: 17, semester: 'Spring 2025', studentLevel: 'Sophomore', hasInstallmentPlan: false },
];

// Generate students with realistic names
function generateName(index: number): string {
  return `${firstNames[index % firstNames.length]} ${lastNames[index % lastNames.length]}`;
}

function generateEmail(name: string, id: string): string {
  const [first, last] = name.toLowerCase().split(' ');
  return `${first}.${last}@vcu.edu`;
}

function assignStatus(riskLevel: string, hasInstallmentPlan: boolean): CaseStatus {
  if (hasInstallmentPlan) return 'In Progress';
  if (riskLevel === 'High') return 'New';
  return Math.random() > 0.5 ? 'New' : 'Contacted';
}

function generateFinancials(gapAmount: number): { grants: number; loans: number } {
  // Generate realistic grant/loan amounts based on gap
  const totalAid = Math.floor(Math.random() * 15000) + 5000;
  const grantPortion = Math.random() * 0.6 + 0.2; // 20-80% grants
  return {
    grants: Math.floor(totalAid * grantPortion),
    loans: Math.floor(totalAid * (1 - grantPortion)),
  };
}

export const students: Student[] = rawStudentData.map((data, index) => {
  const name = generateName(index);
  const financials = generateFinancials(data.gapAmount);
  return {
    id: data.id,
    name,
    email: generateEmail(name, data.id),
    residency: data.residency as ResidencyStatus,
    gapAmount: data.gapAmount,
    riskLevel: data.riskLevel as RiskLevel,
    riskScore: data.riskScore,
    creditHours: data.creditHours,
    semester: data.semester,
    studentLevel: data.studentLevel as StudentLevel,
    hasInstallmentPlan: data.hasInstallmentPlan,
    status: assignStatus(data.riskLevel, data.hasInstallmentPlan),
    grants: financials.grants,
    loans: financials.loans,
    lastUpdated: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000), // Random within last week
  };
});

// Sort by risk score descending (high priority first)
students.sort((a, b) => b.riskScore - a.riskScore);

// Generate initial activity items
const activityTypes: Array<'email' | 'escalation' | 'appointment' | 'note' | 'system'> = ['email', 'note', 'system', 'appointment'];
const activityDescriptions: Record<string, string[]> = {
  email: ['Initial outreach sent', 'Follow-up email sent', 'Payment reminder sent', 'Financial aid options shared'],
  escalation: ['Case escalated to supervisor', 'Escalated to financial aid director'],
  appointment: ['Appointment scheduled via EAB', 'Virtual meeting scheduled', 'In-person consultation scheduled'],
  note: ['Left voicemail', 'Student returned call', 'Updated contact information', 'Discussed payment options'],
  system: ['Case opened', 'Risk level updated', 'Status changed to In Progress'],
};

export const generateInitialActivities = (studentId: string): ActivityItem[] => {
  const count = Math.floor(Math.random() * 3) + 1;
  const activities: ActivityItem[] = [];
  
  for (let i = 0; i < count; i++) {
    const type = activityTypes[Math.floor(Math.random() * activityTypes.length)];
    const descriptions = activityDescriptions[type];
    activities.push({
      id: `${studentId}-${i}`,
      type,
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      timestamp: new Date(Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000),
      studentId,
    });
  }
  
  return activities.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};

// Utility functions
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const calculateMonthlyPayment = (gapAmount: number, grantAdjustment: number = 0): number => {
  return Math.max(0, Math.ceil((gapAmount - grantAdjustment) / 4));
};

export const getRiskColor = (riskLevel: RiskLevel): string => {
  switch (riskLevel) {
    case 'High': return 'bg-risk-high';
    case 'Medium': return 'bg-risk-medium';
    case 'Low': return 'bg-risk-low';
  }
};

export const getRiskTextColor = (riskLevel: RiskLevel): string => {
  switch (riskLevel) {
    case 'High': return 'text-risk-high';
    case 'Medium': return 'text-risk-medium';
    case 'Low': return 'text-risk-low';
  }
};
