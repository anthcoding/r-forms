const Input = ({ label, register, required, type }) => {
  const localLabelToRegister = label.replace(/\s/gi, "");
  return (
    <>
      <label>{label}</label>
      <input {...register(localLabelToRegister)} type={type} />
    </>
  );
};

export default Input;
