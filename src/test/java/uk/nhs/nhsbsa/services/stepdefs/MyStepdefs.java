package uk.nhs.nhsbsa.services.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.nhs.nhsbsa.services.pages.CheckForHelpPayingNhsCostsPage;

public class MyStepdefs {
    @Given("^I am on check for help paying NHS cost page$")
    public void iAmOnCheckForHelpPayingNHSCostPage() {
    }

    @And("^I click on \"([^\"]*)\" button$")
    public void iClickOnButton(String arg0)  {
        new CheckForHelpPayingNhsCostsPage().clickOnStartButton();
    }

    @And("^I click on \"([^\"]*)\"$")
    public void iClickOn(String arg0)  {
        new CheckForHelpPayingNhsCostsPage().clickOnNextButton();
    }

    @And("^I enter day \"([^\"]*)\" month \"([^\"]*)\" and year \"([^\"]*)\" is my date of birth$")
    public void iEnterDayMonthAndYearIsMyDateOfBirth(String day, String month, String year)  {
        new CheckForHelpPayingNhsCostsPage().enterDayOnDayField(day);
        new CheckForHelpPayingNhsCostsPage().enterMonthOnMonthField(month);
        new CheckForHelpPayingNhsCostsPage().enterYearOnYearField(year);

    }

    @And("^I enter \"([^\"]*)\" as I am living with my partner$")
    public void iEnterAsIAmLivingWithMyPartner(String arg0){
        new CheckForHelpPayingNhsCostsPage().selectYesRadioButton();
    }

    @And("^I enter \"([^\"]*)\" as me and my partner not claim any benefits or tax credits$")
    public void iEnterAsMeAndMyPartnerNotClaimAnyBenefitsOrTaxCredits(String arg0)  {
        new CheckForHelpPayingNhsCostsPage().selectNoRadioButton();
    }

    @And("^I enter \"([^\"]*)\" as not have any injury or illness caused by serving in armed force$")
    public void iEnterAsNotHaveAnyInjuryOrIllnessCausedByServingInArmedForce(String arg0) {
        new CheckForHelpPayingNhsCostsPage().selectNoRadioButton();
    }

    @And("^I enter \"([^\"]*)\" as me and my partner are not living permanently in a care home$")
    public void iEnterAsMeAndMyPartnerAreNotLivingPermanentlyInACareHome(String arg0)  {
        new CheckForHelpPayingNhsCostsPage().selectNoRadioButton();
    }

    @And("^I enter \"([^\"]*)\" as me and my partner have more than £(\\d+) in savings, investments or property$")
    public void iEnterAsMeAndMyPartnerHaveMoreThan£InSavingsInvestmentsOrProperty(String arg0, int arg1)  {
        new CheckForHelpPayingNhsCostsPage().selectYesRadioButton();
    }

    @Then("^I should get a result of whether I will get help or not$")
    public void iShouldGetAResultOfWhetherIWillGetHelpOrNot() {
        new CheckForHelpPayingNhsCostsPage().userShouldGetResultWhetherUserGetHelpOrNot();
    }

    @When("^I click \"([^\"]*)\" country I live in$")
    public void iClickCountryILiveIn(String arg0)  {
        new CheckForHelpPayingNhsCostsPage().selectWalesRadioButton();
    }
}
