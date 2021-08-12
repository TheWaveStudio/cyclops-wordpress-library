import React, {FC} from "react";
import {RichText} from "@wordpress/block-editor";
import {GenericEditFieldProps} from "@/types/edit-fields";
import {FieldWrapper} from "./wrapper";

export const RichTextField: FC<GenericEditFieldProps> = props => {
  const {value, placeholder, onChange, label = ""} = props;

  return <FieldWrapper label={label}>
    <RichText value={value}
              placeholder={placeholder}
              onChange={onChange}/>
  </FieldWrapper>

}

export default RichTextField;
