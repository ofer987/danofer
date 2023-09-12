<script lang="ts">
	// export const ssr = false;
	// export const csr = true;

	// import { load } from 'recaptcha-v3';
	import { validate } from 'email-validator';

	const FORM_OPENED = 'contact-me-opened';
	const FORM_CLOSED = 'contact-me-closed';
	const SEND_EMAIL = 'SEND_EMAIL';

	const SEND_MESSAGE_DOMAIN = 'https://api.danofer.com';
	const SITE_KEY = '6LfPAQEcAAAAAF8y_H96eJndrVs1Gm1aGtgO8oJs';

	export let closeContactMeForm: () => void;
	let alertMessage = '';
	let senderName = '';
	let senderEmailAddress = '';
	let emailAddressNotValid = false;

	export let isContactMeOpened = false;
	let isPageEnabled = true;

	interface MessageResponse {
		title: string | null;
		detail: string | null;
	}

	interface ServerResponse {
		okay: boolean;
		message: MessageResponse;
	}

	function openForm(): void {
		if (!isContactMeOpened) {
			disablePage();
			enableForm();
		}
	}

	function closeForm(): void {
		closeContactMeForm();
		// enablePage();
		// disableForm();
	}

	function enablePage(): void {
		isPageEnabled = true;
	}

	function disablePage(): void {
		isPageEnabled = false;
	}

	function enableForm(): void {
		isContactMeOpened = true;
	}

	function disableForm(): void {
		isContactMeOpened = false;
	}

	function submitForm(): void {
		sendMessage();
	}

	function closeAlertMessage(): void {
		emailAddressNotValid = false;
		enablePage();
		enableForm();
	}

	function isEmailAddressValid(value: string): boolean {
		return validate(value);
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

		const message = '';
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

		<button on:click={closeAlertMessage}>Close</button>
	</div>

	<button id="open-contact-me-form" on:click={openForm} class:contact-me-closed={!isContactMeOpened}
		>Contact Me</button
	>

	<form id="contact-me-form" class:contact-me-opened={isContactMeOpened}>
		<button on:click={closeForm}>
			<img class="close" src="./src/routes/icons/close.svg" alt="close" />
		</button>
		<label id="name" for="name">Your name</label>
		<input id="name" type="text" required={true} value={senderName} />

		<label id="email-address" for="email-address">Your email address</label>
		<input id="email-address" type="text" required={true} value={senderEmailAddress} />

		<label id="message" for="message">What do you want to tell me?</label>
		<textarea id="message" type="textarea" required={true} rows="5" />

		<input
			class="contact-me-button"
			id="contact-me-submit-button"
			type="button"
			on:click={submitForm}
			on:keydown={submitForm}
			value="Submit"
		/>
	</form>

	<div id="page-blocker" class:blocked={!isPageEnabled} />
</div>

<style lang="scss">
	button#open-contact-me-form {
		display: block;

		&.contact-me-closed {
			display: none;
		}
	}

	#alert {
		display: none;

		&.display {
			display: block;
		}
	}

	#page-blocker {
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: none;
		visibility: hidden;
		opacity: 0;
		position: absolute;

		&.blocked {
			display: block;
			z-index: 1000;

			opacity: 10%;
		}
	}

	input[type='button'] {
		background-color: white;
		border-color: white;
		border-width: 0;
		margin: 0;
		padding: 0.75em;
		color: black;

		&:active {
			color: black;
		}
	}

	form#contact-me-form {
		z-index: 2000;
		overflow-y: scroll;

		position: fixed;
		padding: 0.5em;
		top: 5em;
		right: 5em;
		bottom: 5em;
		left: 5em;

		font-size: 1.25em;
		text-align: left;
		color: white;
		background-color: rgba(0, 0, 0, 0.5);
		display: none;

		.close {
			position: static;
			float: right;
			width: 1.25em;
		}

		label {
			font-size: 1em;
		}

		input[type='text'],
		textarea {
			display: block;
			border: 0;
			padding: 0.5em;
			margin-top: 0.25em;
			margin-bottom: 1em;
			width: 20em;
			font-size: 1em;
		}

		textarea {
			resize: vertical;
		}

		&.contact-me-opened {
			display: block;
		}
	}

	@media (max-width: 800px) {
		form#contact-me-form {
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;

			.close {
				float: none;
				display: block;
				margin-bottom: 1em;
			}

			input[type='text'],
			textarea {
				width: fit-content;
			}
		}
	}
</style>
