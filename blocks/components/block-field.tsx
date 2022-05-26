import React, {FC, useMemo} from "react";
import {BlockFieldConfig} from "@/types/block-factory";
import {
  CtaField,
  ColorsPaletteField,
  TextField,
  MediaField,
  RichTextField,
  DatePickerField,
  AddableField,
  SelectField,
  TypesSelectionField,
  LastTypesField,
  CheckboxField,
  MultiSelectField
} from "./fields";


const FieldsDictionary: Record<string, FC<any>> = {
  'text': TextField,
  'checkbox': CheckboxField,
  'media': MediaField,
  'richText': RichTextField,
  'datePicker': DatePickerField,
  'cta': CtaField,
  'colors': ColorsPaletteField,
  'select': SelectField,
  'itemsSelection': TypesSelectionField,
  'lastTypes': LastTypesField,
  'multiSelect': MultiSelectField,
}

export const BlockField: FC<{
  config: BlockFieldConfig,
  onChange: (...args: any[]) => void,
  value: any
}> = props => {

  const {config, value, onChange} = props;
  const DynamicField = useMemo(() => {
    return FieldsDictionary[config.field ?? 'text'] ?? FieldsDictionary.text;
  }, [config?.type])

  return <div className="field-wrapper"
              style={{flex: "0 1 " + (config.width ?? 100) + '%'}}
  >
    {!config?.children?.length
      ? <DynamicField label={config.label ?? config.name}
                      onChange={onChange}
                      value={value}
                      placeholder={""}
                      customAttributes={config.attributes ?? {}}
      />
      : <AddableField config={config}
                      onChange={onChange}
                      value={value}
                      customAttributes={config.attributes ?? {}}
      />
    }
  </div>
}
