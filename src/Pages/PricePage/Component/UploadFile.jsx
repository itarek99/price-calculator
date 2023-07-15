import { Listbox, Transition } from '@headlessui/react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { Fragment, useState } from 'react';
import { HiChevronUpDown } from 'react-icons/hi2';
import fileFormat from '../../../data/fileFormat';
import LeftSide from './LeftSide';
import ToolTip from './ToolTip';

import paypalLogo from '../../../assets/paypal.svg';

const UploadFile = ({
  activity,
  setActivity,
  totalImage,
  selectedService,
  difficulty,
  selectedPlan,
  email,
  imageUrl,
  message,
  name,
  createOrder,
  onApprove,
  onError,
  setImageUrl,
  setName,
  setEmail,
  setMessage,
  selectedFileFormat,
  setSelectedFileFormat,
}) => {
  const [formatChanged, setFormatChanged] = useState(false);

  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <div className='grid grid-cols-12 mt-12'>
      <LeftSide activity={activity.files} listNumber={5}>
        <div className='flex items-center gap-2'>
          <p className='font-semibold'>Upload Files</p>
          <ToolTip toolTipText='Fill out the form and attach the image file link so that we can download it quickly and easily. Image file types should be: JPG (preferable), RAW, PSD, PNG, TIFF, or CR2.' />
        </div>
        <p className='text-sm'>Send your file and place your order seamlessly.</p>
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
                  if (email.match(emailRegEx) && imageUrl && formatChanged) {
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
                  if (email.match(emailRegEx) && imageUrl && formatChanged) {
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
              *Return File Format
            </label>
            <div>
              <Listbox
                value={selectedFileFormat}
                onChange={(value) => {
                  if (email.match(emailRegEx) && imageUrl && formatChanged) {
                    setActivity((prevState) => ({ ...prevState, files: 'success' }));
                  }
                  setFormatChanged((prevState) => !prevState);
                  setSelectedFileFormat(value);
                }}
              >
                <div className='relative mt-1'>
                  <Listbox.Button className='border focus:border-primary relative w-full cursor-default rounded-lg p-3 text-left bg-white focus-visible:outline-none'>
                    <span className='block truncate text-sm xl:text-base'>{selectedFileFormat.name}</span>
                    <span className='pointer-events-none absolute inset-y-0 right-1 xl:right-2 flex items-center'>
                      <HiChevronUpDown className='h-8 w-8 text-gray-400' aria-hidden='true' />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Listbox.Options className='absolute mt-2 max-h-48 z-10 w-full overflow-auto rounded-md bg-white text-sm xl:text-base shadow-lg focus-visible:outline-none'>
                      {fileFormat.map((format, formatId) => (
                        <Listbox.Option
                          key={formatId}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2.5 px-4 ${
                              active ? 'bg-secondary/20 text-gray-700' : 'text-gray-900'
                            }`
                          }
                          value={format}
                        >
                          {format.name}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
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
                rows={3}
                className='border text-sm xl:text-base p-3 grow rounded-lg outline-none focus:border-primary'
              />
            </div>
          </div>
        </div>

        <div className='mt-12 xl:mt-16'>
          <div className='h-[55px] w-full xl:w-auto max-w-[750px] xl:text-xl rounded bg-[#0070ba] relative flex justify-center items-center'>
            <img src={paypalLogo} alt='paypal logo' className='h-6' />
            <PayPalButtons
              forceReRender={[
                totalImage,
                selectedService,
                difficulty,
                selectedPlan,
                message,
                name,
                imageUrl,
                email,
                selectedFileFormat,
              ]}
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
              className='w-full xl:w-auto xl:text-xl absolute inset-0'
              fundingSource='paypal'
              style={{ layout: 'vertical', color: 'blue', label: 'checkout', height: 55 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UploadFile;
