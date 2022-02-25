# prettier-precommit-for-js
[pre-commit](https://pre-commit.com/) is a git hook that runs everytime prior to making a commit. Setting up prettier code formatter with `pre-commit` will format all your javascript code inside your local repository according to the prettier code formatter prior to any commit. This allows to maintain the same code formatting across all local repositories of multiple team members working on the same project.

Steps for setting up `pre-commit` to apply `prettier` formatting to `javascript` code inside codebase are as follows:

## Step 1: Install python and pip
- Install latest version of python 3 from [here](https://www.python.org/downloads/). (**Please remember to check the** ***'Add Python 3.x to PATH'*** **checkbox when installing, it is not checked by default.**) 
- Run `python --version` in terminal or powershell to make sure python was installed.
- Run `pip -v` to check if pip was installed.

Reference: https://phoenixnap.com/kb/how-to-install-python-3-windows

## Step 2: Install pre-commit (Ignore this step if you already have these installed)
- Run `pip install pre-commit` in a terminal, pre-commit should get installed (globally).
- Run `pre-commit --version` to make sure pre-commit was installed.

Reference: https://pre-commit.com/#installation

## Step 3: Setup pre-commit in your local repository
- Create a file inside your local repository's root folder named `.pre-commit-config.yaml`. Copy the below content inside this folder.
```
- repo: https://github.com/pre-commit/mirrors-prettier
  rev: "" # Use the sha or tag you want to point at
  hooks:
    - id: prettier
```
- Open terminal inside your local repository's root folder and run the below two command one after another.
  - `pre-commit install`
  - `pre-commit autoupdate` 

References: 
- https://pre-commit.com/#quick-start, 
- https://prettier.io/docs/en/precommit.html#option-3-pre-commithttpsgithubcompre-commitpre-commit.

## It's Done!!!
To check if prettier code formatting with pre-commit is working make some changes to the javascript code and do a `git add .`. Now try to make a commit `git commit -m 'testing pre-commit'`. You will see prettier running on the terminal and show a message `Success` or `Failed`. If it shows `Failed` it means your code was refactored to follow prettier code formatting and you can now make your commit. If it showed `Success` then your code didn't break any prettier formatting rules and the commit was made.

