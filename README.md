This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

This project requires a Flickr API in order to use. Apply for a noncommercial API at: https://www.flickr.com/services/apps/create/apply/.

After setting up your Flickr API key, create config.js file within the source (src) folder. This file is in .gitignore and will not be pushed to your Github project. The key should be exported like so:

`const apiKey = '//API key should be pasted here';`

`export default apiKey;`

After the config.js file is set up, the project is ready to run.  

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
