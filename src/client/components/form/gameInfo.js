import React, { Component } from 'react';

class GameInfo extends Component {
  render() {
    return (
      <div className="field-group">
        <table>
          <thead>
            <tr>
              <th colSpan="2">Board Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Is Game On</td>
              <td id="isGameOn">no</td>
            </tr>
            <tr>
              <td>Current Player</td>
              <td id="currentPlayer"></td>
            </tr>
            <tr>
              <td>Round Count</td>
              <td id="roundCount"></td>
            </tr>
            <tr>
              <td>Is Game Ended</td>
              <td id="isGameEnded"></td>
            </tr>
            <tr>
              <td>Last Winner</td>
              <td id="lastWinner"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default GameInfo;
