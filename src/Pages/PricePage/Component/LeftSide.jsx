import arrow from '../../../assets/arrow_right.png';

import PropTypes from 'prop-types';

const LeftSide = ({ children, listNumber }) => {
  return (
    <div className='col-span-12 xl:col-span-5 z-10'>
      <div className='border bg-white border-primary xl:w-9/12 p-5 rounded-full flex items-center gap-4 relative mb-3 xl:mb-0'>
        <div className='h-10 w-10 bg-primary rounded-full text-white flex justify-center items-center'>
          <span className='text-lg font-bold'>{listNumber}</span>
        </div>
        <div>{children}</div>

        <div className='absolute top-24 -left-6 transform -scale-x-100 -rotate-[130deg] xl:scale-100 xl:rotate-0 z-10 xl:-right-24 xl:left-auto xl:-top-4'>
          <img src={arrow} alt='' />
        </div>
      </div>
    </div>
  );
};

LeftSide.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LeftSide;
