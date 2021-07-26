import {BlockFactoryConfig} from "./types/block-factory";
import {registerBlockType} from "@wordpress/blocks";
import {__} from "@wordpress/i18n";
import React from "react";

console.log({CY: window.CY})

const blockFactory = (config: BlockFactoryConfig) => {
  console.log({config})
  return registerBlockType(config.blockName, {
    title: config.name,
    description: __('An example block', 'cy'),
    category: 'layout',
    icon: 'smiley',
    supports: {html: true},
    attributes: {className: {type: 'string'}},
    edit: ({className}: { className: string }) => {
      return <div className={className}>{__('Hello from the editor!', 'cy')}</div>
    },
    save: (props) => {
      console.log('save', {props})
      return <div>Hello!</div>;
    }
  })
}

window?.CY?.blocks?.forEach?.(config => {
  const block = blockFactory(config);
  // console.log({block});
})


