<script lang="ts">
	import Icon from './Icon.svelte';
	import GitHub from './GitHub.svelte';
	import LargeAnchor from './LargeAnchor.svelte';
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
			<h1>Dan Jakob Ofer</h1>

			<p class="main">
				Father / Husband / Passionate Software Developer who uses AI to resolve problems (but
				against vibe coding)
			</p>
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

	<section class="personal">
		<h2>Current Experience</h2>
	</section>

	<section class="jobs">
		<div class="work" id="thomson-reuters-digital-3">
			<div class="heading">
				<h3 class="position">Thomson Reuters - Site Reliability Tech Lead</h3>
				<h3 class="at">January 2022 – Present</h3>
			</div>
			<p>Our objective is to automate all manual processes.</p>
			<div class="experience">
				<h4>Artificial Intelligence</h4>
				<div class="responsibility artificial-intelligence">
					<div class="icons">
						<Icon klass="github" />
						<Icon klass="claude" />
						<Icon klass="rag-chain" />
						<Icon klass="mcp-servers" />
						<Icon klass="vibe-coding" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span
									>Summarize change release reports with Claude Opus using artificial intelligence</span
								>
							</li>
							<li>
								<span
									>Vibe coded an authorization endpoint for a RAG-chain backed chatbot that uses
									artificial intelligence
								</span>
							</li>
							<li>
								<span
									>Find solutions to new problems by prompting Claude Sonnet using Claude Code</span
								>
							</li>
							<li>
								<span
									>Review GitHub Pull Requests using GitHub Copilot (configured via <code
										>./.github/copilot-instructions.md</code
									>)</span
								>
							</li>
							<li>
								<span
									>Review GitHub Pull Requests using Claude Code using Sonnet (configured via <code
										>./CLAUDE.md</code
									>) together with the GitHub MCP Server to improve both my own code and colleagues</span
								>
							</li>
						</ol>
					</div>
				</div>

				<h4>GitHub Actions</h4>
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

				<h4>Adobe Cloud Manager</h4>
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

				<h4>Post-Deployment Lambda Actions</h4>
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

				<h4>Datadog</h4>
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
									(CDN), automated testing, AWS S3 Buckets, and Google Lighthouse to Datadog</span
								>
							</li>
							<li>
								<span>
									Use Application Performance Monitoring (APM) to correlate logs and errors
								</span>
							</li>
							<li>
								<span>
									Use APM tags to tag heartbeat monitors and infrastructure per environment
								</span>
							</li>
							<li>
								<span> Trace HTTP requests from AEM to other third-party services </span>
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
								<span>Use PagerDuty to notify by email if website or server is down</span>
							</li>
							<li>
								<span>Use ServiceNow to communicate with stakeholders</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="personal">
		<h2>Personal Projects</h2>

		<div class="main">
			Some software developers claim they are "passionate".
			<br />I can actually prove it.
		</div>
	</section>

	<section class="hobbies">
		<div class="work" id="nand2-to-tetris-part-2">
			<div class="heading">
				<h3 class="position">Virtual Machine and Jack Compiler</h3>
				<h3 class="at">November 2024 to Present</h3>
			</div>
			<GitHub
				text="Virtual Machine Compiler / Jack Language / Operating Systems"
				url="https://github.com/ofer987/nand2tetris-part02"
			/>
			<LargeAnchor url="https://github.com/ofer987/nand2tetris-part02" />
			<p>
				Develop compilers and operating systems for the <a href="https://www.nand2tetris.org"
					>nand2tetris project</a
				>
			</p>
			<div class="experience">
				<h4>Development</h4>
				<div class="responsibility development">
					<div class="icons">
						<Icon klass="nand2tetris" />
						<Icon klass="ruby" />
						<Icon klass="operating-systems" />
						<Icon klass="compiler" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span
									>Currently developing the Jack compiler that translates the Jack language to
									virtual machine instructions, using the Ruby language</span
								>
							</li>
							<li>
								<span
									>Developed a compiler that translates virtual machine instructions to
									Hack-computer assembly, using the Ruby language</span
								>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="work" id="nand2-to-tetris-part-1">
			<div class="heading">
				<h3 class="position">The Hack Computer and Assembly</h3>
				<h3 class="at">September to November 2024</h3>
			</div>
			<GitHub text="The Hack Computer and Assembly" url="https://github.com/ofer987/nand2tetris" />
			<LargeAnchor url="https://github.com/ofer987/nand2tetris" />
			<p>
				Design the Hack Computer and Develop an Assembler for the <a
					href="https://www.nand2tetris.org">nand2tetris project</a
				>
			</p>
			<div class="experience">
				<h4>Development</h4>
				<div class="responsibility development">
					<div class="icons">
						<Icon klass="nand2tetris" />
						<Icon klass="ruby" />
						<Icon klass="assembly" />
						<Icon klass="hdl" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span
									>Designed the 16-bit Hack Computer with three registers and 24 kilobytes of memory
									using a simplified Hardware Description Language (HDL)</span
								>
							</li>
							<li>
								<span
									>Developed the assembler that converts assembly language to 16-bit instructions</span
								>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="work" id="snake-sdl">
			<div class="heading">
				<h3 class="position">Snake with Graphics</h3>
				<h3 class="at">April to May 2025</h3>
			</div>
			<GitHub text="Snake with Graphics" url="https://github.com/ofer987/snake-sdl" />
			<LargeAnchor url="https://github.com/ofer987/snake-sdl" />
			<p>For the love of the Nokia phone classic</p>
			<div class="experience">
				<h4>Development</h4>
				<div class="responsibility development">
					<div class="icons">
						<Icon klass="c-lang" />
						<Icon klass="sdl3" />
						<Icon klass="xcode" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>Developed in Xcode in C using the SDL3 graphics engine</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="work" id="snake-terminal-in-c">
			<div class="heading">
				<h3 class="position">Snake with Terminal Graphics / developed in C</h3>
				<h3 class="at">January to March 2025</h3>
			</div>
			<GitHub
				text="Snake with Terminal Graphics / developed in C"
				url="https://github.com/ofer987/c-code/tree/master/snake"
			/>
			<LargeAnchor url="https://github.com/ofer987/c-code/tree/master/snake" />
			<p>For the love of the Nokia phone classic</p>
			<div class="experience">
				<h4>Development</h4>
				<div class="responsibility development">
					<div class="icons">
						<Icon klass="c-lang" />
						<Icon klass="gcc" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>Developed in C using the terminal graphics</span>
							</li>
							<li>
								<span>Compiled using GCC</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="work" id="snake-terminal-in-go">
			<div class="heading">
				<h3 class="position">Snake with Terminal Graphics / developed in Go</h3>
				<h3 class="at">May 2024</h3>
			</div>
			<GitHub
				text="Snake with Terminal Graphics / developed in Go"
				url="https://github.com/ofer987/chatgpt35-snake"
			/>
			<LargeAnchor url="https://github.com/ofer987/chatgpt35-snake" />
			<p>For the love of the Nokia phone classic</p>
			<div class="experience">
				<h4>Development</h4>
				<div class="responsibility development">
					<div class="icons">
						<Icon klass="go-lang" />
						<Icon klass="gcc" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>Developed in Go using the terminal graphics</span>
							</li>
							<li>
								<span>Used Go goroutines to share memory using channels</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="work" id="transit">
			<div class="heading">
				<h3 class="position">Nearest Transit Stops</h3>
				<h3 class="at">March 2024</h3>
			</div>
			<GitHub text="Transit" url="https://github.com/ofer987/DistanceCalculator" />
			<LargeAnchor url="https://transit.ofer.to" />
			<p>To know where the nearest Toronto Transit Commission's stops/stations are located</p>
			<div class="experience">
				<h4>Development</h4>
				<div class="responsibility development">
					<div class="icons">
						<Icon klass="csharp" />
						<Icon klass="typescript" />
						<Icon klass="svelte" />
						<Icon klass="node-js" />
						<Icon klass="sass" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span> Built using HTML, Sass, and TypeScript in Svelte </span>
							</li>
							<li>
								<span>
									A C# ASP.NET server retrieves all of the TTC's routes using
									<pre>https://www.ttc.ca/ttcapi/routedetail/listroutes</pre>
								</span>
							</li>
							<li>
								<span
									>Then retrieves each routes details using
									<pre>https://www.ttc.ca/ttcapi/routedetail/get</pre>
								</span>
							</li>
							<li>
								<span
									>A client-side application, in this case https://transit.ofer.to, displays the
									nearest stops / stations within a 500-metre radius using the browser's <a
										href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation"
										target="_blank">Geolocation</a
									>
								</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="work" id="sudoku">
			<div class="heading">
				<h3 class="position">Sudoku</h3>
				<h3 class="at">February 2024</h3>
			</div>
			<GitHub text="Sudoku" url="https://github.com/ofer987/sudoku" />
			<LargeAnchor url="https://sudo.ofer.to" />
			<p>A have always wanted to build an online game</p>
			<div class="experience">
				<h4>Development</h4>
				<div class="responsibility development">
					<div class="icons">
						<Icon klass="typescript" />
						<Icon klass="svelte" />
						<Icon klass="node-js" />
						<Icon klass="sass" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span> Built using HTML, Sass, and TypeScript </span>
							</li>
							<li>
								<span>
									Used <a href="https://www.npmjs.com/~mucahidyazar" target="_blank"
										>Mucahid Yazar's</a
									>
									Sudoku
									<a href="https://www.npmjs.com/package/node-sudoku" target="_blank"
										>game generator</a
									> solution
								</span>
							</li>
							<li>
								<span> Players can resume their games by copying the URL </span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="work" id="danofer-com">
			<div class="heading">
				<h3 class="position">This Personal website</h3>
				<h3 class="at">October 2023 – November 2023</h3>
			</div>
			<GitHub text="ofer.to" url="https://github.com/ofer987/danofer" />
			<LargeAnchor url="https://www.ofer.to" />
			<p>A vanity excuse to learn how to build server-side rendered websites in Svelte</p>
			<div class="experience">
				<h4>Development</h4>
				<div class="responsibility development">
					<div class="icons">
						<Icon klass="csharp" />
						<Icon klass="java" />
						<Icon klass="svelte" />
						<Icon klass="node-js" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span>
									Built in <a href="https://svelte.dev" target="_blank">Svelte</a>
									using HTML, Sass, and TypeScript
								</span>
							</li>
							<li>
								<span>
									Avoid runtime penalties because pages are server-side rendered penalty
								</span>
							</li>
						</ol>
					</div>
				</div>

				<h4>Microservice Architecture</h4>
				<div class="responsibility architecture">
					<div class="icons">
						<Icon klass="csharp" />
						<Icon klass="docker" />
						<Icon klass="bash" />
						<Icon klass="digitalocean" />
					</div>
					<div class="description">
						<ol>
							<li>
								<span> Configured a section where users can contact me via email </span>
							</li>
							<li>
								<span>
									Emails are sent using the <a
										href="https://github.com/juanluisbaptiste/docker-postfix"
										target="_blank">postfix-docker</a
									> Docker Container using a .NET Core 6.0 (LTS) application
								</span>
							</li>
						</ol>
					</div>
				</div>

				<h4>Continuous Integration / Continuous Deployment</h4>
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
									deployments
								</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="work" id="financier">
			<div class="heading">
				<h3 class="position">Financier</h3>
				<h3 class="at">December 2018 – December 2020</h3>
			</div>
			<GitHub text="Financier" url="https://github.com/ofer987/financier" />
			<p>
				Software as a Service that analyses income versus expenses. Taking into account multiple
				variables, it can predict its users future financial situation, giving them insights whether
				they should purchase a home today with a smaller downpayment or in the future with a larger
				downpayment
			</p>
			<div class="experience">
				<h4>Development</h4>
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
	</section>

	<section class="personal">
		<h2>Past Job Experience</h2>
	</section>

	<section class="jobs">
		<div class="work" id="thomson-reuters-digital-2">
			<div class="heading">
				<h3 class="position">Thomson Reuters - Site Reliability Senior Developer</h3>
				<h3 class="at">January 2021 – January 2022</h3>
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
				<h4>Adobe Experience Manager</h4>
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

				<h4>Release Process</h4>
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

				<h4>Integration Testing Framework</h4>
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
				<h3 class="position">Thomson Reuters - Senior Software Engineer</h3>
				<h3 class="at">January 2019 – January 2021</h3>
			</div>
			<p>
				I am a principal contributor who develops and deploys Thomson Reuters’ marketing websites on
				the Adobe Experience Manager (AEM) platform. Accomplishments include
			</p>
			<div class="experience">
				<h4>Adobe Experience Manager</h4>
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

				<h4>Installation</h4>
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

				<h4>Documentation</h4>
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

				<h4>Continuous Integration / Continuous Deployment</h4>
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

				<h4>PayOnline</h4>
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
				<h3 class="position">Thomson Reuters - Senior Software Engineer</h3>
				<h3 class="at">August 2017 – January 2019</h3>
			</div>
			<p>
				Thomson Reuters operates a proprietary Software-as-a-Service (SaaS) platform for running
				their customers' web applications.
			</p>
			<div class="experience">
				<h4>Development</h4>
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

				<h4>Deployment</h4>
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

		<div class="work" id="trike-apps">
			<div class="heading">
				<h3 class="position">Trike Apps</h3>
				<h3 class="at">January 2017 – July 2017</h3>
			</div>
			<p>Trike Apps produces Bellroy's e-commerce platform to sell wallets and carry products</p>
			<div class="experience">
				<h4>Development</h4>
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

	<section class="personal">
		<div class="caption">
			The background photo was taken by my wife Edith when we were walking on the northern edge of
			High Park in Toronto in the Summer of 2022
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

	.personal {
		padding-left: 1.5em;
		padding-top: 2em;
		background-color: rgba(255, 255, 255, 0.95);

		.caption {
			padding-bottom: 2em;
			font-size: 0.75em;
			text-align: justify;
		}

		.main {
			padding-bottom: 1em;
		}

		padding-top: 2em;
	}

	.main-section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		h3.position {
			font-size: 1.5em;
			font-weight: bold;
		}

		.caption {
			font-size: 0.75em;
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
				padding: 1em 1em 0.5em 1em;
			}

			&:last-child {
				margin: 10em 0em 0em 0em;
				padding: 1em 1em 0.5em 1em;
			}

			margin: 10em 0em 10em 0em;
			padding: 0.5em 1em;
			background-color: rgba(255, 255, 255, 0.95);

			&#nand2-to-tetris-part-1 {
				@include work(darkblue);
			}

			&#nand2-to-tetris-part-2 {
				@include work(darkblue);
			}

			&#snake-sdl {
				@include work(darkgreen);
			}

			&#snake-terminal-in-c {
				@include work(darkgreen);
			}

			&#snake-terminal-in-go {
				@include work(darkgreen);
			}

			&#thomson-reuters-digital-3 {
				@include work(darkgreen);
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

			&#sudoku {
				@include work(lightblue);
			}

			&#transit {
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
						height: 0%;
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
