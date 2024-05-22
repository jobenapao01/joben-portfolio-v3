'use client';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import MobileNav from './MobileNav';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const Header = () => {
	const [header, setHeader] = useState(false);
	const pathname = usePathname();
	const { theme } = useTheme();

	useEffect(() => {
		const scrollYPos = () => {
			window.scrollY > 50 ? setHeader(true) : setHeader(false);
		};

		window.addEventListener('scroll', scrollYPos);

		//remove event
		return () => window.removeEventListener('scroll', scrollYPos);
	}, []);
	return (
		<header
			className={cn(
				'sticky top-0 z-30 transition-all',
				header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent',
				pathname === '/' && 'bg-[#fef9f5}'
			)}
		>
			<div className='container mx-auto '>
				<div className='flex justify-between items-center'>
					<Logo theme={theme} />
					<div className='flex items-center gap-x-6'>
						{/* Nav */}
						<Navbar
							containerStyles='hidden md:flex gap-x-8 items-center'
							linkStyles='relative hover:text-primary transition-all'
							underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
						/>
						<ThemeToggle />

						{/* Mobile nav */}
						<div className='block md:hidden'>
							<MobileNav />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
