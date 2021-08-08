// CSS
import "./contactMe.scss";

// JavaScript
import { load } from "recaptcha-v3";

const FORM_OPENED = "contact-me-opened";
const FORM_CLOSED = "contact-me-closed";
const SEND_EMAIL = "SEND_EMAIL";

const SEND_MESSAGE_DOMAIN = "http://localhost:5000";
const SITE_KEY = "6LdxCdMbAAAAAKKewSc8LJLO4eHHwUl8BCX1OMkq";

class ContactMe {
    form: HTMLFormElement;
    toggleFormButton: HTMLInputElement;
    submitButton: HTMLInputElement;

    constructor() {
        this.form = document.getElementById("contact-me-form") as HTMLFormElement;
        this.toggleFormButton = document.getElementById("contact-me-toggle-button") as HTMLInputElement;
        this.submitButton = document.getElementById("contact-me-submit-button") as HTMLInputElement;

        this.init();
    }

    init(): void {
        var self = this;
        this.toggleFormButton.addEventListener("click", function() {
            if (self.form.className === FORM_CLOSED) {
                self.openForm();
            } else {
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

        return await this.sendMessage(token, "Ron Ofer", "ronofer@live.ca", "Hi Dan!");
    }

    async sendMessage(reCapchaToken: string, senderName: string, senderEmailAddress: string, message: string): Promise<string> {
        var url = `${SEND_MESSAGE_DOMAIN}/verify/${reCapchaToken}/messages/create`;

        var body = {
            reCaptchaToken: reCapchaToken,
            senderName: senderName,
            senderEmailAddress: senderEmailAddress,
            message: message,
        };

        var response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
            mode: "cors",
        });

        return await response.text();
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
