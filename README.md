This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## React Native Web + Typescript

This is kind of ugly and isn't a full solution in the sense that it doesn't keep the file-splitting magic under the hood, but it seems to work!

Breaking components into versions by extension is not yet supported with Typescript. :scream:

I've gotten it to work (in that the right version is picked during compilation while others are excluded) but it requires a somewhat ugly import/export process, modeled by the files in this folder.

Details:

* The component is provided per platform `Split.web.tsx` and `Split.native.tsx` (native can be further split into `.ios.tsx` and `.android.tsx`)
* These each share typing information broken out into `split-types.d.ts`
* `js-index.js` imports and reexports the component without any extension, e.g. `from './Split` (_not_ `./Split.web`)
* `index.tsx` imports the component from that file, plus the types, and then reexports it cast to its correct interface
