import React from 'react';
import { Field, Form } from 'react-final-form';
import formatString from 'format-string-by-pattern'
import styled from 'styled-components';

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
                        <div>
                            <label>Default Name</label>
                            <Field name="defaultName" component="input" placeholder="John Doe" />
                        </div>
                        <div>
                            <label>Playa Name</label>
                            <Field name="playaName" component="input" placeholder="Scrub Nut" />
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <Field name="phone" component="input" parse={normalizePhone} placeholder="(555) 555-5555" />
                        </div>
                        <div>
                            <label>Early Arrival?</label>
                            <Field name="earlyArrive" component="input" type="checkbox" />
                        </div>
                        <div>
                            <label>Vehicle Pass?</label>
                            <Field name="vehiclePass" component="input" type="checkbox" />
                        </div>
                        <div>
                            <label>Still Need Ticket?</label>
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
    /* background-color: red; */
`;