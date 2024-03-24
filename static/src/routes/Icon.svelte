<script lang="ts">
	import aemIcon from '$lib/images/icons/experience-manager.svg';
	import adobeCloudManagerIcon from '$lib/images/icons/adobe-cloud-manager.png';
	import javaIcon from '$lib/images/icons/java.svg';
	import jqueryIcon from '$lib/images/icons/jquery.svg';
	import typeScriptIcon from '$lib/images/icons/typescript.svg';
	import sassIcon from '$lib/images/icons/sass.svg';
	import javaScriptIcon from '$lib/images/icons/javascript.png';
	import reactIcon from '$lib/images/icons/react.svg';
	import graphQLIcon from '$lib/images/icons/graphql.svg';
	import rubyIcon from '$lib/images/icons/ruby.svg';
	import postgreSQLIcon from '$lib/images/icons/postgresql.svg';
	import gitHubIcon from '$lib/images/icons/github.svg';
	import gitHubAvatarIcon from '$lib/images/icons/github_avatar.png';
	import dockerIcon from '$lib/images/icons/docker-2.svg';
	import bashIcon from '$lib/images/icons/code-2.svg';
	import confluenceIcon from '$lib/images/icons/confluence.svg';
	import aspIcon from '$lib/images/icons/asp.svg';
	import sqlServerIcon from '$lib/images/icons/sql.svg';
	import csharpIcon from '$lib/images/icons/csharp.svg';
	import nodeJSIcon from '$lib/images/icons/node-js.svg';
	import gitLabIcon from '$lib/images/icons/gitlab.svg';
	import sendGridIcon from '$lib/images/icons/sendgrid.svg';
	import cucumberIcon from '$lib/images/icons/cucumber.png';
	import seleniumIcon from '$lib/images/icons/selenium.png';
	import jenkinsIcon from '$lib/images/icons/jenkins.png';
	import payPalIcon from '$lib/images/icons/paypal.svg';
	import digitalOceanIcon from '$lib/images/icons/digitalocean.svg';
	import awsIcon from '$lib/images/icons/aws.png';
	import awsLambdaIcon from '$lib/images/icons/aws-lambda.png';
	import awsS3Icon from '$lib/images/icons/aws-s3.png';
	import datadogIcon from '$lib/images/icons/datadog.png';
	import pythonIcon from '$lib/images/icons/python.png';
	import googleLighthouseIcon from '$lib/images/icons/google-lighthouse.png';
	import microsoftTeamsIcon from '$lib/images/icons/microsoft-teams.png';
	import pagerDutyIcon from '$lib/images/icons/pager-duty.png';
	import serviceNowIcon from '$lib/images/icons/service-now.png';
	import svelteIcon from '$lib/images/icons/svelte-logo.svg';

	export let klass: icons;

	type icons =
		| 'adobe-experience-manager'
		| 'adobe-cloud-manager'
		| 'java'
		| 'jquery'
		| 'typescript'
		| 'sass'
		| 'javascript'
		| 'react'
		| 'graphql'
		| 'ruby'
		| 'postgresql'
		| 'github'
		| 'github-avatar'
		| 'docker'
		| 'bash'
		| 'confluence'
		| 'asp'
		| 'sql'
		| 'csharp'
		| 'node-js'
		| 'gitlab'
		| 'sendgrid'
		| 'cucumber'
		| 'selenium'
		| 'jenkins'
		| 'paypal'
		| 'digitalocean'
		| 'aws'
		| 'aws-lambda'
		| 'aws-s3'
		| 'datadog'
		| 'python'
		| 'google-lighthouse'
		| 'microsoft-teams'
		| 'pager-duty'
		| 'service-now'
		| 'svelte';

	interface Attributes {
		location: string;
		altText: string;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		src: any;
		description?: string;
	}

	function getAttributes(klass: icons): Attributes {
		switch (klass) {
			case 'adobe-experience-manager':
				return {
					location:
						'https://business.adobe.com/products/experience-manager/adobe-experience-manager.html',
					altText: 'Adobe Experience Manager 6.5',
					src: aemIcon,
					description: 'Adobe Experience Manager 6.5'
				};
			case 'adobe-cloud-manager':
				return {
					location:
						'https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/onboarding/journey/cloud-manager.html',
					altText: 'Adobe Cloud Manager',
					src: adobeCloudManagerIcon,
					description: 'Adobe Cloud Manager'
				};
			case 'java':
				return {
					location: 'https://www.java.com',
					src: javaIcon,
					altText: 'Java',
					description: 'Java 11'
				};
			case 'jquery':
				return {
					location: 'https://jquery.com',
					src: jqueryIcon,
					altText: 'jQuery'
				};
			case 'typescript':
				return {
					location: 'https://www.typescriptlang.org',
					src: typeScriptIcon,
					altText: 'TypeScript'
				};
			case 'sass':
				return {
					location: 'https://sass-lang.com',
					src: sassIcon,
					altText: 'SASS',
					description: 'CSS with Superpowers'
				};
			case 'javascript':
				return {
					location: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
					src: javaScriptIcon,
					altText: 'JavaScript'
				};
			case 'react':
				return {
					location: 'https://reactjs.org',
					src: reactIcon,
					altText: 'React'
				};
			case 'graphql':
				return {
					location: 'https://graphql.org',
					src: graphQLIcon,
					altText: 'GraphQL'
				};
			case 'ruby':
				return {
					location: 'https://www.ruby-lang.org',
					src: rubyIcon,
					altText: 'Ruby'
				};
			case 'postgresql':
				return {
					location: 'https://www.postgresql.org',
					src: postgreSQLIcon,
					altText: 'PostgreSQL'
				};
			case 'github-avatar':
				return {
					location: 'https://github.com',
					src: gitHubAvatarIcon,
					altText: 'GitHub'
				};
			case 'github':
				return {
					location: 'https://github.com',
					src: gitHubIcon,
					altText: 'GitHub'
				};
			case 'docker':
				return {
					location: 'https://www.docker.com',
					src: dockerIcon,
					altText: 'Docker'
				};
			case 'bash':
				return {
					location: 'https://www.gnu.org/software/bash/manual/bash.html',
					src: bashIcon,
					altText: 'Bash Shell'
				};
			case 'confluence':
				return {
					location: 'https://www.atlassian.com/software/confluence',
					src: confluenceIcon,
					altText: 'Atlassian Confluence'
				};
			case 'asp':
				return {
					location:
						'https://docs.microsoft.com/en-us/iis/web-hosting/getting-started/deploying-a-classic-asp-server',
					src: aspIcon,
					altText: 'Microsoft ASP 3.0',
					description: 'Microsoft ASP 3.0'
				};
			case 'sql':
				return {
					location: 'https://www.microsoft.com/en-us/sql-server',
					src: sqlServerIcon,
					altText: 'SQL Server',
					description: 'Microsoft SQL Server'
				};
			case 'csharp':
				return {
					location: 'https://dotnet.microsoft.com/languages/csharp',
					src: csharpIcon,
					altText: 'C#',
					description: 'Microsoft C# 10.0'
				};
			case 'node-js':
				return {
					src: nodeJSIcon,
					location: 'https://nodejs.org',
					altText: 'Node.js'
				};
			case 'gitlab':
				return {
					location: 'https://about.gitlab.com',
					src: gitLabIcon,
					altText: 'GitLab'
				};
			case 'sendgrid':
				return {
					location: 'https://sendgrid.com',
					src: sendGridIcon,
					altText: 'SendGrid'
				};
			case 'cucumber':
				return {
					location: 'https://cucumber.io/',
					src: cucumberIcon,
					altText: 'Cucumber Behaviour-Driven Testing'
				};
			case 'selenium':
				return {
					location: 'https://www.selenium.dev/',
					src: seleniumIcon,
					altText: 'Selenium'
				};
			case 'jenkins':
				return {
					location: 'https://www.jenkins.io/',
					src: jenkinsIcon,
					altText: 'jenkins ci'
				};
			case 'paypal':
				return {
					location: 'https://www.paypal.com/',
					src: payPalIcon,
					altText: 'PayPal'
				};
			case 'digitalocean':
				return {
					location: 'https://www.digitalocean.com/',
					src: digitalOceanIcon,
					altText: 'Digital Ocean'
				};
			case 'aws':
				return {
					location: 'https://aws.amazon.com',
					src: awsIcon,
					altText: 'Amazon Web Services'
				};
			case 'aws-lambda':
				return {
					location: 'https://aws.amazon.com/lambda/',
					src: awsLambdaIcon,
					altText: 'AWS Lambda'
				};
			case 'aws-s3':
				return {
					location: 'https://aws.amazon.com/s3/',
					src: awsS3Icon,
					altText: 'AWS S3'
				};
			case 'datadog':
				return {
					location: 'https://www.datadoghq.com',
					src: datadogIcon,
					altText: 'Datadog'
				};
			case 'python':
				return {
					location: 'https://www.python.org',
					src: pythonIcon,
					altText: 'Python'
				};
			case 'google-lighthouse':
				return {
					location: 'https://developer.chrome.com/docs/lighthouse/overview/',
					src: googleLighthouseIcon,
					altText: 'Google Lighthouse'
				};
			case 'microsoft-teams':
				return {
					location: 'https://www.microsoft.com/en-ca/microsoft-teams/log-in',
					src: microsoftTeamsIcon,
					altText: 'Google Lighthouse'
				};
			case 'pager-duty':
				return {
					location: 'https://www.pagerduty.com',
					src: pagerDutyIcon,
					altText: 'PagerDuty'
				};
			case 'service-now':
				return {
					location: 'https://www.servicenow.com',
					src: serviceNowIcon,
					altText: 'ServiceNow'
				};
			case 'svelte':
				return {
					location: 'https://svelte.dev',
					src: svelteIcon,
					altText: 'Svelte'
				};
			default:
				throw 'icon could not be found!';
		}
	}

	const attributes = getAttributes(klass);
</script>

<a href={attributes.location} target="_blank">
	<div role="presentation">
		<img class="icon {klass}" src={attributes.src} alt={attributes.altText} target="_blank" />
	</div>
</a>

<style lang="scss">
	img {
		width: 3em;
		height: 3em;

		cursor: pointer;

		&.icon {
			padding: 10px;
		}
	}

	@media (max-width: 800px) {
		img {
			width: 3em;
			height: 3em;

			&.icon {
				padding: 10px;
			}
		}
	}
</style>
