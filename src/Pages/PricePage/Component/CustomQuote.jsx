const CustomQuote = () => {
  return (
    <div className='grid grid-cols-12 '>
      <div className='col-span-12 xl:col-span-5 z-10'></div>
      <div className='col-span-12 xl:col-span-7 mt-3 xl:mt-5 z-10'>
        <div className='p-5 pb-8 xl:p-8 xl:pb-10 bg-white rounded-lg'>
          <p className='text-gray-800 font-roboto'>
            Pricing Not Available for This Service,
            <br /> Please Request A Custom Quote!
          </p>
          <div className='mt-6'>
            <a
              href='https://clippingpathca.com/get-a-quote/'
              className='bg-secondary w-full md:w-auto px-5 py-3 capitalize !no-underline !text-white font-medium rounded-md font-roboto'
            >
              Request a custom quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomQuote;
