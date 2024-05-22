import Socials from './Socials';

const Footer = () => {
	return (
		<footer className='bg-secondary py-12 '>
			<div className='container mx-auto'>
				<div className='flex flex-col items-center md:flex-row justify-between'>
					{/* socials */}
					<Socials
						containerStyles='flex gap-x-4 mb-4 mx-auto md:mx-0'
						iconsStyles='text-primary text-[20px] dark:text-white/70 hover:text-white dark:hover:text-primary transition-all'
					/>

					{/* copyright */}
					<div className='text-muted-foreground'>
						Copyright &copy; Joben Ong Apao. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
