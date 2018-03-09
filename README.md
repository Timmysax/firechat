# firechat

Tutorial for a simple chat application using JavaScript and Firebase.

## Setting up

To complete this tutorial, you will need:

- NodeJS
- Firebase Tools
- A (preferably new) Firebase project
- A suitable text editor (Sublime Text, Vim, Emacs, VSCode, Atom, etc)
- Git (optional)

### Steps

- Clone this repository (or download the zipped source and extract it)
- Change into the project folder
- If you have not logged in before, run `firebase login` to log in to
  Firebase from your console.
- Run `firebase init` to set up your project
  - Select `Real-time Database` and `Firebase Hosting` on the list of required services
  - Select your project name when prompted
  - Make sure you don't overwrite the public folder!
- Edit the produced `database.rules.json` file and set the values of `.read`
  and `.write` to `true`.
- Once that is done, run `firebase deploy` to push the barebones version of    your app to Firebase Hosting.
- Get coding!

## Tutorial steps

An HTML/CSS template has been provided so you can focus on building out the
chat app. Feel free to tweak it as much as you like!

This is currently a two-step tutorial, and the completed code for each step
can be found on the appropriately named branch:

1. Basic chat functionality: on branch `basic-chat`
2. Anonymous authentication: on branch `anon-auth` (In progress)
