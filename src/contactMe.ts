// CSS
import "./contactMe.scss";

// JavaScript
import { load } from "recaptcha-v3";

const FORM_OPENED = "contact-me-opened";
const FORM_CLOSED = "contact-me-closed";
const SEND_EMAIL = "SEND_EMAIL";

const SITE_VERIFICATION_URL = "https://www.google.com/recaptcha/api/siteverify";
// const SITE_VERIFICATION_URL = "/email.json";
const SITE_KEY = "6LdxCdMbAAAAAKKewSc8LJLO4eHHwUl8BCX1OMkq";

class ContactMe {
    form : HTMLFormElement;
    toggleFormButton : HTMLButtonElement;
    submitButton : HTMLButtonElement;

    constructor() {
        this.form = document.getElementById("contact-me-form") as HTMLFormElement;
        this.toggleFormButton = document.getElementById("contact-me-toggle-button") as HTMLButtonElement;
        this.submitButton = document.getElementById("contact-me-submit-button") as HTMLButtonElement;

        this.init();
    }

    init() : void {
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

            async function validate() : Promise<void> {
                const recaptcha = await load(SITE_KEY);
                const token = await recaptcha.execute(SEND_EMAIL);

                // var request = new XMLHttpRequest();
                // request.addEventListener("load", () => {
                //     alert(this.responseText);
                //     debugger;
                //     // this.responseText;
                // });
                // request.onreadystatechange = () => {
                //     if (request.readyState == 4 && request.status == 200) {
                //         alert("success");
                //     }
                // };
                // request.open("POST", `${SITE_VERIFICATION_URL}?secret=${SECRET}&response=${token}`);
                // request.setRequestHeader("Access-Control-Allow-Origin", "*");
                // request.setRequestHeader("Host", "www.google.com");
                // request.setRequestHeader("Origin", "https://www.google.com");
                // request.send();

                // var form = new FormData();
                // form.append("secret", SECRET);
                // form.append("response", token);

                // var headers = new Headers();
                // headers.append("Content-Security-Policy", "default-src 'self'; script-src https://www.google.com");
                // headers.append("Cross-Origin-Resource-Policy", "cross-origin");
                // debugger;

                var response = await fetch(`${SITE_VERIFICATION_URL}?secret=${SECRET}&response=${token}`, { 
                    method: "POST",
                    mode: "no-cors",
                    credentials: "include",
                    cache: "no-cache",
                    redirect: "follow",
                });

                debugger;
                var json = await response.json();
                // debugger;
                // alert(JSON.parse(json));

                // setTimeout(() => {}, 2000);
                // var text = await response.json();
                // alert(text);
                // alert(response.ok);
                // debugger;
            }

            validate();

            // validate().then(token => {
            //     alert(`Got the token: (${token})`);
            //     // debugger;
            //     var form = new FormData();
            //     form.append("secret", SECRET);
            //     form.append("response", token);
            //
            //     fetch(SITE_VERIFICATION_URL, { method: "POST", body: form, mode: "no-cors" });
            // }).then(response => {
            //     debugger;
            //     alert(response);
            //     // debugger;
            // }).then(response => {
            //     debugger;
            //     alert(response);
            // }).catch(_reason => {
            //     debugger;
            // });
            // debugger;

                // alert(`Using token (${token})`)
                // var form = new FormData();
                // form.append("secret", SECRET);
                // form.append("response", token);
                // const response = await fetch(SITE_VERIFICATION_URL, { method: "POST", body: form, mode: "no-cors" });
                // alert(response.redirected);
                // alert(response.ok);

                // self.sendEmail(response);
                // console.log(response.status);

                // alert(response.ok);

            // }

            // validate();
        });
    }

    openForm() : void {
        this.form.className = FORM_OPENED;
    }

    closeForm() : void {
        this.form.className = FORM_CLOSED;
    }

    // submit() : void {
    //     this.sendEmail();
    // }

    async sendEmail(response : Response) : Promise<void> {
        // alert(`Status is (${response.statusText})`);
        // var body = response.body;
        var blob = await response.blob();
        var body = await blob.text();

        alert(`Body is (${JSON.parse(body)})`);
        alert("An email has just been sent");
    }
}

export default ContactMe;
