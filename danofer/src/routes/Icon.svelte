<script lang="ts">
	export let klass: string;

	interface Value {
		location: string;
		altText: string;
		src: string;
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

		return `./src/routes/icons/${src}`;
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
