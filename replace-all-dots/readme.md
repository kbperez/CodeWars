The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task

Fix the bug so we can all go home early.

https://www.codewars.com/kata/fixme-replace-all-dots/train/javascript

I approached this by looking up the documentation on .replace.  The initial solution only replaced the first letter with a "-".  I realized that I could make the replacement global with a "g" after the ".".  However, then I got all "-"s.  I then realized that I had something wrong so tried putting the "." in in quotes; this worked on the first "." but not the second.  I tried a for loop.  It was looking messy.  Finally, I asked a classmate for a hint.  He enlightned me that "." was a special character and that I had to escape it.  So, I looked that up and used a / before the "." to escape it.
