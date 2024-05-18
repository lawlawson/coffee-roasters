import { Link, Outlet } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='flex justify-start my-4'>
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

export default Footer;
