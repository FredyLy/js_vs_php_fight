import React, { Component } from 'react'
import countHits from './countHits';
import vegeta from './vegeta.png';

class Vegeta extends Component {
  render() {

    const { name, addOneHit, hocState, life } = this.props;

    const lifeValue = life > 0 ? `${life} %` : <span className="badge badge-danger">K.O.</span>;

    const button = life > 0 
      ? (<button className="btn btn-success m-3" onClick={addOneHit}>{name} hits!</button>)
      : (<button className="btn btn-danger m-3" disabled>Beaten!</button>);

    return (
      <div className="col">
        
        <img src={vegeta} alt="vegeta" /><br />
        { button }

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Hits</th>
              <th scope="col">Life</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hocState.hits}</td>
              <td>{lifeValue}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default countHits(Vegeta, 10);
