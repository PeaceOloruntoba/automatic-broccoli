"use client";

import { ReactNode, useEffect } from "react";
import { useAuthStore } from "@/lib/store";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { isLoading } = useAuthStore();

  useEffect(() => {
    // Check for existing session is handled by Zustand persist middleware
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
