import { FaCheck } from 'react-icons/fa';
import arrow from '../../../assets/arrow_right.png';

import PropTypes from 'prop-types';

const LeftSide = ({ activity, children, listNumber }) => {
  const serialClasses = () => {
    if (activity === 'success') {
      return 'bg-primary';
    }
    if (activity === 'pending') {
      return 'bg-secondary';
    }
    if (activity === 'inactive') {
      return 'bg-grey';
    }
  };
  const borderClasses = () => {
    if (activity === 'success') {
      return 'border-primary';
    }
    if (activity === 'pending') {
      return 'border-secondary';
    }
    if (activity === 'inactive') {
      return 'border-gray-300';
    }
  };

  return (
    <div className='col-span-12 xl:col-span-5 z-10'>
      <div
        className={`border bg-white xl:w-9/12 p-4 md:p-5 rounded-full flex items-center gap-3 md:gap-4 relative mb-3 xl:mb-0 ${borderClasses()}`}
      >
        <div
          className={`h-10 w-10 rounded-full text-white flex justify-center items-center flex-shrink-0  ${serialClasses()}`}
        >
          <span className='font-roboto text-lg font-bold'>{activity === 'success' ? <FaCheck /> : listNumber}</span>
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
