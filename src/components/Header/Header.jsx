const Header = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="bg-[url('/src/assets/home/desktop/image-hero-coffeepress.jpg')] bg-no-repeat bg-center bg-cover p-6 rounded-lg w-10/12">
        <div className='w-2/5 ml-10'>
          <h1 className='text-8xl font-bold text-white'>
            Great coffee made simple.
          </h1>
          <p className='text-white text-xl my-11'>
            Start your mornings with the world&apos;s best coffees. Try our
            expertly curated artisan coffees from our best roasters delivered
            directly to your door, at your schedule.
          </p>
          <button className='bg-white p-3 rounded-lg my-5 text-xl font-bold text-white bg-green p-6'>
            Create your plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
