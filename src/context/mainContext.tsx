import {createContext, useState, ReactNode} from "react";

interface IMainContext {
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
}

export const MainContext = createContext<IMainContext | null>(null);

export function MainContextProvider({children}: {children: ReactNode}) {
  const [selectedGenreId, setSelectedGenreId] = useState<number>(-1);

  const defaultContext: IMainContext = {
    setSelectedGenreId,
    selectedGenreId,
  };

  return (
    <MainContext.Provider value={defaultContext}>
      {children}
    </MainContext.Provider>
  );
}
