import React from 'react'

export default props =>
  <div>
    <div>Família</div>
    {React.cloneElement(props.children, {...props})}
  </div>