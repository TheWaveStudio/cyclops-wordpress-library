import React, {FC, useMemo} from "react";
import {MediaPlaceholder} from '@wordpress/block-editor';
import {MediaFieldProps} from "@/types/edit-fields";

export const MediaField: FC<MediaFieldProps> = props => {

  const {label = "", onChange, value, placeholder} = props;
  const {value: {id: currentSelectedId}} = props;
  const isMediaSelected = useMemo(() => !!currentSelectedId, [currentSelectedId]);

  return <div className="CyclopsImage">
    {!isMediaSelected &&
      <MediaPlaceholder onSelect={onChange}
                        allowedTypes={['image']}
                        multiple={false}
                        labels={{title: label ?? 'The Image'}}
                        value={props.value}
                        addToGallery={true}/>}
    {isMediaSelected &&
      <div>
        <div className="wf-media-preview">
          <img src={props.value.url} alt={props.value.alt}/>
          <button className="remove-button" type="button"
                  onClick={e => props.onChange({})}
          >
          </button>
        </div>
      </div>}
  </div>
}

export default MediaField
