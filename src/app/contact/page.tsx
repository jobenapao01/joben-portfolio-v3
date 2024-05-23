import Form from '@/components/Form';
import { HomeIcon, MailIcon, PhoneCall } from 'lucide-react';

const Contact = () => {
	return (
		<section>
			<div className='container mx-auto'>
				<div className='grid md:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
					{/* text & illustration */}
					<div className='flex flex-col justify-center'>
						<div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
							{/* text */}
							<span className='w-[30px] h-[2px] bg-primary'></span>
							Let&apos;s Talk
						</div>
						<h1 className='h1 max-w-md mb-8'>Let&apos;s Work Together</h1>
						<p className='subtitle max-w-[400px]'>Let&apos;s discuss more about your ideas.</p>
					</div>
					{/* illustration */}
					<div className='hidden md:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-no-repeat bg-contain bg-top'></div>
				</div>

				{/* info text& form */}
				<div className='grid md:grid-cols-2 mb-24 md:mb-32'>
					{/* info text */}
					<div className='flex flex-col gap-y-4 md:gap-y-14 mb-12 md:mb-24 text-base md:text-lg'>
						{/* mail */}
						<div className='flex items-center gap-x-8'>
							<MailIcon
								size={28}
								className='text-primary'
							/>
							<div>work.jobenapao@gmail.com</div>
						</div>
						<div className='flex items-center gap-x-8'>
							<PhoneCall
								size={28}
								className='text-primary'
							/>
							<div>+639 53 055 8540</div>
						</div>
						<div className='flex items-center gap-x-8'>
							<HomeIcon
								size={28}
								className='text-primary'
							/>
							<div>Zamboanga City, Philippines</div>
						</div>
					</div>
					<Form />
				</div>
			</div>
		</section>
	);
};

export default Contact;
