import React, {FC} from "react";
// import DayPickerInput from 'react-day-picker/DayPickerInput';
import {FieldWrapper} from "./wrapper";
import {TimeEditFieldProps} from "@/types/edit-fields";

export const DatePickerField: FC<TimeEditFieldProps> = (props) => {
  const {label = "", value, onChange} = props;

  return (
      <FieldWrapper label={label}>
        {/*<DayPickerInput value={value}*/}
        {/*                onDayChange={onChange}*/}
        {/*/>*/}
      </FieldWrapper>
  );
};

export default DatePickerField;
