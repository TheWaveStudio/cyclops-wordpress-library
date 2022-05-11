import React, {FC} from "react";
import { SelectControl } from "@wordpress/components";
import {GenericEditFieldProps} from "@/types/edit-fields";
import {FieldWrapper} from "./wrapper";

export const SelectField: FC<GenericEditFieldProps> = props => {
    const {value, customAttributes, onChange, label = ""} = props
  
    return <div className="CyclopsSelect">
      <FieldWrapper label={label}>
          <SelectControl
            label={customAttributes?.placeholder ?? ''}
            value={value}
            options={customAttributes?.options ?? []}
            multiple={customAttributes?.multiple ?? false}
            onChange={onChange} />
      </FieldWrapper>
    </div>
}

export default SelectField;
