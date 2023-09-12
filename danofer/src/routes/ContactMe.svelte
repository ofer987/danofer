<script lang="ts">
	// import { load } from 'recaptcha-v3';
	import * as EmailValidator from 'email-validator';

	const FORM_OPENED = 'contact-me-opened';
	const FORM_CLOSED = 'contact-me-closed';
	const SEND_EMAIL = 'SEND_EMAIL';

	const SEND_MESSAGE_DOMAIN = 'https://api.danofer.com';
	const SITE_KEY = '6LfPAQEcAAAAAF8y_H96eJndrVs1Gm1aGtgO8oJs';

	let alertMessage = '';
	let senderEmailAddress = '';
	let emailAddressNotValid = false;

	let contactMeEnabled = false;
	let contactMeOpened = false;
	let contactMeClosed = false;
	let pageBlockerEnabled = false;

	interface MessageResponse {
		title: string | null;
		detail: string | null;
	}

	interface ServerResponse {
		okay: boolean;
		message: MessageResponse;
	}

	function openForm(): void {
		if (!contactMeEnabled) {
			disablePage();
			enableForm();
		}
	}

	function disablePage(): void {
		pageBlockerEnabled = true;
		// pageBlockerClassList.add('blocker-enabled');
		// pageBlockerClassList.remove('blocker-disabled');
		// introductionClassList.add('blocker-enabled');
	}

	function enableForm(): void {
		contactMeEnabled = true;
	}

	function disableForm(): void {
		contactMeEnabled = false;
	}

	function submitForm(): void {
		sendMessage();
	}

	function closeAlertMessage(): void {
		emailAddressNotValid = false;
	}

	function isEmailAddressValid(value: string): boolean {
		return EmailValidator.validate(value);
	}

	async function sendMessage(): Promise<ServerResponse> {
		if (!isEmailAddressValid(senderEmailAddress)) {
			emailAddressNotValid = true;

			alertMessage = `The email address ${senderEmailAddress} is not valid`;
		}
		// const recaptcha = await load(SITE_KEY, { autoHideBadge: true });
		// const token = await recaptcha.execute(SEND_EMAIL);
		const token = '';

		const apiOrigin = 'http://localhost:5000';
		const url = `${apiOrigin}/messages/create`;

		const body = {
			reCaptchaToken: token,
			senderName: senderName,
			senderEmailAddress: senderEmailAddress,
			message: message
		};

		var response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(body),
			mode: 'cors'
		});

		return {
			okay: response.ok,
			message: JSON.parse(await response.text())
		};
	}
</script>

<div id="contact-me">
	<div id="alert" class:display={emailAddressNotValid}>
		<div>{alertMessage}</div>

		<button on:click={closeAlertMessage()}>Close</button>
	</div>

	<form
		id="contact-me-form"
		class:contact-me-closed={contactMeClosed}
		class:contact-me-opened={contactMeOpened}
	>
		<img class="close" src="./icons/close.svg" alt="close" />
		<label id="name" for="name">Your name</label>
		<input id="name" type="text" required={true} />

		<label id="email-address" for="email-address">Your email address</label>
		<input id="email-address" type="text" required={true} value={senderEmailAddress} />

		<label id="message" for="message">What do you want to tell me?</label>
		<textarea id="message" type="textarea" required={true} rows="5" />

		<button
			class="contact-me-button"
			id="contact-me-submit-button"
			on:click={submitForm}
			on:keydown={submitForm}>Submit</button
		>
	</form>
</div>

<style lang="scss">
</style>
