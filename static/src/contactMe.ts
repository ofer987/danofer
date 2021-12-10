// CSS
import "./contactMe.scss";

// JavaScript
import { load } from "recaptcha-v3";
import * as EmailValidator from "email-validator";

const FORM_OPENED = "contact-me-opened";
const FORM_CLOSED = "contact-me-closed";
const SEND_EMAIL = "SEND_EMAIL";

const SEND_MESSAGE_DOMAIN = "https://api.danofer.com";
const SITE_KEY = "6LfPAQEcAAAAAF8y_H96eJndrVs1Gm1aGtgO8oJs";

interface ServerResponse {
  okay: boolean;
  message: string;
}

class ContactMe {
  pageBlocker: HTMLElement;
  form: HTMLFormElement;
  openFormButton: HTMLInputElement;
  closeFormButton: HTMLButtonElement;
  submitButton: HTMLInputElement;
  introduction: HTMLElement;
  apiOrigin: string

  get senderName(): string {
    return (this.form.querySelector("input#name") as HTMLInputElement)
      .value
      .trim();
  }

  get senderEmailAddress(): string {
    var element = this.form.querySelector("input#email-address") as HTMLInputElement;

    var email = element.value.trim();

    if (!EmailValidator.validate(email)) {
      throw "email is invalid";
    }

    return email;
  }

  get message(): string {
    return (this.form.querySelector("textarea#message") as HTMLTextAreaElement)
      .value
      .trim();
  }

  constructor(apiOrigin: string) {
    this.apiOrigin = apiOrigin.trim();
    this.form = document.getElementById("contact-me-form") as HTMLFormElement;
    this.openFormButton = document.getElementById("contact-me-toggle-button") as HTMLInputElement;
    this.closeFormButton = document.querySelector(".close") as HTMLButtonElement;
    this.submitButton = document.getElementById("contact-me-submit-button") as HTMLInputElement;
    this.pageBlocker = document.querySelector(".page-blocker") as HTMLElement;
    this.introduction = document.querySelector("#introduction") as HTMLElement;

    this.init();
  }

  init(): void {
    this.openFormButton.addEventListener("click", () => {
      if (this.form.className === FORM_CLOSED) {
        this.disablePage();
        this.openForm();
      }
    });

    this.closeFormButton.addEventListener("click", () => {
      if (this.form.className === FORM_OPENED) {
        this.enablePage();
        this.closeForm();
      }
    });

    this.submitButton.addEventListener("click", async (event) => {
      event.preventDefault();

      let response = await this.sendMessage();

      alert(response.message);

      if (response.okay) {
        this.enablePage();
        this.closeForm();
      }
    });

    document.addEventListener("keydown", (event: KeyboardEvent) => {
      if (this.form.className != FORM_OPENED) {
        return;
      }

      if (event.code == "Escape") {
        this.enablePage();
        this.closeForm();
      }
    });
  }

  async sendMessage(): Promise<ServerResponse> {
    const recaptcha = await load(SITE_KEY, { autoHideBadge: true });
    const token = await recaptcha.execute(SEND_EMAIL);

    var url = `${this.apiOrigin}/messages/create`;

    var body = {
      reCaptchaToken: recaptcha.getSiteKey(),
      senderName: this.senderName,
      senderEmailAddress: this.senderEmailAddress,
      message: this.message,
    };

    var response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      mode: "cors",
    });

    return await {
      okay: response.ok,
      message: await response.text()
    };
  }

  enablePage(): void {
    this.pageBlocker.classList.add("blocker-disabled");
    this.pageBlocker.classList.remove("blocker-enabled");
    this.introduction.classList.remove("blocker-enabled");
  }

  disablePage(): void {
    this.pageBlocker.classList.add("blocker-enabled");
    this.pageBlocker.classList.remove("blocker-disabled");
    this.introduction.classList.add("blocker-enabled");
  }

  openForm(): void {
    this.form.classList.add(FORM_OPENED);
    this.form.classList.remove(FORM_CLOSED);
  }

  closeForm(): void {
    this.form.classList.add(FORM_CLOSED);
    this.form.classList.remove(FORM_OPENED);
  }

  async sendEmail(response: Response): Promise<void> {
    var blob = await response.blob();
    var body = await blob.text();

    alert(`Body is (${JSON.parse(body)})`);
    alert("An email has just been sent");
  }
}

export default ContactMe;
