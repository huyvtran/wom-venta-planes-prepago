import React, { useContext,useEffect } from "react";
import styled from "styled-components";
import { FormContext } from "../context/FormContext";
import { ValidationContext } from "../context/ValidationContext";
import ItemOption from './ItemOption'
import Arrow from "../images/icon_arrow_right.svg";

const InputSelectRegiones = ({ classAdd, regionsList = [], fieldName, comunaName, disabledFields = false, loaded}) => {
  const { formData, setFormData } = useContext(FormContext);
  const { validationData, setValidationData } = useContext(ValidationContext);

  const SelectContainer = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid #7c6c8a;
    margin-top: 10px;
    @media (max-width: 480px) {
      width: 100%;
    }
    &.full-width {
      width: 100%;
    }
    &.full-border{
      border: 1px solid #7c6c8a;
      border-radius: 5px;
    }
    select {
      width: 100%;
      height: 48px;
      border: none;
      padding: 10px 27px 10px 10px;
      background-color: #ffffff;
      outline: none;
      cursor: pointer;
      color: #7c6c8a;
      font-size: 16px;
      line-height: 20px;
      transition:background 0.2s ease;
      &.disabled { 
        pointer-events:none;
        background:#E6E2E8;
      }
    }
    label {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      left: auto;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      pointer-events: none;
      transition:background 0.2s ease;
      &.disabled { 
        pointer-events:none;
        background:#E6E2E8;
      }
      .arrow {
        margin-right: 10px;
      }
    }
  `;
  const handleChange = e => {
    setFormData({ ...formData, [fieldName]: e.target.value});
    setValidationData({ ...validationData, [fieldName]: true });
  };

  // useEffect(()=>{
  //   loaded && setFormData({...formData, [comunaName]: regionsList.find(region=> region.REGION === formData[fieldName]).COMUNAS[0].COMUNA})
  // },[formData[fieldName]])

const regiones = regionsList.map((region,i) => {return(<ItemOption key={i} text={region.REGION}/>)})

  return (
    <SelectContainer className={classAdd}>
      <select
        value={formData[fieldName] === '' ? 'SELECCIONA UNA REGIÓN' : formData[fieldName]}
        id="select-1"
        onChange={handleChange}
        className={disabledFields && 'disabled'}
      >
        {formData[fieldName] === '' && <ItemOption key="0202" text="SELECCIONA UNA REGIÓN"/>}
        {regiones}
      </select>
      <label htmlFor="select-1" className={disabledFields && 'disabled'}>
        <img className="arrow" src={Arrow} alt="arrow" />
      </label>
    </SelectContainer>
  );
};

export default InputSelectRegiones;
