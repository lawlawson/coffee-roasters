import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='flex justify-end'>
        <Link to='/about-us'>
          <div>About Us</div>
        </Link>
        <div>two</div>
        <div>Three</div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
