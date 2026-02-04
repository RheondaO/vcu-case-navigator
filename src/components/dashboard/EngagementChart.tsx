import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Student } from '@/types/student';

interface EngagementChartProps {
  student: Student;
}

export function EngagementChart({ student }: EngagementChartProps) {
  // Convert risk score to engagement score (inverse relationship)
  const engagementScore = 100 - student.riskScore;
  const remaining = student.riskScore;
  
  const data = [
    { name: 'Engagement', value: engagementScore },
    { name: 'Risk', value: remaining },
  ];
  
  const getEngagementColor = (score: number) => {
    if (score >= 70) return 'hsl(var(--risk-low))';
    if (score >= 40) return 'hsl(var(--risk-medium))';
    return 'hsl(var(--risk-high))';
  };
  
  const getEngagementLabel = (score: number) => {
    if (score >= 70) return 'High';
    if (score >= 40) return 'Moderate';
    return 'Low';
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4">
      <h3 className="font-semibold text-sm mb-3">Student Engagement Score</h3>
      
      <div className="relative h-32">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={50}
              startAngle={90}
              endAngle={-270}
              paddingAngle={2}
              dataKey="value"
            >
              <Cell fill={getEngagementColor(engagementScore)} />
              <Cell fill="hsl(var(--muted))" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">{engagementScore}</span>
          <span className="text-xs text-muted-foreground">/ 100</span>
        </div>
      </div>
      
      <div className="text-center mt-2">
        <span 
          className="text-sm font-medium"
          style={{ color: getEngagementColor(engagementScore) }}
        >
          {getEngagementLabel(engagementScore)} Engagement
        </span>
      </div>
    </div>
  );
}
