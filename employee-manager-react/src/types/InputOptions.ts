import type { Options } from "./SelectType";

export const statusOptions: Options[] = [
  { value: "ACTIVE", text: "Active" },
  { value: "INACTIVE", text: "Inactive" },
  { value: "PROBATION", text: "Probation" },
];

export const departmentOptions: Options[] = [
  { value: "Finance", text: "Finance" },
  { value: "Management", text: "Management" },
];

export const roleOptions: Options[] = [
  { value: "HR", text: "HR" },
  { value: "UI", text: "UI" },
  { value: "UX", text: "UX" },
  { value: "DEVELOPER", text: "DEVELOPER" },
];
