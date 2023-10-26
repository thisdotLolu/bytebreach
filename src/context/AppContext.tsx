'use client'

import { createContext, useContext, useState } from "react";


export interface AppContextType {
    selectedState: string,
    setSelectedState: React.Dispatch<React.SetStateAction<string>>
}

interface AppContextProviderProps {
    children: React.ReactNode;
}

export const AppContext = createContext<AppContextType>({
    selectedState: 'client',
    setSelectedState: () => { }
});


export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [selectedState, setSelectedState] = useState('client')

    return (
        <AppContext.Provider value={{ selectedState, setSelectedState }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);