'use client';

import { Send } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const Cta = () => {
	return (
		<section className='py-24 bg-tertiary dark:bg-secondary/40'>
			<div className='container mx-auto'>
				<div className='flex flex-col items-center'>
					<h2 className='h2 max-w-xl text-center mb-8'>
						Ready to turn your ideas into reality? I am here to help
					</h2>
					<Link
						href='/contact'
						className='animate-pulse'
					>
						<Button className='flex gap-x-2'>
							Let&apos;s Talk <Send size={18} />
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Cta;
