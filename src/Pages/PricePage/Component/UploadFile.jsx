import { HiXMark } from 'react-icons/hi2';
import LeftSide from './LeftSide';
const UploadFile = () => {
  return (
    <div className='grid grid-cols-12 mt-8'>
      <LeftSide>
        <p className='font-semibold'>Upload Files</p>
        <p className='text-sm'>What edit do you want to try?</p>
      </LeftSide>

      <div className='col-span-12 xl:col-span-7'>
        <div className='ml-12 xl:ml-0 p-4 xl:p-8 bg-white rounded-lg'>
          <div>
            <label className='text-sm xl:text-base font-medium mb-1.5 block' htmlFor='imageUpload'>
              *Upload Your Image Here (Max. 4)
            </label>
            <div className='flex '>
              {/* <label htmlFor='imageUpload' className='border p-3 py-6 grow rounded-l-lg bg-white'></label> */}
              <input
                id='imageUpload'
                type='file'
                multiple
                className='border text-sm xl:text-base p-3 grow rounded-l-lg bg-white'
              />
              <button className='border px-4 rounded-r-lg bg-white'>
                <HiXMark />
              </button>
            </div>
          </div>
          <div className='mt-4 xl:mt-6'>
            <label className='text-sm xl:text-base font-medium mb-1.5 block' htmlFor='imageUpload'>
              Image URL (Share your image link: Google Drive, Dropbox, Wetransfer, Any Others)
            </label>
            <div className='flex'>
              <input
                placeholder='Please paste your image URL here....'
                id='imageUpload'
                type='text'
                className='border text-sm xl:text-base p-3 grow rounded-lg'
              />
            </div>
          </div>
          <div className='mt-4 xl:mt-6'>
            <label className='text-sm xl:text-base font-medium mb-1.5 block' htmlFor='imageUpload'>
              Your Message
            </label>
            <div className='flex'>
              <textarea
                placeholder='Type your instruction here...'
                id='imageUpload'
                className='border text-sm xl:text-base p-3 grow rounded-lg'
              />
            </div>
          </div>
        </div>

        <div className='mt-12 xl:mt-16'>
          <button className='w-full xl:w-auto uppercase bg-[#2970FB] text-white font-bold text-xl py-4 px-10 rounded-lg'>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};
export default UploadFile;
