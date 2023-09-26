const { Given, When, Then } = require('cucumber');
const assert = require('assert');

Given('the user opens the survey page', function () {
        console.log("Opening the survey page");
    return 'success';
});

When('the user first question {string}', function (question) {
    console.log("Answering the first question: " + question);
    return 'success';
});

When('the user answer f {string}', function (answer) {
    console.log("Answering with: " + answer);
    return 'success';
});

When('the user second question {string}', function (question) {
    console.log("Answering the second question: " + question);
    return 'success';
});

When('the user answer s {int}', function (year) {
    console.log("Answering with: " + year);
    return 'success';
});

When('the user clicks button {string}', function (button) {
    console.log("Clicking the button: " + button);
    return 'success';
});

Then('the user sees the message {string}', function (message) {
    console.log("Verifying the message: " + message);
    assert.strictEqual(message, "Thank you! Survey was saved");
    return "pending";
});
