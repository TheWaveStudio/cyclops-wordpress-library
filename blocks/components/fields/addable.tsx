import React, {FC, useMemo} from 'react';
import {AddableFieldProps, AddableFieldItemProps} from "@/types/edit-fields";
import {BlockField} from "../block-field";

const AddableFieldItem: FC<AddableFieldItemProps> = props => {
  const {config, onChange, index, value} = props;
  return <BlockField config={config}
                     onChange={value => onChange(value, index)}
                     value={value}/>
}

export const AddableField: FC<AddableFieldProps> = (props) => {
  const {
    config: {children: fields = [], ...componentProps} = {},
    onChange = () => null,
    value = []
  } = props;

  const count = useMemo(() => value?.length, [value]);

  const updateChild = (name: string, changes: any, index: number) => {
    const newValues = [...value];
    newValues[index] = {...newValues[index], [name]: changes};
    return onChange(newValues);
  }
  const addItem = () => onChange([...value, ""])
  const removeItem = (index: number) => onChange(value.filter((_: any, i: number) => i !== index))

  return <div className="CyclopsAddable">
    { count > 0 && <div className="addable-count">Totale elementi aggiunti: {count}</div> }
    {Array.from({length: count}, (_) => fields)
        .map((fields, index) => <div className={"cyclops-addable-item"}><span className="item-title">Elemento {index+1}</span>
          {fields.map((config) => <AddableFieldItem config={config}
                                                    onChange={value => updateChild(config.name, value, index)}
                                                    value={value[index]?.[config.name] ?? ''}
                                                    index={index}
          />)}
          <div className="remove-wrapper">
            <button className="remove-button cyclops-button" onClick={e => removeItem(index)}>Elimina #{index + 1}</button>
          </div>
        </div>)}
    <button  className="add-button cyclops-button" onClick={e => addItem()}>Aggiungi nuovo</button>
  </div>
}

export default AddableField;
//   const {
//     children = [],
//     onChange = () => null,
//     value = []
//   } = props;
//
//   const [items, setItems] = useState(value);
//   const [fullValue, setFullValue] = useState(value);
//   const addItem = () => setItems(items + 1);
//   const removeItem = () => items > 0 ? setItems(items - 1) : 0;
//   const updateChildrenValue = (addableIndex, fieldIndex, e) => {
//
//   };
//
//   useEffect(() => {
//     const array = fullValue;
//     array.length = items;
//
//   }, [items])
//
//   return (
//       <div>
//         <div>{JSON.stringify(value)}</div>
//         {
//           Array.from({length: items})
//               .map((_, addableIndex) => {
//                 return children.map((field, fieldIndex) => {
//                   return (<WFField fieldConfig={field}
//                                    value={""}
//                                    onChange={e => updateChildrenValue(addableIndex, fieldIndex, e)}/>)
//                 });
//               })
//         }
//
//         <button onClick={addItem}>Add</button>
//         <button onClick={removeItem}>Remove</button>
//       </div>
//   );
// };
//
// export default AddableField;
