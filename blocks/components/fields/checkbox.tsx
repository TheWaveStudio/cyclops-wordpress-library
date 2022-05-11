import React, {FC} from "react";
import {CheckboxControl} from "@wordpress/components";
import {CheckboxFieldProps} from "@/types/edit-fields";
import {FieldWrapper} from "./wrapper";

export const CheckboxField: FC<CheckboxFieldProps> = props => {
  const {value, placeholder, onChange, label = '', ...attrs} = props;

  return <div className="CyclopsCheckbox">
    <FieldWrapper label=''>
      <CheckboxControl checked={value}
                       label={label}
                       onChange={onChange}
                       {...attrs}
      />
    </FieldWrapper>
  </div>
}

export default CheckboxField;
