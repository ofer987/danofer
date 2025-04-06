<script lang="ts">
	import ContactMe from '../ContactMe.svelte';
</script>

<svelte:head>
	<title>Blockedly Blocked-Block Snake</title>
</svelte:head>

<section class="main-section">
	<div>
		<div class="name">
			<h1>Blockedly Blocked-Block Snake</h1>

			<p class="main">
				Built with <a href="https://wiki.libsdl.org/SDL3/FrontPage">SDL3</a> / Optimized for macOS
			</p>
		</div>
	</div>

	<section class="images">
		<div class="image">
			<img src="./snake-playing.jpg" alt="Playing Snake" width="800px" />

			<div class="text">Playing the game</div>
		</div>

		<div class="image">
			<img src="./snake-lost.jpg" alt="Oh no, the Snake crashed into the border" width="800px" />

			<div class="text">Losing the game</div>
		</div>
	</section>

	<section class="privacy-policy">
		<div id="contract" class="DCS">
			<div id="outputPage">
				<div data-exp="simple2" class="outputVersion1">
					<div
						style="background:url('//www.lawdepot.ca/common/images//draft_text.png') repeat-y center top/contain #fff;"
					>
						<div class=" header">
							<span class="content">Website Privacy Policy</span>
							<span class="pageNumbers"
								>Page <span class="currentPageNum" /> of <span class="totalPageNum" /></span
							>
						</div>
						<div class=" footer" />
						<div class=" firstHeader" />
						<div class=" firstFooter">
							<span class="pageNumbers"
								>Page <span class="currentPageNum" /> of <span class="totalPageNum" /></span
							>
						</div>
						<p style="text-align:center;" class="documentTitle">
							<strong>Blockedly Blocked-Block Snake Privacy Policy</strong>
						</p>
						<p style="text-align:center;">
							Type of website: Computer game<br />Effective date: 6th day of April, 2025
						</p>
						<p style="text-align:left;">
							Blockedly Blocked-Block Snake is owned and operated by ofer.to.
						</p>
						<p style="text-align:left;">
							<strong><u>Purpose</u></strong><br />The purpose of this privacy policy (this "Privacy
							Policy") is to inform users of our Site of the following:
						</p>
						<ol start="1">
							<li value="1"><span>The personal data we will collect;</span><br /></li>
							<li value="2"><span>Use of collected data;</span><br /></li>
							<li value="3"><span>Who has access to the data collected; and</span><br /></li>
							<li value="4"><span>The rights of Site users.</span><br /></li>
						</ol>
						<p style="text-align:left;">
							This Privacy Policy applies in addition to the terms and conditions of our Site.
						</p>
						<div>
							<p style="text-align:left;">
								<strong><u>Consent</u></strong><br />By using our Site users agree that they consent
								to:
							</p>
							<ol start="1">
								<li value="1">
									<span>The conditions set out in this Privacy Policy; and</span><br />
								</li>
								<li value="2">
									<span
										>The collection, use, and retention of the data listed in this Privacy Policy.</span
									><br />
								</li>
							</ol>
						</div>
						<p style="text-align:left;">
							<strong><u>How We Use Personal Data</u></strong><br />Data collected on our Site will
							only be used for the purposes specified in this Privacy Policy or indicated on the
							relevant pages of our Site. We will not use your data beyond what we disclose in this
							Privacy Policy.
						</p>
						<p style="text-align:left;">
							<strong><u>Who We Share Personal Data With</u></strong><br /><u>Employees</u><br />We
							may disclose user data to any member of our organization who reasonably needs access
							to user data to achieve the purposes set out in this Privacy Policy.
						</p>
						<div>
							<p style="text-align:left;">
								<u>Other Disclosures</u><br />We will not sell or share your data with other third
								parties, except in the following cases:
							</p>
							<ol start="1">
								<li value="1"><span>If the law requires it;</span><br /></li>
								<li value="2"><span>If it is required for any legal proceeding;</span><br /></li>
								<li value="3"><span>To prove or protect our legal rights; and</span><br /></li>
								<li value="4">
									<span
										>To buyers or potential buyers of this company in the event that we seek to sell
										the company.</span
									><br />
								</li>
							</ol>
							<p style="text-align:left;">
								If you follow hyperlinks from our Site to another site, please note that we are not
								responsible for and have no control over their privacy policies and practices.
							</p>
						</div>
						<p style="text-align:left;">
							<strong><u>How Long We Store Personal Data</u></strong><br />We do not collect any
							user data<br />
						</p>
						<p style="text-align:left;">
							<strong><u>How We Protect Your Personal Data</u></strong><br />We do not collect any
							user data<br />
						</p>
						<div>
							<p style="text-align:left;">
								<strong><u>Children</u></strong><br />We do not knowingly collect or use personal
								data from children under 13 years of age. If we learn that we have collected
								personal data from a child under 13 years of age, the personal data will be deleted
								as soon as possible. If a child under 13 years of age has provided us with personal
								data their parent or guardian may contact our privacy officer.
							</p>
						</div>
						<p style="text-align:left;">
							<strong><u>Modifications</u></strong><br />This Privacy Policy may be amended from
							time to time in order to maintain compliance with the law and to reflect any changes
							to our data collection process. When we amend this Privacy Policy we will update the
							"Effective Date" at the top of this Privacy Policy. We recommend that our users
							periodically review our Privacy Policy to ensure that they are notified of any
							updates. If necessary, we may notify users by email of changes to this Privacy Policy.
						</p>
						<p style="text-align:left;">
							<strong><u>Contact Information</u></strong><br />If you have any questions, concerns
							or complaints, you can
						</p>

						<div class="contact">
							<button
								class="contact-me-button btn btn-primary"
								id="contact-me-toggle-button"
								data-bs-toggle="modal"
								data-bs-target="#contact-me"
							>
								Contact our Privacy Officer
							</button>
						</div>

						<div>
							<ContactMe />
						</div>
					</div>
					<div class="LDCopyright">
						<p>©2025 ofer.to</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</section>

<style lang="scss">
	.images {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.image {
			display: flex;
			flex-direction: row;
			justify-content: start;

			.text {
				text-align: center;
				width: 100%;
			}
		}
	}

	.main-section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.name {
			margin: 0;
			width: 100%;
			text-align: center;
			color: black;
			background-color: rgba(255, 255, 255, 0.95);

			h1 {
				margin: 0;
			}
		}
	}

	// Tablet
	@media (max-width: 800px) {
		:root {
			font-size: 20px;
		}
	}

	// Telephone
	@media (max-width: 400px) {
		:root {
			font-size: 24px;
		}

		.main-section {
			background-color: white;
		}
	}
</style>
