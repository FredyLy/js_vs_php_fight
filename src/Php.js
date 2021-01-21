import React, { Component } from 'react'
import countHits from './countHits';
import php from './php.png';

class Php extends Component {
  render() {

    const { name, addOneHit, hocState, life } = this.props;

    const lifeValue = life > 0 ? `${life} %` : <span className="badge badge-danger">K.O.</span>;

    const button = life > 0 
      ? (<button className="btn btn-success m-3" onClick={addOneHit}>{name} hits!</button>)
      : (<button className="btn btn-danger m-3" disabled>Beaten!</button>);

    return (
      <div className="col">
        
        <img className="php-img" src={php} alt="php" /><br />
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

export default countHits(Php, 10);
