import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div>
        <p>coffeeroasters</p>
      </div>
      <div className='flex justify-end'>
        <Link to='/'>
          <div>Home</div>
        </Link>
        <Link to='/about-us'>
          <div>About us</div>
        </Link>
        <Link to='/create-your-plan'>
          <div>Create your plan</div>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
