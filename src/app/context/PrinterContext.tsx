import { createContext, ReactNode, useState } from 'react';

type PrinterContext = { isPrinting: boolean; setIsPrinting: (value: boolean) => void };

const INITIAL_STATE: PrinterContext = {
    isPrinting: false,
    setIsPrinting: () => {
        console.error('Error - called from outside of PrinterProvider!');
    },
};

export const PrinterContext = createContext<PrinterContext>(INITIAL_STATE);

export const PrinterProvider = ({ children }: { children: ReactNode }) => {
    const [isPrinting, setIsPrinting] = useState(false);

    return <PrinterContext.Provider value={{ isPrinting, setIsPrinting }}>{children}</PrinterContext.Provider>;
};
