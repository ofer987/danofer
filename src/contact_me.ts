'use strict';

const FORM_OPENED = "contact-me-opened";
const FORM_CLOSED = "contact-me-closed";

class ContactMe {
    form : HTMLFormElement;
    toggleFormButton : HTMLButtonElement;

    constructor() {
        this.form = document.getElementById("contact-me") as HTMLFormElement;
        this.toggleFormButton = document.getElementById("toggle-form-button") as HTMLButtonElement;

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
    }

    openForm() : void {
        this.form.className = FORM_OPENED;
    }

    closeForm() : void {
        this.form.className = FORM_CLOSED;
    }
}

new ContactMe();
