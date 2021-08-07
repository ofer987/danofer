'use strict';

// CSS
import "./index.scss";

// JavaScript
import ContactMe from "./contactMe";
import Messages from "./messages";

new ContactMe();
new Messages().messages.forEach(message => console.log(message));
