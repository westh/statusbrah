



<p align="center">
  <img src="./docs/img/logo.900bf76c.png" width="200">
</p>



<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
</p>



"Statusbrah." is an open source status page based on [Vue.js](https://vuejs.org/) and [ElementUI](https://github.com/ElemeFE/element). It is designed to be simple whilst still being costumisable.



Check out the [demo here.](https://westh.github.io/statusbrah/)



### Quickstart

#### Install

```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Run your tests
```
npm run test
```

#### Lints and fixes files
```
npm run lint
```

#### Important files

This is a very quick rundown of which files you will need to modify in order to customise the status page to your liking.

- `src/systems.js`  should contain all the systems that you would like to be shown in the status page. Formating of this file can be deferred from the example given with the initial install~~, otherwise see below~~.

- `src/incidents.js`  should hold all your incidents. Be aware that for each new update to this file you will need to rebuild and deploy your webpage again. The format of each incident can be deferred from the example file that is included in the initial install~~, otherwise see a more detailed version below~~.

- `src/assets/logo.png`  is the main logo show at the top of the page. You can style it to your liking in  `src/App.vue`.

- `public/favicon-16x16.png` and `public/favicon-32x32.png` holds your favicons shown in the tab of your browser.

- `public/index.html`  contains the title of your project or company name shown in the browser tab.

  

### TODO

- Make a more complete README

- General cleanup

- Make a dynamic version with mongodb and nodejs API

  

