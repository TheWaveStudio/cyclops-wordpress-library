import React, {useEffect, useState} from "react";
import {registerBlockType} from "@wordpress/blocks";
// @ts-ignore
import {InnerBlocks, InspectorControls, useBlockProps} from "@wordpress/block-editor";
import {BlockFactoryConfig} from "@/types/block-factory";
import {BlockWrapper} from "./components/block-wrapper";
import {PanelWrapper} from "./components/panel-wrapper";
import './styles/_main.scss';

const blockFactory = (config: BlockFactoryConfig) => {
console.log(config.innerBlocks)
  const {name, fields, blocksControl} = config;
  const fieldsAttributes = fields.reduce((acc, {type, name}) => {
    return {...acc, [name]: {type,}}
  }, {})
  const controlsAttributes = blocksControl.reduce((acc, {type, name}) => {
    return {...acc, [name]: {type,}}
  }, {})
  const attributes ={...fieldsAttributes, ...controlsAttributes}
  
  return registerBlockType(config.blockName, {
    apiVersion: 2,
    title: config.name,
    // description: __('An example block', 'cy'),
    category: 'layout',
    icon: 'smiley',
    supports: {html: true},
    parent: config.parent ?? null,
    attributes,
    edit: (props) => {
      const [color,setColor] = useState( 'transparent')
      const blockProps = useBlockProps({
        className: config.blockName
      })
      
      useEffect(()=>{
        for (const [key, value] of Object.entries(props.attributes)) {
          if(key === 'backgroundColor'){
            setColor(value as string)
            break;
          }
        }
      },[])

      const changedBackgroundColor = (color: string) =>{
        setColor(color);
      }
      
      return (
          <div {...blockProps}>
            <BlockWrapper
              blockName={name}
              config={config}
              backgroundColor={color}
              {...props}
            />
            <InspectorControls>
              { config.blocksControl.map(field => (
                  <PanelWrapper  field={field}
                                 onChangeColor={changedBackgroundColor}
                                 {...props} />
                ))
              }
            </InspectorControls>
            {config.innerBlocks?.length &&
              <div className="inner-blocks">
                Add fields <InnerBlocks allowedBlocks={config.innerBlocks} />
              </div>
            }
          </div>
      )
    },
    save: (props) => {
     return (
       <>
         {props} 
         {config.innerBlocks?.length &&  <InnerBlocks.Content />}
       </>
     )
    }
  })
}

window?.CY?.blocks?.forEach?.(config => {
  const block = blockFactory(config);
  console.log({block});
})


