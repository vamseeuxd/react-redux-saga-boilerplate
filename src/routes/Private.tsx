import React from 'react';
import styled from 'styled-components';
import { Box, Container, Heading, Link, Paragraph, Text } from 'styled-minimal';

import { spacer } from 'modules/theme';

import Github from 'containers/GitHub';
import { Link as LinkRoute } from "react-router-dom";


const Header = styled.div`
  margin-bottom: ${spacer(3)};
  text-align: center;
`;

function Private() {
  return (
    <Box key="Private" data-testid="Private">
      <Container ySpacing>
        <Header>
          <Heading>Oh hai!</Heading>
          <Paragraph>
            You can get this boilerplate{' '}
            <Link
              href="https://github.com/vamseeuxd/react-redux-saga-boilerplate.git/"
              target="_blank"
            >
              here
            </Link>
          </Paragraph>
          <Paragraph>
            <LinkRoute to="/mange-services">Go to Mange Services</LinkRoute>
          </Paragraph>
        </Header>
        <Box textAlign="center" mb={4}>
          <Heading as="h5">Here's some GitHub data</Heading>
          <Text fontSize={1}>
            <i>*Just to have some requests in the sagas...</i>
          </Text>
        </Box>
        <Github />
      </Container>
    </Box>
  );
}

export default Private;
