import React from 'react';
import { Form } from 'react-final-form';
import formatString from 'format-string-by-pattern'
import styled from 'styled-components';
import { Field, Label } from './form';
import { DefaultButton } from './button';

interface Props {

}

const normalizePhone = value => {
    if (!value) return value

    const onlyNums = value.replace(/[^\d]/g, '')
    if (onlyNums.length <= 3) return onlyNums

    if (onlyNums.length <= 7) {
      return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 7)}`
    } else if (onlyNums.length <= 10) {
        return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)} ${onlyNums.slice(6, 11)}`
    }
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`
}

const Registration: React.FC<Props> = () => {
    return (
        <Wrapper>
            <Container>
            <h1>Sign up for DeMentha 2021</h1>
            <Form
                onSubmit={() => {}}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Input>
                                <Label>Default Name</Label>
                                <Field name="defaultName" component="input" placeholder="John Doe" />
                            </Input>
                            <Input>
                                <Label>Playa Name</Label>
                                <Field name="playaName" component="input" placeholder="Jesus Christ" />
                            </Input>
                        </Row>
                        <Row>
                            <Input>
                                <Label>Phone Number</Label>
                                <Field name="phone" component="input" parse={normalizePhone} placeholder="(555) 555-5555" />
                            </Input>
                        </Row>
                        <Row>
                            <Label>Early Arrival?</Label>
                            <Field name="earlyArrive" component="input" type="checkbox" />
                        </Row>
                        <Row>
                            <Label>Vehicle Pass?</Label>
                            <Field name="vehiclePass" component="input" type="checkbox" />
                        </Row>
                        <Row>
                            <Label>Still Need Ticket?</Label>
                            <Field name="needTicket" component="input" type="checkbox" />
                        </Row>
                        <SubmitDiv>
                            <DefaultButton type="submit">Submit</DefaultButton>
                        </SubmitDiv>
                    </form>
                )}/>
            </Container>
        </Wrapper>
    );
}

export default Registration;

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    width: 40%;
    min-height: 92vh;
    display: flex;
    flex-direction: column;
    padding: 10px 40px;
    /* align-items: center; */
    border-right: 1px solid #EBEBEB;
    border-left: 1px solid #EBEBEB;
`;

const Row = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 12px;
`;

const SubmitDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;