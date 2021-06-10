import React, { ReactNode, useState, useContext, createContext } from 'react';

type Usuario = {
  id: string;
  nome: string;
  email: string;
}

const dadosIniciaisUsuario = {
  id: '',
  nome: '',
  email: ''
};

type AppContextData =  {
  usuarioData: Usuario;
  setUsuarioData: React.Dispatch<React.SetStateAction<Usuario>>;
}

export const AppContext = createContext({} as AppContextData);

type AppContextProviderProps = {
  children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [usuarioData, setUsuarioData] = useState<Usuario>(dadosIniciaisUsuario);

  return (
    <AppContext.Provider
      value={{
        usuarioData,
        setUsuarioData
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};