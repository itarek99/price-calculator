import LeftSide from './LeftSide';
const UploadFile = ({
  activity,
  setActivity,
  email,
  imageUrl,
  handlePlaceOrder,
  setImageUrl,
  setName,
  setEmail,
  setMessage,
}) => {
  return (
    <div className='grid grid-cols-12 mt-12'>
      <LeftSide activity={activity.files} listNumber={5}>
        <p className='font-semibold'>Upload Files</p>
        <p className='text-sm'>What edit do you want to try?</p>
      </LeftSide>

      <div className='col-span-12 xl:col-span-7 z-10'>
        <div className='ml-12 xl:ml-0 p-4 xl:p-8 bg-white rounded-lg'>
          <div className='mt-4 xl:mt-6'>
            <label className='text-sm xl:text-base font-medium mb-1.5 block' htmlFor='name'>
              Name
            </label>
            <div className='flex'>
              <input
                onChange={(e) => setName(e.target.value)}
                placeholder='Your Full Name'
                id='name'
                type='text'
                className='border text-sm xl:text-base p-3 grow rounded-lg outline-none focus:border-primary'
              />
            </div>
          </div>
          <div className='mt-4 xl:mt-6'>
            <label className='text-sm xl:text-base font-medium mb-1.5 block' htmlFor='email'>
              *Email
            </label>
            <div className='flex'>
              <input
                onChange={(e) => {
                  if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) && imageUrl) {
                    setActivity((prevState) => ({ ...prevState, files: 'success' }));
                  }
                  setEmail(e.target.value);
                }}
                placeholder='Your Email Address'
                id='email'
                type='email'
                className='border text-sm xl:text-base p-3 grow rounded-lg outline-none focus:border-primary'
              />
            </div>
          </div>
          <div className='mt-4 xl:mt-6'>
            <label className='text-sm xl:text-base font-medium mb-1.5 block' htmlFor='imageUpload'>
              *Image URL (Share your image link: Google Drive, Dropbox, Wetransfer, Any Others)
            </label>
            <div className='flex'>
              <input
                onChange={(e) => {
                  if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) && imageUrl) {
                    setActivity((prevState) => ({ ...prevState, files: 'success' }));
                  }
                  setImageUrl(e.target.value);
                }}
                placeholder='Please paste your image URL here...'
                id='imageUpload'
                type='text'
                className='border text-sm xl:text-base p-3 grow rounded-lg outline-none focus:border-primary'
              />
            </div>
          </div>
          <div className='mt-4 xl:mt-6'>
            <label className='text-sm xl:text-base font-medium mb-1.5 block' htmlFor='imageUpload'>
              Your Message
            </label>
            <div className='flex'>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Type your instruction here...'
                id='imageUpload'
                className='border text-sm xl:text-base p-3 grow rounded-lg outline-none focus:border-primary'
              />
            </div>
          </div>
        </div>

        <div className='mt-12 xl:mt-16'>
          <button
            onClick={handlePlaceOrder}
            className='w-full xl:w-auto uppercase bg-[#2970FB] text-white font-bold text-xl py-4 px-10 rounded-lg'
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};
export default UploadFile;
