import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { AlignJustify } from 'lucide-react';
import Navbar from './Navbar';
import Logo from './Logo';
import Socials from './Socials';

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<AlignJustify className='cursor-pointer' />
			</SheetTrigger>
			<SheetContent>
				<div className='flex flex-col items-center justify-between h-full py-8'>
					<div className='flex flex-col items-center gap-y-32'>
						<Logo />
						<Navbar
							containerStyles='flex flex-col items-center gap-y-6'
							linkStyles='relative text-2xl transition-all'
							underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
						/>
					</div>
					<Socials
						containerStyles='flex justify-center gap-x-4'
						iconsStyles='text-2xl'
					/>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
