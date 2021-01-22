import React from 'react';
import styled from 'styled-components';
import { Box, Container, Heading, Paragraph } from 'styled-minimal';
import { Link } from "react-router-dom";
import { spacer } from 'modules/theme';

const Header = styled.div`
  margin-bottom: ${spacer(3)};
  text-align: center;
`;

function MangeServices() {
  return (
    <Box key="MangeServices" data-testid="Private">
      <Container ySpacing>
        <Header>
          <Heading>Mange Services</Heading>
          <Paragraph>
            <Link to="/private">Go to Private</Link>
          </Paragraph>
        </Header>
      </Container>
    </Box>
  );
}

export default MangeServices;
