# Get Object Deep Prop

Check and get object prop.

## Install

```sh
npm install get-obj-deep-prop
```

```sh
yarn add get-obj-deep-prop
```

## Usage

#### Schema

```
getObjDeepProp([ object, [ props, [ defaultValue]])
```

### Example

```js
import getObjDeepProp from "get-obj-deep-prop";
```

```js
const userObj = {
  user: {
    username: "John",
    information: {
      firstname: "John",
      lastname: "Doe",
      social: {
        facebook: "johhnn",
        twitter: "jhnn"
      }
    }
  }
};
```

```js
const userFacebookUsername = getObjDeepProp(
  userObj,
  "user.information.social.facebook"
);

console.log(userFacebookUsername); // "johhnn"
```

---

## Why should I use

Because you might have to check.

```js
const userObj = {
  user: {
    username: "John",
    information: {
      firstname: "John",
      lastname: "Doe"
    }
  }
};
```

```js
const userFacebookUsername = userObj.user.information.social.facebook;
// Uncaught TypeError: Cannot read property 'facebook' of undefined
// ↓ This code doesn't work ↓
console.log(userFacebookUsername);
```

You have to do

```js
let userFacebookUsername;
if (
  userObj &&
  userObj.user &&
  userObj.user.information &&
  userObj.user.information.social &&
  userObj.user.information.social.facebook
) {
  userFacebookUsername = userObj.user.information.social.facebook;
}

console.log(userFacebookUsername); // undefined
```

### If you use _getObjDeepProp_

No errors, false returns, and the code continues to run.

```js
const userFacebookUsername = getObjDeepProp(
  userObj,
  "user.information.social.facebook"
);
console.log(userFacebookUsername); // false
```

#### Default Value

```js
const userFacebookUsername = getObjDeepProp(
  userObj,
  "user.information.social.facebook",
  "Anonim"
);
console.log(userFacebookUsername); // "Anonim"
```
