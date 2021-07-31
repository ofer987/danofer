'use strict';
import "./index.scss";

const FORM_OPENED = "contact-me-opened";
const FORM_CLOSED = "contact-me-closed";

function ContactMe() {
    this.form = document.getElementById("contact-me");
    this.toggleFormButton = document.getElementById("toggle-form-button");

    this.init();
}

ContactMe.prototype.init = function() {
    var self = this;

    this.toggleFormButton.addEventListener("click", function() {
        if (self.form.className === FORM_CLOSED) {
            self.openForm(self.form);
        } else {
            self.closeForm(self.form);
        }
    });
}

ContactMe.prototype.openForm = function(form) {
    form.className = FORM_OPENED;
}

ContactMe.prototype.closeForm = function(form) {
    form.className = FORM_CLOSED;
}

new ContactMe();
