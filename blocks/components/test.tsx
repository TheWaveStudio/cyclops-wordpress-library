import {BlockSaveProps, registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import React, {FC, Fragment} from "react";

type EditProps = { className: string };

registerBlockType('cyclops/test', {
  title: __('Test', 'cy'),
  description: __('An example block', 'cy'),
  category: 'widgets',
  icon: 'smiley',
  supports: {html: true},
  attributes: {className: {type: 'string'}},
  edit: ({className}: EditProps) => {
    return <div className={className}>{__('Hello from the editor!', 'cy')}</div>
  },
  save: (props) => {
    console.log('save', {props})
    return <div>Hello!</div>;
  }
})
