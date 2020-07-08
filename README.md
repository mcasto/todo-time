# todo-time

Like many, I spend a lot of time in VS Code. 
A while back, I started using the [Todo+ extension](https://github.com/fabiospampinato/vscode-todo-plus), and I love it.

I especially like its time-tracking functionality.

In my estimation, the only necessity it lacks is the ability to summarize. For instance, to say, "22 hours and 41 minutes spent on this project so far."

So, I wrote this little command-line utility. It takes one parameter, the path to a Todo+ file. It uses a regex to look for @lasted(duration), then it tallies those into the results it prints to the console.

Now, when I'm working on a project, in projects.json, I add:

```
  scripts:{
    ...
    "time-spent": "todo-time '/path/to/Todo+ file'",
    ...
  }
```

Then, from the built-in terminal in VS Code, I can type: `npm run time-spent` or `yarn time-spent` and get a summary of the time I've spent on the project.

If I want to get really fancy, I can have multiple Todo+ files, each one related to a different aspect of development, and I can build a "time-spent:aspect" script.

I have used this little utility on a few projects so far and found it very useful. I hope you'll find it useful too.

## Installation
`npm i -g todo-time`

## Usage
From the command line, type `todo-time '/path/to/Todo+ file'` or build it into your project's package.json scripts as I mentioned above.

You can also explicitly declare the path as `todo-time --path '/path/to/Todo+ file'`.

If you don't enter a path, it will try to find a file named "TODO" in your current working directory.

Before it does anything else, it verifies that the path variable points to an actual file. If it doesn't, it throws an error.
