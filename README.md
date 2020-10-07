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

!["URLs Page"](https://github.com/ilaksono/Tiny-App/blob/master/docs/urls-page.png)
!["Specific URL Edit Page"](https://github.com/ilaksono/Tiny-App/blob/master/docs/urls-show-page.png)

## Documentation

The following helper functions can be found in /helpers/dbHelpers.js:

- `idHelper(str, obj)`: returns true when id(6 char string) is found in db, else false
- `urlsForUser(str, obj)`: returns obj of urls created by a user, when given user id and url database
- `urlPrefix(str)`: returns corresponding prefix string to correct URLs, depending on user's input of URL prefix, starting with `http://`, `wwww.`, or lack of either.
- `getEmailById(str, obj)`: returns corresponding email with user id present in user database, else empty string
- `hashed(str)`: returns hashed password using bcrypt hashSync method
- `generateRandomString()`: returns a randomly generated 6 character(a-z | 0-9) string

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- md5
