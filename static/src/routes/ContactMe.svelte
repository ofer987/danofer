<script lang="ts">
	import { validate as validateEmailAddress } from 'email-validator';
	import { onMount } from 'svelte';

	import closeIcon from '$lib/images/icons/close.svg';

	type states = 'init' | 'sending' | 'success' | 'failure';
	type submitNames = 'Submit' | 'Submitting...' | 'Submitted';

	export let closesAction: () => void;
	let alertMessage = '';
	let senderName = '';
	let senderEmailAddress = '';
	let message = '';
	let state: states = 'init';
	let submitName: submitNames = 'Submit';

	let isEmailAddressValid = false;
	let isMessageValid = false;
	let isNameValid = false;
	let isFormValid = false;

	let isPageEnabled = true;

	function closeForm(): void {
		state = 'init';
		submitName = 'Submit';
		senderName = '';
		message = '';
		senderEmailAddress = '';

		isEmailAddressValid = false;
		isMessageValid = false;
		isNameValid = false;
		isFormValid = false;

		closesAction();
	}

	function init(): void {
		state = 'init';
		submitName = 'Submit';
		senderName = '';
		message = '';
		senderEmailAddress = '';
		alertMessage = '';

		isEmailAddressValid = false;
		isMessageValid = false;
		isNameValid = false;
		isFormValid = false;
	}

	function submitForm(): void {
		if (!isFormValid) {
			return;
		}

		state = 'sending';
		sendMessage();
	}

	function validate(): void {
		isFormValid = true;

		isNameValid = senderName.trim() != '';
		if (!isNameValid) {
			isFormValid = false;
		}

		isMessageValid = message.trim() != '';
		if (!isMessageValid) {
			isFormValid = false;
		}

		isEmailAddressValid = validateEmailAddress(senderEmailAddress);
		if (!isEmailAddressValid) {
			alertMessage = 'Enter a Valid Email Address';
			isFormValid = false;
		}
	}

	async function sendMessage(): Promise<void> {
		const apiOrigin = 'https://api.ofer.to';
		const url = `${apiOrigin}/messages/create`;

		const body = {
			senderName: senderName,
			senderEmailAddress: senderEmailAddress,
			message: message
		};

		try {
			submitName = 'Submitting...';
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(body),
				mode: 'cors'
			});

			if (!response.ok) {
				throw response.body;
			}

			state = 'success';
			submitName = 'Submitted';
		} catch (error) {
			alertMessage = 'Failed to submit the message. Try again later!';
			state = 'failure';
			submitName = 'Submit';
		}
	}

	init();

	onMount(() => {
		window.addEventListener('keyup', (event) => {
			if (event.key == 'Escape') {
				closeForm();

				return;
			}

			validate();
		});

		window.addEventListener('mouseup', () => {
			validate();
		});
	});
</script>

<div class="modal" id="contact-me">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button on:click={closeForm} class="close-button btn btn-primary">
					<img class="close" src={closeIcon} alt="close" />
				</button>
			</div>
			<div class="modal-body">
				<form class="mb-3" id="contact-me-form">
					<fieldset disabled={state == 'sending' || state == 'success'}>
						<label class="form-label" id="name" for="name">Your name</label>
						<input
							class="required-inputs form-control"
							class:is-valid={isNameValid}
							id="name"
							type="text"
							required={true}
							placeholder="Homer Simpson"
							bind:value={senderName}
						/>

						<label class="form-label" id="email-address" for="email-address"
							>Your email address</label
						>
						<input
							class="required-inputs form-control"
							class:is-valid={isEmailAddressValid}
							id="email-address"
							type="email"
							required={true}
							placeholder="name@example.com"
							bind:value={senderEmailAddress}
						/>

						<label class="form-label" id="message" for="message">What do you want to tell me?</label
						>
						<textarea
							class="required-inputs form-control"
							class:is-valid={isMessageValid}
							id="message"
							type="textarea"
							required={true}
							rows="5"
							placeholder="What would you like to ask me"
							bind:value={message}
						/>

						<div class="buttons">
							<button
								class="contact-me-button btn btn-primary"
								id="contact-me-submit-button"
								type="button"
								on:click={submitForm}
								on:keydown={submitForm}>Submit</button
							>
						</div>
					</fieldset>
				</form>
			</div>

			<div class="modal-footer">
				<div id="alert" class:display={!isFormValid}>
					<div>{alertMessage}</div>
				</div>
			</div>
		</div>
	</div>

</div>

<style lang="scss">

	.buttons {
		display: flex;
		justify-content: space-between;
		flex-direction: column;

		.contact-me-button {
			width: 10em;
		}

		#alert {
			color: red;
			display: none;

			&.display {
				margin-top: 0.5em;
				display: block;
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
	}

	input[type='text'],
	input[type='email'],
	textarea {
		border-color: red;
		border-width: 0.1em;
		border-style: solid;
		font-family: monospace;

		&.is-valid {
			border-color: white;
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
		input[type='email'],
		textarea {
			display: block;
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
			/* border: 0; */
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
			input[type='email'],
			textarea {
				width: fit-content;
			}
		}
	}
</style>
