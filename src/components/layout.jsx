import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Main } from 'grommet';
import Nav from './nav';
import Footer from './footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Nav />
      <div
        style={{
          margin: '0 auto',
          maxWidth: '90%',
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;