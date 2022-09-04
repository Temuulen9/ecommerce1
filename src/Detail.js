import React from 'react'
import Nav from './Nav';
import {useParams} from "react-router-dom"; 
function Detail(props) {
    const {id} = useParams();
    console.log(props)
  return (
    <div>
        <Nav />
        <h1>
            detail {id}
        </h1>
    </div>
  )
}

export default Detail