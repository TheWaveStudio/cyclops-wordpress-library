import {BlockFieldConfig} from "@/types/block-factory";

export type GenericEditFieldProps = {
  onChange: (value: string) => void,
  placeholder?: string,
  value: any,
  label?: string
};

export type EditFieldProps = GenericEditFieldProps;

export type MediaFieldProps = GenericEditFieldProps & {
  onChange: (...args: any[]) => void
};

export type AddableFieldProps = GenericEditFieldProps & {
  config: BlockFieldConfig,
  value: any[],
  onChange: (...args: any[]) => void
};

export type AddableFieldItemProps = {
  config: BlockFieldConfig,
  onChange: (...args: any[]) => void,
  index: number,
  value: any
};

export type TimeEditFieldProps = GenericEditFieldProps & {
  onChange: (content: Date) => void
};
