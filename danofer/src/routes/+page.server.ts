import { RECAPTCHA_SECRET_KEY } from '$env/static/private';

export interface Secrets {
	recaptchaSecretKey: string;
}

export function load(): Secrets {
	return {
		recaptchaSecretKey: RECAPTCHA_SECRET_KEY
	};
}
