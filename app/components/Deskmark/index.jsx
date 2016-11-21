/*
 * @file component Deskmark
 */

 import React from 'react';
 import uuid from 'uuid';

 import CreateBar from '../CreateBar';
 import List from '../List';
 import ItemEditor from '../ItemEditor';
 import ItemShowLayer from '../ItemShowLayer';

 import './style.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const items = [
      {
        "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
        "title": "Hello",
        "content": "# testing markdown",
        "time": 1458030208359
      },{
        "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775b",
        "title": "Hello2",
        "content": "# Hello world",
        "time": 1458030208359
      }
    ]

    return (
      const currentItem = item[0];
      <section className="deskmark-component">
        <div className="container">
          <div className="row">
            <CreateBar />
            <List items={items} />
            <ItemEditor item={currentItem}>
            <ItemShowLayer item={currentItem}/ >
          </div>
        </div>
      </section>
    )
  }
}
