export default {};

declare global {
  type Currency = 'CAD' | 'EGP';

  interface Summery {
    data: {
      name: string;
      value: number;
      color?: string;
      subValue?: number;
    }[];
    remaining: number;
  }

  interface History {
    salaries: NewSalary[];
    incomes: NewIncome[];
    expenses: NewExpense[];
    allowances: NewAllowance[];
  }

  interface ExchangeRate {
    leatest: number;
    average: number;
  }

  interface transferFee {
    amount: number;
    percentage: number;
  }

  interface NewSalary {
    id?: string;
    title?: string;
    amount_cad: number;
    exchange_rate: number;
    amount_egp: number;
    transfer_percentage: number;
    net_amount_egp: number;
    date: string;
    notes?: string;
  }

  interface NewIncome {
    id?: string;
    title: string;
    amount_egp: number;
    date: string;
    notes?: string;
  }

  interface NewExpense {
    id?: string;
    title: string;
    amount_egp: number;
    category: ExpenseCategory;
    date: string;
    notes?: string;
  }

  interface NewAllowance {
    id?: string;
    title: string;
    recipient: string;
    amount_egp: number;
    date: string;
    notes?: string;
  }

  type ExpenseCategory =
    | 'Food'
    | 'Transport'
    | 'Housing'
    | 'Utilities'
    | 'Entertainment'
    | 'Shopping'
    | 'Health'
    | 'Education'
    | 'Travel'
    | 'Bank'
    | 'Other';

  interface SalaryEntry {
    id: string;
    amount: number;
    exchange_rate: number;
    amount_egp: number;
    transferPercentage: number; // Transfer fee percentage
    net_amount_egp: number; // Amount after transfer fee
    date: string;
    notes?: string;
  }

  interface IncomeEntry {
    id: string;
    title: string;
    amount_egp: number;
    exchangeRate: number;
    amountEGP: number;
    date: string;
    notes?: string;
  }

  interface AllowanceEntry {
    id: string;
    title: string;
    amount_egp: number; // Always in EGP
    date: string;
    recipient: string;
    notes?: string;
  }

  interface ExpenseEntry {
    id: string;
    title: string;
    amount_egp: number; // Always in EGP
    category: ExpenseCategory;
    date: string;
    notes?: string;
  }

  interface BudgetGoal {
    id?: string;
    category: ExpenseCategory | 'Total';
    amount: number;
    period: 'biweekly' | 'monthly';
  }

  interface FinanceState {
    salaries: SalaryEntry[];
    incomes: IncomeEntry[];
    allowances: AllowanceEntry[];
    expenses: ExpenseEntry[];
    budgetGoals: BudgetGoal[];
    currentExchangeRate: number;
    defaultTransferPercentage: number; // Default transfer percentage
  }

  type FilterPeriod = 'biweekly' | 'monthly' | 'all';

  type FinanceActionType =
    | { type: 'ADD_SALARY'; payload: SalaryEntry }
    | { type: 'UPDATE_SALARY'; payload: SalaryEntry }
    | { type: 'DELETE_SALARY'; payload: string }
    | { type: 'ADD_INCOME'; payload: IncomeEntry }
    | { type: 'UPDATE_INCOME'; payload: IncomeEntry }
    | { type: 'DELETE_INCOME'; payload: string }
    | { type: 'ADD_ALLOWANCE'; payload: AllowanceEntry }
    | { type: 'UPDATE_ALLOWANCE'; payload: AllowanceEntry }
    | { type: 'DELETE_ALLOWANCE'; payload: string }
    | { type: 'ADD_EXPENSE'; payload: ExpenseEntry }
    | { type: 'UPDATE_EXPENSE'; payload: ExpenseEntry }
    | { type: 'DELETE_EXPENSE'; payload: string }
    | { type: 'UPDATE_EXCHANGE_RATE'; payload: number }
    | { type: 'UPDATE_TRANSFER_PERCENTAGE'; payload: number }
    | { type: 'SET_BUDGET_GOAL'; payload: BudgetGoal }
    | { type: 'SET_INITIAL_DATA'; payload: Partial<FinanceState> };
}
