import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`

`;

const Contact = (props) => {

    let ref = useRef(null);

    useEffect(() => {
        props.getRef(ref, "contact");
    }, [props])

    return (
        <Container ref={ref}>
            Im a contact
        </Container>
    )
}

export default Contact
