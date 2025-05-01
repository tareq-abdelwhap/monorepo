export type ModuleOptions = {
  defaultLocale: string;
  locales?: LocaleOption[];
  messages?: Messages;
};

export type LocaleOption = {
  name: string;
  file: string;
};

export type Messages = {
  [key: string]: string | Messages;
};
