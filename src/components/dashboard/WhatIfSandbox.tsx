import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, DollarSign } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Student } from '@/types/student';
import { formatCurrency, calculateMonthlyPayment } from '@/data/students';

interface WhatIfSandboxProps {
  student: Student;
}

export function WhatIfSandbox({ student }: WhatIfSandboxProps) {
  const [grantAdjustment, setGrantAdjustment] = useState(0);
  const [showBreakdown, setShowBreakdown] = useState(false);
  
  // Reset adjustment when student changes
  useEffect(() => {
    setGrantAdjustment(0);
  }, [student.id]);
  
  const newGap = Math.max(0, student.gapAmount - grantAdjustment);
  const newMonthlyPayment = calculateMonthlyPayment(student.gapAmount, grantAdjustment);
  const originalMonthlyPayment = calculateMonthlyPayment(student.gapAmount);
  const savings = originalMonthlyPayment - newMonthlyPayment;

  return (
    <motion.div
      key={student.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="bg-card rounded-lg border border-border p-4"
    >
      <div className="flex items-center gap-2 mb-4">
        <DollarSign className="h-5 w-5 text-primary" />
        <h3 className="font-semibold">What-If Sandbox</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">
              Institutional Grant Adjustment
            </label>
            <span className="text-lg font-bold text-primary financial-figure">
              {formatCurrency(grantAdjustment)}
            </span>
          </div>
          
          <Slider
            value={[grantAdjustment]}
            onValueChange={(value) => setGrantAdjustment(value[0])}
            max={student.gapAmount}
            step={100}
            className="w-full"
          />
          
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>$0</span>
            <span>{formatCurrency(student.gapAmount)}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">New Calculated Gap</p>
            <motion.p
              key={newGap}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              className="text-xl font-bold financial-figure"
            >
              {formatCurrency(newGap)}
            </motion.p>
          </div>
          
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Est. Monthly Payment</p>
            <motion.p
              key={newMonthlyPayment}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              className="text-xl font-bold text-primary financial-figure"
            >
              {formatCurrency(newMonthlyPayment)}
            </motion.p>
          </div>
        </div>
        
        {savings > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="text-center p-2 bg-risk-low/10 rounded-lg"
          >
            <span className="text-sm text-risk-low font-medium">
              Monthly savings: {formatCurrency(savings)}
            </span>
          </motion.div>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowBreakdown(!showBreakdown)}
          className="w-full justify-center gap-2"
        >
          {showBreakdown ? 'Hide' : 'Show'} 4-Month Plan Breakdown
          {showBreakdown ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        
        <AnimatePresence>
          {showBreakdown && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-4 gap-2 pt-2">
                {[1, 2, 3, 4].map((month) => (
                  <div key={month} className="text-center p-2 bg-muted/50 rounded">
                    <p className="text-xs text-muted-foreground">Month {month}</p>
                    <p className="font-bold text-sm financial-figure">{formatCurrency(newMonthlyPayment)}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Total: {formatCurrency(newMonthlyPayment * 4)} {newGap > newMonthlyPayment * 4 && `(Remainder: ${formatCurrency(newGap - newMonthlyPayment * 4)})`}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
