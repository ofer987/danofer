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

	export let klass: string;

	type icons =
		| 'experience-manager.svg'
		| 'adobe-cloud-manager.png'
		| 'java.svg'
		| 'jquery.svg'
		| 'typescript.svg'
		| 'sass.svg'
		| 'javascript.png'
		| 'react.svg'
		| 'graphql.svg'
		| 'ruby.svg'
		| 'postgresql.svg'
		| 'github.svg'
		| 'docker-2.svg'
		| 'code-2.svg'
		| 'confluence.svg'
		| 'asp.svg'
		| 'sql.svg'
		| 'csharp.svg'
		| 'node-js.svg'
		| 'gitlab.svg'
		| 'sendgrid.svg'
		| 'cucumber.png'
		| 'selenium.png'
		| 'jenkins.png'
		| 'paypal.svg'
		| 'digitalocean.svg'
		| 'aws.png'
		| 'aws-lambda.png'
		| 'aws-s3.png'
		| 'datadog.png'
    | 'python.png'
    | 'google-lighthouse.png'
		| 'microsoft-teams.png'
		| 'pager-duty.png'
    | 'service-now.png';

	interface Value {
		location: string;
		altText: string;
		src: icons;
		description?: string;
	}

	const values: { [key: string]: Value } = {
		'experience-manager': {
			location:
				'https://business.adobe.com/products/experience-manager/adobe-experience-manager.html',
			altText: 'Adobe Experience Manager 6.5',
			src: 'experience-manager.svg',
			description: 'Adobe Experience Manager 6.5'
		},
		'adobe-cloud-manager': {
			location:
				'https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/onboarding/journey/cloud-manager.html',
			altText: 'Adobe Cloud Manager',
			src: 'adobe-cloud-manager.png',
			description: 'Adobe Cloud Manager'
		},
		java: {
			location: 'https://www.java.com',
			src: 'java.svg',
			altText: 'Java',
			description: 'Java 11'
		},
		jquery: {
			location: 'https://jquery.com',
			src: 'jquery.svg',
			altText: 'jQuery'
		},
		typescript: {
			location: 'https://www.typescriptlang.org',
			src: 'typescript.svg',
			altText: 'TypeScript'
		},
		sass: {
			location: 'https://sass-lang.com',
			src: 'sass.svg',
			altText: 'SASS',
			description: 'CSS with Superpowers'
		},
		react: {
			location: 'https://reactjs.org',
			src: 'react.svg',
			altText: 'React'
		},
		graphql: {
			location: 'https://graphql.org',
			src: 'graphql.svg',
			altText: 'GraphQL'
		},
		ruby: {
			location: 'https://www.ruby-lang.org',
			src: 'ruby.svg',
			altText: 'Ruby'
		},
		postgresql: {
			location: 'https://www.postgresql.org',
			src: 'postgresql.svg',
			altText: 'PostgreSQL'
		},
		github: {
			location: 'https://github.com',
			src: 'github.svg',
			altText: 'GitHub'
		},
		docker: {
			location: 'https://www.docker.com',
			src: 'docker-2.svg',
			altText: 'Docker'
		},
		bash: {
			location: 'https://www.gnu.org/software/bash/manual/bash.html',
			src: 'code-2.svg',
			altText: 'Bash Shell'
		},
		confluence: {
			location: 'https://www.atlassian.com/software/confluence',
			src: 'confluence.svg',
			altText: 'Atlassian Confluence'
		},
		asp: {
			location:
				'https://docs.microsoft.com/en-us/iis/web-hosting/getting-started/deploying-a-classic-asp-server',
			src: 'asp.svg',
			altText: 'Microsoft ASP 3.0',
			description: 'Microsoft ASP 3.0'
		},
		'sql-server': {
			location: 'https://www.microsoft.com/en-us/sql-server',
			src: 'sql.svg',
			altText: 'SQL Server',
			description: 'Microsoft SQL Server'
		},
		csharp: {
			location: 'https://dotnet.microsoft.com/languages/csharp',
			src: 'csharp.svg',
			altText: 'C#',
			description: 'Microsoft C# 10.0'
		},
		nodejs: {
			src: 'node-js.svg',
			location: 'https://nodejs.org',
			altText: 'Node.js'
		},
		gitlab: {
			location: 'https://about.gitlab.com',
			src: 'gitlab.svg',
			altText: 'GitLab'
		},
		sendgrid: {
			location: 'https://sendgrid.com',
			src: 'sendgrid.svg',
			altText: 'SendGrid'
		},
		cucumber: {
			location: 'https://cucumber.io/',
			src: 'cucumber.png',
			altText: 'Cucumber Behaviour-Driven Testing'
		},
		selenium: {
			location: 'https://www.selenium.dev/',
			src: 'selenium.png',
			altText: 'Selenium'
		},
		jenkins: {
			location: 'https://www.jenkins.io/',
			src: 'jenkins.png',
			altText: 'Jenkins CI'
		},
		paypal: {
			location: 'https://www.paypal.com/',
			src: 'paypal.svg',
			altText: 'PayPal'
		},
		digitalocean: {
			location: 'https://www.digitalocean.com/',
			src: 'digitalocean.svg',
			altText: 'Digital Ocean'
		},
		javascript: {
			location: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
			src: 'javascript.png',
			altText: 'JavaScript'
		},
		aws: {
			location: 'https://aws.amazon.com',
			src: 'aws.png',
			altText: 'Amazon Web Services'
		},
		'aws-lambda': {
			location: 'https://aws.amazon.com/lambda/',
			src: 'aws-lambda.png',
			altText: 'AWS Lambda'
		},
		'aws-s3': {
			location: 'https://aws.amazon.com/s3/',
			src: 'aws-s3.png',
			altText: 'AWS S3'
		},
		datadog: {
			location: 'https://www.datadoghq.com',
			src: 'datadog.png',
			altText: 'Datadog'
		},
		python: {
			location: 'https://www.python.org',
			src: 'python.png',
			altText: 'Python'
		},
		'google-lighthouse': {
			location: 'https://developer.chrome.com/docs/lighthouse/overview/',
			src: 'google-lighthouse.png',
			altText: 'Google Lighthouse'
		},
		'microsoft-teams': {
			location: 'https://www.microsoft.com/en-ca/microsoft-teams/log-in',
			src: 'microsoft-teams.png',
			altText: 'Google Lighthouse'
		},
		'pager-duty': {
			location: 'https://www.pagerduty.com',
			src: 'pager-duty.png',
			altText: 'PagerDuty'
		},
		'service-now': {
			location: 'https://www.servicenow.com',
			src: 'service-now.png',
			altText: 'ServiceNow'
		},
	};

	function url() {
		return values[klass].location;
	}

	function sourceImage() {
		const src = values[klass].src;

		switch (src) {
			case 'experience-manager.svg':
				return aemIcon;
			case 'adobe-cloud-manager.png':
				return adobeCloudManagerIcon;
			case 'java.svg':
				return javaIcon;
			case 'jquery.svg':
				return jqueryIcon;
			case 'typescript.svg':
				return typeScriptIcon;
			case 'sass.svg':
				return sassIcon;
			case 'javascript.png':
				return javaScriptIcon;
			case 'react.svg':
				return reactIcon;
			case 'graphql.svg':
				return graphQLIcon;
			case 'ruby.svg':
				return rubyIcon;
			case 'postgresql.svg':
				return postgreSQLIcon;
			case 'github.svg':
				return gitHubIcon;
			case 'docker-2.svg':
				return dockerIcon;
			case 'code-2.svg':
				return bashIcon;
			case 'confluence.svg':
				return confluenceIcon;
			case 'asp.svg':
				return aspIcon;
			case 'sql.svg':
				return sqlServerIcon;
			case 'csharp.svg':
				return csharpIcon;
			case 'node-js.svg':
				return nodeJSIcon;
			case 'gitlab.svg':
				return gitLabIcon;
			case 'sendgrid.svg':
				return sendGridIcon;
			case 'cucumber.png':
				return cucumberIcon;
			case 'selenium.png':
				return seleniumIcon;
			case 'jenkins.png':
				return jenkinsIcon;
			case 'paypal.svg':
				return payPalIcon;
			case 'digitalocean.svg':
				return digitalOceanIcon;
			case 'aws.png':
				return awsIcon;
			case 'aws-lambda.png':
				return awsLambdaIcon;
			case 'aws-s3.png':
				return awsS3Icon;
			case 'datadog.png':
				return datadogIcon;
			case 'python.png':
				return pythonIcon;
      case 'google-lighthouse.png':
        return googleLighthouseIcon;
      case 'microsoft-teams.png':
        return microsoftTeamsIcon
      case 'pager-duty.png':
        return pagerDutyIcon;
      case 'service-now.png':
        return serviceNowIcon;
			default:
				throw 'icon could not be found!';
		}
	}

	function alternativeText() {
		return values[klass].altText;
	}
</script>

<a href={url()} target="_blank">
	<div role="presentation">
		<img class="icon {klass}" src={sourceImage()} alt={alternativeText()} target="_blank" />
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
			width: 2em;
			height: 2em;

			&.icon {
				padding: 10px;
			}
		}
	}

	@media (max-width: 375px) {
	}
</style>
