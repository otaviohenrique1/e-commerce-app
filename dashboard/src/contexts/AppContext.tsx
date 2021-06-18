import React, { ReactNode, useState, useContext, createContext } from 'react';

type Funcionario = {
  id: string;
  nome: string;
  email: string;
}

const dadosIniciaisFuncionario = {
  id: '',
  nome: '',
  email: ''
};

type AppContextData =  {
  funcionarioData: Funcionario;
  setFuncionarioData: React.Dispatch<React.SetStateAction<Funcionario>>;
}

export const AppContext = createContext({} as AppContextData);

type AppContextProviderProps = {
  children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [funcionarioData, setFuncionarioData] = useState<Funcionario>(dadosIniciaisFuncionario);

  return (
    <AppContext.Provider
      value={{
        funcionarioData,
        setFuncionarioData
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};