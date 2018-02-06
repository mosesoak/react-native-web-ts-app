## React Native Web + Typescript + Platform-specific File Extensions

Writing a hybrid native & web app has gotten much easier thanks to [react-native-web](https://github.com/necolas/react-native-web).

It is also now much easier to set up the project to use Typescript thanks to [react-native-typescript-transformer](https://github.com/ds300/react-native-typescript-transformer).

## Problem

However, one key piece of React Native functionality doesn't work with Typescript: platform-specific file extensions like:

* `MyComponent.web.tsx`
* `MyComponent.ios.tsx`
* `MyComponent.android.tsx`

using a magic import like `import MyComponent from './MyComponent';`

Typescript is confused because:
* it currently expects a concrete code path based on real imports to be able to follow in order to perform its typechecking...
* even if it handled the magic imports it still wouldn't know which files to follow since they all live side by side in the code base...
* most accurately the inferred type would be a `union` of all of the component files...

The ideal solution would be an npm module extending Tyepscript to be able to do all of this automagically.

## Manual Workaround: .js shim file

In the short term I've figured out that it's possible to use the platform extension feature with Typescript, albeit involved and not ideal. The directory structure can be seen in this repo in [the example 'Split' component](https://github.com/mosesoak/react-native-web-ts-app/tree/master/src/app/components/split) located in `src/components/split` which contains its own docs.

The general idea is that you do an import/export in a shim .js file which allows React Native Web to perform its magic at build time, then make an index.tsx file that imports from the shim and casts to a shared component type that's been broken out into a `.d.ts` file.
