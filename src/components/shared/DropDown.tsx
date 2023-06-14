import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type DropDownProps = {
	title: string;
	items: string[];
};

const DropDown: FunctionComponent<DropDownProps> = ({ title, items }) => {
	const [categorySelectExpanded, setCategorySelectExpanded] =
		useState<boolean>(false);

	return (
		<div
			className={`relative isolate ${categorySelectExpanded ? 'z-10' : ''}`}
		>
			{categorySelectExpanded && (
				<div
					className='fixed inset-0 -z-10'
					onClick={() => setCategorySelectExpanded(false)}
				></div>
			)}
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
