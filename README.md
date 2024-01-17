# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### My setup notes.

```
# install yarn
yarn install

# installed nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# add to bash
touch ~/.bash_profile
source ~/.bashrc

# install latest node
nvm install 21
nvm use 21

# create react app inside
yarn create react-app . typescript

#woohoo! (creates /public dir)
yarn start

# create production build (create /build dir)
yarn build

# add homepage field to package.json 
"homepage": "https://myusername.github.io",

# install gh-pages
yarn add gh-pages

# add scripts to package.json, DON'T do the master thing
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",

# PUSH THIS BRANCH
git push

# change the deploy branch to gh-pages
# Settings > Pages > Build and Deployment > change branch to gh-pages, folder to /root

# deploy the site from this branch
yarn deploy

# now the site is up and running!

# install typescript
yarn add typescript @types/node @types/react @types/react-dom @types/jest

# other typescript setup stuff
# convert .js --> .tsx
touch repo/tsconfig.json

# add this 
{
    "compilerOptions": {
        "jsx": "react-jsx"
    },
    "include": [
        "src",
        "src/declaration.d.ts",
    ]
}

touch repo/src/declaration.d.ts

# add this
declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

```
