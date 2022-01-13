import React from "react";
import {registerBlockType} from "@wordpress/blocks";
// @ts-ignore
import {useBlockProps} from "@wordpress/block-editor";

import {BlockFactoryConfig} from "@/types/block-factory";
import {BlockWrapper} from "./components/block-wrapper";

const blockFactory = (config: BlockFactoryConfig) => {

  const {name, fields} = config;
  const attributes = fields.reduce((acc, {type, name}) => {
    return {...acc, [name]: {type,}}
  }, {})

  return registerBlockType(config.blockName, {
    apiVersion: 2,
    title: config.name,
    // description: __('An example block', 'cy'),
    category: 'layout',
    icon: 'smiley',
    supports: {html: true},
    attributes,
    edit: (props) => {

      const blockProps = useBlockProps({
        className: config.blockName
      })

      return (
          <div {...blockProps}>
            <BlockWrapper blockName={name}
                          config={config}
                          {...props}
            />
          </div>
      )
    }
  })
}

window?.CY?.blocks?.forEach?.(config => {
  const block = blockFactory(config);
  console.log({block});
})


