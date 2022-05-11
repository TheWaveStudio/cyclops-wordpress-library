import React, {FC, useEffect} from 'react';
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
      ...(!!customAttributes?.perPage && { per_page: customAttributes?.perPage}),
      ...(!!customAttributes?.include && { include: customAttributes?.include}),
      ...(!!customAttributes?.exclude && { exclude: customAttributes?.exclude}),
      ...(!!customAttributes?.metaField && {
        metaKey: customAttributes?.metaField?.key,
        metaValue: customAttributes?.metaField?.value,
        metaCompare: customAttributes?.metaField?.compare,})
    };
    return select('core').getEntityRecords(source, type, query);
  }, [])

  useEffect(() =>{
    if(!posts?.length) return;
    onChange(JSON.stringify(posts.map(post => post.id)));
  }, [posts])

  return(<div className="CyclopsLastTypes">
      <FieldWrapper label={label}>
        {posts?.length > 0 && <ul className="list-wrapper">
          { posts.map((post: PostType) => (
              <li className="list-item">{post.title?.rendered}</li>
            )
          )
          }
        </ul>
        }
      </FieldWrapper>
  </div>
  )
}


export default LastTypesField;
