import arrow from '../../../assets/arrow_right.png';
import clipping_path_1 from '../../../assets/clipping_path_sample_1.jpg';
import clipping_path_2 from '../../../assets/clipping_path_sample_2.png';

const SelectDifficulty = ({ difficulty, setDifficulty }) => {
  const handleRadioChange = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <div className='grid grid-cols-12 mt-8'>
      <div className='col-span-12 xl:col-span-5'>
        <div>
          <div className='border xl:w-9/12 bg-white p-5 rounded-full flex items-center gap-4 relative mb-3'>
            <div className='h-10 w-10 bg-orange-600 rounded-full text-white flex justify-center items-center'>
              <i className='fa-solid fa-check'></i>
            </div>
            <div className=''>
              <p className='font-semibold'>Select Difficulty</p>
              <p className='text-sm'>What edit do you want to try?</p>
            </div>

            <div className='absolute top-24 -left-6 transform -scale-x-100 -rotate-[130deg] xl:scale-100 xl:rotate-0 z-10 xl:-right-24 xl:left-auto xl:-top-4'>
              <img src={arrow} alt='' />
            </div>
          </div>

          <div>
            <div className='border bg-white ml-12 xl:ml-16 xl:mr-36 p-6 mb-7 rounded-lg'>
              <div className='flex items-center gap-3'>
                <input
                  checked={difficulty === 'basic'}
                  onChange={handleRadioChange}
                  value='basic'
                  id='basic'
                  name='difficulty'
                  type='radio'
                />
                <label htmlFor='basic' className='pt-1.5 text-gray-600'>
                  Basic
                </label>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  checked={difficulty === 'medium'}
                  onChange={handleRadioChange}
                  value='medium'
                  id='medium'
                  name='difficulty'
                  type='radio'
                />
                <label htmlFor='medium' className='pt-1.5 text-gray-600'>
                  Medium
                </label>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  checked={difficulty === 'complicated'}
                  onChange={handleRadioChange}
                  value='complicated'
                  id='complicated'
                  name='difficulty'
                  type='radio'
                />
                <label htmlFor='complicated' className='pt-1.5 text-gray-600'>
                  Complicated
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='col-span-12 xl:col-span-7'>
        <div className='grid grid-cols-3 bg-white px-5 xl:px-16 py-5 xl:py-8 rounded-lg gap-4 h-44 xl:h-80 overflow-hidden'>
          <div className='col-span-1 flex flex-col justify-between'>
            <div className='mb-3'>
              <img className='h-16 xl:h-28 w-full' src={clipping_path_2} alt='Work sample' />
            </div>
            <div>
              <img className='h-16 xl:h-28 w-full' src={clipping_path_1} alt='Work sample' />
            </div>
          </div>
          <div className='col-span-2'>
            <div>
              <img className='object-fill h-36 xl:h-64 w-full' src={clipping_path_2} alt='Work sample' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectDifficulty;
