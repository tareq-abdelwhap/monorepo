export default {};

declare global {
  type MenuItemsType<T> = {
    name: T;
    svg?: string;
    route?: string;
    children?: MenuItemsType<T>[];
  };
}
