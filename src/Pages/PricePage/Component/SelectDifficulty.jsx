import arrow from '../../../assets/arrow_right.png';

const SelectDifficulty = ({ selectedService, difficulty, setDifficulty }) => {
  const difficultyPlans = Object.keys(selectedService.difficulty || {});
  const handleRadioChange = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <div className='grid grid-cols-12 mt-8'>
      {selectedService.difficulty && (
        <>
          <div className='col-span-12 xl:col-span-5'>
            <div className='border bg-white border-primary xl:w-9/12 p-5 rounded-full flex items-center gap-4 relative mb-4 xl:mb-6'>
              <div className='h-10 w-10 bg-primary rounded-full text-white flex justify-center items-center'>
                <span className='text-lg font-bold'>2</span>
              </div>
              <div className=''>
                <p className='font-semibold'>Select Difficulty</p>
                <p className='text-sm'>What edit do you want to try?</p>
              </div>

              <div className='absolute top-24 -left-6 transform -scale-x-100 -rotate-[130deg] xl:scale-100 xl:rotate-0 z-10 xl:-right-24 xl:left-auto xl:-top-4'>
                <img src={arrow} alt='' />
              </div>
            </div>

            <div className='border bg-white ml-12 xl:ml-16 xl:mr-36 p-6 mb-7 rounded-lg'>
              {difficultyPlans.map((item, index) => (
                <div key={index} className='flex items-center mb-1.5'>
                  <input
                    onChange={handleRadioChange}
                    checked={difficulty === item}
                    value={item}
                    id={item}
                    name='difficulty'
                    type='radio'
                    className='hidden'
                  />
                  <label
                    htmlFor={item}
                    className={`flex items-center xl:cursor-pointer select-none ${
                      difficulty === item ? 'text-primary font-medium' : 'text-grey'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full mr-2.5 border-2 ${
                        difficulty === item ? 'border-primary bg-primary' : 'border-grey'
                      }`}
                    ></span>
                    <span className='xl:mt-0.5 capitalize'>{item}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className='col-span-12 xl:col-span-7'>
            {/* <div className=' bg-white p-4 xl:p-8 rounded-lg gap-4 object-contain h-60'>
              <img
                className='block object-contain mx-auto'
                src={selectedService.difficulty[difficulty].thumbnail}
                alt='Work sample'
              />
            </div> */}

            <div className='bg-white h-64 p-4 xl:p-8 rounded-lg'>
              <div className='h-full flex justify-center items-center flex-col'>
                <img className='w-full object-contain min-h-0' src={selectedService.difficulty[difficulty].thumbnail} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default SelectDifficulty;
