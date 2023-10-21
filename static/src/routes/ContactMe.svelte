<script lang="ts">
	import { validate as validateEmailAddress } from 'email-validator';
	import { onMount } from 'svelte';

	type states = 'init' | 'sending' | 'success' | 'failure';

	let senderName = '';
	let senderEmailAddress = '';
	let message = '';
	let state: states = 'init';

	let isEmailAddressValid = false;
	let isMessageValid = false;
	let isNameValid = false;
	let isFormValid = false;

	function closeForm(): void {
		state = 'init';
		senderName = '';
		message = '';
		senderEmailAddress = '';

		isEmailAddressValid = false;
		isMessageValid = false;
		isNameValid = false;
		isFormValid = false;
	}

	function init(): void {
		state = 'init';
		senderName = '';
		message = '';
		senderEmailAddress = '';

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
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(body),
				mode: 'cors'
			});

			if (!response.ok) {
				throw response.body;
			}

			state = 'success';
		} catch (error) {
			state = 'failure';
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
				<h5 class="modal-title">Contact Me</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body">
				<form class="mb-3" id="contact-me-form">
					<fieldset disabled={state == 'sending' || state == 'success'}>
						<label class="form-label" id="name" for="name">Your name</label>
						<input
							class="required-inputs form-control"
							class:valid={isNameValid}
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
							class:valid={isEmailAddressValid}
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
							class:valid={isMessageValid}
							id="message"
							type="textarea"
							required={true}
							rows="5"
							placeholder="What would you like to ask me"
							bind:value={message}
						/>
						<div
							class="alert alert-warning alert-dismissible fade show"
							role="alert"
							class:valid={isEmailAddressValid}
						>
							The email address should be in the format of name@example.com
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" />
						</div>
					</fieldset>
				</form>
			</div>

			<div class="modal-footer">
				<div class="buttons">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<button
						class="contact-me-button btn btn-primary"
						id="contact-me-submit-button"
						type="button"
						disabled={!isFormValid || state == 'success'}
						on:click={submitForm}
						on:keydown={submitForm}>Submit</button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	input[type='text'],
	input[type='email'],
	textarea {
		border-color: red;
		border-width: 0.1em;
		border-style: solid;
		font-family: monospace;

		&.valid {
			border-color: white;
		}
	}

	.alert {
		&.valid {
			display: none;
			width: 0;
			height: 0;
			padding: 0;
			margin: 0;
			border: 0;
		}
	}
</style>
