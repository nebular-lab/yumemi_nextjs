import { append, equals, reject } from 'rambda';
import { create } from 'zustand';

type Store = {
  selectedPrefCodes: number[];
  togglePrefCode: (clickedPrefCode: number) => void;
};
const useSelectedPrefCodes = create<Store>((set) => ({
  selectedPrefCodes: [],
  togglePrefCode: (clickedPrefCode: number) =>
    set((state) => {
      if (state.selectedPrefCodes.includes(clickedPrefCode)) {
        return {
          selectedPrefCodes: reject(
            equals(clickedPrefCode),
            state.selectedPrefCodes,
          ),
        };
      }
      return {
        selectedPrefCodes: append(clickedPrefCode, state.selectedPrefCodes),
      };
    }),
}));

export default useSelectedPrefCodes;
