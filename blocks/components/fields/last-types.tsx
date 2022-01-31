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

export const LastTypesField:  FC<GenericEditFieldProps> = props => {
  const {value, onChange, label = "", customAttributes} = props

  const posts: PostType[] = useSelect((select) => {
      const type =  customAttributes?.postType ?? 'posts';
      const source = type === 'user' ? 'root' : 'postType';
      const query :any = {
        ...(!!customAttributes?.categories && { [customAttributes?.categoriesName ?? 'categories']: customAttributes?.categories}),
        ...(!!customAttributes?.perPage && { per_page: customAttributes?.perPage})
      };
      return select('core').getEntityRecords(source, type, query);
    }, [])

  useEffect(() =>{
    if(!posts?.length) return;
    onChange(JSON.stringify(posts.map(post => post.id)));
  }, [posts])

  return(
    <FieldWrapper label={label}>
      {posts?.length > 0 && <ul>
        { posts.map((post: PostType) => (
              <li>{post.title?.rendered}</li>
            )
          )
        }
      </ul> 
      }
    </FieldWrapper>
  )
}


export default LastTypesField;