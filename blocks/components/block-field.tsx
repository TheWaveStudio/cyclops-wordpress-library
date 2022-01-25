import React, {FC, useMemo} from "react";
import {BlockFieldConfig} from "@/types/block-factory";
import {CtaField, TextField, MediaField, RichTextField, DatePickerField, AddableField} from "./fields";

const FieldsDictionary: { [key: string]: any } = {
  'text': TextField,
  'media': MediaField,
  'richText': RichTextField,
  'datePicker': DatePickerField,
  'cta': CtaField,
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
        />
        : <div>
          <AddableField config={config}
                        onChange={onChange}
                        value={value}
          />
          {JSON.stringify(value)}
        </div>
    }
  </div>
}
