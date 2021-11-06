'use strict';

// CSS
import "./index.scss";

// JavaScript
import ContactMe from "./contactMe";
import Messages from "./messages";
import Icons from "./icons";

// Configuration
import CONFIGURATION from "./configuration.development";

new ContactMe(CONFIGURATION.apiOrigin);
new Messages().messages.forEach(message => console.log(message));

const container = document.querySelector("body");
new Icons(container);
