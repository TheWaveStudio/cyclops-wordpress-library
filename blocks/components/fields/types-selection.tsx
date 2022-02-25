import React, {FC, useEffect, useState} from 'react';
import {GenericEditFieldProps} from "@/types/edit-fields";
import {FieldWrapper} from "./wrapper";
import { useSelect } from '@wordpress/data';

type PostType = {
    title?:{
        rendered: string;
    };
    id: string;
    name?: string;
}

export const TypesSelectionField:  FC<GenericEditFieldProps> = props => {
    const {value, onChange, label = "", customAttributes} = props
    const [searchKey,setSearchKey] = useState<string>('');
    const [selection,setSelection] = useState<PostType[]>( []);
    const [firstLoaded,setFirstLoaded] = useState( false);
    const type =  customAttributes?.postType ?? 'posts';
    const source = type === 'user' ? 'root' : 'postType';
    const values = value?.length ? JSON.parse(value) : [];
    const posts: PostType[] = useSelect((select) => {
        const queryPost :any = {
            search: searchKey,
            ...(!!customAttributes?.role && { roles: customAttributes?.role})
        };
        return select('core').getEntityRecords(source, type, queryPost);
    }, [searchKey])

    const selected: PostType[] = useSelect((select) => {
        return select('core').getEntityRecords(source, type, {include: values ?? []});
    },[firstLoaded])

    useEffect(() => {
        if(!firstLoaded || !selected?.length) return;
        selected.sort((a: PostType,b:PostType) => values.indexOf(a.id) - values.indexOf(b.id))
        setSelection(selected ?? []);
    }, [selected])

    useEffect(() =>{
        if(firstLoaded || !posts?.length) return;
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
                                        }}>{post.title?.rendered ?? post.name}
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
                        { selection?.length > 0 && selection.map(post => (
                            <span className="type-selection-selection">{post.title?.rendered ?? post.name}</span>
                        ))}
                    </div>
                </div>
            </div>
        </FieldWrapper>
    )
}


export default TypesSelectionField;
