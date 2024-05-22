'use client';

import { ArrowRightIcon, MailIcon, MessageSquare, User } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useRef, useState } from 'react';
import { useToast } from './ui/use-toast';
import emailjs from '@emailjs/browser';

const Form = () => {
	const { toast } = useToast();
	const formRef = useRef(null);
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e: any) => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setLoading(true);

		if (form.name === '' || form.email === '' || form.message === '') {
			setLoading(false);

			return toast({
				variant: 'destructive',
				title: 'Incomplete email form',
				description: 'Please fill up the contact fields.',
			});
		}

		emailjs
			.send(
				'service_d3y3d44',
				'template_4e2rzeo',
				{
					from_name: form.name,
					to_name: 'Joben',
					from_email: form.email,
					to_email: 'work.jobenapao@gmail.com',
					message: form.message,
				},
				'EL89KnRJQitmqH_LE'
			)
			.then(
				() => {
					setLoading(false);
					toast({
						title: 'Success',
						description: 'Email sent successfully.',
					});
					setForm({
						name: '',
						email: '',
						message: '',
					});
				},
				(error: any) => {
					setLoading(false);
					console.log(error);

					toast({
						variant: 'destructive',
						title: 'Something went wrong',
						description: 'Failed to send email.',
					});
				}
			);
	};

	return (
		<form
			className='flex flex-col gap-y-4'
			ref={formRef}
			onSubmit={handleSubmit}
		>
			<div className='relative flex items-center'>
				<Input
					type='text'
					name='name'
					placeholder='Name'
					value={form.name}
					onChange={handleChange}
				/>
				<User
					className='absolute right-6'
					size={20}
				/>
			</div>
			<div className='relative flex items-center'>
				<Input
					type='email'
					name='email'
					placeholder='Email'
					value={form.email}
					onChange={handleChange}
				/>
				<MailIcon
					className='absolute right-6'
					size={20}
				/>
			</div>
			<div className='relative flex items-center mb-12'>
				<Textarea
					name='message'
					placeholder='Type your message here'
					value={form.message}
					onChange={handleChange}
				/>
				<MessageSquare
					className='absolute right-6 top-4'
					size={20}
				/>
			</div>
			<Button
				className='flex items-center max-w-[166px] animate-bounce'
				disabled={loading}
			>
				{loading ? (
					'Sending...'
				) : (
					<>
						{' '}
						Let&apos;s Talk{' '}
						<ArrowRightIcon
							size={20}
							className='ml-2'
						/>
					</>
				)}
			</Button>
		</form>
	);
};

export default Form;
