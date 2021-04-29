import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const size = 24;

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationSelect>
        {displayedValue} 
        <IconWrapper style={{"--size": size + "px"}}>
          <Icon id="chevron-down" strokeWidth={1} size={size}/>
        </IconWrapper>
      </PresentationSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;
const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 16px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;
const PresentationSelect = styled.div`
  border-radius: 8px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16/16}rem;
  padding: 12px 16px;
  padding-right: 52px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color; 
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
