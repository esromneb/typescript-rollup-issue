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
