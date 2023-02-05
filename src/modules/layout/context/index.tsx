import { createContext } from 'react';

type AppContextType = {
	isMobileNavMode: boolean;
	handleMobileNavMode: (isDarkMode: boolean) => void;
};

const Index = createContext<AppContextType>({
	isMobileNavMode: false,
	handleMobileNavMode: () => {},
});

export default Index;
