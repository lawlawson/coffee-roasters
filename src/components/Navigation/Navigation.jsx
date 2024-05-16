import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='flex justify-end'>
        <Link to='/'>
          <div>Home</div>
        </Link>
        <div>About us</div>
        <div>Create your plan</div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
