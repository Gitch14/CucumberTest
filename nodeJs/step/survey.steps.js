const { Given, When, Then } = require('cucumber');
const assert = require('assert');

Given('the user opens the survey page', function () {
        console.log("the user opens the survey page");
});

When('the user first question {string}', function (question) {
    console.log(question);
});

When('the user answer f {string}', function (answer) {
    console.log(answer);
});

When('the user second question {string}', function (question) {
    console.log(question);
});

When('the user answer s {int}', function (year) {
    console.log(year);
});

When('the user clicks button {string}', function (button) {
    console.log(button);
});

Then('the user sees the message {string}', function (message) {
    console.log(message);
    assert.strictEqual(message, "Thank you! Survey was saved");

});
