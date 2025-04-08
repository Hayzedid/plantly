import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type userStore = {  
    hasfinishedOnboarding: boolean;
    toggleHadOnboarded: () => void;
}

export const useUserStore = create(
    persist<userStore>(
        (set) => ({
            hasfinishedOnboarding: false,
            toggleHadOnboarded: () => set((state) => ({ ...state, hasfinishedOnboarding: !state.hasfinishedOnboarding })),
        }),
        {
            name: "plantly-user-store",
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);