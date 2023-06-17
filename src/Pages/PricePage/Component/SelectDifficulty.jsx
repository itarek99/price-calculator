import { useRef, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import arrow from '../../../assets/arrow_right.png';
import ToolTip from './ToolTip';

const SelectDifficulty = ({
  setImageLoaded,
  imageLoaded,
  activity,
  setActivity,
  selectedService,
  difficulty,
  setDifficulty,
}) => {
  const difficultyTooltip = (item) => {
    if (item === 'basic') {
      return 'Basic editing is generally applied to images that require minimal modifications.';
    }
    if (item === 'medium') {
      return 'Medium editing goes a step further and involves more advanced modifications and enhancements.';
    }
    if (item === 'complicated') {
      return 'Complicated editing is the most advanced level of editing, usually required for images with complex challenges. It requires a high level of skill, expertise, and attention to detail.';
    }
  };

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

  const [loaderHeight, setLoaderHeight] = useState(0);
  const imageBox = useRef();

  const difficultyPlans = Object.keys(selectedService.difficulty || {});
  const handleRadioChange = (event) => {
    setLoaderHeight(imageBox.current.clientHeight + 2);

    setImageLoaded(false);
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
              <div
                className={`h-10 w-10  rounded-full text-white flex justify-center items-center flex-shrink-0 ${serialClasses()}`}
              >
                <span className='text-lg font-bold'>{activity.difficulty === 'success' ? <FaCheck /> : 2} </span>
              </div>
              <div className=''>
                <div className='flex items-center gap-2'>
                  <p className='font-semibold'>Select Difficulty</p>
                  <ToolTip toolTipText='Compare the complexity of your image with the three categories represented by the example image.' />
                </div>
                <p className='text-xs md:text-sm'>What is the level of complexity in your images?</p>
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
                    <span className='xl:mt-0.5 flex items-center gap-2'>
                      <span className='capitalize'>{item}</span>
                      <ToolTip toolTipText={difficultyTooltip(item)} />
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className='col-span-12 xl:col-span-5 z-10'>
            <div className='bg-white p-6 rounded-lg mt-4 xl:mt-0'>
              <div className='flex items-center flex-col'>
                {imageLoaded ? null : (
                  <div style={{ height: loaderHeight + 'px' }} className='flex items-center justify-center'>
                    <div
                      className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                      role='status'
                    ></div>
                  </div>
                )}
                <img
                  ref={imageBox}
                  style={imageLoaded ? {} : { display: 'none' }}
                  onLoad={() => {
                    setImageLoaded(true);
                  }}
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
