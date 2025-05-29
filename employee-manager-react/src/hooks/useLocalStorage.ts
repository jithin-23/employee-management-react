import { useEffect, useState } from "react";

export const UseLocalStorage = (key: string, defaultValue: boolean) => {
  const [showPassword, setShowPassword] = useState(defaultValue);

  useEffect(() => {
    const value = localStorage.getItem(key) || null;
    if (value) {
      setShowPassword(JSON.parse(value));
    }
  },[key]);

  const checkToggle = (value:boolean) => {
    setShowPassword(value);
    localStorage.setItem(key,JSON.stringify(value))
  }

  return [showPassword, checkToggle] as const;
};
