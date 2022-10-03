class Icons {
  private container: Element;

  constructor(container: Element) {
    this.container = container;
    this.init();
  }

  private init() {
    for (let icon of this.classes) {
      this.setupIcon(icon);

      this.setupDescription(icon);
    }
  }

  private setupIcon(icon: Image): void {
    this.addImage(icon.className, icon.image);
    this.addClickLocation(icon.className, icon.location)
    this.addText(icon.className, icon.altText);
  }

  private setupDescription(icon: Image): void {
    const elements = this.container.querySelectorAll(`.description .${icon.className}`);

    elements.forEach((element: HTMLAnchorElement) => {
      const imageElement = this.createImage(icon.image);
      const textElement = this.createSpan(element.textContent);

      this.configureAnchor(element, icon.location, icon.altText, imageElement, textElement);
    });
  }

  private configureAnchor(element: HTMLAnchorElement, location: string, text: string, imageElement: HTMLImageElement, textElement: HTMLSpanElement): void {
    element.href = location;
    element.title = text;
    element.textContent = "";

    element.appendChild(imageElement);
    element.appendChild(textElement);
  }

  private createSpan(text: string): HTMLSpanElement {
    const result = document.createElement("span");
    result.textContent = text;

    return result;
  }

  private createImage(image: string): HTMLImageElement {
    const result = document.createElement("img");
    result.src = image;

    return result;
  }

  private addImage(className: string, image: string) {
    const images = this.container.querySelectorAll(`.icon .${className}`);
    images.forEach((img: HTMLImageElement) => {
      img.src = image;
    });
  }

  private addClickLocation(className: string, location: string) {
    const images = this.container.querySelectorAll(`.icon .${className}`);
    images.forEach((img: HTMLImageElement) => {
      img.parentElement.addEventListener("click", () => document.location.href = location);
      img.parentElement.title = location;
    });
  }

  private addText(className: string, altText: string) {
    const images = this.container.querySelectorAll(`.icon .${className}`);

    images.forEach((img: HTMLImageElement) => {
      var textElement = img.parentElement.querySelector(".text");
      textElement.textContent = altText;
    });
  }

  private get classes(): Image[] {
    return [
      {
        className: "experience-manager",
        location: "https://business.adobe.com/products/experience-manager/adobe-experience-manager.html",
        image: "./icons/experience-manager.svg",
        altText: "AEM",
        description: "Adobe Experience Manager 6.5"
      },
      {
        className: "java",
        location: "https://www.java.com",
        image: "./icons/java.svg",
        altText: "Java",
        description: "Java 11"
      },
      {
        className: "jquery",
        location: "https://jquery.com",
        image: "./icons/jquery.svg",
        altText: "jQuery",
      },
      {
        className: "javascript",
        location: "https://developer.mozilla.org",
        image: "./icons/javascript.svg",
        altText: "JavaScript",
      },
      {
        className: "typescript",
        location: "https://www.typescriptlang.org",
        image: "./icons/typescript.svg",
        altText: "TypeScript",
      },
      {
        className: "sass",
        location: "https://sass-lang.com",
        image: "./icons/sass.svg",
        altText: "SASS",
        description: "CSS with Superpowers",
      },
      {
        className: "react",
        location: "https://reactjs.org",
        image: "./icons/react.svg",
        altText: "React",
      },
      {
        className: "graphql",
        location: "https://graphql.org",
        image: "./icons/graphql.svg",
        altText: "GraphQL"
      },
      {
        className: "ruby",
        location: "https://www.ruby-lang.org",
        image: "./icons/ruby.svg",
        altText: "Ruby"
      },
      {
        className: "postgresql",
        location: "https://www.postgresql.org",
        image: "./icons/postgresql.svg",
        altText: "PostgreSQL",
      },
      {
        className: "github",
        location: "https://github.com",
        image: "./icons/github.svg",
        altText: "GitHub",
      },
      {
        className: "docker",
        location: "https://www.docker.com",
        image: "./icons/docker-2.svg",
        altText: "Docker",
      },
      {
        className: "bash",
        location: "https://www.gnu.org/software/bash/manual/bash.html",
        image: "./icons/code-2.svg",
        altText: "Bash Shell"
      },
      {
        className: "confluence",
        location: "https://www.atlassian.com/software/confluence",
        image: "./icons/confluence.svg",
        altText: "Atlassian Confluence",
      },
      {
        className: "asp",
        location: "https://docs.microsoft.com/en-us/iis/web-hosting/getting-started/deploying-a-classic-asp-server",
        image: "./icons/asp.svg",
        altText: "Microsoft ASP 3.0",
        description: "Microsoft ASP 3.0",
      },
      {
        className: "sql-server",
        location: "https://www.microsoft.com/en-us/sql-server",
        image: "./icons/sql.svg",
        altText: "SQL Server",
        description: "Microsoft SQL Server",
      },
      {
        className: "csharp",
        location: "https://dotnet.microsoft.com/languages/csharp",
        image: "./icons/csharp.svg",
        altText: "C#",
        description: "Microsoft C# 10.0",
      },
      {
        className: "nodejs",
        location: "https://nodejs.org",
        image: "./icons/node-js.svg",
        altText: "Node.js",
      },
      {
        className: "gitlab",
        location: "https://about.gitlab.com",
        image: "./icons/gitlab.svg",
        altText: "GitLab",
      },
      {
        className: "sendgrid",
        location: "https://sendgrid.com",
        image: "./icons/sendgrid.svg",
        altText: "SendGrid",
      },
      {
        className: "selenium",
        location: "https://www.selenium.dev",
        image: "./icons/selenium.png",
        altText: "Selenium",
      },
      {
        className: "cucumber",
        location: "https://cucumber.io",
        image: "./icons/cucumber.png",
        altText: "Cucumber",
      },
      {
        className: "paypal",
        location: "https://www.paypal.com/ca/home",
        image: "./icons/paypal.svg",
        altText: "PayPal",
      },
      {
        className: "digitalocean",
        location: "https://www.digitalocean.com",
        image: "./icons/digitalocean.svg",
        altText: "DigitalOcean",
      },
      {
        className: "prettier",
        location: "https://prettier.io",
        image: "./icons/prettier.png",
        altText: "Prettier",
      },
      {
        className: "eslint",
        location: "https://eslint.org/",
        image: "./icons/eslint.svg",
        altText: "ESLint",
      },
      {
        className: "checkstyle",
        location: "https://maven.apache.org/plugins/maven-checkstyle-plugin/",
        image: "./img/checkstyle.png",
        altText: "Apache Maven Checkstyle Plugin",
      },
      {
        className: "jenkins",
        location: "https://www.jenkins.io",
        image: "./icons/jenkins.png",
        altText: "Jenkins",
      },
      {
        className: "thomson-reuters",
        location: "https://www.jenkins.io",
        image: "./icons/jenkins.png",
        altText: "Jenkins",
      },
      {
        className: "aws",
        location: "https://aws.amazon.com",
        image: "./icons/aws.png",
        altText: "Amazon Web Services",
      },
    ]
  }
}

class Image {
  className: string;
  location: string;
  image: string;
  // TODO: Rename to text
  altText: string;
  description?: string;
}

export default Icons;
