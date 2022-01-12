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

  console.log({componentProps})

  return <div>
    <div>Count: {count}</div>
    {Array.from({length: count}, (_) => fields)
        .map((fields, index) => <>
          {fields.map((config) => <AddableFieldItem config={config}
                                                    onChange={value => updateChild(config.name, value, index)}
                                                    value={value[index]?.[config.name]}
                                                    index={index}
          />)}
          <button onClick={e => removeItem(index)}>Remove #{index}</button>
        </>)}
    <button onClick={e => addItem()}>Aggiungi nuovo</button>
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
