import { useEffect, useState } from 'react';

export const useScrollPosition = (): number => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	useEffect(() => {
		const updateScrollPosition = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener('scroll', updateScrollPosition);

		updateScrollPosition();

		return () => window.removeEventListener('scroll', updateScrollPosition);
	}, []);

    return scrollPosition;
};
