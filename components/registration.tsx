import React from 'react';
import { Form } from 'react-final-form';
import formatString from 'format-string-by-pattern'
import styled from 'styled-components';
import { Field, Label } from './form';

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
            <h2>Sign up for DeMentha 2021</h2>
            <Form
                onSubmit={() => {}}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Input>
                                <Label>Default Name</Label>
                                <Field name="defaultName" component="input" placeholder="Spyro Karidis" />
                            </Input>
                            <Input>
                                <Label>Playa Name</Label>
                                <Field name="playaName" component="input" placeholder="Scrub Nut" />
                            </Input>
                        </Row>
                        <Row>
                            <Input>
                                <Label>Phone Number</Label>
                                <Field name="phone" component="input" parse={normalizePhone} placeholder="(555) 555-5555" />
                            </Input>
                        </Row>
                        <div>
                            <Label>Early Arrival?</Label>
                            <Field name="earlyArrive" component="input" type="checkbox" />
                        </div>
                        <div>
                            <Label>Vehicle Pass?</Label>
                            <Field name="vehiclePass" component="input" type="checkbox" />
                        </div>
                        <div>
                            <Label>Still Need Ticket?</Label>
                            <Field name="needTicket" component="input" type="checkbox" />
                        </div>
                    </form>
                )}/>
        </Wrapper>
    );
}

export default Registration;

const Wrapper = styled.div`
    width: 70vw;
    padding: 10px;
`;

const Row = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 12px;
`;