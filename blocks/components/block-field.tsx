import React, {FC, useMemo} from "react";
import {BlockFieldConfig} from "@/types/block-factory";
import {TextField, MediaField} from "./fields";

const FieldsDictionary: { [key: string]: any } = {
  'text': TextField,
  'media': MediaField
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
    <DynamicField label={config.label ?? config.name}
                  onChange={onChange}
                  value={value}
                  placeholder={""}
    />
  </div>
}
