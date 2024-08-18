import logo from '../../src/assets/logo.png'
import moment from 'moment';

// eslint-disable-next-line react/prop-types
export const Header = () => {
  return (
    <div className={`flex flex-col items-center mt-11`}>
      <img src={logo} alt="" />
      <p className='mt-5 mb-3'>Journalism without fear and favour</p>
      <p className='text-xl'>{moment().format('dddd, MMMM DD, YYYY')}</p>
    </div>
  )
}
