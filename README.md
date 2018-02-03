This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## React Native Web + Typescript

This is kind of ugly and isn't a full solution in the sense that it doesn't keep the file-splitting magic under the hood, but it seems to work!

The technique is "import both, then strip the native files":

```javascript
// TS won't let us use this voodoo...
// import Body from './body';

// So we import both files and then strip out the unwanted ones using Webpack during compile
import BodyIOS from './body.ios';
import BodyWeb from './body.web';
const Body = BodyWeb || BodyIOS;
```

I haven't figured out how to do this on the mobile side yet