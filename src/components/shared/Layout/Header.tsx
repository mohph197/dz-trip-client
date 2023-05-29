import { useScrollPosition } from '@/hooks/ScrollPosition';
import { useWindowSize } from '@/hooks/WindowSize';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import NavLink from './Header/NavLink';
import { navLinks } from '@/config/consts';
import { useRouter } from 'next/router';

const Header: FunctionComponent = () => {
	const windowSize = useWindowSize();
	const scrollPosition = useScrollPosition();
	const menuToggleRef = useRef<HTMLInputElement>(null);
	const headerRef = useRef<HTMLElement>(null);
	const router = useRouter();
	const [activeLink, setActiveLink] = useState<string>('');

	const updateActiveLink = () => {
		if (
			navLinks.every((navLink) => {
				const element = document.querySelector(`section#${navLink.id}`);
				if (element) {
					const { top, bottom } = element.getBoundingClientRect();
					const vHeight =
						window.innerHeight || document.documentElement.clientHeight;
					if (top < vHeight && bottom >= 128) {
						setActiveLink(navLink.id);
						return false;
					}
				}
				return true;
			})
		) {
			setActiveLink('');
		}
	};

	useEffect(() => {
		const toggleElement = menuToggleRef.current;
		if (
			windowSize.width &&
			windowSize.width > 1024 &&
			toggleElement &&
			toggleElement.checked
		) {
			toggleElement.click();
		}
	}, [windowSize.width]);

	useEffect(() => {
		const headerElement = headerRef.current;
		if (scrollPosition > 0 && headerElement) {
			headerElement.classList.add('shadow-md');
		} else if (headerElement) {
			headerElement.classList.remove('shadow-md');
		}
		updateActiveLink();
	}, [scrollPosition]);

	return (
		<header
			ref={headerRef}
			className='fixed top-0 inset-x-0 h-16 md:h-20 py-4 px-[2vw] flex items-center justify-between z-50 bg-background-nav lg:bg-opacity-75 lg:backdrop-blur'
		>
			<Link href='/' className='flex h-full items-center gap-2'>
				<div className='relative h-full aspect-square'>
					<Image
						src='/assets/images/logo.svg'
						alt='Logo'
						fill={true}
						className='object-contain'
					/>
				</div>
				<span className='text-3xl font-serif'>DZTrip</span>
			</Link>
			<input
				type='checkbox'
				id='menu-toggle'
				className='peer hidden'
				ref={menuToggleRef}
			/>
			<label
				className='relative flex flex-col justify-between w-8 gap-2 lg:hidden z-20 group mx-5'
				htmlFor='menu-toggle'
			>
				<span className='bg-text-gray h-[4px] w-full rounded-md transition-transform origin-center group-[.peer:checked_+_&]:rotate-45 group-[.peer:checked_+_&]:absolute'></span>
				<span className='bg-text-gray h-[4px] w-full rounded-md transition-opacity group-[.peer:checked_+_&]:opacity-0'></span>
				<span className='bg-text-gray h-[4px] w-full rounded-md transition-transform origin-center group-[.peer:checked_+_&]:-rotate-45 group-[.peer:checked_+_&]:absolute'></span>
			</label>
			<nav className='fixed lg:static inset-y-0 right-0 w-[75vw] lg:w-auto flex flex-col lg:flex-row items-center justify-center gap-4 bg-background-nav bg-opacity-75 lg:bg-opacity-0 backdrop-blur lg:backdrop-filter-none z-10 translate-x-full peer-checked:translate-x-0 lg:translate-x-0 transition-transform'>
				<ul className='relative flex flex-col lg:flex-row gap-4 lg:gap-1 items-center'>
					{navLinks.map((navLink) => (
						<NavLink
							key={navLink.url}
							name={navLink.name}
							url={navLink.url}
							active={navLink.id == activeLink}
						/>
					))}
				</ul>
				<Link
					href='/connection'
					className='bg-primary py-2 px-6 rounded-xl text-white text-center select-none'
				>
					Connexion
				</Link>
			</nav>
		</header>
	);
};

export default Header;
