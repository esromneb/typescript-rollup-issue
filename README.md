# Typescript Issues

Can't figure out how to get typescript tests to work with Rollup.

# Works
* I am able to bundle `src/main.ts` and include it from public/index.html with `make dev`
* I am able to test against `public/bundle.es5.mjs` but that forces my test to be javascript not typescript.
* `./node_modules/.bin/mocha test/test2.mjs`

# Does not work
* `./node_modules/.bin/mocha test/test.ts`



# Module Issues
* https://stackoverflow.com/questions/58273824/typescript-cannot-use-import-statement-outside-a-module


# Changes

* Moved to use Jest for testing with ts-jest to transform .ts to .js

* Changed the build to become a two-stage build. The first pass runs `tsc` to compile to `typescript-dist`, then we run `rollup` to output a bundle to `public/bundle.js`

* Added a TypeScript watcher.

* `npm build` doesn't run the tests, it packages up.

* `npm watch` watches using TypeScript, plus watches the output of `typescript-dist` to recompile the final bundle.

* Added a couple of Jest transforms to allow for importing CSS and JSON as an example.

* Added the return type to `normalize` to stop TypeScript complaining.

* If you have VSCode, install the vscode-jest plugin to get real-time tests running with little green ticks and debug mode.