import * as utils from "../../helpers/utils";
import InputWrapperComponent from "./InputWrapperComponent";

const SelectInputComponent = ({
  name,
  value,
  onChange,
  options,
  required = false,
}) => {
  const htmlName = name.toLowerCase();
  const htmlLabel = utils.capitalize(name);

  return (
    <>
      <InputWrapperComponent htmlName={htmlName} htmlLabel={htmlLabel}>
        <select
          name={htmlName}
          type="text"
          className="w-full p-2 border rounded-lg"
          value={value}
          onChange={onChange}
          required={required}
        >
          {options.map((option) => {
            const htmlKey = option.value.toLowerCase();
            return (
              <option key={htmlKey} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </InputWrapperComponent>
    </>
  );
};

export default SelectInputComponent;
