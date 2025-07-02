import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "./api";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isAdmin?: boolean;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (formData: any) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,
      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const response = await api.post("/auth/login", { email, password });
          const { token, userId } = response.data;
          const userResponse = await api.get(`/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({
            user: {
              id: userId,
              email,
              firstName: userResponse.data.firstName,
              lastName: userResponse.data.lastName,
              isAdmin: userResponse.data.isAdmin,
            },
            token,
            isLoading: false,
          });
        } catch (error: any) {
          set({ isLoading: false, error: error.message });
          throw error;
        }
      },
      register: async (formData: any) => {
        set({ isLoading: true, error: null });
        try {
          const response = await api.post("/auth/register", formData);
          const { token, userId } = response.data;
          set({
            user: {
              id: userId,
              email: formData.email,
              firstName: formData.firstName,
              lastName: formData.lastName,
              isAdmin: false,
            },
            token,
            isLoading: false,
          });
        } catch (error: any) {
          set({ isLoading: false, error: error.message });
          throw error;
        }
      },
      logout: () => {
        set({ user: null, token: null, error: null });
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);
