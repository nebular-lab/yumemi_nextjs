'use client';

import { create } from 'zustand';

type Store = {
  selectedPrefType: number;
  setSelectedPrefType: (selectedPrefType: number) => void;
};

// 「総人口」:0,「年少人口」:1,「生産年齢人口」:2,「老年人口」:3
// ラベルが増えても対応できるように番号で管理
const useSelectedPrefTypeIndex = create<Store>((set) => ({
  selectedPrefType: 0,
  setSelectedPrefType: (selectedPrefType: number) => set({ selectedPrefType }),
}));

export default useSelectedPrefTypeIndex;
