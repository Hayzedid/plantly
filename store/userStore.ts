import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserState = {
  hasfinishedOnboarding: boolean;
  completeOnboarding: () => void;
};

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      hasfinishedOnboarding: false,
      completeOnboarding: () => set({ hasfinishedOnboarding: true }),
    }),
    {
      name: "plantly-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
