import React, {FC} from "react";
import {CheckboxControl} from "@wordpress/components";
import {CheckboxFieldProps} from "@/types/edit-fields";
import {FieldWrapper} from "./wrapper";

export const CheckboxField: FC<CheckboxFieldProps> = props => {
  const {value, placeholder, label = '', ...attrs} = props;

  return <FieldWrapper label={label}>
    <CheckboxControl checked={value}
                     label={label}
                     {...attrs}
    />
  </FieldWrapper>
}

export default CheckboxField;
