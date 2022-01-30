## User story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Criteria from the user

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Description

This project is designed for a user to be able to view a password after answering a series of prompts

The user is prompted to answer the folllowing questions:

- The user is prompted to enter the number of letters from 8-128,
  ![enterpassword](../Password-creator-Javascript/Assets/enter.password.png)

- The user is prompted to enter if they would want lowercase letters,
  ![lowercase](../Password-creator-Javascript/Assets/req.lowercase.png)

- The user is prompted to enter if they would want uppercase letters,
  ![uppercase](../Password-creator-Javascript/Assets/req.lowercase.png)

- The user is prompted to enter if they would want numbers,
  ![numbercase](../Password-creator-Javascript/Assets/req.numbers.png)

In the first question, if the user enters a number outside of the given range (8-128), the user is prompted with a wrong password length.

![wrong-length](../Password-creator-Javascript/Assets/wrongpasswordlength.png)

A passweod is displayed after the questions have been answered.

Access:
![password](../Password-creator-Javascript/Assets/password.png)

## Links
[deployed-site] (https://oyindami.github.io/Passwrod-creator-/)
[github-repo] (

## Contact me

[Github] (https://github.com/oyindami)
