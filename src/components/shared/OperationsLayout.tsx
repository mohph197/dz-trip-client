import {
	FunctionComponent,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react';
import PageSection from './PageSection';
import { operationsNavLinks, searchCategories } from '@/config/consts';
import OperationLink from './OperationsLayout/OperationLink';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import DropDown from './DropDown';

type OperationsLayoutProps = {
	children: ReactNode;
	pageName: string;
	className?: string;
};

const OperationsLayout: FunctionComponent<OperationsLayoutProps> = ({
	children,
	pageName,
	className,
}) => {
	const router = useRouter();
	const searchBoxRef = useRef<HTMLInputElement>(null);
	const [searchBoxFocused, setSearchBoxFocused] = useState<boolean>(false);
	const [categorySelectExpanded, setCategorySelectExpanded] =
		useState<boolean>(false);

	const focusEelement = () => {
		setSearchBoxFocused(true);
	};

	const unFocusEelement = () => {
		setSearchBoxFocused(false);
	};

	useEffect(() => {
		const searchBoxElement = searchBoxRef.current;

		searchBoxElement?.addEventListener('focusin', focusEelement);
		searchBoxElement?.addEventListener('focusout', unFocusEelement);
		return () => {
			searchBoxElement?.removeEventListener('focusin', focusEelement);
			searchBoxElement?.removeEventListener('focusout', unFocusEelement);
		};
	}, []);

	return (
		<PageSection
			name={pageName}
			className={`items-stretch bg-[#F5F5F5] min-h-screen ${className ?? ''}`}
			paddingTop='pt-16 md:pt-20'
		>
			<header className='flex flex-col items-stretch gap-5 py-5'>
				<div className='max-w-full overflow-x-scroll sm:overflow-auto'>
					<div className='min-w-full w-max flex justify-center gap-28 px-28'>
						{operationsNavLinks.map((link) => (
							<OperationLink
								key={link.id}
								active={router.route == link.url}
								{...link}
							/>
						))}
					</div>
				</div>
				<div className='flex gap-8 px-4 justify-center'>
					<div
						className={`flex gap-2 py-1 px-2 w-[380px] bg-white rounded-xl overflow-hidden border ${
							searchBoxFocused ? 'border-primary' : ''
						}`}
					>
						<div className='relative h-full aspect-square'>
							<Image
								src='/assets/images/search.svg'
								alt='Search Icon'
								fill
								className='object-contain'
							/>
						</div>
						<input
							type='text'
							name=''
							id=''
							ref={searchBoxRef}
							placeholder='ville, monument...'
							className='py-2 bg-transparent outline-none w-full'
						/>
					</div>
					<DropDown title='Catégorie' items={searchCategories} />
					<DropDown title='Thème' items={searchCategories} />
				</div>
			</header>
		</PageSection>
	);
};

export default OperationsLayout;