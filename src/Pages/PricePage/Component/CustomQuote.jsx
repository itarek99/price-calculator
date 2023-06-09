const CustomQuote = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-12 xl:col-span-5'></div>
      <div className='col-span-12 xl:col-span-7 mt-3 xl:mt-5'>
        <div className='p-4 xl:p-8 bg-white rounded-lg'>
          <p className='text-gray-800'>
            Pricing Not Available for This Service,
            <br /> Please Request A Custom Quote!
          </p>
          <div className='mt-6'>
            <button className='bg-secondary w-full md:w-auto px-5 py-3 capitalize text-white font-medium rounded-md'>
              Request a custom quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomQuote;
