import { HashtagIcon } from '@heroicons/react/outline'
import React from 'react'

function Channel({id, channelName}) {
  return (
    <div className='self-start'>
      <HashtagIcon/>
      {channelName}
    </div>
  )
}

export default Channel