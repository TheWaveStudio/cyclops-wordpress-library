// import React, {useState, useEffect, FC} from 'react';
// import {WFField} from "./WFField";
// import {AddableFieldProps} from "@/types/edit-fields";
//
// export const AddableField: FC<AddableFieldProps> = (props) => {
//
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
