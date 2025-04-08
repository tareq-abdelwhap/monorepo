export const useWalletStore = defineStore('WalletStore', () => {
  const { t: _t } = useI18n();
  const t = (key: string) => computed(() => _t(key));

  const wallets = ref([
    {
      name: t('wallets.metaMask.title'),
      shortName: t('wallets.metaMask.shortName'),
      svg: 'MetaMask',
      token: '0xc70bb2736e218861dca818d1e9f7a1930fe61e5b',
      balance: 6500,
    },
    {
      name: t('wallets.bnbChain.title'),
      shortName: t('wallets.bnbChain.shortName'),
      svg: 'BNBChain',
      token: '0xc70bb2736e218861dca818d1e9f7a1930fe61e5b',
      balance: 1581,
    },
    {
      name: t('wallets.trustWallet.title'),
      shortName: t('wallets.trustWallet.shortName'),
      svg: 'TrustWallet',
      token: '0xc70bb2736e218861dca818d1e9f7a1930fe61e5b',
      balance: 642,
    },
    {
      name: t('wallets.connectWallet.title'),
      shortName: t('wallets.connectWallet.shortName'),
      svg: 'ConnectWallet',
      token: '0xc70bb2736e218861dca818d1e9f7a1930fe61e5b',
      balance: 1122,
    },
    {
      name: t('wallets.portis.title'),
      shortName: t('wallets.portis.shortName'),
      svg: 'Portis',
      token: '0xc70bb2736e218861dca818d1e9f7a1930fe61e5b',
      balance: 2337,
    },
  ]);

  type WalletType = (typeof wallets.value)[number];
  const selectedWallet = ref<WalletType['shortName']>();

  const getWallets = () => wallets.value;

  const getSelectedWallet = (): WalletType => {
    return wallets.value.find(
      wallet => wallet.shortName === selectedWallet.value
    ) as WalletType;
  };

  const setSelectedWallet = (wallet: WalletType['shortName']) => {
    selectedWallet.value = wallet;
  };

  return {
    getWallets,
    getSelectedWallet,
    setSelectedWallet,
  };
});
