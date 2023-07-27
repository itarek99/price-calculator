import info from '../../../assets/info.png';
const ToolTip = ({ toolTipText }) => {
  return (
    <div className='relative group z-30'>
      <div className='z-30 hidden group-hover:block shadow-lg absolute w-64 text-center bottom-12 -left-40 md:-left-16 text-sm font-normal bg-tertiary text-white p-3 rounded-lg'>
        <p className='z-[999] font-roboto'>{toolTipText}</p>
        <span className='absolute top-[98%] left-44 md:left-20'>
          <svg xmlns='http://www.w3.org/2000/svg' width='27' height='15' fill='none' viewBox='0 0 27 15'>
            <path
              fill='#3678B5'
              d='M.899 13.928C1.969 9.986 2.894 2.833 2.999 0H27C17.903 6.619-.172 17.87.899 13.928Z'
            />
          </svg>
        </span>
      </div>
      <img className='h-6 w-6 mb-1.5' src={info} alt='info icon' />
    </div>
  );
};
export default ToolTip;
