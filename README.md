# NotFair car listing
Demo: https://notfair.now.sh

Storybook demo: https://notfair-storybook.now.sh


<img src="https://raw.githubusercontent.com/nick511/notfair/master/screenshot.png"  />


Install dependencies
```sh
yarn
```

Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.
```sh
yarn start
```

Build the app for production to the build folder.
```sh
yarn build
```

To show testing coverage.
```sh
yarn coverage
```

Run storybook
```sh
yarn storybook
```

---
## Notes
* Using Sass and CSS modules (instead of CSS naming conventions, like BEM)
* Jest/Enzyme for testing (most components are covered)
* Storybook for UI components
* Add LogRocket service to log global, ErrorBoundary, errorMiddleware error messages


## Improvement
* Use more efficient list component for car list (to deal large list)
* Use code splitting with React Router
