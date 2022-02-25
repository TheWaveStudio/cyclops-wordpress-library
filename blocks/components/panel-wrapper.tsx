import React, {FC, useEffect} from "react";
import {Panel, PanelBody, PanelRow} from '@wordpress/components';
import {BlockFactoryConfig, BlockFieldConfig} from "@/types/block-factory";
import {BlockField} from "./block-field";
import {attr} from "cheerio/lib/api/attributes";
import BlockWrapper from "@/components/block-wrapper";

export type BlockWrapperProps = {
  label: string,
  fields?: BlockFieldConfig[],
  setAttributes: Function,
  onChangeColor: Function,
  attributes: any,
};

export const PanelWrapper: FC<BlockWrapperProps> = props => {
  const {
    label = "",
    fields = [],
    onChangeColor,
    setAttributes,
    attributes
  } = props;
  
  return (
    <Panel>
      <PanelBody title={label} initialOpen={true}>
        {fields.map(field => (
          <PanelRow>
            <BlockField
              config={{...field}}
              onChange={(content) => {
                if (field.field === 'colors') {
                  onChangeColor(content)
                }
                setAttributes({...attributes, [field.name]: content})
              }}
              value={attributes[field.name] ?? ""}
            />
          </PanelRow>
        ))}
      </PanelBody>
    </Panel>
  )
}

export default PanelWrapper;
