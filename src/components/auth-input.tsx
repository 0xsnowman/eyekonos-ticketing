import React from "react";

interface EINputProps {
  value: string;
  placeholder: string;
  description: string;
  type?: string;
  onChange: Function;
}

export const EInput = ({
  value,
  placeholder,
  description,
  type = "text",
  onChange,
}: EINputProps) => {
  return (
    <div className="einput-component">
      <div className="description">{description}</div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
      />
    </div>
  );
};
