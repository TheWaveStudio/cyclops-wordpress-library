export type BlockFieldConfig = {
  children?: BlockFieldConfig[];
  field: string;
  filterFunction?: string;
  name: string;
  type: string;
  width?: number;
  label?: string;
};

export type BlockFactoryConfig = {
  name: string,
  blockName: string,
  fields: BlockFieldConfig[]
};
