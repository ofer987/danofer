<script lang="ts">
	import aemIcon from '$lib/images/icons/experience-manager.svg';
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

	export let klass: string;

	type icons =
		| 'experience-manager.svg'
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
		| 'digitalocean.svg';

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
		}
	};

	function url() {
		return values[klass].location;
	}

	function sourceImage() {
		const src = values[klass].src;

		// return `./src/routes/icons/${src}`;
		switch (src) {
			case 'experience-manager.svg':
				return aemIcon;
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
