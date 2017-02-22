import React from 'react';
import BooksList from './BooksList';
import AddBook from '../containers/AddBook';

export default class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 'read' };
    this.setActiveClassOnTab = this.setActiveClassOnTab.bind(this);
    this.handleChangeTabs = this.handleChangeTabs.bind(this);
  }

  setActiveClassOnTab(tab) {
    return this.state.activeTab === tab ? 'active' : '';
  }

  handleChangeTabs(event) {
    this.setState({ activeTab: event.target.getAttribute('data-tab') });
  }

  render() {
    const { data } = this.props;
    return (<div className="Books">
      <h4>Books</h4>
      <AddBook refetch={ data.refetch } />
      <ul className="tabs clearfix">
        <li onClick={ this.handleChangeTabs } className={`tab ${this.setActiveClassOnTab('read')}`} data-tab="read">Read</li>
        <li onClick={ this.handleChangeTabs } className={`tab ${this.setActiveClassOnTab('unread')}`} data-tab="unread">Unread</li>
      </ul>
      <div className="tabs-data">
        <BooksList
          type="read"
          books={ _.where(data.books, { read: true }) }
          isActive={ this.setActiveClassOnTab('read') }
        />
        <BooksList
          type="unread"
          books={ _.where(data.books, { read: false }) }
          isActive={ this.setActiveClassOnTab('unread') }
        />
      </div>
    </div>);
  }
}
