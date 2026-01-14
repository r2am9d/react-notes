import * as utils from "../../helpers/utils";
import InputWrapperComponent from "./InputWrapperComponent";

const TextAreaComponent = ({ name, value, onChange, required = false }) => {
  const htmlName = name.toLowerCase();
  const htmlLabel = utils.capitalize(name);

  return (
    <>
      <InputWrapperComponent htmlName={htmlName} htmlLabel={htmlLabel}>
        <textarea
          name={htmlName}
          type="text"
          className="w-full p-2 border rounded-lg"
          value={value}
          onChange={onChange}
          required={required}
        />
      </InputWrapperComponent>
    </>
  );
};

export default TextAreaComponent;
