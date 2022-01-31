import React, {FC, useEffect, useState} from 'react';
import {GenericEditFieldProps} from "@/types/edit-fields";
import {FieldWrapper} from "./wrapper";
import { useSelect } from '@wordpress/data';

type PostType = {
  title?:{
    rendered: string;
  };
  id: string;
  first_name?: string;
  last_name?: string;
}

export const TypesSelectionField:  FC<GenericEditFieldProps> = props => {
  const {value, onChange, label = "", customAttributes} = props
  const [searchKey,setSearchKey] = useState<string>('');
  const [selection,setSelection] = useState<PostType[]>( []);
  const [firstLoaded,setFirstLoaded] = useState( false);

  const posts: PostType[] = useSelect((select) => {
      const type =  customAttributes?.postType ?? 'posts';
      const source = type === 'user' ? 'root' : 'postType';
      const query :any = {
        search: searchKey,
        ...(!!customAttributes?.role && { role: customAttributes?.role})
      };
      return select('core').getEntityRecords(source, type, query);
    }, [searchKey])
  
  const values = value?.length ? JSON.parse(value) : [];

  useEffect(() =>{
    if(firstLoaded || !posts?.length) return;
    let selectedValues: PostType[] = [];
    values.forEach((id: string) => selectedValues = [...selectedValues, posts.filter(post => +post.id === +id)?.[0]])
    setSelection(selectedValues)
    setFirstLoaded(true);
    
  }, [posts])
  const handleSelection = (selectedItem: PostType) =>{
    if(selection.some(item => item.id === selectedItem.id)){
      setSelection(selection.filter(item => item.id !== selectedItem.id))
      return;
    }
    setSelection([...selection, selectedItem]);
  }
  
  useEffect(() =>{
    if(!firstLoaded) return;
    
    onChange(JSON.stringify(selection.map(post => post.id)));
  },[selection])
  
  return(
    <FieldWrapper label={label}>
      <div className="TypesSelection">
        <div className="type-selection-wrapper">
          <div className="type-selection-search-wrapper">
            <input
              type="text"
              autoComplete="off"
              className="type-selection-search-input"
              name="search"
              placeholder="Search..."
              onChange={(e) => setSearchKey(e.currentTarget.value)}
            />
            {posts?.length > 0 && <ul className="type-selection-results" style={{listStyle: 'none'}}>
              {posts.map((post: PostType) => (
                  <li className="type-selection-result">
                    <button className={values.includes(post.id) ? '--selected' : ''} onClick={() => {
                      handleSelection(post)
                    }}>{post.title?.rendered ?? `${post.first_name} ${post.last_name}`}
                    </button>
                  </li>
                )
              )}
            </ul>
            }
            { (!posts || posts?.length === 0) &&
            <div className="type-selection-no-result">No results found</div>
            }
          </div>
          <div className="type-selection-selection-wrapper">
          { selection.length > 0 && selection.map(post => (
                <span className="type-selection-selection">{post.title?.rendered ?? `${post.first_name} ${post.last_name}`}</span>
          ))}
          </div>
        </div>
      </div>
    </FieldWrapper>
  )
}


export default TypesSelectionField;