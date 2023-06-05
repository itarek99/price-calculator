import LeftSide from './LeftSide';

const TurnaroundTime = ({ difficulty, selectedService, selectedPlan, setSelectedPlan }) => {
  return (
    <div className='grid grid-cols-12 mt-10'>
      <LeftSide listNumber={3}>
        <p className='font-semibold'>Turnaround Time</p>
        <p className='text-sm'>Save money if you have time to wait.</p>
      </LeftSide>

      <div className='col-span-12 xl:col-span-7'>
        <div className='ml-12 xl:ml-0 flex flex-col xl:flex-row xl:gap-28 p-4 xl:p-8 rounded-lg bg-white text-sm xl:text-base'>
          <div className='xl:flex xl:flex-wrap'>
            {selectedService.pricing[difficulty].map((price, priceIdx) => (
              <div key={priceIdx} className='flex  items-center gap-3 mb-0.5 basis-1/2'>
                <input
                  checked={selectedPlan.title === price.title}
                  onChange={() => setSelectedPlan(price)}
                  id={price.title + priceIdx}
                  name='price'
                  type='radio'
                />
                <label htmlFor={price.title + priceIdx} className='pt-1.5 text-gray-600'>
                  {price.title}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TurnaroundTime;
