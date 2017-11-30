# Code Wars Kata Day 3: Insert Dashes - November 29, 2017

Write a function insertDash(num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

Pseudocode:
Convert the number to a string (which is really an array).
Loop through array, get value of string (parseInt).
Determine if it is odd or even - (% operator modulus/remainder when dividing by 2).
Compare the current number(letter) to the previous.
If both are odd, concatenate a string and add dash.  If not, just add letter.
