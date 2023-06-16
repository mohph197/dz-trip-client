import { FunctionComponent, ReactNode, createContext, useState } from 'react';

type LocationModalProviderProps = {
	children: ReactNode;
};

type LocationModalContextType = {
	CurrentModal: ReactNode;
	openModal: (Modal: ReactNode) => void;
	closeModal: () => void;
};

export const LocationModalContext = createContext<LocationModalContextType>({
	CurrentModal: <></>,
	closeModal: () => {},
	openModal: () => {},
});

export const LocationModalProvider: FunctionComponent<
	LocationModalProviderProps
> = ({ children }) => {
	const [CurrentModal, setCurrentModal] = useState<ReactNode>();

	const openModal = (Modal: ReactNode) => {
		setCurrentModal(Modal);
	};

	const closeModal = () => {
		setCurrentModal(<></>);
	};

	return (
		<LocationModalContext.Provider
			value={{ CurrentModal, openModal, closeModal }}
		>
			{children}
		</LocationModalContext.Provider>
	);
};
