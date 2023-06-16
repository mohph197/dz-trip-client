import { ReactNode, RefObject, useEffect, useState } from 'react';

export const useOutClickHandler = (
	r: RefObject<HTMLElement>,
	active: boolean = true
): boolean => {
	const [outClick, setOutClick] = useState<boolean>(false);

	useEffect(() => {
		const handleOutClick = (event: MouseEvent) => {
			setOutClick(!r.current?.contains(event.target as Node));
		};

		if (active) document.addEventListener('click', handleOutClick);
		else document.removeEventListener('click', handleOutClick);
	}, [r, active]);

	return outClick;
};
