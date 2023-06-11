import { FaCheck } from 'react-icons/fa';
import arrow from '../../../assets/arrow_right.png';

const SelectDifficulty = ({ activity, setActivity, selectedService, difficulty, setDifficulty }) => {
  const serialClasses = () => {
    if (activity?.difficulty === 'success') {
      return 'bg-primary';
    }
    if (activity?.difficulty === 'pending') {
      return 'bg-secondary';
    }
    if (activity?.difficulty === 'inactive') {
      return 'bg-grey';
    }
  };
  const borderClasses = () => {
    if (activity?.difficulty === 'success') {
      return 'border-primary';
    }
    if (activity?.difficulty === 'pending') {
      return 'border-secondary';
    }
    if (activity?.difficulty === 'inactive') {
      return 'border-gray-300';
    }
  };

  const difficultyPlans = Object.keys(selectedService.difficulty || {});
  const handleRadioChange = (event) => {
    setDifficulty(event.target.value);
    setActivity((prevState) => ({ ...prevState, difficulty: 'success', time: 'pending' }));
  };

  return (
    <div className='grid grid-cols-12 mt-12'>
      {selectedService.difficulty && (
        <>
          <div className='col-span-12 xl:col-span-5 z-10'>
            <div
              className={`border bg-white  xl:w-9/12 p-5 rounded-full flex items-center gap-4 relative mb-4 xl:mb-6 ${borderClasses()}`}
            >
              <div className={`h-10 w-10  rounded-full text-white flex justify-center items-center ${serialClasses()}`}>
                <span className='text-lg font-bold'>{activity.difficulty === 'success' ? <FaCheck /> : 2} </span>
              </div>
              <div className=''>
                <p className='font-semibold'>Select Difficulty</p>
                <p className='text-sm'>What edit do you want to try?</p>
              </div>

              <div className='absolute top-24 -left-6 transform -scale-x-100 -rotate-[130deg] xl:scale-100 xl:rotate-0 z-10 xl:-right-24 xl:left-auto xl:-top-4'>
                <img src={arrow} alt='' />
              </div>
            </div>

            <div className='border bg-white ml-12 xl:ml-16 xl:mr-36 p-6 rounded-lg'>
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
          <div className='col-span-12 xl:col-span-5 z-10'>
            {/* <div className=' bg-white p-4 xl:p-8 rounded-lg gap-4 object-contain h-60'>
              <img
                className='block object-contain mx-auto'
                src={selectedService.difficulty[difficulty].thumbnail}
                alt='Work sample'
              />
            </div> */}

            <div className='bg-white p-6 rounded-lg mt-4 xl:mt-0'>
              <div className='h-full flex items-center flex-col'>
                <img
                  className='object-contain min-h-0 border border-gray-700'
                  src={selectedService.difficulty[difficulty].thumbnail}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default SelectDifficulty;
