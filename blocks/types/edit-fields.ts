export type GenericEditFieldProps = {
  onChange: (value: string) => void,
  placeholder?: string,
  value: any,
  label?: string
};

export type EditFieldProps = GenericEditFieldProps;
export type MediaFieldProps = GenericEditFieldProps & { onChange: (...args: any[]) => void };
export type AddableFieldProps = GenericEditFieldProps & { value: any[] };
