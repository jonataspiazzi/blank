import React, { Component, Fragment } from 'react';

class CharacterList extends Component {
  constructor(props) {
    super(props);
  }

  onClick(action, character) {
    if (this.props.onAction) {
      this.props.onAction(action, character);
    }
  }

  render() {
    return (
      <Fragment>
        <input type="button" value="Create New" onClick={() => this.onClick('create', {})} />
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th className="size-12">Name</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.characters.map(c =>
              <tr key={`user-item-${c.id}`}>
                <td>{c.id}</td>
                <td>{c.firstName} {c.lastName}</td>
                <td>
                  <input type="button" value="Details" onClick={() => this.onClick('read', c)} />
                </td>
                <td>
                  <input type="button" value="Edit" onClick={() => this.onClick('update', c)} />
                </td>
                <td>
                  <input type="button" value="Delete" onClick={() => this.onClick('delete', c)} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default CharacterList;
