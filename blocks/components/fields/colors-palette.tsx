import React, {FC} from "react";
import { ColorPalette } from "@wordpress/components";
import {GenericEditFieldProps} from "@/types/edit-fields";
import {FieldWrapper} from "./wrapper";

export const ColorsPaletteField: FC<GenericEditFieldProps> = props => {
    const {value, customAttributes, onChange, label = ""} = props
    return <FieldWrapper label={label}>
        <br/>
        <ColorPalette
          colors={customAttributes?.colors ?? []}
          value={value}
          disableCustomColors={customAttributes?.customColors ?? false}
          onChange={onChange} />
    </FieldWrapper>
}

export default ColorsPaletteField;
