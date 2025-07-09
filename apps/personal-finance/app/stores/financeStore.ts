export const useFinanceStore = defineStore('financeStore', () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

  /* Salary */
  const salary = ref<Partial<NewSalary>>({
    amount_cad: undefined,
    exchange_rate: undefined,
    amount_egp: undefined,
    transfer_percentage: 0.1,
    net_amount_egp: undefined,
    date: new Date().toISOString().split('T')[0] as string,
    notes: undefined,
  });

  const addSalary = async () => {
    const loading = await loadingController.create({
      message: 'Adding salary...',
    });
    loading.present();

    const { data, error } = await supabase
      .from('salaries')
      // @ts-ignore
      .insert([{ user_id: user.value?.id, ...salary.value }])
      .select();

    if (error) throw error;

    const toast = await toastController.create({
      message: `Salary added successfully!`,
      duration: 1500,
      position: 'top',
      swipeGesture: 'vertical',
    });

    await toast.present();
    loading.dismiss();
    fetchSummery();

    salary.value = {
      amount_cad: undefined,
      exchange_rate: undefined,
      amount_egp: undefined,
      transfer_percentage: 0.1,
      net_amount_egp: undefined,
      date: new Date().toISOString().split('T')[0] as string,
      notes: undefined,
    };
  };

  /* Income */
  const income = ref<Partial<NewIncome>>({
    title: undefined,
    amount_egp: undefined,
    date: new Date().toISOString().split('T')[0] as string,
    notes: undefined,
  });

  const addIncome = async () => {
    const loading = await loadingController.create({
      message: 'Adding income...',
    });
    loading.present();

    const { data, error } = await supabase
      .from('incomes')
      // @ts-ignore
      .insert([{ user_id: user.value?.id, ...income.value }])
      .select();

    if (error) throw error;

    const toast = await toastController.create({
      message: `Income added successfully!`,
      duration: 1500,
      position: 'top',
      swipeGesture: 'vertical',
    });

    await toast.present();
    loading.dismiss();
    fetchSummery();

    income.value = {
      title: undefined,
      amount_egp: undefined,
      date: new Date().toISOString().split('T')[0] as string,
      notes: undefined,
    };
  };

  /* Expense */
  const categories = ref<ExpenseCategory[]>([
    'Food',
    'Transport',
    'Housing',
    'Utilities',
    'Entertainment',
    'Shopping',
    'Health',
    'Education',
    'Travel',
    'Bank',
    'Other',
  ]);
  const expense = ref<Partial<NewExpense>>({
    title: undefined,
    amount_egp: undefined,
    category: 'Food',
    date: new Date().toISOString().split('T')[0] as string,
    notes: undefined,
  });

  const addExpense = async () => {
    const loading = await loadingController.create({
      message: 'Adding expense...',
    });
    loading.present();

    const { data, error } = await supabase
      .from('expenses')
      // @ts-ignore
      .insert([{ user_id: user.value?.id, ...expense.value }])
      .select();

    if (error) throw error;

    const toast = await toastController.create({
      message: `Expense added successfully!`,
      duration: 1500,
      position: 'top',
      swipeGesture: 'vertical',
    });

    await toast.present();
    loading.dismiss();
    fetchSummery();

    expense.value = {
      title: undefined,
      amount_egp: undefined,
      category: 'Food',
      date: new Date().toISOString().split('T')[0] as string,
      notes: undefined,
    };
  };

  /* Allowance */
  const allowance = ref<Partial<NewAllowance>>({
    title: undefined,
    recipient: undefined,
    amount_egp: undefined,
    date: new Date().toISOString().split('T')[0] as string,
    notes: undefined,
  });

  const addAllowance = async () => {
    const loading = await loadingController.create({
      message: 'Adding allowance...',
    });
    loading.present();

    const { data, error } = await supabase
      .from('allowances')
      // @ts-ignore
      .insert([{ user_id: user.value?.id, ...allowance.value }])
      .select();

    if (error) throw error;

    const toast = await toastController.create({
      message: `Allowance added successfully!`,
      duration: 1500,
      position: 'top',
      swipeGesture: 'vertical',
    });

    await toast.present();
    loading.dismiss();
    fetchSummery();

    allowance.value = {
      title: undefined,
      recipient: undefined,
      amount_egp: undefined,
      date: new Date().toISOString().split('T')[0] as string,
      notes: undefined,
    };
  };

  /* Period */
  const period = ref<FilterPeriod>('monthly');

  const periods = ref([
    { name: 'Monthly', value: 'monthly' },
    { name: 'Bi-Weekly', value: 'biweekly' },
    { name: 'All', value: 'all' },
  ]);

  /* Dashboard */
  const history = ref<Partial<History>>({
    salaries: [],
    incomes: [],
    expenses: [],
    allowances: [],
  });

  const summery = ref<Summery>({ data: [], remaining: 0 });

  const exchangeRate = ref<ExchangeRate>({ leatest: 0, average: 0 });

  const transferFees = ref<transferFee>({ amount: 0, percentage: 0 });

  const sum = <T>(arr: T[], key: keyof T) => {
    return arr.reduce((acc, item) => acc + Number(item[key]), 0);
  };

  const prepareSalaryQuery = (customNow?: Date) => {
    const now = customNow || new Date();
    console.log('now', now, customNow);
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    /* Default Query */
    const salaryQuery = supabase
      .from('salaries')
      .select('*')
      .order('date', { ascending: false })
      .order('created_at', { ascending: false });

    if (period.value === 'monthly') {
      const fromCurrent = new Date(currentYear, currentMonth, 1)
        .toISOString()
        .slice(0, 10);
      const toCurrent = new Date(currentYear, currentMonth, 14)
        .toISOString()
        .slice(0, 10);
      const fromPrev = new Date(prevMonthYear, prevMonth, 15)
        .toISOString()
        .slice(0, 10);
      const toPrev = new Date(prevMonthYear, prevMonth + 1, 0)
        .toISOString()
        .slice(0, 10); // last day of prev month

      salaryQuery.or(
        `and(date.gte.${fromCurrent},date.lte.${toCurrent}),and(date.gte.${fromPrev},date.lte.${toPrev})`
      );
    } else if (period.value !== 'all') {
      const { start, end } = getPeriodDates(period.value, customNow);
      salaryQuery.gte('date', start).lte('date', end);
    }

    return salaryQuery;
  };

  const fetchSummery = async (customNow?: Date) => {
    const loading = await loadingController.create({ message: 'Fetching...' });
    loading.present();

    /* prepare salary fetching */
    const salaryQuery = prepareSalaryQuery(customNow);

    const tables = ['incomes', 'expenses', 'allowances'];
    const [
      { data: salary, error: salaryError },
      { data: income, error: incomeError },
      { data: expense, error: expenseError },
      { data: allowance, error: allowanceError },
    ] = await Promise.all<any>([
      salaryQuery,
      ...tables.map(table => {
        const query = supabase
          .from(table)
          .select('*')
          .order('date', { ascending: false })
          .order('created_at', { ascending: false });

        if (period.value !== 'all') {
          const { start, end } = getPeriodDates(period.value, customNow);
          query.gte('date', start).lte('date', end);
        }

        return query;
      }),
    ]);

    if ([salaryError, incomeError, expenseError, allowanceError].some(Boolean))
      throw [salaryError, incomeError, expenseError, allowanceError]
        .map(e => e.message)
        .join(', ');

    history.value = {
      salaries: salary,
      incomes: income,
      expenses: expense,
      allowances: allowance,
    };

    summery.value.data = [
      {
        name: 'Salary',
        value: sum(salary, 'net_amount_egp'),
        color: '',
        subValue: sum(salary, 'amount_cad'),
      },
      {
        name: 'Income',
        value: sum(income, 'amount_egp'),
        color: 'green',
        subValue: 0,
      },
      {
        name: 'Expenses',
        value: sum(expense, 'amount_egp'),
        color: 'red',
        subValue: 0,
      },
      {
        name: 'Allowances',
        value: sum(allowance, 'amount_egp'),
        color: 'purple',
        subValue: 0,
      },
    ];

    summery.value.remaining = summery.value.data.reduce(
      (acc, item) =>
        ['Income', 'Salary'].includes(item.name)
          ? (acc += item.value)
          : (acc -= item.value),
      0
    );

    exchangeRate.value = {
      leatest: salary[salary.length - 1]?.exchange_rate || 0,
      average:
        salary.reduce(
          // @ts-expect-error exchange rate not typed
          (acc: number, { exchange_rate }) => acc + exchange_rate,
          0
        ) / salary.length,
    };

    transferFees.value = {
      amount: salary.reduce(
        // @ts-expect-error transfer fee not typed
        (acc: number, salary) =>
          Math.floor(acc + (salary.amount_egp - salary.net_amount_egp) * 100) /
          100,
        0
      ),
      percentage:
        salary.reduce(
          // @ts-expect-error transfer fee not typed
          (acc: number, { transfer_percentage }) => acc + transfer_percentage,
          0
        ) / salary.length,
    };

    loading.dismiss();
  };

  /* Delete */
  const deleteEntry = async (id: string, table: string) => {
    const loading = await loadingController.create({
      message: 'Deleting...',
    });
    loading.present();

    const { error } = await supabase.from(table).delete().eq('id', id);
    if (error) throw error;
    loading.dismiss();
    fetchSummery();
  };

  /* Settelment */
  const settle = async (payload: {
    title: string;
    amount_egp: number;
    take_from: string;
    add_to: string;
    notes: string;
  }) => {
    const loading = await loadingController.create({ message: 'Settling...' });
    loading.present();

    const [
      { data: income, error: incomeError },
      { data: expense, error: expenseError },
    ] = await Promise.all([
      supabase
        .from('incomes')
        // @ts-ignore
        .insert([
          {
            user_id: user.value?.id,
            title: payload.title,
            amount_egp: payload.amount_egp,
            date: payload.add_to,
            notes: `Settled from ${payload.take_from}`,
          },
        ])
        .select(),
      supabase
        .from('expenses')
        // @ts-ignore
        .insert([
          {
            user_id: user.value?.id,
            title: payload.title,
            amount_egp: payload.amount_egp,
            category: 'Settlement',
            date: payload.take_from,
            notes: `Settled to ${payload.add_to}`,
          },
        ])
        .select(),
    ]);

    if ([incomeError, expenseError].some(Boolean)) {
      throw [incomeError, expenseError].map(e => e!.message).join(', ');
    }

    loading.dismiss();
    fetchSummery(new Date(payload.add_to));
  };

  return {
    /* Salary */
    salary,
    addSalary,

    /* Income */
    income,
    addIncome,

    /* Expense */
    categories,
    expense,
    addExpense,

    /* Allowance */
    allowance,
    addAllowance,

    /* Period */
    period,
    periods,

    /* Dashboard */
    history,
    summery,
    exchangeRate,
    transferFees,
    fetchSummery,

    /* Delete */
    deleteEntry,

    /* Settelment */
    settle,
  };
});
