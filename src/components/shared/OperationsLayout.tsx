import {
	FunctionComponent,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react';
import PageSection from './PageSection';
import {
	operationsNavLinks,
	searchCategories,
	searchRoutes,
} from '@/config/consts';
import OperationLink from './OperationsLayout/OperationLink';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import DropDown from './DropDown';

type OperationsLayoutProps = {
	children: ReactNode;
	pageName: string;
	externalElement?: ReactNode;
	className?: string;
};

const OperationsLayout: FunctionComponent<OperationsLayoutProps> = ({
	children,
	pageName,
	externalElement,
	className,
}) => {
	const router = useRouter();
	const searchBoxRef = useRef<HTMLInputElement>(null);
	const [searchBoxFocused, setSearchBoxFocused] = useState<boolean>(false);
	const [categorySelectExpanded, setCategorySelectExpanded] =
		useState<boolean>(false);
	const [showSearch, setShowSearch] = useState<boolean>(false);

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

	useEffect(() => {
		setShowSearch(searchRoutes.includes(router.route));
	}, [router.route]);

	return (
		<PageSection
			name={pageName}
			className={`items-stretch bg-[#F5F5F5] min-h-screen isolate ${
				className ?? ''
			}`}
			paddingTop='pt-16 md:pt-20'
		>
			<header className='flex flex-col items-stretch gap-4 py-4 z-10 shadow-md'>
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
				{showSearch && (
					<div className='flex gap-8 px-4 justify-center'>
						<div
							className={`flex gap-2 py-1 px-2 w-80 bg-white rounded-xl overflow-hidden border ${
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
								className='bg-transparent outline-none w-full text-sm'
							/>
						</div>
						<DropDown title='Catégorie' items={searchCategories} />
						<DropDown title='Thème' items={searchCategories} />
					</div>
				)}
			</header>
			<div className='relative w-full flex-1'>{children}</div>
			{externalElement}
		</PageSection>
	);
};

export default OperationsLayout;
