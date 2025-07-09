export default defineI18nLocale(async () => ({
  en: 'الانجليزية',
  ar: 'العربية',

  tokens: '{count} عملات',
  viewAll: 'عرض الكل',
  view: 'عرض',
  selected: '{count} محدد',

  header: {
    connectWallet: 'اتصل بالمحفظة',
    selectNetwork: 'اختر الشبكة',
  },

  footer: {
    careers: 'وظائف',
    aboutDotipad: 'من نحن',
    council: 'مجلس',
    applyForLaunchpad: 'التقدم للانطلاق',
    termsAndCondition: 'الشروط والاحكام',
    privacyPolicy: 'سياسة الخصوصية',
    documentation: 'الوثائق',
    audits: 'المراقبات',
    dotipadJs: 'Dotipad.js',
  },

  networks: {
    ethereum: { title: 'الايثريوم', shortName: 'ETH' },
    bnb: { title: 'بينان', shortName: 'BSC' },
    polygon: { title: 'بوليغون', shortName: 'POL' },
  },

  wallets: {
    metaMask: { title: 'ميتا ماسك', shortName: 'MM' },
    bnbChain: { title: 'بينان', shortName: 'BSC' },
    trustWallet: { title: 'تراست', shortName: 'TW' },
    connectWallet: { title: 'كونيكت', shortName: 'CW' },
    portis: { title: 'بورتي', shortName: 'PT' },
  },

  table: {
    search: 'بحث',
    filter: 'تصفية',
    sort: 'ترتيب',
    show: 'اظهار',
    entries: 'العناصر',
  },

  menu: {
    general: {
      title: 'عام',

      // General Menu Items
      dashboard: 'الرئيسية',
      account: 'الحساب',
      egibility: 'الموافقة',
      whitelisted: 'القائمة البيضاء',
    },
    browser: {
      title: 'المتصفح',

      // Browser Menu Items
      tokens: 'العملات',
      pairs: 'المنافذ',
      ilo: 'الاستثمارات',
    },
    services: {
      title: 'الخدمات',

      // Services Menu Tabs
      investor: {
        title: 'المستثمر',

        // Services Menu Investor Tab Items
        tokenLocker: 'محفظة العملات',
      },
      ownerDeveloper: {
        title: 'المالك والمطور',

        // Services Menu Owner & Developer Tab Items
        tokenMinter: 'مصنع العملات',
        tokenLocker: 'محفظة العملات',
        liquidityLocker: 'محفظة السعر',
        createIlo: 'إنشاء الاستثمارات',
      },
    },
  },

  dashboard: {
    dot: 'DOT',
    buyDotOn: 'شراء DOT على',
    pancakeswap: 'PancakeSwap',
    uniswap: 'Uniswap',
    chartByTradingView: 'الرسم البياني بواسطة TradingView',

    newTokenLocks: {
      title: 'محفظة العملات الجديدة',
      ethereumMainet: 'Ethereum Mainet',
      binanceSmartChain: 'Binance Smart Chain',
      maticChain: 'Polygon Mainet',
      xDaiChain: 'xDai Mainet',
      tokenName: 'اسم العملة',
      tokenLocked: 'العملة المحفوظة',
    },

    newLiquidityLocks: {
      title: 'محفظة السعر الجديدة',
      pairs: 'ثنائي',
      liquidity: 'السعر',
      locked: 'المحفوظة',
      unlockDate: 'تاريخ الإفلاح',
    },
  },

  account: {
    notLoggedIn: 'انت لم تسجل الدخول لحساب مستخدم.',
    login: 'تسجيل الدخول',
    balance: 'الرصيد',
    yourTokenLock: 'محفظة العملات الخاصة بك',
    noTokenLocks: 'لا يوجد محفظة عملات.',
    signMessage: 'توقيع الرسالة',
    dontHaveAccount: 'ليس لديك حساب؟',
    haveAccount: 'لديك حساب بالفعل؟',
    createAccount: 'إنشاء حساب',
    username: 'اسم المستخدم',
    password: 'كلمة المرور',
    signin: 'تسجيل الدخول',
  },

  egibility: {
    status: 'الحالة',
    notEligible: 'غير موافق',
    eligible: 'موافق',
    howToGetWhitelisted: 'كيفية الحصول على القائمة البيضاء',
    learnMore: 'تعرف على المزيد',
    tokenEquivalence: 'تساوية العملات',
    noCoolDownPeriod: 'لا يوجد فترة الانتظار',
    lastCheckedAt: 'آخر التحقق في {at}',
    lastCheckedAbout: 'آخر التحقق حول {about}',
  },

  browser: {
    selectExchange: 'اختر المتجر',
    allTokens: 'كل العملات',
    watchlist: 'قائمة المتابعة',
    totalValueLockedInPairs: 'مجموع قيمة المحفظة في {count} منافذ',
    lockWithdrawLiquidity: 'محفظة وسحب السعر',
  },
}));
