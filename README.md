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

The user is prompted to answer the folllowing questions: (All screen shots are in the access folder)

- The user is prompted to enter the number of letters from 8-128,
 ![image](https://user-images.githubusercontent.com/89395824/151697774-9376a98d-4135-4590-9e6a-75f1f7092cd2.png)

- The user is prompted to enter if they would want lowercase letters,
 

- The user is prompted to enter if they would want uppercase letters,
  

- The user is prompted to enter if they would want numbers,
 

In the first question, if the user enters a number outside of the given range (8-128), the user is prompted with a wrong password length.
![image](https://user-images.githubusercontent.com/89395824/151697989-3c132b27-4bbe-4874-b996-9d486cd948b3.png)


A password is displayed after the questions have been answered.

Access:

![image](https://user-images.githubusercontent.com/89395824/151698004-3a533641-1f88-424a-9d1b-68c0564fa93a.png)



All screen shots are linked in the assets folder


## Links
[deployed-site] (https://oyindami.github.io/Passwrod-creator-/)
[github-repo] (https://github.com/oyindami/Passwrod-creator-)

## Contact me

[Github] (https://github.com/oyindami)
