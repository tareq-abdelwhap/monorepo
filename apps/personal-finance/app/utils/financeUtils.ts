// Format currency
export const formatCurrency = (
  amount: number,
  currency?: 'CAD' | 'EGP'
): string => {
  const locale =
    currency === 'CAD' ? 'en-CA' : currency === 'EGP' ? 'en-EG' : 'en';

  const formatter = new Intl.NumberFormat(locale, {
    style: currency ? 'currency' : 'decimal',
    currency: currency,
    minimumFractionDigits: currency === 'CAD' ? 0 : 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
};

// Format date to a readable format
export const formatDate = (dateString: string, short?: boolean): string => {
  const date = new Date(dateString);

  let opt: {
    month: 'short' | 'long' | 'narrow';
    day: 'numeric' | '2-digit';
    year?: 'numeric' | '2-digit';
  } = {
    month: 'short',
    day: 'numeric',
  };

  if (!short) opt.year = 'numeric';

  return date.toLocaleDateString('en-US', opt);
};

export const getPeriodDates = (
  period: FilterPeriod,
  customNow?: Date
): { start: string; end: string } => {
  const now = customNow || new Date();
  let startDate: Date;

  if (period === 'monthly') {
    startDate = new Date(now.getFullYear(), now.getMonth(), 1); // 1st of current month
  } else {
    const day = now.getDate();
    if (day < 15) {
      startDate = new Date(now.getFullYear(), now.getMonth(), 1); // 1st of current month
    } else {
      startDate = new Date(now.getFullYear(), now.getMonth(), 15); // 15th of current month
    }
  }

  const formatDate = (date: Date): string =>
    new Intl.DateTimeFormat('en-CA').format(date); // returns YYYY-MM-DD

  return {
    start: formatDate(startDate),
    end: formatDate(now),
  };
};

// Generate a unique ID
// export const generateId = (): string => {
//   return Date.now().toString(36) + Math.random().toString(36).substring(2);
// };

// Filter entries by date period
// export const filterByPeriod = <T extends { date: string }>(
//   entries: T[],
//   period: FilterPeriod
// ): T[] => {
//   if (period === 'all') {
//     return entries;
//   }

//   const now = new Date();
//   let startDate: Date;

//   if (period === 'biweekly') {
//     // Two weeks ago from now
//     startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 14);
//   } else {
//     // One month ago from now
//     startDate = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
//   }

//   return entries.filter(entry => new Date(entry.date) >= startDate);
// };

// Calculate total income for a period
// export const calculateTotalIncome = (
//   salaries: SalaryEntry[],
//   incomes: IncomeEntry[],
//   period: FilterPeriod
// ): { totalCAD: number; totalEGP: number } => {
//   const filteredSalaries = filterByPeriod(salaries, period);
//   const filteredIncomes = filterByPeriod(incomes, period);

//   const totalSalaryCAD = filteredSalaries.reduce(
//     (sum, salary) => sum + salary.amount,
//     0
//   );
//   const totalSalaryEGP = filteredSalaries.reduce(
//     (sum, salary) => sum + salary.amountEGP,
//     0
//   );

//   const totalIncomeCAD = filteredIncomes.reduce(
//     (sum, income) => sum + income.amount,
//     0
//   );
//   const totalIncomeEGP = filteredIncomes.reduce(
//     (sum, income) => sum + income.amountEGP,
//     0
//   );

//   return {
//     totalCAD: totalSalaryCAD + totalIncomeCAD,
//     totalEGP: totalSalaryEGP + totalIncomeEGP,
//   };
// };

// Calculate total expenses for a period
// export const calculateTotalExpenses = (
//   expenses: ExpenseEntry[],
//   period: FilterPeriod
// ): number => {
//   const filteredExpenses = filterByPeriod(expenses, period);
//   return filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);
// };

// Calculate total allowances for a period
// export const calculateTotalAllowances = (
//   allowances: AllowanceEntry[],
//   period: FilterPeriod
// ): number => {
//   const filteredAllowances = filterByPeriod(allowances, period);
//   return filteredAllowances.reduce(
//     (sum, allowance) => sum + allowance.amount,
//     0
//   );
// };

// Calculate expenses by category
// export const calculateExpensesByCategory = (
//   expenses: ExpenseEntry[],
//   period: FilterPeriod
// ): Record<ExpenseCategory, number> => {
//   const filteredExpenses = filterByPeriod(expenses, period);

//   const categories = [
//     'Food',
//     'Transport',
//     'Housing',
//     'Utilities',
//     'Entertainment',
//     'Shopping',
//     'Health',
//     'Education',
//     'Travel',
//     'Other',
//   ] as ExpenseCategory[];

//   const result = {} as Record<ExpenseCategory, number>;

//   // Initialize all categories with zero
//   categories.forEach(category => {
//     result[category] = 0;
//   });

//   // Add up expenses for each category
//   filteredExpenses.forEach(expense => {
//     result[expense.category] += expense.amount;
//   });

//   return result;
// };

// Get average exchange rate for a period
// export const getAverageExchangeRate = (
//   salaries: SalaryEntry[],
//   incomes: IncomeEntry[],
//   period: FilterPeriod
// ): number => {
//   const filteredSalaries = filterByPeriod(salaries, period);
//   const filteredIncomes = filterByPeriod(incomes, period);

//   const allExchangeRates = [
//     ...filteredSalaries.map(salary => salary.exchangeRate),
//     ...filteredIncomes.map(income => income.exchangeRate),
//   ];

//   if (allExchangeRates.length === 0) {
//     return 0;
//   }

//   const sum = allExchangeRates.reduce((acc, rate) => acc + rate, 0);
//   return sum / allExchangeRates.length;
// };

// Get start and end dates for a period
