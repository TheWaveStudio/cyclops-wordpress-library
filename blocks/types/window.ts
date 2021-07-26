import {BlockFactoryConfig} from "./block-factory";

export {};

declare global {
  interface Window {
    CY: {
      blocks: BlockFactoryConfig[]
    }
  }
}
