import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

enum Diseño {
  neumorphism = 'neumorphism',
  dark = 'dark',
  light = 'light',
  neubrutalism = 'neubrutalism',
  spooky = 'spooky',
  gamer = 'gamer',
}


interface StoreState {
  diseñoInStore: Diseño;
  cambiarDiseño: (estilo: Diseño) => void;
}

const useStore = create<StoreState>()(
  persist(
    immer((set) => ({
      // Estados
      diseñoInStore: Diseño.dark,

      // Acciones
      cambiarDiseño: (estilo: Diseño) =>
        set((state) => {
          state.diseñoInStore = estilo;
        }),
    })),
    {
      name: 'zustand-store', // Nombre de la clave en el local storage
    }
  )
);

export default useStore