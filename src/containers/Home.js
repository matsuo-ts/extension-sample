import React, { Component } from 'react';
import classNames from 'classnames';

// =======================
// Import other containers.
// =======================
import PageInformation from './PageInformation';
import Lists from './Lists';

// =======================
// Import modules.
// =======================
import Analytics from '../modules/Analytics';
import DB from '../modules/Database';
import Style from '../styles/Style.css';
import '../assets/css/reset.css';

export default class Home extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      shops: null,
      searchObj: {},
      database: new DB()
    }
  }

  componentDidMount() {
    Analytics( window, document, 'script', 'dataLayer', 'GTM-5PPHSTP' );
  }

  render() {
    return(
      <section 
        className={ classNames( Style.searchForm ) }>
        <PageInformation db={ this.state.database } />
        <Lists db={ this.state.database } />
      </section>
    )
  }

}