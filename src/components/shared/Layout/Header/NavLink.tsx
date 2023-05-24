import Link from 'next/link';
import { FunctionComponent } from 'react';

type NavLinkProps = {
	name: string;
	url: string;
	active?: boolean;
};

const NavLink: FunctionComponent<NavLinkProps> = ({ name, url, active = false }) => {
	return (
		<li>
			<Link
				href={url}
				className={`${
					active ? 'text-black bg-[#EEEBEB]' : 'text-text-gray hover:text-black'
				} select-none px-6 py-2 rounded-xl`}
			>
				{name}
			</Link>
		</li>
	);
};

export default NavLink;
