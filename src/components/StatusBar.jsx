import { format } from 'date-fns'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';


const date = new Date(Date.now());
const formatDate = format(date, "cccc, ee LLL KK:mm:ss a")


export default function StatusBar() {
  return (
    <div className='status-bar__container'>
      <span className="user-info__container">
        <img className='user-info__img' src="" alt="" />
        <p className='user-info__name'>Ahmed Khaled</p>
        <KeyboardArrowDownIcon className='user-btn icon' />
      </span>
      <span className="user-actions__container">
        <p className='user-actions__date'>{formatDate}</p>
        <button className='session-btn'>Sign In</button>
        <NotificationsIcon className='notification-btn icon'/>
      </span>
    </div>
  )
}
