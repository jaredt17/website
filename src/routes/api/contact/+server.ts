import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';
import type { RequestHandler } from './$types';

const resend = new Resend(RESEND_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, email, company, subject, message } = await request.json();

		// Validate required fields
		if (!name || !email || !subject || !message) {
			return json({ error: 'Missing required fields' }, { status: 400 });
		}

		// Map subject values to readable text
		const subjectMap: Record<string, string> = {
			training: 'Training Platform Inquiry',
			tools: 'IT Management Tools Inquiry',
			consulting: 'Consulting Services Inquiry',
			partnership: 'Partnership Inquiry',
			other: 'General Inquiry'
		};

		const subjectLine = subjectMap[subject] || 'Website Contact Form';

		// Send email to you
		const { error } = await resend.emails.send({
			from: 'Teller Technologies <noreply@tellertechnologies.io>',
			to: ['contact@tellertechnologies.io'],
			replyTo: email,
			subject: `${subjectLine} from ${name}`,
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Company:</strong> ${company || 'Not provided'}</p>
				<p><strong>Subject:</strong> ${subjectLine}</p>
				<hr />
				<h3>Message:</h3>
				<p>${message.replace(/\n/g, '<br />')}</p>
			`
		});

		if (error) {
			console.error('Resend error:', error);
			return json({ error: 'Failed to send message' }, { status: 500 });
		}

		return json({ success: true });
	} catch (err) {
		console.error('Contact form error:', err);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};
