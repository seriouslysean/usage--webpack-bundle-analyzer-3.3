# Webpack Bundle Analyzer Usage

## Running the script

* Run `npm install` to install the required packages
* Run `npm run build` to compile the src/app.js script and run the bundle analyzer

### Notes

* Switch `import { get, nth } from 'lodash';` to `import { get, nth } from 'lodash-es';`
* Rerun `npm run build`
* Look at the difference in bundle size
* Install a new package (for instance, `npm install marked`) and add it to the app.js filee `import marked from 'marked';`
* Rerun `npm run build`
* Look at the difference in bundle size
