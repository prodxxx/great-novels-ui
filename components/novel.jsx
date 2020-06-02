import React from 'react'

export default ({ id, title, name }) => (
  <div key={id}>{`${title} ${name}`}</div>
)
