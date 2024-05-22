'use client';

import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
	const { setTheme, theme } = useTheme();
	return (
		<div>
			<Button
				variant='outline'
				size='icon'
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			>
				{theme === 'light' ? (
					<Sun className='size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
				) : (
					<Moon className='size-[1.2rem] rotate-90 scale-0 transition-all absolute dark:rotate-0 dark:scale-100' />
				)}
			</Button>
		</div>
	);
};

export default ThemeToggle;
