import React from "react";
import { Field } from "formik";

export default function InputField({
  name,
  label,
  type = "text", // Default to "text" if no type is provided
  labelClassName = "block text-gray-700 text-sm font-bold mb-2", // Default label styling
  inputClassName = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", // Default input styling
  errorClassName = "text-red-500 text-xs italic text-left",
  ...props // Additional props for the input element
}) {
  return (
    <div className="mb-4">
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>

      <Field name={name}>
        {({ field, meta }) => (
          <>
            <input
              id={name}
              type={type}
              className={`${inputClassName} ${
                meta.touched && meta.error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              {...field}
              {...props}
            />

            {meta.touched && meta.error && (
              <span className={errorClassName}>{meta.error}</span>
            )}
          </>
        )}
      </Field>
    </div>
  );
}
