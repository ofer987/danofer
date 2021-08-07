class Messages {
    private existingMessages: Array<string>;

    constructor() {
        this.existingMessages = ["Hello Dan", "Hello Ron"];
    }

    get messages(): Array<string> {
        return this.existingMessages;
    }
}

export default Messages;
