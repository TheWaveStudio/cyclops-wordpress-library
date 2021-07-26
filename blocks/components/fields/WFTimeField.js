import DayPickerInput from 'react-day-picker/DayPickerInput';

export const WFTimeField = (props) => {
  const {value, onChange} = props;
  return (
      <div>
        <DayPickerInput value={value}
                        onDayChange={onChange}
        />
      </div>
  );
};
