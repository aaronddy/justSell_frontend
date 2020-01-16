import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckableTag from "antd/lib/tag/CheckableTag";

export default props => {
  const { value: passedValue, name, options, onChange } = props;
  const [value, setValue] = useState(0);

  const handleChange = value => {
    setValue(value);
    if (onChange) onChange(value);
    console.log(value);
  };

  // const handleChange = label => {
  //   setValue(label);
  //   if (onChange) onChange(label);
  // };

  useEffect(() => {
    setValue(value || 0);
  }, [passedValue]);

  // useEffect(() => {
  //   setLabel(label || "");
  // }, []);
  return (
    <>
      {options.map(option => (
        <CheckBoxDiv key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={option.value === value}
            onChange={e => handleChange(option.value)}
          />
          <span>{option.label}</span>
        </CheckBoxDiv>
      ))}
    </>
  );
};

const CheckBoxDiv = styled.label`
  display: inline-block;
  margin-right: 1.5rem;
`;
