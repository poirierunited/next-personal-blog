"use client";

import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //asegura que {children} se renderice solo después de que TeamProvider este completamente montado.
  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
