# Tweeter Project by IL

Tweeter is a simple, single-page Twitter clone. Uses express with Ajax and jQuery scripting with css, scss and html.

## Purpose

**_BEWARE:_ This application was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Deployed on GCP**
**Accessible by internet network at:**
[ian.laksono.net/](http://ian.laksono.net/) OR
[tiny-app-291120.uk.r.appspot.com](http://tiny-app-291120.uk.r.appspot.com)

## Requires/Imports

**express**
API for creating server environment and request, response CRUD methods

**body-parser**
Interpret keys and values in request data to object format

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `npm start` command.

## Final Product

!["Home Page - Large"](https://github.com/ilaksono/tweeter/blob/master/docs/tweets-page-big.png)
!["Specific URL Edit Page"](https://github.com/ilaksono/tweeter/blob/master/docs/tweets-page-small.png)

## Documentation

**The following functions can be found in /public/scripts/client.js:**

- `createTweetElement(obj)`: returns JQ object constructed from object's data properties
- `timeSincePost(num)`: calculate time since post, returns string to be appended in script
- `renderTweets(arr)`: use loop iteration to append all tweets to html section container

**/public/scripts/composer-anchor-toggle.js:**

- `scrollFunction()`: reveals to-top button when reaching 170px from top of document, else hides the button.

**/public/scripts/composer-char-counter.js:**

- `colorCharCounter()`: adds red color to number display when exceeding char limit, assigns number to html element

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- md5
