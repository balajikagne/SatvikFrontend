import React from 'react'
import NotFoundPage from './NotFoundPage'

function Error() {
  return (
    <div>
      <div class="alert alert-danger" role="alert" style={{height:'100%',width:'100%'}}>
       <NotFoundPage/>
      </div>
    </div>
  )
}

export default Error
