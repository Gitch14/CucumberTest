package com.example.step;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class SurveySteps {

    @Given("the user opens the survey page")
    public void openSurveyPage() {
        System.out.println("Open page");
    }

    @When("the user first question {string}")
    public void firstQuestion(String question) {
        System.out.println("Answers the question: " + question);
    }

    @When("the user answer f {string}")
    public void fAnswer(String answer) {
        System.out.println(answer);
    }

    @When("the user second question {string}")
    public void secondQuestion(String question) {
        System.out.println("Answers the question: " + question);
    }

    @When("the user answer s {int}")
    public void sAnswer(int year) {
        System.out.println(year);
    }
    @When("the user clicks button {string}")
    public void clickButton(String button) {
        System.out.println(button);
    }


    @Then("the user sees the message {string}")
    public void seeMessage(String message) {
        System.out.println(message);
        Assert.assertEquals("Thank you! Survey was saved", message);
    }
}
