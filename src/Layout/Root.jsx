
import { Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <div className='font-poppins'>
      <Outlet></Outlet>
    </div>
  )
}
