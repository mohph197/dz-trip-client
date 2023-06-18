import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutClickHandler } from '@/hooks/OutClickHandler';

type DropDownProps = {
	title: string;
	items: string[];
	width?: string;
};

const DropDown: FunctionComponent<DropDownProps> = ({
	title,
	items,
	width,
}) => {
	const [categorySelectExpanded, setCategorySelectExpanded] =
		useState<boolean>(false);
	const dropDownRef = useRef<HTMLDivElement>(null);
	const clickOutDropDown = useOutClickHandler(
		dropDownRef,
		categorySelectExpanded
	);

	useEffect(() => {
		if (clickOutDropDown) setCategorySelectExpanded(false);
	}, [clickOutDropDown]);

	return (
		<div
			className={`relative ${categorySelectExpanded ? 'z-10' : ''}`}
			ref={dropDownRef}
		>
			<button
				className={`relative flex items-center py-2 px-4 h-full w-48 bg-white rounded-xl overflow-hidden border ${
					categorySelectExpanded ? 'border-primary' : ''
				}`}
				onClick={() => setCategorySelectExpanded(!categorySelectExpanded)}
			>
				<div className='outline-none w-full text-start font-medium'>
					{title}
				</div>
				<div
					className={`relative h-1/2 aspect-square transition-transform ${
						categorySelectExpanded ? 'rotate-180' : ''
					}`}
				>
					<Image
						src='/assets/images/select-arrow.svg'
						alt='Select Arrow'
						fill
						className='object-contain'
					/>
				</div>
			</button>
			<AnimatePresence>
				{categorySelectExpanded && (
					<motion.div
						initial={{ opacity: 0, y: 0 }}
						animate={{ opacity: 1, y: 5 }}
						exit={{ opacity: 0, y: 0 }}
						className='absolute inset-x-0 top-full flex flex-col rounded-xl overflow-hidden border border-primary bg-white'
					>
						{items.map((item, index) => (
							<Link
								key={index}
								href=''
								className='p-4 text-text-blackGray hover:text-black hover:bg-[#eeeeee] duration-75'
							>
								{item}
							</Link>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default DropDown;
