$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/EligibilityChecker.feature");
formatter.feature({
  "line": 1,
  "name": "Eligibility Checker",
  "description": "As a person from Wales\r\nI need to know what help I can get with my NHS costs\r\nSo that I can get the treatment I need",
  "id": "eligibility-checker",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10506419700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User enter circumstances in to eligibility check tool and should get a result of whether I will get help or not",
  "description": "",
  "id": "eligibility-checker;user-enter-circumstances-in-to-eligibility-check-tool-and-should-get-a-result-of-whether-i-will-get-help-or-not",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on check for help paying NHS cost page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Start\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click \"Wales\" country I live in",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Next\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter day \"1\" month \"3\" and year \"1951\" is my date of birth",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on \"Next\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"Yes\" as I am living with my partner",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \"Next\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"No\" as me and my partner not claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"Next\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter \"No\" as not have any injury or illness caused by serving in armed force",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \"Next\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"No\" as me and my partner are not living permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on \"Next\" button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"Yes\" as me and my partner have more than £16000 in savings, investments or property",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on \"Next\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should get a result of whether I will get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnCheckForHelpPayingNHSCostPage()"
});
formatter.result({
  "duration": 295375100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOnButton(String)"
});
formatter.result({
  "duration": 1061766100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wales",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iClickCountryILiveIn(String)"
});
formatter.result({
  "duration": 461524300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 783869301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    },
    {
      "val": "3",
      "offset": 23
    },
    {
      "val": "1951",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.iEnterDayMonthAndYearIsMyDateOfBirth(String,String,String)"
});
formatter.result({
  "duration": 617419000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOnButton(String)"
});
formatter.result({
  "duration": 778242599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterAsIAmLivingWithMyPartner(String)"
});
formatter.result({
  "duration": 482327100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOnButton(String)"
});
formatter.result({
  "duration": 814200200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterAsMeAndMyPartnerNotClaimAnyBenefitsOrTaxCredits(String)"
});
formatter.result({
  "duration": 384143400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOnButton(String)"
});
formatter.result({
  "duration": 784994600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterAsNotHaveAnyInjuryOrIllnessCausedByServingInArmedForce(String)"
});
formatter.result({
  "duration": 430256899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOnButton(String)"
});
formatter.result({
  "duration": 745748301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterAsMeAndMyPartnerAreNotLivingPermanentlyInACareHome(String)"
});
formatter.result({
  "duration": 446383200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOnButton(String)"
});
formatter.result({
  "duration": 795770501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 9
    },
    {
      "val": "16000",
      "offset": 51
    }
  ],
  "location": "MyStepdefs.iEnterAsMeAndMyPartnerHaveMoreThan£InSavingsInvestmentsOrProperty(String,int)"
});
formatter.result({
  "duration": 467296800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOnButton(String)"
});
formatter.result({
  "duration": 689108199,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldGetAResultOfWhetherIWillGetHelpOrNot()"
});
formatter.result({
  "duration": 188152899,
  "status": "passed"
});
formatter.after({
  "duration": 3558862300,
  "status": "passed"
});
});