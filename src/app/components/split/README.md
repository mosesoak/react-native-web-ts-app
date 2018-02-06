## RNW + TS platform-specific file extension workaround

Breaking components into versions by extension is not yet supported with Typescript. I've gotten it to work (in that the right version is picked during compilation while others are excluded) but it requires a somewhat ugly import/export process, modeled by the files in this folder.

1. The shared type for the split component is broken out into a `.d.ts` file so that type information can be imported without directly importing platform-specific component files:

- `split-types.d.ts`
- `Split.web.tsx`
- `Split.native.tsx`
  - (could be further split into `.ios.tsx` & `.android.tsx`)

2. Two files are used to do the import, a js shim that allows the RNW magic import to take place without Typescript trying to follow it, then an `index.tsx` file that manually casts the resulting import to the shared type.

- `index.tsx`
- `js-index.js`
