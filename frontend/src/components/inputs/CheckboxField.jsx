import React from "react";
import { useField } from "formik";

export default function CheckboxField({
  label,
  labelClassName = "ml-2 block text-sm text-gray-900",
  inputClassName = "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
  errorClassName = "text-red-500 text-xs italic text-left",
  ...props
}) {
  
  const [field, meta] = useField(props);

  return (
    <div className="flex items-center">
      <input
        id={props.id || props.name}
        type="checkbox"
        className={`${inputClassName} ${
          meta.touched && meta.error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        }`}
        {...field}
        {...props}
      />
      <label htmlFor={props.id || props.name} className={labelClassName}>
        {label}
      </label>
      {meta.touched && meta.error && (
        <span className={errorClassName}>{meta.error}</span>
      )}
    </div>
  );
}
