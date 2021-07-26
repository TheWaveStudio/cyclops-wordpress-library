import React, {FC, useEffect} from "react";
import {BlockFactoryConfig, BlockFieldConfig} from "@/types/block-factory";
import {BlockField} from "./block-field";

export type BlockWrapperProps = {
  blockName: string,
  config: BlockFactoryConfig,
  setAttributes: Function,
  attributes: any
};

export const BlockWrapper: FC<BlockWrapperProps> = props => {
  const {
    blockName = "",
    children,
    config: {fields = []},
    setAttributes,
    attributes
  } = props;

  // useEffect(() => {
  //   console.log({attributes})
  // }, [attributes]);

  return (
      <div className="BlockWrapper">
        {!!blockName?.length && (<h3 className="title">{blockName}</h3>)}
        {!!children && <div className="BlockWrapper__children">{children}</div>}
        <div className="BlockWrapper__content"
             style={{display: "flex", flexFlow: "row wrap"}}
        >
          {fields.map(config => (
              <BlockField
                  config={config}
                  onChange={(content) => setAttributes({...attributes, [config.name]: content})}
                  value={attributes[config.name] ?? ""}
              />
          ))}
        </div>
      </div>
  )
}

export default BlockWrapper;
