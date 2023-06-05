import { useState } from 'react';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import LeftSide from './LeftSide';
const ImageQuantity = ({ selectedPlan }) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className='grid grid-cols-12 mt-10'>
      <LeftSide listNumber={4}>
        <p className='font-semibold'>Image Quantity</p>
        <p className='text-sm'>What edit do you want to try?</p>
      </LeftSide>

      <div className='col-span-12 xl:col-span-7'>
        <div className='ml-12 justify-between xl:ml-0 flex rounded-lg h-12 xl:h-20 bg-white'>
          <button
            onClick={() => {
              if (quantity === 0) return;
              setQuantity((prevState) => prevState - 1);
            }}
            className='text-gray-500 border-r px-4 xl:px-10 flex justify-center items-center '
          >
            <FaMinusCircle className='text-lg xl:text-2xl' />
          </button>

          {/* <input
            onChange={(e) => setQuantity(+e.target.value)}
            value={quantity}
            className='shrink h-full outline-none text-center'
            type='number'
            name=''
            id=''
          /> */}

          <div className='self-center'>{quantity}</div>

          <button
            onClick={() => setQuantity((prevState) => prevState + 1)}
            className='text-gray-500 border-l px-4 xl:px-10 flex justify-center items-center '
          >
            <FaPlusCircle className='text-lg xl:text-2xl' />
          </button>
        </div>

        <div className='ml-12 xl:ml-0 flex items-center justify-between mt-3 xl:mt-12 border bg-white border-primary h-12 xl:h-20 px-4 xl:px-10 rounded-lg font-semibold'>
          <div className='text-gray-500'>
            <p className='text-sm xl:text-base select-none'>Sub Total</p>
          </div>

          <div className='text-primary  xl:text-xl font-semibold select-none'>
            <p>${(selectedPlan.price * quantity).toFixed(3)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageQuantity;
