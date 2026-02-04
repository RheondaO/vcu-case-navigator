

# SFMC Advisor Case Management Workspace
A high-stakes financial case management tool for VCU institutional use, built as an interactive demo/prototype.

---

## Visual Identity
**Theme**: "Institutional Modern" matching the reference site aesthetic
- Clean white backgrounds with soft gray borders (#e1e4e8)
- Amber/gold accent highlights inspired by the reference site
- Action colors: Blue (#3b82f6) for Email, Yellow (#fbbf24) for Escalate, Green (#22c55e) for Schedule
- Clean sans-serif typography (Inter) with bold weights for financial figures
- Smooth Framer Motion animations for profile transitions

---

## Layout Architecture

### Three-Column Grid (Desktop)
**Left Sidebar** → **Primary Workspace** → **Right Rail**

Stacks elegantly on mobile: Filters → Case Queue → Workspace → Resources

---

## Feature Breakdown

### 1. Left Sidebar: Search & Case Queue
- **Search Bar**: "Search Student by Name" with live filtering
- **Filter Dropdowns**:
  - Risk Level: All / Low / Medium / High
  - Status: All / New / Contacted
- **High-Priority Cases List**: Scrollable cards showing:
  - Student Name (generated from IDs)
  - Gap Amount with color-coded dot (Red > $5K, Yellow $2.5K-$5K, Green < $2.5K)
  - Credit Hours & Residency Status
  - Selection state with visual highlight

### 2. Primary Workspace: Profile & Calculations
- **Case Profile Header**:
  - Student Name, Year/Level, ID
  - Last Updated timestamp
  - Refresh button
- **Calculation Snapshot Table**:
  - Residency Status
  - Credit Hours
  - Grants/Scholarships
  - Loans
  - Calculated Gap
  - Estimated Monthly Payment (Gap ÷ 4)

### 3. Interactive "What-If" Sandbox
- **Horizontal Slider**: "Institutional Grant Adjustment ($)" from $0 to Gap Amount
- **Live Calculations**:
  - New Calculated Gap = Original Gap - Grant Adjustment
  - New Monthly Payment = New Gap ÷ 4
- **Toggle**: Show/hide 4-month plan breakdown
- Visual feedback as slider moves (smooth number transitions)

### 4. Action Suite
Three large, accessible buttons:
- **Email Student** (Blue): Opens default email client with pre-filled subject line
- **Escalate to Supervisor** (Yellow): Shows confirmation modal, logs to timeline
- **Schedule Appointment (EAB)** (Green): Shows scheduling modal simulation, logs to timeline

### 5. Right Rail: Activity & Resources
- **Activity Timeline**: Chronological log of:
  - Simulated past interactions (initial data)
  - New actions taken during session
- **Quick Resources Dropdown**:
  - VCU Scholarships
  - Degree FAQ
  - Emergency Aid
  - Application links
- **Student Engagement Score**: Doughnut chart visualization based on risk score

### 6. Footer Navigation
Quick links: Internal Links | Student Profile | Case Details | Advisor Notes | Document Management | Log Out

---

## Sample Data
Using your CSV data with 60+ students, I'll generate realistic names (e.g., "Marcus Thompson", "Sarah Chen") while preserving all financial calculations (Gap, Risk Level, Credits, etc.)

---

## Interactions Summary
- Selecting a student updates all workspace data with smooth transitions
- Slider adjustments recalculate payments in real-time
- Actions log to the activity timeline
- Email button opens native mail client
- Filters narrow the case queue instantly
- Responsive layout adapts to all screen sizes

