import React from "react";
// import {__} from "@wordpress/i18n";
import {registerBlockType} from "@wordpress/blocks";
import {BlockFactoryConfig} from "@/types/block-factory";
import {BlockWrapper} from "./components/block-wrapper";

const blockFactory = (config: BlockFactoryConfig) => {

  const {name, fields} = config;
  const attributes = fields.reduce((acc, {type, name}) => {
    return {...acc, [name]: {type, }}
  }, {})

  return registerBlockType(config.blockName, {
    title: config.name,
    // description: __('An example block', 'cy'),
    category: 'layout',
    icon: 'smiley',
    supports: {html: true},
    attributes,
    edit: (props) => (
        <>
          <BlockWrapper blockName={name}
                        config={config}
                        {...props}
          />
        </>
    ),
    save: (props) => {
      console.log('save', {props})
      return <div>Hello!</div>;
    }
  })
}

window?.CY?.blocks?.forEach?.(config => {
  const block = blockFactory(config);
  console.log({block});
})


