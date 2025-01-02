import { useEffect, useState } from "react";

// zustand
import useStore from "../zustand/useStore";

export function useRandomColor(): string {
  const { diseñoInStore } = useStore();

  const [color, setColor] = useState<string>("#000");


  useEffect(() => {
    if (diseñoInStore === "light") {
      const interval = setInterval(() => {
        const newColor = `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`;
        setColor(newColor);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [diseñoInStore]);

  return color;
}
