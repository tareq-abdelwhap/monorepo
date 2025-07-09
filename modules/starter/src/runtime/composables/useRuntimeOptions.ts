import type { ModuleOptions } from "../types";
import { defu } from "defu";

export const useRuntimeOptions = (
  runtimeOptions: ModuleOptions | unknown,
  options: ModuleOptions
): ModuleOptions => {
  const starter = defu(runtimeOptions || {}, { ...options });

  runtimeOptions = starter;

  return starter;
};
