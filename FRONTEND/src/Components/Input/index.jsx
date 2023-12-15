const Input = ({ label, type, name, value, onChange }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name} className="input-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
};

export default Input;