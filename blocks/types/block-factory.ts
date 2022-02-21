export type BlockFieldConfig = {
  children?: BlockFieldConfig[];
  field: string;
  filterFunction?: string;
  name: string;
  type: string;
  width?: number;
  label?: string;
  attributes: any;
};

export type BlockFactoryConfig = {
  name: string,
  blockName: string,
  fields: BlockFieldConfig[],
  parent: string[],
  innerBlocks: string[]
  blocksControl: { title: string, fields: BlockFieldConfig[] }[]
};
