// Rigs React-Native-Web file splitting to work with TS by casting to the shared interface.
// (Note: require() syntax does not work with the RN bundler)

import Split from './js-index';
import { ISplitProps } from './split-types';
export default Split as new () => React.Component<ISplitProps, any>;
