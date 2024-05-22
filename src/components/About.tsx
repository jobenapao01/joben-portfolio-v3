'use client';

import { Tabs, TabsContent, TabsTrigger, TabsList } from '@/components/ui/tabs';
import {
	User2,
	MailIcon,
	HomeIcon,
	PhoneCall,
	GraduationCap,
	Calendar,
	Briefcase,
} from 'lucide-react';
import {
	RiReactjsFill,
	RiNodejsFill,
	RiNextjsFill,
	RiTailwindCssFill,
	RiGithubFill,
} from 'react-icons/ri';
import {
	SiExpress,
	SiReactquery,
	SiZod,
	SiMongodb,
	SiShadcnui,
	SiTypescript,
	SiPrisma,
} from 'react-icons/si';
import DevImg from './DevImg';
import { AspectRatio } from './ui/aspect-ratio';

const infoData = [
	{
		icon: <User2 size={20} />,
		text: 'Joben Ong Apao',
	},
	{
		icon: <MailIcon size={20} />,
		text: 'work.jobenapao@gmail.com',
	},
	{
		icon: <PhoneCall size={20} />,
		text: '+639 53 055 8540',
	},
	{
		icon: <HomeIcon size={20} />,
		text: 'Zamboanga City, Philippines',
	},
	{
		icon: <GraduationCap size={20} />,
		text: 'Bachelor of Science in Computer Science',
	},
	{
		icon: <Calendar size={20} />,
		text: 'Born on May 10, 1999',
	},
];

const skillData = [
	{
		title: 'tools',
		data: [
			{
				name: 'ReactJs',
				icon: <RiReactjsFill />,
			},
			{
				name: 'NextJs',
				icon: <RiNextjsFill />,
			},
			{
				name: 'NodeJs',
				icon: <RiNodejsFill />,
			},
			{
				name: 'ExpressJs',
				icon: <SiExpress />,
			},
			{
				name: 'MongoDb',
				icon: <SiMongodb />,
			},
			{
				name: 'TailwindCSS',
				icon: <RiTailwindCssFill />,
			},
			{
				name: 'Shadcn-ui',
				icon: <SiShadcnui />,
			},
			{
				name: 'React Query',
				icon: <SiReactquery />,
			},
			{
				name: 'Typescript',
				icon: <SiTypescript />,
			},
			{
				name: 'Github',
				icon: <RiGithubFill />,
			},
			{
				name: 'Zod',
				icon: <SiZod />,
			},
			{
				name: 'Prisma',
				icon: <SiPrisma />,
			},
		],
	},
	{
		title: 'skills',
		data: [
			{
				name: 'Frontend Development',
			},
			{
				name: 'Backend Development',
			},
			{
				name: 'Fullstack Development',
			},
		],
	},
];

const qualificationData = [
	{
		title: 'education',
		data: [
			{
				university: 'Western Mindanao State University',
				qualification: 'Bachelor of Science in Computer Science major in Software Technology',
				year: '2015-2019',
			},
			{
				university: 'Zamboanga State College of Marine Sciences and Technology',
				qualification: 'Secondary Education',
				year: '2011-2015',
			},
			{
				university: 'Southcom Elementary School',
				qualification: 'Primary Education',
				year: '2005-2011',
			},
		],
	},
	{
		title: 'experience',
		data: [
			{
				company: 'Codebility',
				role: 'Codev - Intern',
				years: 'April 2024 - Present',
			},
			{
				company: 'RTI International',
				role: 'IT Consultant',
				years: 'July 2022 - September 2022',
			},
			{
				company: 'Department of Health',
				role: 'Data Manager',
				years: 'December 2021 - March 2022',
			},
			{
				company: 'City Government of Zamboanga',
				role: 'Contact Tracer - Geotagger',
				years: 'August 2020 - October 2021',
			},
			{
				company: 'Universidad de Zamboanga',
				role: 'PIDS Staffer',
				years: 'December 2019 - February 2020',
			},
		],
	},
];
const About = () => {
	const getData = (arr: any, title: string) => {
		return arr.find((item: any) => item.title === title);
	};
	return (
		<section className='xl:h-[860px] py-12 xl:py-24'>
			<div className='container mx-auto'>
				<h2 className='section-title mb-8 md:mb-16 text-center mx-auto'>About Me</h2>

				<div className='flex flex-col xl:flex-row'>
					{/* image */}
					<div className='hidden xl:flex flex-1 bg-about_shape_light dark:bg-about_shape_dark size-[505px] bg-no-repeat relative'>
						<DevImg
							containerStyles='w-[510px] h-[462px] relative'
							imgSrc='/images/me/myphoto-3.png'
						/>
					</div>
					{/* tabs */}
					<div className='flex-1 '>
						<Tabs defaultValue='personal'>
							<TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
								<TabsTrigger
									className='w-[162px] xl:w-auto'
									value='personal'
								>
									Personal Info
								</TabsTrigger>
								<TabsTrigger
									className='w-[162px] xl:w-auto'
									value='qualifications'
								>
									Qualifications
								</TabsTrigger>
								<TabsTrigger
									className='w-[162px] xl:w-auto'
									value='skills'
								>
									Skills
								</TabsTrigger>
							</TabsList>
							{/* tabs content */}
							<div className='text-lg mt-12 xl:mt-8'>
								<TabsContent value='personal'>
									<div className='text-center xl:text-left'>
										<h3 className='h3 mb-4'>Unmatched Quality Service</h3>
										<p className='subtitle max-w-xl mx-auto xl:mx-0'>
											I specialize in crafting intuitive websites with cutting edge technology, and
											turning your ideas into reality.
										</p>
										{/* icons */}
										<div className='grid xl:grid-cols-2 gap-4 mb-12'>
											{infoData.map((info, index) => {
												return (
													<div
														key={index}
														className='flex gap-x-4 items-center mx-auto xl:mx-0'
													>
														<div className='text-primary'>{info.icon}</div>
														<div>{info.text}</div>
													</div>
												);
											})}
										</div>

										{/* languages */}
										<div className='flex flex-col gap-y-2'>
											<div className='text-primary'>Languages</div>
											<div className='border-b border-border' />
											<div>English, Tagalog, Bisaya, Chavacano</div>
										</div>
									</div>
								</TabsContent>
								<TabsContent value='qualifications'>
									<div>
										<h3 className='h3 mb-8 text-center xl:text-left'>My Awesome Journey</h3>
										{/* experience and education wrapper*/}
										<div className='grid md:grid-cols-2 gap-y-8'>
											{/* experience */}
											<div className='flex flex-col gap-y-6'>
												<div className='flex gap-x-4 items-center text-[22px] text-primary mb-4'>
													<Briefcase size={28} />
													<h4 className='capitalize font-medium'>
														{getData(qualificationData, 'experience').title}
													</h4>
												</div>

												{/* list */}
												<div className='flex flex-col gap-y-8'>
													{getData(qualificationData, 'experience').data.map(
														(item: any, index: any) => {
															const { company, role, years } = item;
															return (
																<div
																	key={index}
																	className='flex gap-x-8 group'
																>
																	<div className='h-[84px] w-[1px] bg-border relative ml-2'>
																		<div className='size-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500' />
																	</div>
																	<div>
																		<div className='font-semibold text-xl leading-none mb-2 '>
																			{company}
																		</div>
																		<div className='text-lg leading-none text-muted-foreground'>
																			{role}
																		</div>
																		<div className='text-base font-medium'>{years}</div>
																	</div>
																</div>
															);
														}
													)}
												</div>
											</div>
											{/* education */}
											<div className='flex flex-col gap-y-6'>
												<div className='flex gap-x-4 items-center text-[22px] text-primary mb-4'>
													<GraduationCap size={28} />
													<h4 className='capitalize font-medium'>
														{getData(qualificationData, 'education').title}
													</h4>
												</div>

												{/* list */}
												<div className='flex flex-col gap-y-8'>
													{getData(qualificationData, 'education').data.map(
														(item: any, index: any) => {
															const { university, qualification, year } = item;
															return (
																<div
																	key={index}
																	className='flex gap-x-8 group'
																>
																	<div className='h-[84px] w-[1px] bg-border relative ml-2'>
																		<div className='size-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500' />
																	</div>
																	<div>
																		<div className='font-semibold text-xl leading-none mb-2 '>
																			{university}
																		</div>
																		<div className='text-lg leading-none text-muted-foreground'>
																			{qualification}
																		</div>
																		<div className='text-base font-medium'>{year}</div>
																	</div>
																</div>
															);
														}
													)}
												</div>
											</div>
										</div>
									</div>
								</TabsContent>
								<TabsContent value='skills'>
									<div className='text-center xl:text-left'>
										<h3 className='h3 mb-8'>Tools I Use Everyday</h3>
										<div className='mb-16'>
											<h4 className='text-xl font-semibold mb-2'>Skills</h4>
											<div className='border-2 border-border mb-4 dark:border-secondary' />

											{/* skills list */}
											<div>
												{getData(skillData, 'skills').data.map((item: any, index: any) => {
													const { name } = item;
													return (
														<div
															className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'
															key={index}
														>
															<div className='font-medium'>{name}</div>
														</div>
													);
												})}
											</div>
										</div>

										{/* tools list */}
										<div>
											<h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
											<div className='border-2 border-border mb-4 dark:border-secondary' />

											<div className='grid grid-cols-2 md:grid-cols-3'>
												{getData(skillData, 'tools').data.map((item: any, index: any) => {
													const { name, icon } = item;
													return (
														<div
															className='w-3/4 text-center xl:text-left mx-auto xl:mx-0 hover:animate-pulse transition-all cursor-default duration-500'
															key={index}
														>
															<div className='font-medium flex items-center gap-x-4 '>
																<span>{icon}</span>
																<span>{name}</span>
															</div>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</TabsContent>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
