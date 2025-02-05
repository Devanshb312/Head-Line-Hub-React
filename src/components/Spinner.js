import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
 
    return (
      <div>
        <div className="text-center">
        <img src={loading} alt="Loading" />
        </div>
      </div>
    )
}


export default Spinner