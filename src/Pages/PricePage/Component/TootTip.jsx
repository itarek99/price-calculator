import info from '../../../assets/info.png';
const TootTip = ({ toolTipText }) => {
  return (
    <div className='relative group'>
      <div className='invisible group-hover:visible shadow-lg absolute w-64 text-center bottom-12 -left-32 xl:-left-12 text-sm font-normal bg-tertiary text-white p-3 rounded-lg'>
        {toolTipText}
        <span className='absolute top-[98%] left-36 xl:left-16'>
          <svg xmlns='http://www.w3.org/2000/svg' width='27' height='15' fill='none' viewBox='0 0 27 15'>
            <path
              fill='#3678B5'
              d='M.899 13.928C1.969 9.986 2.894 2.833 2.999 0H27C17.903 6.619-.172 17.87.899 13.928Z'
            />
          </svg>
        </span>
      </div>
      <img className='h6 w-6 mb-1.5' src={info} alt='info icon' />
    </div>
  );
};
export default TootTip;
