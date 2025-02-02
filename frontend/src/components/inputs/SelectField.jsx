import React from "react";
import { Field } from "formik"

export default function SelectField({ 
  name, 
  label, 
  options, 
  labelClassName =  "block text-gray-700 text-sm font-bold mb-2",
  inputClassName =  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
  errorClassName = "text-red-500 text-xs italic text-left",
  ...props
}) 
{
  return (
    <div className="mb-6">
      <label className={ labelClassName }  htmlFor={name}>
        {label}
      </label>
      <Field as="select" name={name}>
        {({ field, meta }) => (
          <>
            <select
              id={name}
              className={`${inputClassName} ${
                meta.touched && meta.error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              {...field}
              {...props}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {meta.touched && meta.error && (
              <span className={errorClassName}>{meta.error}</span>
            )}
          </>
        )}
      </Field>
    </div>
  );
}
