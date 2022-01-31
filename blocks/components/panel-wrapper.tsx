import React, {FC, useEffect} from "react";
import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import {BlockFactoryConfig, BlockFieldConfig} from "@/types/block-factory";
import {BlockField} from "./block-field";
import {attr} from "cheerio/lib/api/attributes";

export type BlockWrapperProps = {
  field: BlockFieldConfig,
  setAttributes: Function,
  onChangeColor: Function,
  attributes: any,
};

export const PanelWrapper: FC<BlockWrapperProps> = props => {
  const {
    field,
    onChangeColor,
    setAttributes,
    attributes
  } = props;

  return (
    <Panel>
      <PanelBody title={field.label} initialOpen={ true }>
        <PanelRow>  
          <BlockField
            config={{...field, "label": ''}}
            onChange={(content) => {
              if(field.field === 'colors'){
                onChangeColor(content)
              }
              setAttributes({...attributes, [field.name]: content})
            }}
            value={attributes[field.name] ?? ""}
          />
        </PanelRow>
      </PanelBody>
    </Panel>
  )
}

export default PanelWrapper;
