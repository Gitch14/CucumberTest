Feature: Survey

  Scenario: Filling out and submitting a survey
    Given the user opens the survey page
    When the user first question "U are good?"
    And the user answer f "Yes"
    When the user second question "How old are u?"
    And the user answer s 18
    And the user clicks button "click"
    Then the user sees the message "Thank you! Survey was saved"
