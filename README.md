# Turner-Javascript-Challenge-Week03
Weekly Challenge #3- Update Code with JavaScript to create random password generator

## Project Description

In this week's challenge we take an existing web form and added the necessary JavaScript coding to allow the form to create custom, randomly generated passwords based on several user inputs.


## Challenges

There were multiple issues to overcome in creating this seemingly simple web form.

### Number of Characters

The initial prompt asks the user to choose a password length between 8 and 128 characters. This was a fairly simple add, we just needed to capture the number choice, and output appropriate error messages for number choices less than 8 or greater than 128.

### Types of Characters Selected

We also wanted to give the user the option of choosing which types of characters to include in the password, with the four options being Numbers, Special Characters (@,$,%, etc.) Upper Cased Letters, and lower cased letters.

We solved this issue by creating individual arrays containing each set of characters. We built an if/else conditional statement based the users selection of each of the four types. If the user chooses no on every type, an error message is displayed stating no character types have been selected.

Within the if/else statement we built for loops with random character selection coding to select random characters from the array. Based on the user selections, we concatinate the appropriate characters into one array for the for loop to choose from. As an example, if the user elects all types except for Numbers, we concatinate the remaining arrays (Special Characters, Upper Cased, and lower cased) into one array for the random generator to select characters.

We output these choices into a new array, then use .join to turn that array into a string we can output to the form on the webpage.

The programming for this site is easily scalable for a variety of random generating tasks, and once the initial for loop programming was complete, the addition of the remaining necessary for loops was easily accomplished.