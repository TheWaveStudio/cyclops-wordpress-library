import React, {FC} from "react";
import {CheckboxControl} from "@wordpress/components";
import {CheckboxFieldProps} from "@/types/edit-fields";
import {FieldWrapper} from "./wrapper";

export const CheckboxField: FC<CheckboxFieldProps> = props => {
  const {value, placeholder, label = '', ...attrs} = props;

<<<<<<< HEAD
  return <FieldWrapper label={label}>
    <CheckboxControl {...!!value && {checked: value}}
=======
  return <FieldWrapper label=''>
    <CheckboxControl checked={value}
>>>>>>> 7a709438eb4072f0e8112ad503917806486fdb9f
                     label={label}
                     {...attrs}
    />
  </FieldWrapper>
}

export default CheckboxField;
