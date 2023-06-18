import { UserType } from '@/context/AuthContext';
import { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuthContext } from '@/hooks/AuthContext';

type AccountMenuProps = {
	currentUser: UserType;
};

const AccountMenu: FunctionComponent<AccountMenuProps> = ({ currentUser }) => {
	const [menuExpanded, setMenuExpanded] = useState<boolean>(false);
	const { logOut } = useAuthContext();

	return (
		<div className='relative flex items-center rounded-full p-1 bg-gray-200'>
			<button
				className='relative w-5 aspect-square mx-3'
				onClick={() => setMenuExpanded(!menuExpanded)}
			>
				<Image
					src='/assets/images/user-menu-toggle.svg'
					alt='Menu Toggle'
					fill
					className='object-contain'
				/>
			</button>
			<div className='relative w-9 aspect-square rounded-full overflow-hidden'>
				<Image
					src={currentUser.picture}
					alt='Profile Pic'
					fill
					className='object-cover'
				/>
			</div>
			<AnimatePresence>
				{menuExpanded && (
					<motion.div
						initial={{ opacity: 0, y: 0 }}
						animate={{ opacity: 1, y: 5 }}
						exit={{ opacity: 0, y: 0 }}
						className='absolute right-0 top-full flex flex-col overflow-hidden border bg-gray-50 rounded-3xl'
					>
						<h2 className='min-w-max px-4 py-2'>
							Welcome{' '}
							<span className='font-semibold'>{currentUser.firstName}</span>!
						</h2>
						<button className='bg-gray-200 px-4 py-2' onClick={logOut}>
							Log Out
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default AccountMenu;
