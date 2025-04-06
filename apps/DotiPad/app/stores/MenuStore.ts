export const useMenuStore = defineStore('MenuStore', () => {
  const route = useRoute();
  const localPath = useLocalePath();

  const { t: _t } = useI18n();
  const t = (key: string) => computed(() => _t(key));

  const menus = ref([
    { menu: 'general', name: t('menu.general.title'), svg: 'Dashboard' },
    { menu: 'browser', name: t('menu.browser.title'), svg: 'Network' },
    { menu: 'services', name: t('menu.services.title'), svg: 'Hexagon' },
  ] as const);

  type MenuType = (typeof menus.value)[number]['menu'];
  const activeMenu = ref<MenuType>(
    menus.value.find(m => route.fullPath.includes(m.menu))?.menu || 'general'
  );

  const menuList = ref<Record<MenuType, MenuItemsType<ComputedRef<string>>[]>>({
    general: [
      {
        name: t('menu.general.dashboard'),
        svg: 'HeartRate',
        route: '/general/dashboard',
      },
      {
        name: t('menu.general.account'),
        svg: 'User',
        route: '/general/account',
      },
      {
        name: t('menu.general.egibility'),
        svg: 'Check',
        route: '/general/egibility',
      },
      {
        name: t('menu.general.whitelisted'),
        svg: 'List',
        route: '/general/whitelisted',
      },
    ],
    browser: [
      {
        name: t('menu.browser.tokens'),
        svg: 'HeartRate',
        route: '/browser/tokens',
      },
      {
        name: t('menu.browser.pairs'),
        svg: 'HeartRate',
        route: '/browser/pairs',
      },
      { name: t('menu.browser.ilo'), svg: 'HeartRate', route: '/browser/ilo' },
    ],
    services: [
      {
        name: t('menu.services.investor.title'),
        children: [
          {
            name: t('menu.services.investor.tokenLocker'),
            svg: 'HeartRate',
            route: '/services/investor/token-locker',
          },
        ],
      },
      {
        name: t('menu.services.ownerDeveloper.title'),
        children: [
          {
            name: t('menu.services.ownerDeveloper.tokenMinter'),
            svg: 'HeartRate',
            route: '/services/owner-developer/token-minter',
          },
          {
            name: t('menu.services.ownerDeveloper.tokenLocker'),
            svg: 'HeartRate',
            route: '/services/owner-developer/token-locker',
          },
          {
            name: t('menu.services.ownerDeveloper.liquidityLocker'),
            svg: 'HeartRate',
            route: '/services/owner-developer/liquidity-locker',
          },
          {
            name: t('menu.services.ownerDeveloper.createIlo'),
            svg: 'HeartRate',
            route: '/services/owner-developer/create-ilo',
          },
        ],
      },
    ],
  });

  const getMenuList = computed(() => {
    return {
      menu: menus.value.find(menu => menu.menu === activeMenu.value),
      menuIndex: menus.value.findIndex(menu => menu.menu === activeMenu.value),
      list: menuList.value[activeMenu.value],
    };
  });

  const setActiveMenu = (newMenu: MenuType) => {
    if (activeMenu.value === newMenu) return;

    const firstLink = menuList.value[newMenu][0];

    if (!firstLink) return;

    if (Object.hasOwn(firstLink, 'route')) {
      navigateTo(localPath({ path: firstLink.route }));
    } else {
      navigateTo(localPath({ path: firstLink.children?.[0]?.route }));
    }

    activeMenu.value = newMenu;
  };

  const activeTabItems = ref();
  const getTabItems = (idx: number) => {
    activeTabItems.value = getMenuList.value.list[idx]?.children;
    const firstChildRoute = activeTabItems.value?.[0]?.route;
    if (firstChildRoute === route.fullPath) return;
    console.log('firstChildRoute');
    navigateTo(localPath({ path: firstChildRoute }));
  };

  return {
    menus,
    getMenuList,

    setActiveMenu,

    activeTabItems,
    getTabItems,
  };
});
