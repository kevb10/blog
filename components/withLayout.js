import React from 'react';
import Head from './head'
import Nav from './nav'
import Foot from './foot'
import globalStyles from '../static/stylesheet/main.css'

const withLayout = (WrappedComponent) => {
  class WithLayout extends React.Component {
    static async getInitialProps(...args) {
      if (typeof WrappedComponent.getInitialProps === 'function') {
        return WrappedComponent.getInitialProps(...args);
      }

      return {};
    }

    render() {
      const { props } = this;

      return (
      <html>            
        <Head title="Home" />
        <style jsx global>
            {globalStyles}
        </style>
        <body>
          <header>
            <Nav />
          </header>
          <div className="container">
            <WrappedComponent  { ...props } />
          </div>
          <footer>
            <Foot />
          </footer>
        </body>
      </html>
      );
    }
  }

  WithLayout.displayName = `withLayout(${WrappedComponent.displayName || WrappedComponent.name || 'UnknownComponent'})`;
  return WithLayout;
};

export default withLayout;