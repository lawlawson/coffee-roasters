import Header from '../components/Header';

function Home() {
  return (
    <>
      <Header />
      <h1 className='text-4xl font-bold underline'>
        Great coffee made simple.
      </h1>
      <p>
        Start your mornings with the world&apos;s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <button>Create your plan</button>
    </>
  );
}

export default Home;
