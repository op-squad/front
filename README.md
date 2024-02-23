# \[Medical Assistand Front-end\]

\[Build status badge\]

Front End application oriented to ...

## Technologies used

- [React](https://reactjs.org/) single page application
- Routing done using [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
- State management via [Redux](https://redux.js.org/)
- ... \[other technologies\]

### Architecture diagrams

... \[add diagrams here\]

## Setup

1. Clone the repository and install the dependencies

```bash
pnpm install
```

2. Start the frontend application locally

```bash
pnpm run dev
```

## Available commands

- `pnpm run dev`: Start the app locally in your development environment.
- `pnpm run lint`: Run linter.
- `pnpm run lint:fix`: Run linter with --fix.

## Development flow

Here are the steps of the process you need to follow in order to integrate new code or a new feature into the project:

1. Transition the status of the card that describes the feature you will be working on in your issue tracker.
1. Create a local branch to get started using git: `git checkout -b <your_name>/<feature|bug|enhancement|doc>/<short-description>`. For instance, this could be a branch name: `wakil/landing_page/add_navigation_bar`.
   - The first part indicates your name, while the second part indicates the feature you're working on followed by some short description.
1. Develop the new feature while doing atomic commits to your local branch using `git commit`.
1. After you are done, you might want to do a `git rebase develop` in case new changes were integrated, so your new commits are applied on top of that and you make sure everything still works.
1. Now you are ready to create a new Pull Request with your changes, but before, push your changes to origin using `git push -u origin <your-branch-name>`.
1. Your code should be reviewed, you can update the branch with new changes after you get some feedback.
1. After the Pull Request is approved, merge it using the UI on Github (you can also remove the branch directly from the same page, which is also convenient). Your code will land to the `develop` branch (and eventually deployed into the staging environment).
1. Finally, remember to transition your issue tracker card to `Done`.

## CSS preprocessor

This project implements Tailwindcss.

## Linter

In order to lint the code, the project uses [ESLint](https://eslint.org/).

If you want to run the linter just type:

```bash
pnpm run lint
```

It's also convenient to integrate the linter warnings into your code editor, there are many plugins available for ESLint depending on your text editor used.

## State management

\[For now, thinking of using Redux as a state management solution, or Zustand, implementing an event dispatch/handler methodology.\]
