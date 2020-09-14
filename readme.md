# Selenium Scripts With Mocha

## Overview

Here are some basic scripts using Selenium webdriver for web-testing.

* `Selenium` interacts with the web elements.
* `Mocha` provides the test structure with `describe`, `before`, `after`, and `it`.
* `Node.js` provides the assertion library.
* `chromedriver.exe` allows us to use Chrome for testing.  Firefox and IE are also available, but not in this demo.

## Creation Steps

1. Create a folder for your project.  Run `npm init` to create a new npm project.
2. Run [`bb-nodeproxy`](https://bbgithub.dev.bloomberg.com/NDIS-NetSec/nodeproxy/releases) to setup internet proxies.
3. Run `npm install --save selenium-webdriver` to install Selenium.
4. Run `npm install --save chromedriver` to install chromedriver.
5. Run `npm install --save mocha` to install Mocha.


## Running This Project

```
npm install
npx mocha .\scripts\Opendoor_PartialFill.js
```
