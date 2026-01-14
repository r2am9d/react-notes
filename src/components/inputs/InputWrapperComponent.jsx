const InputWrapperComponent = ({ htmlName, htmlLabel, children }) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor={htmlName} className="block font-semibold">
          {htmlLabel}
        </label>
        {children}
      </div>
    </>
  );
};

export default InputWrapperComponent;
