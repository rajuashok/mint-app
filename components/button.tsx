import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const DefaultButton = styled(Button)`
    && {
        background-color: #BADDBA;
        padding: 4px 8px;
        &:hover {
            background-color: #79C979;
        }
    }
`;

export const FullWidthButton = styled(DefaultButton)`
    && {
        width: 100%;
    }
`;

export const LinkButton = styled.span`
  cursor: pointer;
  color: #79C979;
  text-decoration: underline;
`;
