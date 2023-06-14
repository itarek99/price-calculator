import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import LeftSide from './LeftSide';
const ImageQuantity = ({ activity, setActivity, totalImage, setTotalImage, selectedService, selectedPlan }) => {
  const preventSymbols = (e) => {
    const keyCodes = ['Minus', 'NumpadSubtract', 'NumpadAdd', 'Equal'];
    if (keyCodes.includes(e.code)) {
      e.preventDefault();
    }
  };

  return (
    <div className='grid grid-cols-12 mt-12'>
      <LeftSide activity={activity.quantity} listNumber={4}>
        <p className='font-semibold'>Image Quantity</p>
        <p className='text-sm'>What edit do you want to try?</p>
      </LeftSide>

      {selectedService.difficulty && (
        <div className='col-span-12 xl:col-span-7'>
          <div className='ml-12 justify-between xl:ml-0 flex rounded-lg h-12 xl:h-20 bg-white'>
            <button
              onClick={() => {
                if (+totalImage === 0) return;
                setActivity((prevState) => ({ ...prevState, quantity: 'success', files: 'pending' }));
                setTotalImage(totalImage - 1);
              }}
              className='text-gray-500 border-r px-4 xl:px-10 flex justify-center items-center '
            >
              <FaMinusCircle className='text-lg xl:text-2xl' />
            </button>

            <div className='flex'>
              <input
                min={1}
                step={1}
                onKeyDown={preventSymbols}
                onChange={(e) => {
                  setActivity((prevState) => ({ ...prevState, quantity: 'success', files: 'pending' }));
                  setTotalImage(e.target.value.toString().replace('+', '').replace('-', ''));
                }}
                className='w-28 text-center outline-none text-gray-700 font-medium xl:text-xl'
                type='number'
                value={totalImage}
              />
            </div>

            <button
              onClick={() => {
                setActivity((prevState) => ({ ...prevState, quantity: 'success', files: 'pending' }));
                setTotalImage(+totalImage + 1);
              }}
              className='text-gray-500 border-l px-4 xl:px-10 flex justify-center items-center '
            >
              <FaPlusCircle className='text-lg xl:text-2xl' />
            </button>
          </div>

          <div className='ml-12 xl:ml-0 flex items-center justify-between mt-3 xl:mt-8 border bg-white border-primary h-12 xl:h-20 px-4 xl:px-10 rounded-lg font-semibold'>
            <div className='text-gray-500'>
              <p className='text-sm xl:text-base select-none'>Sub Total</p>
            </div>

            <div className='text-primary  xl:text-xl font-semibold select-none'>
              <p>${(selectedPlan?.price * totalImage).toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ImageQuantity;
