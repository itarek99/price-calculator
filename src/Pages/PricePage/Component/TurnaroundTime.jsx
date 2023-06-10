import LeftSide from './LeftSide';

const TurnaroundTime = ({ difficulty, selectedService, selectedPlan, setSelectedPlan }) => {
  return (
    <div className='grid grid-cols-12 mt-12'>
      <LeftSide listNumber={3}>
        <p className='font-semibold'>Turnaround Time</p>
        <p className='text-sm'>Save money if you have time to wait.</p>
      </LeftSide>

      {selectedService.difficulty && (
        <div className='col-span-12 xl:col-span-7'>
          <div className='ml-12 xl:ml-0 flex flex-col xl:flex-row xl:gap-28 p-4 xl:p-8 rounded-lg bg-white text-sm xl:text-base'>
            <div className='space-y-2 xl:flex xl:flex-wrap'>
              {selectedService?.difficulty[difficulty]?.pricing.map((price, priceIdx) => (
                <div key={priceIdx} className='flex items-centers basis-1/2'>
                  <input
                    checked={selectedPlan?.time === price?.time}
                    onChange={() => setSelectedPlan(price)}
                    id={price?.time + priceIdx}
                    name='price'
                    type='radio'
                    className='hidden'
                  />
                  <label
                    htmlFor={price?.time + priceIdx}
                    className={`flex items-center xl:cursor-pointer select-none ${
                      selectedPlan?.time === price?.time ? 'text-primary font-medium' : 'text-grey'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full mr-2.5 border-2 ${
                        selectedPlan?.time === price?.time ? 'border-primary bg-primary' : 'border-grey'
                      }`}
                    ></span>
                    <span className=' xl:mt-0.5 capitalize'>{price?.time + ' $' + price?.price + ' USD'}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default TurnaroundTime;
