import { useAnimate } from 'framer-motion';
import Image from 'next/image';
import { FunctionComponent, useEffect, useState } from 'react';

type FAQLineProps = {
	index: number;
	question: string;
	answer: string;
};

const FAQLine: FunctionComponent<FAQLineProps> = ({
	index,
	question,
	answer,
}) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const [scope, animate] = useAnimate<HTMLDivElement>();
	const [oldHeight, setOldHeight] = useState<number>(0);

	const toggleLine = async () => {
		setOldHeight(scope.current.getBoundingClientRect().height);
		setIsExpanded(!isExpanded);
	};

	useEffect(() => {
        console.log('Im triggered');
		animate(
			scope.current,
			{
				height: [
					`${oldHeight}px`,
					`${scope.current.getBoundingClientRect().height}px`,
				],
			},
			{ duration: 0.3, type: 'spring' }
		).then(() => scope.current.removeAttribute('style'));
	}, [isExpanded, scope, animate, oldHeight]);

	return (
		<div
			className={`flex flex-col px-4 py-6 gap-4 border-text-blackGray overflow-hidden ${
				index == 0 ? '' : 'border-t'
			}`}
			ref={scope}
		>
			<div className='flex justify-between items-center'>
				<h3 className='text-sm md:text-lg font-semibold'>{question}</h3>
				<button
					onClick={toggleLine}
					className={`relative w-6 aspect-square transition-transform ${
						isExpanded ? 'rotate-180' : ''
					}`}
				>
					<Image
						src='/assets/images/dropdown-arrow.svg'
						alt=''
						fill
						className='object-contain'
					/>
				</button>
			</div>
			{isExpanded && (
				<>
					<hr className='border-t border-text-blackGray w-4/5 self-center' />
					<div className='border-text-blackGray'>
						<p className='text-sm md:text-lg overflow-hidden'>{answer}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default FAQLine;
