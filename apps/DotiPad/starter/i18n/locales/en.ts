export default defineI18nLocale(async () => ({
  en: 'English',
  ar: 'Arabic',

  tokens: '{count} Tokens',
  viewAll: 'View All',
  view: 'View',
  selected: '{count} Selected',

  header: {
    connectWallet: 'Connect Wallet',
    selectNetwork: 'Select Network',
  },

  footer: {
    careers: 'Careers',
    aboutDotipad: 'About Dotipad',
    council: 'Council',
    applyForLaunchpad: 'Apply for Launchpad',
    termsAndCondition: 'Terms & Condition',
    privacyPolicy: 'Privacy Policy',
    documentation: 'Documentation',
    audits: 'Audits',
    dotipadJs: 'DotipadJs',
  },

  networks: {
    ethereum: { title: 'Ethereum', shortName: 'ETH' },
    bnb: { title: 'BNB Smart Chain', shortName: 'BSC' },
    polygon: { title: 'Polygon', shortName: 'POL' },
  },

  wallets: {
    metaMask: { title: 'Meta Mask', shortName: 'MM' },
    bnbChain: { title: 'BNB Smart Chain', shortName: 'BSC' },
    trustWallet: { title: 'Trust Wallet', shortName: 'TW' },
    connectWallet: { title: 'Connect Wallet', shortName: 'CW' },
    portis: { title: 'Portis', shortName: 'PT' },
  },

  table: {
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    show: 'Show',
    entries: 'Entries',
  },

  menu: {
    general: {
      title: 'General',

      // General Menu Items
      dashboard: 'Dashboard',
      account: 'Account',
      egibility: 'Egibility',
      whitelisted: 'Whitelisted',
    },
    browser: {
      title: 'Browser',

      // Browser Menu Items
      tokens: 'Tokens',
      pairs: 'Pairs',
      ilo: "ILO's",
    },
    services: {
      title: 'Services',

      // Services Menu Tabs
      investor: {
        title: 'Investor',

        // Services Menu Investor Tab Items
        tokenLocker: 'Token Locker',
      },
      ownerDeveloper: {
        title: 'Owner & Developer',

        // Services Menu Owner & Developer Tab Items
        tokenMinter: 'Token Minter',
        tokenLocker: 'Token Locker',
        liquidityLocker: 'Liquidity Locker',
        createIlo: 'Create ILO',
      },
    },
  },

  dashboard: {
    dot: 'Dot',
    buyDotOn: 'Buy DOT on',
    pancakeswap: 'PancakeSwap',
    uniswap: 'Uniswap',
    chartByTradingView: 'Chart by TradingView',

    newTokenLocks: {
      title: 'New Token Locks',
      ethereumMainet: 'Ethereum Mainet',
      binanceSmartChain: 'Binance Smart Chain',
      maticChain: 'Matic Chain',
      xDaiChain: 'xDai Chain',
      tokenName: 'Token Name',
      tokenLocked: 'Token Locked',
    },

    newLiquidityLocks: {
      title: 'New Liquidity Locks',
      pairs: 'Pairs',
      liquidity: 'Liquidity',
      locked: 'Locked',
      unlockDate: 'Unlock Date',
    },
  },

  account: {
    notLoggedIn: 'You are not logged in to an Account Profile.',
    login: 'Login',
    balance: 'Balance',
    yourTokenLock: 'Your Token Lock',
    noTokenLocks: 'No Token locks for your account on this chain.',
    signMessage: 'Sign Message',
    dontHaveAccount: "Don't have an account?",
    haveAccount: 'Have an Account Already?',
    createAccount: 'Create Account',
    username: 'Username',
    password: 'Password',
    signin: 'Sign In',
  },

  egibility: {
    status: 'Status',
    notEligible: 'Not Eligible',
    eligible: 'Eligible',
    howToGetWhitelisted: 'How to get whitelisted',
    learnMore: 'Learn More',
    tokenEquivalence: 'Token Equivalence',
    noCoolDownPeriod: 'No cool down period',
    lastCheckedAt: 'Last checked at {at}',
    lastCheckedAbout: 'Last checked about {about}',
  },

  browser: {
    selectExchange: 'Select Exchange',
    allTokens: 'All Tokens',
    watchlist: 'Watchlist',
    totalValueLockedInPairs: 'Total Value Locked in {count} Pairs',
    lockWithdrawLiquidity: 'Lock/Withdraw Liquidity',
  },
}));
