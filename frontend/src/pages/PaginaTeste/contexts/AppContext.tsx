import React, { ReactNode, useState, createContext } from 'react';

type Usuario = {
  nome: string;
  email: string;
}

const dadosIniciaisUsuario = {
  nome: '',
  email: ''
};

type AppContextData =  {
  usuarioData: Usuario;
  handleUsuarioData: (usuario: Usuario) => void;
}

export const AppContext = createContext({} as AppContextData);

type AppContextProviderProps = {
  children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [usuarioData, setUsuarioData] = useState<Usuario>(dadosIniciaisUsuario);

  function handleUsuarioData(usuario: Usuario) {
    setUsuarioData({
      nome: usuario.nome,
      email: usuario.email
    });
  }

  return (
    <AppContext.Provider
      value={{
        usuarioData,
        handleUsuarioData
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
