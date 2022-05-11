import React, {FC} from "react";
import {PlainText} from "@wordpress/block-editor";
import {GenericEditFieldProps} from "@/types/edit-fields";
import {FieldWrapper} from "./wrapper";

export const TextField: FC<GenericEditFieldProps> = props => {
  const {label = "", onChange, value, placeholder} = props;

  return <div className="CyclopsText">
    <FieldWrapper label={label}>
      <PlainText onChange={onChange}
                 value={value}
                 placeholder={placeholder}
      />
    </FieldWrapper>
  </div>
}

export default TextField;
