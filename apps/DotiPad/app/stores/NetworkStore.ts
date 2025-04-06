export const useNetworkStore = defineStore('NetworkStore', () => {
  const { t: _t } = useI18n();
  const t = (key: string) => computed(() => _t(key));

  const networks = ref([
    {
      name: t('networks.ethereum.title'),
      shortName: t('networks.ethereum.shortName'),
      svg: 'Ethereum',
    },
    {
      name: t('networks.bnb.title'),
      shortName: t('networks.bnb.shortName'),
      svg: 'BNBChain',
    },
    {
      name: t('networks.polygon.title'),
      shortName: t('networks.polygon.shortName'),
      svg: 'Polygon',
    },
  ]);

  type NetworkType = (typeof networks.value)[number];
  const selectedNetwork = ref<NetworkType['shortName']>('BSC');

  const getNetworks = () => networks.value;

  const getSelectedNetwork = () => {
    return networks.value.find(
      network => network.shortName === selectedNetwork.value
    ) as NetworkType;
  };

  const setSelectedNetwork = (network: NetworkType['shortName']) => {
    selectedNetwork.value = network;
  };

  return {
    getNetworks,
    getSelectedNetwork,
    setSelectedNetwork,
  };
});
