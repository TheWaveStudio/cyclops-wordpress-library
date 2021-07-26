import React, {useState} from 'react';
import {
  WFTextField,
  WFRichTextField,
  WFMediaField,
  WFTimeField,
  WFAddableField
} from "./index";
import {FieldWrapper} from "../FieldWrapper";

const fieldComponents = {
  'text': WFTextField,
  'richText': WFRichTextField,
  'media': WFMediaField,
  'datePicker': WFTimeField,
  'addable': WFAddableField
}

export const WFField = ({fieldConfig = {}, onChange, value}) => {
  const {name, field: type, width = 100, children = []} = fieldConfig;

  const isAddable = (type === 'addable');
  const DynamicComponent = fieldComponents[type || 'text'] ?? fieldComponents['text'];

  if (isAddable) {
    if (children.length === 0) {
      console.error("WF Error: Addable field must have children fields.");
      return <></>;
    } else if (!Number(value)) {
      onChange(0);
    }
  }

  return (
      <FieldWrapper fieldTitle={name} fieldWidth={width}>
        {isAddable
            ? <WFAddableField children={children}
                              onChange={onChange}
                              value={value}/>

            : <DynamicComponent value={value}
                                onChange={onChange}/>
        }
      </FieldWrapper>
  )
}
