<script lang="ts">
	import Icon from './Icon.svelte';
	import ContactMe from './ContactMe.svelte';
</script>

<svelte:head>
	<title>Dan Ofer</title>
</svelte:head>

<section class="main-section">
	<div>
		<img
			id="family-image"
			class="image img-flud"
			src="./main.jpg"
			alt="Dan walking with his three children"
		/>
		<div class="name">
			<h1>Dan Ofer</h1>

			<p class="main">Software Developer / Site-Reliability Engineer</p>
			<div class="contact">
				<button
					class="contact-me-button btn btn-primary"
					id="contact-me-toggle-button"
					data-bs-toggle="modal"
					data-bs-target="#contact-me"
				>
					Contact Me
				</button>
			</div>
		</div>
	</div>

	<div>
		<ContactMe />
	</div>

	<section class="jobs">
		<div class="work" id="thomson-reuters-digital-3">
			<div class="heading">
				<h2 class="position">Thomson Reuters - Site Reliability Tech Lead</h2>
				<h2 class="at">January 2022 – Present</h2>
			</div>
			<p>Our objective is to automate all manual processes.</p>
			<div class="experience">
				<h3>GitHub Actions</h3>
				<div class="responsibility github">
					<div class="icons">
						<Icon klass="github" />
						<Icon klass="ruby" />
						<Icon klass="python" />
						<Icon klass="bash" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>Use GitHub Actions to start new sprints</span>
							</li>
							<li>
								<span>GitHub Actions deploy to testing environments on cronjob schedule</span>
							</li>
							<li>
								<span>GitHub Actions to deploy to Production and User Acceptance Environments</span>
							</li>
							<li>
								<span
									>GitHub Actions that automatically validate that unit tests pass and code quality</span
								>
							</li>
						</ol>
					</div>
				</div>

				<h3>Adobe Cloud Manager</h3>
				<div class="responsibility cloud-manager">
					<div class="icons">
						<Icon klass="adobe-experience-manager" />
						<Icon klass="adobe-cloud-manager" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>Used Adobe Cloud Manager for Continuous Deployments</span>
							</li>
						</ol>
					</div>
				</div>

				<h3>Post-Deployment Lambda Actions</h3>
				<div class="responsibility installation">
					<div class="icons">
						<Icon klass="python" />
						<Icon klass="aws" />
						<Icon klass="aws-lambda" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>
									Post-Deployment actions written in Python executed on AWS Lambda Functions
								</span>
							</li>
							<li>
								<span>
									Adobe Cloud Manager executes them after a deployment has (either successfully or
									unsuccessfully) finished
								</span>
							</li>
							<li>
								<span>
									Clear the Dispatcher (the Apache HTTPd server) and the AWS CloudFront (CDN) caches
								</span>
							</li>
							<li>
								<span> Notify stakeholders by sending emails </span>
							</li>
							<li>
								<span> Notify stakeholders and developers within a Microsoft Teams channel </span>
							</li>
						</ol>
					</div>
				</div>

				<h3>Datadog Logging</h3>
				<div class="responsibility datadog">
					<div class="icons">
						<Icon klass="aws-s3" />
						<Icon klass="datadog" />
						<Icon klass="google-lighthouse" />
						<Icon klass="microsoft-teams" />
						<Icon klass="pager-duty" />
						<Icon klass="service-now" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span
									>Send our logs (Adobe Experience Manager), Dispatcher, Firewall (WAF), CloudFront
									(CDN), automated testing, and Google Lighthouse to Datadog</span
								>
							</li>
							<li>
								<span
									>Logs from automated testing and Google Lighthouse were sent to S3 Buckets</span
								>
							</li>
							<li>
								<span
									>Used the Datadog S3 Forwarder Lambda Function to send logs from S3 Buckets</span
								>
							</li>
							<li>
								<span> Built Grok processors to process logs into Facets and Metrics </span>
							</li>
							<li>
								<span> Built Dashboards to make data accessible to Application Teams </span>
							</li>
							<li>
								<span
									>Built Heartbeat monitors (using Synthetic Tests) to ensure that websites are
									running
								</span>
							</li>
							<li>
								<span>Use PagerDuty to notify by email if website is down</span>
							</li>
							<li>
								<span>Create alerts in ServiceNow if website is down</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="work" id="thomson-reuters-digital-2">
			<div class="heading">
				<h2 class="position">Thomson Reuters - Site Reliability Senior Developer</h2>
				<h2 class="at">January 2021 – January 2022</h2>
			</div>
			<p>
				I lead a team of software developers to make developing and deploying more efficient for
				Thomson Reuters' marketing websites, such as <a
					target="_blank"
					href="https://www.thomsonreuters.com/en.html">Thomson Reuters' home page</a
				>. We build Continuous Integration environments that enforce linting for Java, TypeScript,
				and SCSS; testing including code coverage. Our process is so rigorous that Thomson Reuters
				can afford to hire short-term vendors to build features on demand, while maintaining
				high-levels of software quality.
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
						<Icon klass="adobe-experience-manager" />
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
						<Icon klass="adobe-experience-manager" />
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
									<a target="blank" href="https://tax.thomsonreuters.com/en/onesource">ONESOURCE</a>
								</span>
							</li>
							<li>
								<span>
									Transitioned the <a target="blank" href="https://legal.thomsonreuters.com"
										>Thomson Reuters Legal page</a
									>
									to use
									<a target="blank" href="https://stenciljs.com">Stencil Web Components</a>
								</span>
							</li>
						</ol>
					</div>
				</div>

				<h3>Installation</h3>
				<div class="responsibility installation">
					<div class="icons">
						<Icon klass="adobe-experience-manager" />
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
									Wrote <a target="blank" href="https://github.com/features/actions"
										>GitHub Action</a
									>
									pipelines and
									<a target="blank" href="https://www.gnu.org/software/bash/">Bash scripts</a> to automatically
									update the Docker image and deploy it to JFrog Artifactory
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
						<Icon klass="adobe-experience-manager" />
						<Icon klass="bash" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>
									Configured <a target="blank" href="https://github.com/features/actions"
										>GitHub Actions</a
									>
									with
									<a target="blank" href="https://www.gnu.org/software/bash/">Bash scripts</a> to automate
									deployments to our Quality Assurance and Pre-production environments
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
						<Icon klass="sql" />
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
						<Icon klass="node-js" />
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
						<Icon klass="node-js" />
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
									Configured <a target="blank" href="https://github.com/features/actions"
										>GitHub Actions</a
									>
									with
									<a target="blank" href="https://www.gnu.org/software/bash/">Bash scripts</a> to automate
									deployments to a Production environment hosted on DigitalOcean
								</span>
							</li>
							<li>
								<span>
									Configured a section where users can contact me via email, using <a
										target="blank"
										href="https://en.wikipedia.org/wiki/SendGrid">SendGrid</a
									>
									as the provider, and
									<a target="blank" href="https://en.wikipedia.org/wiki/ReCAPTCHA"
										>Google reCAPTCHA</a
									> to protect against bots.
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
									Configured <a target="blank" href="https://github.com/features/actions"
										>GitHub Actions</a
									>
									with
									<a target="blank" href="https://www.gnu.org/software/bash/">Bash scripts</a> to automate
									deployments to our Quality Assurance and Pre-production environments
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
				<h2 class="at">December 2018 – December 2020</h2>
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

			li {
				padding: 0.5em 0;
			}

			span {
				color: black;
			}
		}
	}

	.main-section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		h2.position {
			font-size: 1.5em;
			font-weight: bold;
		}

		.image {
			width: 100%;
			z-index: -1;
			position: fixed;
		}

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

		.work {
			&:first-child {
				margin: 0em 0em 0em 0em;
				padding: 1em 0em 0.5em 0em;
			}

			&:last-child {
				margin: 10em 0em 0em 0em;
				padding: 1em 0em 0.5em 0em;
			}

			margin: 10em 0em 10em 0em;
			padding: 0.5em 0em;
			background-color: rgba(255, 255, 255, 0.95);

			&#thomson-reuters-digital-3 {
				@include work(lightgreen);
			}

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
	}

	// Tablet
	@media (max-width: 800px) {
		:root {
			font-size: 20px;
		}

		.main-section {
			.work {
				.experience {
					.responsibility {
						flex-direction: column;

						.icons {
							width: 100%;
							flex-direction: row;
						}

						.description {
							width: 100%;

							ol {
								padding-left: 0;
							}
						}
					}
				}
			}
		}
	}

	// Telephone
	@media (max-width: 400px) {
		:root {
			font-size: 24px;
		}

		#family-image {
			display: none;
		}

		.main-section {
			background-color: white;

			.work {
				margin: 0 0 2em 0;
				padding-right: 1.5em;

				&:first-child {
					margin: 1em 0em 2em 0em;
					padding: 1em 1.5em 0.5em 0em;
				}

				&:last-child {
					margin: 0;
					padding: 1em 1.5em 0.5em 0em;
				}

				.experience {
					.responsibility {
						flex-direction: column;

						.icons {
							width: 100%;
							flex-direction: row;
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
