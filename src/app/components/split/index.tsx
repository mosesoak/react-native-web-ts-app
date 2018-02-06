// Rigs React-Native-Web file splitting to work with TS by re-casting the class loaded by the .js file

import Split from './js-index';
import { ISplitProps } from './split-types';
export default Split as new () => React.Component<ISplitProps, any>;
