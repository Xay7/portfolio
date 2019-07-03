import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height:1000px;
`;

const Contact = (props) => {

    return (
        <Container ref={props.forwardRef}>
            Im a contact
        </Container>
    )
}

export default React.forwardRef((props, ref) => <Contact forwardRef={ref} {...props} />);
