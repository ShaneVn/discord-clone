import { HashtagIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from "react-redux";
import { setChannelInfo, selectChannelId } from '../features/channelSlice';
import { useNavigate } from 'react-router-dom';



function Channel({id, channelName}) {

const dispatch = useDispatch()
const navigate = useNavigate()
const channelId = useSelector(selectChannelId)


const setChannel = () => {
  dispatch(
    setChannelInfo({
      channelId : id,
      channelName : channelName
    })
  )

  navigate(`/channels/${id}`)
}

  return (
    <div className= {`font-medium flex items-center cursor-pointer ${id=== channelId && 'bg-discord_channelHoverBg text-white'}
     hover:bg-discord_channelHoverBg p-1 rounded-md hover:text-white`}
     
     onClick={setChannel}>
      <HashtagIcon className='h-5 mr-2'/>
      {channelName}
    </div>
  )
}

export default Channel