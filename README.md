# Cheekwood

Cheekwood is a web application that allows a local Navhille museum to create events that users can interact with.

This application was a group project created as part of Nashville Software School's Full Stack Web Development Bootcamp. It was the first group project in the curriculum utilizing the ReactJS library. All whiteboarding, planning, and coding were completed within a 9 day sprint.

## Contribution Highlights

[Erica Clayton](https://github.com/erica-clayton) - Event list with filtering capabilities. FAQ page with reactive accordian to show/hide different sections.

[Mariana Mena](https://github.com/Mary-Mena21) - User profile views to edit user account info and display/edit favorite events. Map and About Us views, footer component with reactive photos that can be liked.

[Robert Stroud](https://github.com/r-stroud) - Navbar, CSS styles throughout, event card with reactive favorite/unfavorite funtionality. Functionality to sort events in the event list.

[Jeremy White](https://github.com/JeremyWhiteDev) - Forms for creating and editing events. Event details view with pagination of comments. Functionality to edit/delete comments. Comments modal. Routes for staff/patrons.

## Table of Contents

- [Cheekwood](#gizmo)
  - [Contribution Highlights](#contribution-highlights)
  - [Technologies Used](#technologies-used)
  - [Challenges Faced](#challenges-faced)
  - [Current Features](#current-features)
    - [For Un-Authorized users:](#for-un-authorized-users)
    - [For Authorized Users:](#for-authorized-users)
  - [Possible Future Features](#possible-future-features)
  - [How to Install and Run](#how-to-install-and-run)
  - [Credits](#credits)
  - [Links](#links)

## Technologies Used

<a href="https://reactjs.org/" title="React JS"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React JS" width="50px" height="50px"></a>
<a href="https://reactrouter.com/en/main" title="React Router"><img src="https://reactrouter.com/_brand/react-router-mark-color.svg" alt="React Router" width="50px" height="50px"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript"><img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="JavaScript" width="50px" height="50px"></a>
<a href="https://www.w3.org/TR/CSS/" title="CSS"><img src="https://github.com/get-icon/geticon/raw/master/icons/css-3.svg" alt="CSS" width="50px" height="63px"></a>
<a href="https://www.npmjs.com/" title="npm"><img src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="npm" width="50px" height="50px"></a>

## Challenges Faced

- Routes and react router - Making sure that certain components (navbar, footer) were displayed on every view properly
- Reactivity based on dropdowns - On the event list, we wanted there to be a dropdown to filter the list based on event types. Having never implemented such a feature, this turned out to be a much more challenging for the team than expected and took a lot of effort.
- Structural layout of components - This being the first React project of this scale, the team struggled in the architecture of components. Finding the balance between simple, easy to understand components vs the introduction of compex relations between components, deeply nested components, and difficult to follow prop drilling.
- Time constraints -

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
