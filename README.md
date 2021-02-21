[![Netlify Status](https://api.netlify.com/api/v1/badges/c364675b-0f09-4399-bd4c-c930e710e26e/deploy-status)](https://app.netlify.com/sites/cra-ts/deploys)
[![codecov](https://codecov.io/gh/maximsan/cra-ts/branch/main/graph/badge.svg?token=OGFOYAC3VK)](https://codecov.io/gh/maximsan/cra-ts)
[![Build Status](https://travis-ci.com/maximsan/cra-ts.svg?branch=main)](https://travis-ci.com/maximsan/cra-ts)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/maximsan/cra-ts)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![GitHub issues](https://img.shields.io/github/issues/maximsan/cra-ts)

### Main scripts 📄

```bash
  "start" - start app
  "build" - build app
  "test" - run tests
  "test:coverage:ci:codecov" - run test and submit codecoverage to codecov
  "format" - format code with prettier
  "lint" - check your code with eslint
  "lint:fix" - fix your code with eslint
  "cm" - run commitizen to create a good commit
```

To commit message you have to write following commands
```bash
   git add .
   git commit 
```
then follow commitizen prompts and write a good commit

### Main technologies ℹ️

- react
- react-app eslint + some additional rules
- prettier
- codecov with Travis CI

### Publish with netlify button 🚀

You need to have an account on [netlify](https://www.netlify.com/)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/maximsan/cra-ts#REACT_APP_LOGO=https://live.staticflickr.com/65535/50695950941_526e15d2f1.jpg&REACT_APP_TITLE="React%20app")

If you click this button, it’ll authenticate you in Netlify and you'll have to choose a repository name. <br/>
Netlify will automatically create a new repo for you that looks exactly like this one. <br/>
Next, it will build and deploy the new site on Netlify bringing you to the site dashboard when the build is completed.

### Env variables 📝

 - **REACT_APP_LOGO** - here you can pass a link to your app logo
 - **REACT_APP_TITLE** - here you can pass your app title
