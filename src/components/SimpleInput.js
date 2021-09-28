//React
import React, { useRef, useSate } from "react";
//Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//Components
import Input from "./Input";

const SimpleInput = (props) => {
  const genders = ["male", "female", "other"];

  const schema = yup
    .object({
      Name: yup.string("Don't use numbers").required("Name missing!"),
      LastName: yup.string().required(),
      Email: yup.string().required(),
      Age: yup.number().positive().integer().required(),
      gender: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <Input type="text" label="Name" required register={register} />
        <p>{errors.Name?.message}</p>
        <Input type="text" label="Last Name" required register={register} />
      </div>
      <div className="form-control">
        <Input type="email" label="Email" required register={register} />
        <Input type="number" label="Age" required register={register} />
      </div>
      <div className="form-control">
        <select {...register("gender")}>
          {genders.map((gen) => {
            return (
              <option value={gen} key={gen}>
                {gen}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
