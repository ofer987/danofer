class Icons {
  private container: Element;

  constructor(container: Element) {
    this.container = container;
    this.init();
  }

  private init() {
    this.classes.forEach(klass => this.addClickLocation(klass.className, klass.location));
  }

  private addClickLocation(className: string, location: string) {
    const images = this.container.querySelectorAll(`.${className}`);
    images.forEach(img => {
      img.addEventListener("click", () => document.location.href = location);
    });
  }

  private get classes(): Image[] {
    return [
      {
        className: "experience-manager",
        location: "https://business.adobe.com/products/experience-manager/adobe-experience-manager.html"
      },
      {
        className: "java",
        location: "https://www.java.com"
      },
      {
        className: "jquery",
        location: "https://jquery.com"
      },
      {
        className: "typescript",
        location: "https://www.typescriptlang.org"
      },
      {
        className: "sass",
        location: "https://sass-lang.com"
      },
      {
        className: "react",
        location: "https://reactjs.org"
      },
      {
        className: "graphql",
        location: "https://graphql.org"
      },
      {
        className: "ruby",
        location: "https://www.ruby-lang.org"
      },
      {
        className: "postgresql",
        location: "https://www.postgresql.org"
      },
      {
        className: "github",
        location: "https://github.com"
      },
      {
        className: "docker",
        location: "https://www.docker.com"
      },
      {
        className: "bash",
        location: "https://www.gnu.org/software/bash/manual/bash.html"
      },
      {
        className: "confluence",
        location: "https://www.atlassian.com/software/confluence"
      },
      {
        className: "asp",
        location: "https://docs.microsoft.com/en-us/iis/web-hosting/getting-started/deploying-a-classic-asp-server"
      },
      {
        className: "sql-server",
        location: "https://www.microsoft.com/en-us/sql-server"
      },
      {
        className: "csharp",
        location: "https://dotnet.microsoft.com/languages/csharp"
      },
      {
        className: "nodejs",
        location: "https://nodejs.org"
      },
      {
        className: "gitlab",
        location: "https://about.gitlab.com"
      },
      {
        className: "sendgrid",
        location: "https://sendgrid.com"
      },
    ]
  }
}

class Image {
  className: string;
  location: string;
}

export default Icons;
