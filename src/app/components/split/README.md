## React Native Web platform-specific extensions + Typescript

React Native and React Native Web provide magic platform-splitting functionality based on special file extensions. Just the component for the target platform is compiled at build time.

Follow these practice:

* Put the component in a folder
* Break out the shared interface into a separate `.d.ts` file.
* Name the web/default file `index.tsx` (not `index.web.tsx`)
* Name the native file `index.native.tsx`
* For android splitting, add `index.android.tsx` which will override `.native`

The `.d.ts` file enables VS Code code hinting for JSX props, and helps manage the project cross-platform by ensuring the consumers of the component have a unified interface.

When developing for native, be mindful that Go To Definition will jump to the web file, since the typescript plugin is not designed to know about the special extensions.
