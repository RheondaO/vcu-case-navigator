import { motion } from 'framer-motion';
import { Student } from '@/types/student';
import { formatCurrency, calculateMonthlyPayment } from '@/data/students';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';

interface CalculationSnapshotProps {
  student: Student;
}

export function CalculationSnapshot({ student }: CalculationSnapshotProps) {
  const monthlyPayment = calculateMonthlyPayment(student.gapAmount);
  
  const rows = [
    { label: 'Residency Status', value: student.residency },
    { label: 'Credit Hours', value: `${student.creditHours} Credits` },
    { label: 'Grants/Scholarships', value: formatCurrency(student.grants), isFinancial: true },
    { label: 'Loans', value: formatCurrency(student.loans), isFinancial: true },
    { label: 'Calculated Gap', value: formatCurrency(student.gapAmount), isFinancial: true, highlight: true },
    { label: 'Est. Monthly Payment (4-mo)', value: formatCurrency(monthlyPayment), isFinancial: true, highlight: true },
  ];

  return (
    <motion.div
      key={student.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="bg-muted/30 rounded-lg border border-border"
    >
      <div className="px-4 py-3 border-b border-border">
        <h3 className="font-semibold text-sm">Calculation Snapshot</h3>
      </div>
      
      <Table>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.label} className={row.highlight ? 'bg-muted/50' : ''}>
              <TableCell className="font-medium text-sm">{row.label}</TableCell>
              <TableCell className={`text-right ${row.isFinancial ? 'financial-figure' : ''}`}>
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}
