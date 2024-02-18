import {useState, memo, useEffect} from "react";
import './rangeSlider.scss'
import styled from "styled-components";

const RangeSliderWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 13px;
`

const RangeSliderInput:any = styled.input`

  background: ${(props: any) => {
    const per = (Number(props.value) - Number(props.min)) / (Number(props.max) - Number(props.min)) * 100
    if (props.$isMiddle) {
      if (per <= 50) {
        return `linear-gradient(to right,rgba(224, 224, 224, 1) 0,rgba(224, 224, 224, 1) ${per}%,rgba(175, 175, 175, 1) ${per}%,rgba(175, 175, 175, 1) 50%, rgba(224, 224, 224, 1) 50%, rgba(224, 224, 224, 1) 100%)`
      } else {
        return `linear-gradient(to right, rgba(224, 224, 224, 1) 0%,rgba(224, 224, 224, 1) 50%, rgba(175, 175, 175, 1) 50%, rgba(175, 175, 175, 1) ${per}%,rgba(224, 224, 224, 1) ${per}%,rgba(224, 224, 224, 1) 100%)`
      }
    }
    return `linear-gradient(to right, rgba(175, 175, 175, 1) 0%,
     rgba(175, 175, 175, 1) ${per}%, 
     rgba(224, 224, 224, 1) ${per}%, 
     rgba(224, 224, 224, 1) 100%)`
  }
  };

  height: 4px;
  width: 118px;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
  border-radius: 5px;

  &::-webkit-slider-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 3px solid rgba(175, 175, 175, 1);
    -webkit-appearance: none;
    cursor: ew-resize;
    background: rgba(255, 255, 255, 1);
  }
`
const LabelTitle = styled.div`
  width: 46px;
  font-size: 11px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0px;
  text-align: right;

`

const RangeSlider = memo(
    ({label, isMiddle, min, max, val,setVal,step}: any) => {

        return (
            <RangeSliderWrp>
                <LabelTitle>    {label}</LabelTitle>

                <RangeSliderInput type="range" value={val} min={min} max={max} step={step}
                                  $isMiddle={isMiddle}
                                  onChange={(e:any) => setVal(Number(e.target.value))}
                />
                <div style={{width: '40px', textAlign: 'right'}}> {val}</div>
            </RangeSliderWrp>
        );
    }
);

export default RangeSlider