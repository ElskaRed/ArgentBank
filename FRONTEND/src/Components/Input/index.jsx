const Input = ({ label, type, name, value, onChange, placeholder, readOnly }) => {
  return (
    <div className="edit-input-wrapper">
      <label htmlFor={name} className="input-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={readOnly ? undefined : onChange}
        className="input-field"
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </div>
  );
};

export default Input;