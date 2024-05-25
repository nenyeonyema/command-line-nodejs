This scripts uses the nodejs commander module to get todo tasks as arguments from the user.
The first parameter the node executable
The second parameter is the script or file name
The third parameter is the command that will run the script
The fourth parameter is the name of the to be created file where your arguments/tasks will be stored.
The other parameters can be more or more of your arguments as you wish.

Example:
>>> node commander.js append read cook wash-dishes do-laundary
So here: node: the executable
         commander.js: the script name
         append: command name that executes the function in the script
         read: this will be the filename which will store your task in json format
         cook wash-dishes do-laundary: are your todo task arguments