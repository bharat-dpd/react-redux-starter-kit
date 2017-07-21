import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
class FullRoster extends Component {
  render(){
  return <div>
    <ul>
      {
        this.props.products.map(p => (
          <li key={p._id}>
            <Link to={`/roster/${p._id}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
  }
}

function mapStatetoProps(state){
  return {
    products : state.products
  }
}
export default connect(mapStatetoProps)(FullRoster);
