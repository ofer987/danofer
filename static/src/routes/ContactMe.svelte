<script lang="ts">
	import { validate } from 'email-validator';
	import { onMount } from 'svelte';

	import closeIcon from '$lib/images/icons/close.svg';

	type states = 'init' | 'sending' | 'success' | 'failure';

	export let closesAction: () => void;
	let alertMessage = '';
	let senderName = '';
	let senderEmailAddress = '';
	let inputNotValid = false;
	let message = '';
	let state: states = 'init';

	let isPageEnabled = true;

	interface MessageResponse {
		title: string | null;
		detail: string | null;
	}

	interface ServerResponse {
		okay: boolean;
		message: MessageResponse;
	}

	function closeForm(): void {
		state = 'init';
		senderName = '';
		message = '';
		senderEmailAddress = '';
		inputNotValid = false;

		closesAction();
	}

	function init(): void {
		state = 'init';
		senderName = '';
		message = '';
		senderEmailAddress = '';
		inputNotValid = false;
		alertMessage = '';
	}

	function submitForm(): void {
		init();

		state = 'sending';
		sendMessage();
	}

	function isEmailAddressValid(value: string): boolean {
		return validate(value);
	}

	async function sendMessage(): Promise<void> {
		if (senderName.trim() == '') {
			inputNotValid = true;
			state = 'failure';
			alertMessage = 'You forgot to write your name';

			return;
		}

		if (message.trim() == '') {
			inputNotValid = true;
			state = 'failure';
			alertMessage = 'You forgot to write your message';

			return;
		}

		if (!isEmailAddressValid(senderEmailAddress)) {
			inputNotValid = true;
			state = 'failure';

			alertMessage = `The email address ${senderEmailAddress} is not valid`;

			return;
		}

		const apiOrigin = 'https://ofer.to';
		const url = `${apiOrigin}/messages/create`;

		const body = {
			senderName: senderName,
			senderEmailAddress: senderEmailAddress,
			message: message
		};

		try {
			await fetch(url, {
				method: 'POST',
				body: JSON.stringify(body),
				mode: 'cors'
			}

			state = 'success';
		} catch (error) {
			state = 'failure';
		}
	}

	init();

	onMount(() => {
		window.addEventListener('keydown', (event) => {
			if (event.key == 'Escape') {
				closeForm();
			}
		});

		return {
			okay: response.ok,
			message: JSON.parse(await response.text())
		};
	}
</script>

<div id="contact-me">
	<form id="contact-me-form">
		<button on:click={closeForm} class="close-button">
			<img class="close" src={closeIcon} alt="close" />
		</button>

		<div id="alert" class:display={inputNotValid}>
			<div>{alertMessage}</div>
		</div>

		<label id="name" for="name">Your name</label>
		<input id="name" type="text" required={true} bind:value={senderName} />

		<label id="email-address" for="email-address">Your email address</label>
		<input id="email-address" type="text" required={true} bind:value={senderEmailAddress} />

		<label id="message" for="message">What do you want to tell me?</label>
		<textarea id="message" type="textarea" required={true} rows="5" bind:value={message} />

		<input
			class="contact-me-button"
			disabled={state == 'sending' || state == 'success'}
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
		padding: 0.5em 0.75em;
		cursor: pointer;

		&:active {
			color: black;
		}

		&:disabled {
			cursor: not-allowed;
			color: grey;
			background-color: black;
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

		.close-button {
			background-color: transparent;
			border: 0;
			padding-left: 0;
			display: block;
			margin-bottom: 1em;

			.close {
				position: static;
				float: right;
				width: 1.25em;
			}
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
			padding: 0.5em;
			font-size: 1em;
			resize: vertical;
			width: 25em;
			border: 0;
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
