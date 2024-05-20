const Header = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="bg-[url('/src/assets/home/desktop/image-hero-coffeepress.jpg')] bg-no-repeat bg-center bg-cover p-6 rounded w-5/6">
        <div className='container'>
          <h1 className='text-8xl font-bold text-white'>
            Great coffee made simple.
          </h1>
          <p className='text-white text-xl'>
            Start your mornings with the world&apos;s best coffees. Try our
            expertly curated artisan coffees from our best roasters delivered
            directly to your door, at your schedule.
          </p>
          <button className='bg-white p-3 rounded mt-5'>
            Create your plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
