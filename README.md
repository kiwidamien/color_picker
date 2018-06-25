# Color picker

## Motivation

This is a simple project designed to show how you can use React, and its model for propogating changes in state. It is a simple "color picker", but introduces a custom component for demonstration purposes. A live demo of what we are building is [available here](https://kiwidamien.github.io/color_picker/)

The custom component is 
- a slider
- an input box
- and a label, converting the input to hexadecimal
The value of the component can be changed by either altering the slider, or the text in the input box. React will ensure that the three values stay consistent with one another.

## Getting React

## Deploying on Github

1. Setup a new, empty repo on github. I will assume you called it **color_picker**
2. In your project folder, initialize a new (EMPTY!) github repo. Remember to replace USERNAME with your actual username on github
```bash
# initialize the repo
git init
# set up the remote
git remote add origin https://github.com/USERNAME/color_picker.git
git add .
git commit -m "Initial commit"
git push --set-upstream origin master
```
3. We need to setup github pages. Run the following commands
```bash
npm install gh-pages
npm run build
```
4. Now edit `package.json`. The three lines that have been added have been bolded
<pre>
{
  "name": "colorpicker",
  "version": "0.1.0",
  "private": true,
  <b>"homepage": "https://USERNAME.github.io/color_picker/",</b>
  "dependencies": {
    "gh-pages": "^1.2.0",
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "react-scripts": "1.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    <b>"predeploy": "npm run build",</b>
    <b>"deploy": "gh-pages -d build",</b>
    "eject": "react-scripts eject"
  }
}
</pre>
Note that the homepage is **not** the URL of your github repo. The github repo has the URL
```
https://github.com/USERNAME/color_picker/
```
but the URL for your project
```
https://USERNAME.github.io/color_picker/
```
If you use the wrong one, your page will not show up!
5. In the terminal, you can deploy your app with
```bash
npm run deploy
```

If you make changes to your app, simply rerun `npm run deploy` to update.
