import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';
import type { RequestHandler } from './$types';

const resend = new Resend(RESEND_API_KEY);

const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 1000;

function getClientIp(request: Request): string {
	return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
		|| request.headers.get('x-real-ip') 
		|| 'unknown';
}

function isRateLimited(ip: string): boolean {
	const now = Date.now();
	const timestamps = rateLimitMap.get(ip) || [];
	const recent = timestamps.filter(t => now - t < RATE_WINDOW_MS);
	
	if (recent.length >= RATE_LIMIT) {
		return true;
	}
	
	recent.push(now);
	rateLimitMap.set(ip, recent);
	
	if (recent.length > RATE_LIMIT * 2) {
		rateLimitMap.set(ip, recent.slice(-RATE_LIMIT));
	}
	
	return false;
}

function escapeHtml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const ip = getClientIp(request);
		if (isRateLimited(ip)) {
			return json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
		}

		const { name, email, company, subject, message } = await request.json();

		// Validate required fields
		if (!name || !email || !subject || !message) {
			return json({ error: 'Missing required fields' }, { status: 400 });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json({ error: 'Invalid email address' }, { status: 400 });
		}

		// Map subject values to readable text
		const subjectMap: Record<string, string> = {
			training: 'Training Platform Inquiry',
			tools: 'IT Training Tools Inquiry',
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
				<p><strong>Name:</strong> ${escapeHtml(name)}</p>
				<p><strong>Email:</strong> ${escapeHtml(email)}</p>
				<p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
				<p><strong>Subject:</strong> ${subjectLine}</p>
				<hr />
				<h3>Message:</h3>
				<p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
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
