class Icons {
  private container: Element;

  constructor(container: Element) {
    this.container = container;
    this.init();
  }

  private init() {
    this.classes
      .forEach(klass => this.addClickLocation(klass.className, klass.location))

    this.classes
      .forEach((klass: Image) => this.addText(klass.className, klass.altText));
  }

  private addClickLocation(className: string, location: string) {
    const images = this.container.querySelectorAll(`.${className}`);
    images.forEach(img => {
      img.addEventListener("click", () => document.location.href = location);
    });
  }

  private addText(className: string, altText?: string) {
    const images = this.container.querySelectorAll(`.${className}`);
    images.forEach((img: HTMLImageElement) => {
      img.alt = altText;
    });
  }

  private get classes(): Image[] {
    return [
      {
        className: "experience-manager",
        location: "https://business.adobe.com/products/experience-manager/adobe-experience-manager.html",
        altText: "AEM",
        description: "Adobe Experience Manager 6.5"
      },
      {
        className: "java",
        location: "https://www.java.com",
        altText: "Java",
        description: "Java 11"
      },
      {
        className: "jquery",
        location: "https://jquery.com",
        altText: "jQuery",
      },
      {
        className: "typescript",
        location: "https://www.typescriptlang.org",
        altText: "TypeScript",
      },
      {
        className: "sass",
        location: "https://sass-lang.com",
        altText: "SASS",
        description: "CSS with Superpowers",
      },
      {
        className: "react",
        location: "https://reactjs.org",
        altText: "React",
      },
      {
        className: "graphql",
        location: "https://graphql.org",
        altText: "GraphQL"
      },
      {
        className: "ruby",
        location: "https://www.ruby-lang.org",
        altText: "Ruby"
      },
      {
        className: "postgresql",
        location: "https://www.postgresql.org",
        altText: "PostgreSQL",
      },
      {
        className: "github",
        location: "https://github.com",
        altText: "GitHub",
      },
      {
        className: "docker",
        location: "https://www.docker.com",
        altText: "Docker",
      },
      {
        className: "bash",
        location: "https://www.gnu.org/software/bash/manual/bash.html",
        altText: "Bash Shell"
      },
      {
        className: "confluence",
        location: "https://www.atlassian.com/software/confluence",
        altText: "Atlassian Confluence",
      },
      {
        className: "asp",
        location: "https://docs.microsoft.com/en-us/iis/web-hosting/getting-started/deploying-a-classic-asp-server",
        altText: "Microsoft ASP 3.0",
        description: "Microsoft ASP 3.0",
      },
      {
        className: "sql-server",
        location: "https://www.microsoft.com/en-us/sql-server",
        altText: "SQL Server",
        description: "Microsoft SQL Server",
      },
      {
        className: "csharp",
        location: "https://dotnet.microsoft.com/languages/csharp",
        altText: "C#",
        description: "Microsoft C# 10.0",
      },
      {
        className: "nodejs",
        location: "https://nodejs.org",
        altText: "Node.js",
      },
      {
        className: "gitlab",
        location: "https://about.gitlab.com",
        altText: "GitLab",
      },
      {
        className: "sendgrid",
        location: "https://sendgrid.com",
        altText: "SendGrid",
      },
    ]
  }
}

class Image {
  className: string;
  location: string;
  altText?: string;
  description?: string;
}

export default Icons;
