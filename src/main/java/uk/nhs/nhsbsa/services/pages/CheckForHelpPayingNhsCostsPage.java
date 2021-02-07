package uk.nhs.nhsbsa.services.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.nhs.nhsbsa.services.utility.Utility;

public class CheckForHelpPayingNhsCostsPage extends Utility {

    private static final Logger log = LogManager.getLogger(CheckForHelpPayingNhsCostsPage.class.getName());

    @FindBy (id = "next-button")
    WebElement _startButton;
    @FindBy (xpath = "//label[@id='label-wales']")
    WebElement _walesRadioButton;
    @FindBy (id = "next-button")
    WebElement _nextButton;
    @FindBy (id = "dob-day")
    WebElement _dayField;
    @FindBy (id = "dob-month")
    WebElement _monthField;
    @FindBy (id = "dob-year")
    WebElement _yearField;
    @FindBy (id = "label-yes")
    WebElement _yesRadioButton;
    @FindBy (id = "label-no")
    WebElement _noRadioButton;
    @FindBy (id = "FREE-heading")
    WebElement _youGetHelpWithNhsCostsText;

    //this method will click on start button
    public void clickOnStartButton () {
        Reporter.addStepLog("Click on Start button" + _startButton.toString() + "<br>");
        log.info("Click on Start button" + _startButton.toString());
        clickOnElement(_startButton);
    }
    //this method will select wales radio button
    public void selectWalesRadioButton () {
        Reporter.addStepLog("Select Wales radio button" + _walesRadioButton.toString() + "<br>");
        log.info("Select Wales radio button" + _walesRadioButton.toString());
        clickOnElement (_walesRadioButton);
    }
    //this method will click on next button
    public void clickOnNextButton () {
        Reporter.addStepLog("Click on next button" + _nextButton.toString() + "<br>");
        log.info("Click on next button" + _nextButton.toString());
        clickOnElement(_nextButton);
    }
    //this method will enter day in day field
    public void enterDayOnDayField (String day) {
        Reporter.addStepLog("Enter day on day field" + day + _dayField.toString() + "<br>");
        log.info("Enter day on day field" + day + _dayField.toString());
        sendTextToElement(_dayField, day);
    }
    //this method will enter month in month field
    public void enterMonthOnMonthField (String month) {
        Reporter.addStepLog("Enter month on month field" + month + _monthField.toString() + "<br>");
        log.info("Enter month on month field" + month + _monthField.toString());
        sendTextToElement(_monthField,month);
    }
    //this method will enter year in year field
    public void enterYearOnYearField (String year) {
        Reporter.addStepLog("Enter year on year field" + year + _monthField.toString() + "<br>");
        log.info("Enter year on year field" + year + _monthField.toString());
        sendTextToElement(_yearField, year);
    }
    //this method will click on yes radio button
    public void selectYesRadioButton () {
        Reporter.addStepLog("Select yes radio button" + _yesRadioButton.toString() + "<br>");
        log.info("Select yes radio button" + _yesRadioButton.toString());
        clickOnElement(_yesRadioButton);
    }
    //this method will click on no radio button
    public void selectNoRadioButton () {
        Reporter.addStepLog("Select no radio button" + _noRadioButton.toString() + "<br>");
        log.info("Select no radio button" + _noRadioButton.toString());
        clickOnElement(_noRadioButton);
    }
    // this method will get result whether user get help or not
    public void userShouldGetResultWhetherUserGetHelpOrNot() {
        Reporter.addStepLog("User should get result whether user get help or not" + _youGetHelpWithNhsCostsText.toString() + "<br>");
        log.info("User should get result whether user get help or not" + _youGetHelpWithNhsCostsText.toString());
        Assert.assertEquals("You get free:", getTextFromElement(_youGetHelpWithNhsCostsText));
    }
}
