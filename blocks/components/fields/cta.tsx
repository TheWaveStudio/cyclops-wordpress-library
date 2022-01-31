import React, {FC, useState} from "react";
import {RichText} from "@wordpress/block-editor";
import {GenericEditFieldProps} from "@/types/edit-fields";
import {FieldWrapper} from "./wrapper";

export const CtaField: FC<GenericEditFieldProps> = props => {
    const {value, placeholder, onChange, label = ""} = props
    const buttonObject = !!value ? JSON.parse(value) : false;
    const html = buttonObject && buttonObject?.href !== ''
        ? `<a href="${buttonObject?.href}">${buttonObject?.text}</a>`
        : buttonObject?.text;
    return <FieldWrapper label={label}>
        <RichText value={html}
                  aria-label={'Button text'}
                  placeholder={ placeholder ||  'Add text…' }
                  inlineToolbar={true}
                  className="wp-block-button__link"
                  onChange={(value) => {
                      const $dom = (new DOMParser()).parseFromString(value, 'text/html');
                      const $link = $dom.body.querySelector('a');
                      const text = $link?.innerText ?? value;
                      const href = $link?.getAttribute('href') ?? '';
                      onChange(JSON.stringify({href, text}))
                  }}/>
    </FieldWrapper>

}

export default CtaField;
