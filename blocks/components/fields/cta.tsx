import React, {FC, useState} from "react";
import {RichText} from "@wordpress/block-editor";
import {CtaFieldProps} from "@/types/edit-fields";
import {FieldWrapper} from "./wrapper";

export const CtaField: FC<CtaFieldProps> = props => {
    const {value, placeholder, onChange, label = ""} = props
    const html = value && value?.href !== ''
        ? `<a href="${value?.href}">${value?.text}</a>`
        : (value?.text ?? '');
    return <div className="CyclopsCta">
      <FieldWrapper label={label}>
        <RichText value={html}
                  aria-label={'Button text'}
                  placeholder={ placeholder ||  'Add text…' }
                  inlineToolbar={true}
                  className="wp-block-button__link"
                  onChange={(inputValue) => {
                      const $dom = (new DOMParser()).parseFromString(inputValue, 'text/html');
                      const $link = $dom.body.querySelector('a');
                      const text = $link?.innerText ?? inputValue;
                      const href = $link?.getAttribute('href') ?? '';
                      onChange({href, text})
                  }}/>
      </FieldWrapper>
    </div>

}

export default CtaField;
