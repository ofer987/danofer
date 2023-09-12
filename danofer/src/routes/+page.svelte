<script lang="ts">
	import Icon from './Icon.svelte';
	import ContactMe from './ContactMe.svelte';

	export const ssr = true;
	export const csr = true;

	let isPageEnabled = true;
	let isContactMeOpened = false;

	function enableContactMeForm(): void {
		isPageEnabled = false;
		isContactMeOpened = true;
	}

	function disableContactMeForm(): void {
		isPageEnabled = true;
		isContactMeOpened = false;
	}

	function openContactMeForm(): void {
		enableContactMeForm();
	}
</script>

<svelte:head>
	<title>Dan Ofer</title>
</svelte:head>

<section>
	<div id="image" class:is-page-disabled={!isPageEnabled}>
		<div id="introduction">
			<h1>Dan Ofer</h1>

			<p id="main">Software Developer Extraordinaire</p>
			<div class="contact">
				<button
					class="contact-me-button"
					id="contact-me-toggle-button"
					on:click={openContactMeForm}
				>
					Contact Me
				</button>
			</div>
		</div>
	</div>

	<ContactMe closeContactMeForm={disableContactMeForm} {isContactMeOpened} />

	<section id="jobs" class:is-page-disabled={!isPageEnabled}>
		<div class="work" id="thomson-reuters-digital-2">
			<div class="heading">
				<h2 class="position">Thomson Reuters - Site Reliability Tech Lead</h2>
				<h2 class="at">January 2021 – Present</h2>
			</div>
			<p>
				I lead a team of software developers to make developing and deploying more efficient for
				Thomson Reuters' marketing websites, such as https://www.thomsonreuters.com/en.html. We
				build Continuous Integration environments that enforce linting for Java, TypeScript, and
				SCSS; testing including code coverage. Our process is so rigorous that Thomson Reuters can
				afford to hire short-term vendors to build features on demand, while maintaining high-levels
				of software quality.
			</p>

			<p>
				We built a release process using GitHub Actions to facilitate deployment by any vendor to
				our Staging environments.
			</p>

			<p>
				We use a testing framework built with Cucumber and Selenium to validate new deployments to
				our Staging and Production environments to guard against regression.
			</p>
			<div class="experience">
				<h3>Adobe Experience Manager</h3>
				<div class="responsibility aem">
					<div class="icons">
						<Icon klass="experience-manager" />
						<Icon klass="java" />
						<Icon klass="typescript" />
						<Icon klass="sass" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span> Use the Checkstyle Maven plugin for Java linting </span>
							</li>
							<li>
								<span> Use Prettier and ESLint for TypeScript and SCSS linting </span>
							</li>
							<li>
								<span>
									Use the JaCoCo plugin to ensure high test coverage (at least 81 per cent)
								</span>
							</li>
							<li>
								<span> Migrated the codebase from Java 8 to Java 11 </span>
							</li>
						</ol>
					</div>
				</div>

				<h3>Release Process</h3>
				<div class="responsibility installation">
					<div class="icons">
						<Icon klass="github" />
						<Icon klass="ruby" />
						<Icon klass="bash" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>
									Designed a release process that allows any vendor to easily deploy new software
								</span>
							</li>
							<li>
								<span>
									New software is vetted by both an automated Integration Testing Framework and
									manually by Project Managers
								</span>
							</li>
							<li>
								<span>
									Code is reviewed by senior internal developers to using GitHub Pull Requests
								</span>
							</li>
						</ol>
					</div>
				</div>

				<h3>Integration Testing Framework</h3>
				<div class="responsibility documentation">
					<div class="icons">
						<Icon klass="github" />
						<Icon klass="selenium" />
						<Icon klass="cucumber" />
						<Icon klass="jenkins" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>High test coverage gives us confidence before a new release goes live </span>
							</li>
							<li>
								<span>
									Create a new automated test case when a new version breaks a web page to ensure it
									does not repeat itself
								</span>
							</li>
							<li>
								<span>
									Used Java for the test functionality (i.e., Steps), Cucumber for the test cases
									(i.e., Features), and Selenium as the web driver
								</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="work" id="thomson-reuters-digital">
			<div class="heading">
				<h2 class="position">Thomson Reuters - Senior Software Engineer</h2>
				<h2 class="at">January 2019 – January 2021</h2>
			</div>
			<p>
				I am a principal contributor who develops and deploys Thomson Reuters’ marketing websites on
				the Adobe Experience Manager (AEM) platform. Accomplishments include
			</p>
			<div class="experience">
				<h3>Adobe Experience Manager</h3>
				<div class="responsibility aem">
					<div class="icons">
						<Icon klass="experience-manager" />
						<Icon klass="java" />
						<Icon klass="jquery" />
						<Icon klass="typescript" />
						<Icon klass="sass" />
						<Icon klass="react" />
						<Icon klass="github" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>
									Consulted on the architecture of new features together with project manager,
									content authors, and third-party vendors
								</span>
							</li>
							<li>
								<span> Developed new features on Adobe Experience Manager </span>
							</li>
							<li>
								<span>
									Oversaw the development of new webpages such as <a
										href="https://tax.thomsonreuters.com/us/en/onvio">Onvio</a
									>
									and
									<a href="https://tax.thomsonreuters.com/en/onesource">ONESOURCE</a>
								</span>
							</li>
							<li>
								<span>
									Transitioned the <a href="https://legal.thomsonreuters.com"
										>Thomson Reuters Legal page</a
									>
									to use <a href="https://stenciljs.com">Stencil Web Components</a>
								</span>
							</li>
						</ol>
					</div>
				</div>

				<h3>Installation</h3>
				<div class="responsibility installation">
					<div class="icons">
						<Icon klass="experience-manager" />
						<Icon klass="docker" />
						<Icon klass="bash" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>
									Created a GitHub repository for creating Docker images consisting of an AEM 6.5
									installation with the latest packages
								</span>
							</li>
							<li>
								<span>
									Placed the latest AEM packages (application and content) in an AWS S3 Bucket
								</span>
							</li>
							<li>
								<span>
									Wrote <a href="https://github.com/features/actions">GitHub Action</a>
									pipelines and
									<a href="https://www.gnu.org/software/bash/">Bash scripts</a> to automatically update
									the Docker image and deploy it to JFrog Artifactory
								</span>
							</li>
						</ol>
					</div>
				</div>

				<h3>Documentation</h3>
				<div class="responsibility documentation">
					<div class="icons">
						<Icon klass="github" />
						<Icon klass="confluence" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>
									Wrote documentation in both GitHub (for software developers) and on Confluence
									(for managers, content authors, and third-party vendors.)
								</span>
							</li>
							<li>
								<span> Set up coding guidelines </span>
							</li>
						</ol>
					</div>
				</div>

				<h3>Continuous Integration / Continuous Deployment</h3>
				<div class="responsibility ci-cd">
					<div class="icons">
						<Icon klass="github" />
						<Icon klass="experience-manager" />
						<Icon klass="bash" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>
									Configured <a href="https://github.com/features/actions">GitHub Actions</a>
									with
									<a href="https://www.gnu.org/software/bash/">Bash scripts</a> to automate deployments
									to our Quality Assurance and Pre-production environments
								</span>
							</li>
							<li>
								<span>
									Set up migration scripts to automate migration of new frontend asset versions
								</span>
							</li>
							<li>
								<span>
									Configured our Adobe Experience Manager platform to deploy to Adobe Managed
									Services
								</span>
							</li>
						</ol>
					</div>
				</div>

				<h3>PayOnline</h3>
				<div class="responsibility payonline">
					<div class="icons">
						<Icon klass="asp" />
						<Icon klass="paypal" />
						<Icon klass="sql-server" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>
									Bug fixes on Thomson Reuters' <a
										href="https://support.checkpoint.thomsonreuters.com/billing/invoicepayment.asp"
										>PayOnline system</a
									>
								</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="work" id="thomson-reuters-finance-and-risk">
			<div class="heading">
				<h2 class="position">Thomson Reuters - Senior Software Engineer</h2>
				<h2 class="at">August 2017 – January 2019</h2>
			</div>
			<p>
				Thomson Reuters operates a proprietary Software-as-a-Service (SaaS) platform for running
				their customers' web applications.
			</p>
			<div class="experience">
				<h3>Development</h3>
				<div class="responsibility development">
					<div class="icons">
						<Icon klass="csharp" />
						<Icon klass="java" />
						<Icon klass="nodejs" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span> Responsible for adding new web stacks (Java 8 and Node.js 6) </span>
							</li>
							<li>
								<span>
									Improved the stability of the system by creating a new automated testing framework
								</span>
							</li>
							<li>
								<span>
									Added a feature to target users to the server closest to their location
								</span>
							</li>
						</ol>
					</div>
				</div>

				<h3>Deployment</h3>
				<div class="responsibility deployments">
					<div class="icons">
						<Icon klass="gitlab" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span> Used GitLab to maintain our codebase </span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="work" id="danofer-com">
			<div class="heading">
				<h2 class="position">Personal website</h2>
				<h2 class="at">July 2021 – Present</h2>
			</div>
			<div class="experience">
				<h3>Development</h3>
				<div class="responsibility development">
					<div class="icons">
						<Icon klass="csharp" />
						<Icon klass="java" />
						<Icon klass="nodejs" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span> Built using HTML, Sass, and TypeScript </span>
							</li>
							<li>
								<span>
									No runtime (such as AngularJS and React). I want to avoid a runtime performance
									penalty
								</span>
							</li>
							<li>
								<span>
									No need to cache files because static assets are generated by Webpack, e.g, HTML,
									CSS, and JavaScript files
								</span>
							</li>
						</ol>
					</div>
				</div>

				<h3>Microservice Architecture</h3>
				<div class="responsibility architecture">
					<div class="icons">
						<Icon klass="csharp" />
						<Icon klass="docker" />
						<Icon klass="bash" />
						<Icon klass="sendgrid" />
						<Icon klass="digitalocean" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>
									Configured <a href="https://github.com/features/actions">GitHub Actions</a>
									with
									<a href="https://www.gnu.org/software/bash/">Bash scripts</a> to automate deployments
									to a Production environment hosted on DigitalOcean
								</span>
							</li>
							<li>
								<span>
									Configured a section where users can contact me via email, using <a
										href="https://en.wikipedia.org/wiki/SendGrid">SendGrid</a
									>
									as the provider, and
									<a href="https://en.wikipedia.org/wiki/ReCAPTCHA">Google reCAPTCHA</a> to protect against
									bots.
								</span>
							</li>
							<li>
								<span>
									Built a .NET Core 5.0 application to verify whether user is human and not a bot
									and send emails using SendGrid
								</span>
							</li>
							<li>
								<span>
									Used GitHub Secrets to store Google reCAPTCHA and SendGrid secret values
								</span>
							</li>
						</ol>
					</div>
				</div>

				<h3>Continuous Integration / Continuous Deployment</h3>
				<div class="responsibility ci-cd">
					<div class="icons">
						<Icon klass="github" />
						<Icon klass="bash" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>
									Configured <a href="https://github.com/features/actions">GitHub Actions</a>
									with
									<a href="https://www.gnu.org/software/bash/">Bash scripts</a> to automate deployments
									to our Quality Assurance and Pre-production environments
								</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="work" id="financier">
			<div class="heading">
				<h2 class="position">Financier</h2>
				<h2 class="at">December 2018 – Present</h2>
			</div>
			<p>
				Software as a Service that analyses income versus expenses. Taking into account multiple
				variables, it can predict its users future financial situation, giving them insights whether
				they should purchase a home today with a smaller downpayment or in the future with a larger
				downpayment
			</p>
			<div class="experience">
				<h3>Development</h3>
				<div class="responsibility development">
					<div class="icons">
						<Icon klass="csharp" />
						<Icon klass="typescript" />
						<Icon klass="react" />
						<Icon klass="sass" />
						<Icon klass="graphql" />
						<Icon klass="ruby" />
						<Icon klass="postgresql" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>
									A C# 9.0 (.NET 5.0 application) ingests the financial into a Postgresql database
								</span>
							</li>
							<li>
								<span>
									Machine-learning software understands the nature of the financial data
								</span>
							</li>
							<li>
								<span>
									A Ruby application retrieves the financial data into predefined financial
									statement files
								</span>
							</li>
							<li>
								<span>
									A C# 9.0 ASP.NET Core application exposes endpoints to retrieve the financial
									application
								</span>
							</li>
							<li>
								<span>
									A web application (written in TypeScript using React components) to display the
									financial analysis
								</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="work" id="trike-apps">
			<div class="heading">
				<h2 class="position">Trike Apps</h2>
				<h2 class="at">January 2017 – July 2017</h2>
			</div>
			<p>Trike Apps produces Bellroy's e-commerce platform to sell wallets and carry products</p>
			<div class="experience">
				<h3>Development</h3>
				<div class="responsibility development">
					<div class="icons">
						<Icon klass="javascript" />
						<Icon klass="ruby" />
						<Icon klass="postgresql" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span> Implemented a smarter caching strategy </span>
							</li>
							<li>
								<span> Ensured that slower content loaded asynchronously </span>
							</li>
							<li>
								<span> Used Imgix to reduce image sizes </span>
							</li>
							<li>
								<span>
									Extended Bellroy’s templates (written in Liquid) to allow designers to perform A/B
									testing
								</span>
							</li>
							<li>
								<span>
									Implemented an integration with PayPal, allowing users to pay using PayPal Express
									Checkout without needing to leave Bellroy’s website
								</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>
</section>

<style lang="scss">
	@mixin work($color: aqua) {
		padding-left: 1em;
		border-left: $color;
		border-left-style: solid;
		border-left-width: 0.5em;

		.heading {
			display: flex;
			flex-direction: column;

			.position {
				width: 100%;
				text-align: left;
				margin-top: 0em;
			}

			.at {
				width: 100%;
				text-align: left;
				margin-top: 0em;
				font-size: 1em;
			}
		}

		ol {
			list-style-type: circle;
			color: $color;

			span {
				color: black;
			}
		}
	}

	#image {
		width: 100%;
		background-image: url('./main.jpg');
		background-size: cover;
		background-position: center;
		height: 1500px;

		&.is-page-disabled {
			opacity: 50%;
		}

		#introduction {
			margin: 0;
			width: 100%;
			text-align: center;
			color: white;

			h1 {
				margin: 0;
			}
		}
	}

	section#jobs {
		&.is-page-disabled {
			opacity: 50%;
		}
	}

	.work {
		margin: 3em 1em 3em 1em;

		&#thomson-reuters-digital-2 {
			@include work(violet);
		}

		&#thomson-reuters-digital {
			@include work(blueviolet);
		}

		&#thomson-reuters-finance-and-risk {
			@include work(green);
		}

		&#danofer-com {
			@include work(turquoise);
		}

		&#danofer-com {
			@include work(darkorange);
		}

		&#financier {
			@include work(#328636);
		}

		&#trike-apps {
			@include work(#24afca);
		}

		.experience {
			display: flex;
			flex-flow: wrap;
			flex-direction: column;

			.responsibility {
				display: flex;
				flex-flow: wrap;
				flex-direction: row;
				width: 100%;

				.icons {
					width: 20%;
					display: flex;
					flex-flow: wrap;
					flex-direction: row;
				}

				.description {
					width: 80%;
					text-align: justify;

					a {
						color: blue;
						cursor: pointer;
						text-decoration: none;

						&:visited,
						&:hover,
						&:focus,
						&:active {
							color: blue;
							cursor: pointer;
							text-decoration: none;
						}
					}
				}
			}
		}
	}

	// Tablet
	@media (max-width: 800px) {
		:root {
			font-size: 20px;

			.work {
				.experience {
					.responsibility {
						.icons {
							width: 40%;
						}

						.description {
							width: 60%;
						}
					}
				}
			}
		}
	}

	// Mobile
	@media (max-width: 375px) {
		:root {
			font-size: 24px;

			.work {
				.experience {
					.responsibility {
						.icons {
							width: 100%;
						}

						.description {
							width: 100%;
						}
					}
				}
			}
		}
	}
</style>
