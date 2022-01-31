import React, {FC} from "react";

type FieldWrapperProps = { label: string }

export const FieldWrapper: FC<FieldWrapperProps> = (props) => {
  const {label, children} = props;
  return <div>
    {!!label?.length && <label className="field-label">{label}</label>}
    {!!children && children}
  </div>
}

export default FieldWrapper;
