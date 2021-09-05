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

class ContactMe {
    pageBlocker: HTMLElement;
    form: HTMLFormElement;
    toggleFormButton: HTMLInputElement;
    submitButton: HTMLInputElement;
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
        this.toggleFormButton = document.getElementById("contact-me-toggle-button") as HTMLInputElement;
        this.submitButton = document.getElementById("contact-me-submit-button") as HTMLInputElement;
        this.pageBlocker = document.querySelector(".page-blocker") as HTMLElement;

        this.init();
    }

    init(): void {
        var self = this;
        this.toggleFormButton.addEventListener("click", function() {
            if (self.form.className === FORM_CLOSED) {
                self.disablePage();
                self.openForm();
            } else {
                self.enablePage();
                self.closeForm();
            }
        });

        this.submitButton.addEventListener("click", (event) => {
            event.preventDefault();

            this.validate().then(value => {
                alert(value);
            });
        });
    }

    async validate(): Promise<string> {
        const recaptcha = await load(SITE_KEY);
        const token = await recaptcha.execute(SEND_EMAIL);

        try {
            return await this.sendMessage(token, this.senderName, this.senderEmailAddress, this.message);
        } catch (exception) {
            return exception;
        }
    }

    async sendMessage(reCaptchaToken: string, senderName: string, senderEmailAddress: string, message: string): Promise<string> {
        var url = `${this.apiOrigin}/messages/create`;

        var body = {
            reCaptchaToken: reCaptchaToken,
            senderName: senderName,
            senderEmailAddress: senderEmailAddress,
            message: message,
        };

        var response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            mode: "cors",
        });

        return await response.text();
    }

    enablePage(): void {
        this.pageBlocker.classList.add("blocker-disabled");
        this.pageBlocker.classList.remove("blocker-enabled");
    }

    disablePage(): void {
        this.pageBlocker.classList.add("blocker-enabled");
        this.pageBlocker.classList.remove("blocker-disabled");
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
