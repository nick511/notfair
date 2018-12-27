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

Show testing coverage.
```sh
yarn coverage
```

Run storybook
```sh
yarn storybook
```

Run bundle analyzer
```sh
yarn analyze
```

---
## Highlights
* Integrate immer.js for immutable state
* Using Sass and CSS modules (instead of CSS naming conventions, like BEM)
* Route-based code splitting (by React.lazy)
* Jest/Enzyme for testing (most components are covered)
* Storybook for UI components
* Add LogRocket service to log error messages (including global, ErrorBoundary, errorMiddleware)


## Improvement
* Use more efficient list component for car list (to deal large list)
* ~~Use code splitting with React Router~~
