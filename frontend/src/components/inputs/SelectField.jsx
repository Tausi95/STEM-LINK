import React from "react";
import { useField } from "formik"
import CaretDownIcon from "../icons/CaretDownIcon";

export default function SelectField({ 
  label, 
  options, 
  labelClassName =  "block text-gray-700 text-sm font-bold mb-2",
  inputClassName =  "col-start-1 row-start-1 w-full shadow appearance-none border rounded py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline",
  errorClassName = "text-red-500 text-xs italic text-left",
  ...props
}) {
  
  const [field, meta] = useField(props);

  return (
    <div className="sm:col-span-3 mb-6">
      <label className={ labelClassName }  htmlFor={props.id || props.name}>
        {label}
      </label>
      <div className="mt-2 grid grid-cols-1">
        <select 
          {...field} 
          {...props} 
          id={props.id || props.name}
          className={`${inputClassName} ${
            meta.touched && meta.error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`} 
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <CaretDownIcon />
      </div>
      {meta.touched && meta.error && (
        <span className={errorClassName}>{meta.error}</span>
      )}
    </div>
  );
}
