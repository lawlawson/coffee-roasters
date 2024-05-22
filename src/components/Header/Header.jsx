const Header = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="bg-[url('/src/assets/home/desktop/image-hero-coffeepress.jpg')] bg-no-repeat bg-center bg-cover py-12 px-10 rounded-lg w-11/12">
        <div className='w-1/3 ml-10'>
          <h1 className='text-8xl font-bold text-white'>
            Great coffee made simple.
          </h1>
          <p className='text-white text-xl my-11'>
            Start your mornings with the world&apos;s best coffees. Try our
            expertly curated artisan coffees from our best roasters delivered
            directly to your door, at your schedule.
          </p>
          <button className='rounded-lg my-5 text-xl font-bold text-white bg-green p-6'>
            Create your plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
