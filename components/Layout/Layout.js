import React from 'react'
import { Container } from 'semantic-ui-react'

import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => (
    <>
        <Navbar />
        <Container as="main" text>
            {children}
        </Container>
    </>
)

export default Layout