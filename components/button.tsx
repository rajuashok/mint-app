import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
    && {
        width: 100%;
        background-color: #BADDBA;
        padding: 10px 14px;
        &:hover {
            background-color: #79C979;
        }
    }
`;

export default StyledButton;