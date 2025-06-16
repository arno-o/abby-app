import React, { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import { identityItems as defaultIdentityItems } from '~/data/data';

interface IdentityItem {
    id: string;
    g1: number;
    g2: number;
    g3: number;
    g4: number;
    g5: number;
    g6: number;
}

export interface IdentityData {
    items: IdentityItem[];
}

interface IdentityContextType {
    identityData: IdentityData;
    setIdentityData: (data: IdentityData) => void;
}

export const IdentityContext = createContext<IdentityContextType>({
    identityData: defaultIdentityItems, // Initialize context with default data
    setIdentityData: () => console.warn('setIdentityData function not yet initialized'),
});

export const IdentityProvider = ({ children }: { children: ReactNode }) => {
    const [identityData, setIdentityData] = useState<IdentityData>(defaultIdentityItems);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        try {
            const storedData = localStorage.getItem('identityData');

            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setIdentityData(parsedData);
            } else {
                console.log("No data found in localStorage, using defaultIdentityItems");
            }
        } catch (error) {
            console.error("Error parsing identityData from localStorage. Using default data.", error);
            setIdentityData(defaultIdentityItems);
            localStorage.removeItem('identityData');
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            const dataToSave = identityData ? { items: identityData.items } : { items: [] };
            console.log("Saving to localStorage:", dataToSave);
            localStorage.setItem('identityData', JSON.stringify(dataToSave));
            console.log("Data saved to localStorage:", localStorage.getItem('identityData'));
        }
    }, [identityData, isClient]);

    const value = { identityData, setIdentityData };

    return (
        <IdentityContext.Provider value={value}>
            {children}
        </IdentityContext.Provider>
    );
};

export const useIdentity = () => {
    const context = useContext(IdentityContext);
    if (context === undefined) {
        throw new Error('useIdentity must be used within an IdentityProvider');
    }
    return context;
};