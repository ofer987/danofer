<script lang="ts">
	import { validate as validateEmailAddress } from 'email-validator';
	import { onMount } from 'svelte';

	type states = 'init' | 'sending' | 'success' | 'failure';

	let alertMessage = '';
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
		alertMessage = '';
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
			alertMessage = 'Failed to submit the message. Try again later!';

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
				<p class="alert" class:form-not-valid={!isFormValid}>
					{alertMessage}
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	p.alert {
		display: none;

		&.form-not-valid {
			display: block;
		}
	}

	.buttons {
		display: flex;
		justify-content: space-between;
		flex-direction: column;

		.contact-me-button {
			width: 10em;
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
</style>
