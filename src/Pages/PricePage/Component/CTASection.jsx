import { FaPhone } from 'react-icons/fa';

const CTASection = () => {
  return (
    <div className='bg-[#F7F9FF] mt-12 xl:mt-20'>
      <div className='container mx-auto px-4 xl:flex xl:justify-between py-8 xl:py-16 items-center'>
        <p className='text-xl xl:text-3xl font-bold max-w-2xl'>
          Still have questions about how <span className='text-[#0157FF]'>Clipping Path CA</span> can help your
          business?
        </p>

        <div className='mt-4 shrink-0 flex items-center gap-3'>
          <FaPhone className='text-gray-500' />
          <p className='text-[#0D216D] font-bold'>+1 (917) 936-4784</p>
        </div>
      </div>
    </div>
  );
};
export default CTASection;
