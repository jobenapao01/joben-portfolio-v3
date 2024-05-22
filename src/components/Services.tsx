import { Blocks, GanttChartSquare, Gem } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const servicesData = [
	{
		icon: (
			<GanttChartSquare
				size={72}
				strokeWidth={0.8}
			/>
		),
		title: 'Web Design',
		desciption:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse, nesciunt aliquid nam ratione dignissimos tempora.',
	},
	{
		icon: (
			<Blocks
				size={72}
				strokeWidth={0.8}
			/>
		),
		title: 'Web Development',
		desciption:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse, nesciunt aliquid nam ratione dignissimos tempora.',
	},
	{
		icon: (
			<Gem
				size={72}
				strokeWidth={0.8}
			/>
		),
		title: 'App Development',
		desciption:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse, nesciunt aliquid nam ratione dignissimos tempora.',
	},
];

const Services = () => {
	return (
		<section className='mb-12 xl:mb-36 '>
			<div className='container mx-auto'>
				<h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
				{/* grid items */}
				<div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
					{servicesData.map((item, index) => {
						return (
							<Card
								key={index}
								className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
							>
								<CardHeader className='text-primary absolute -top-[60px]'>
									<div className='size-[140px] bg-white dark:bg-background flex justify-center items-center'>
										{item.icon}
									</div>
								</CardHeader>
								<CardContent className='text-center'>
									<CardTitle className='mb-4 mt-8'>{item.title}</CardTitle>
									<CardDescription className='text-lg'>{item.desciption}</CardDescription>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
