import React, {FC, useEffect, useState} from 'react';
import {GenericEditFieldProps} from "@/types/edit-fields";
import { FormTokenField } from '@wordpress/components';
import {FieldWrapper} from "./wrapper";
import Value = FormTokenField.Value;

interface Item {
  label: string;
  value: number;
}

export const MultiSelectField:  FC<GenericEditFieldProps> = props => {
    const {value, onChange, label = "", customAttributes} = props;
    const items: Item[] = customAttributes?.options ?? [];
    const formatted = items?.map(item => item?.label ?? '');
    const [selection,setSelection] = useState<Item[]>( []);
    const [selectionString, setSelectionString] = useState<readonly Value[]>( [] );
    
    useEffect(()=>{
      const values: number[] = value?.length ? JSON.parse(value) : [];
      
    if(values.length <= 0) return;
    
      let formatted: string[] = [];
      let selected: Item[] = [];
      values.forEach(item =>{
        const labelItem = items.find(i => +i.value === +item);
        
        if(labelItem){
          formatted = [...formatted, labelItem.label];
          selected = [...selected, labelItem];
        }
        
      });

      setSelectionString(formatted)
      setSelection(selected)
        
    },[])
  
  
    const handleSelection = (tokens:readonly Value[]) =>{
      let newSelection: Item[] = [];
      tokens.forEach(item =>{
        const current = items?.find(i => i.label.toLowerCase() === item.toString().toLowerCase());
        
        if(!current) return
        
        newSelection = [...newSelection, current];
      })
      
      setSelection(newSelection);
      setSelectionString(tokens);
    }

    useEffect(() =>{
      onChange(JSON.stringify(selection.map(post => post.value)));
    },[selection])
  
    return(<div className="CyclopsMultiSelect">
        <FieldWrapper label={label}>
            <FormTokenField
              value={ selectionString }
              suggestions={ formatted }
              onChange={ ( tokens ) => handleSelection(tokens) }
            />
        </FieldWrapper>
      </div>
    )
}


export default MultiSelectField;
