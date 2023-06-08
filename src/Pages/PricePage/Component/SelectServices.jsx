import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { HiChevronUpDown } from 'react-icons/hi2';
import LeftSide from './LeftSide';

const SelectServices = ({ services, selectedService, setSelectedService }) => {
  return (
    <div className='grid grid-cols-12 mt-12'>
      <LeftSide listNumber={1}>
        <p className='font-semibold'>Select Your Services</p>
        <p className='text-sm'>What edit do you want to try?</p>
      </LeftSide>

      <div className='col-span-12 xl:col-span-7'>
        <div className='ml-12 xl:ml-0'>
          <Listbox value={selectedService} onChange={setSelectedService}>
            <div className='relative mt-1'>
              <Listbox.Button className='relative w-full cursor-default rounded-lg py-4 px-4  xl:py-7 xl:px-8 text-left bg-white border-gray-300'>
                <span className='block truncate'>{selectedService.name}</span>
                <span className='pointer-events-none absolute inset-y-0 right-1 xl:right-4 flex items-center pr-2'>
                  <HiChevronUpDown className='h-8 w-8 text-gray-400' aria-hidden='true' />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute mt-2 max-h-60 z-10 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {services.map((service, serviceIdx) => (
                    <Listbox.Option
                      key={serviceIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2.5 px-4 ${
                          active ? 'bg-secondary/20 text-gray-700' : 'text-gray-900'
                        }`
                      }
                      value={service}
                    >
                      {service.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  );
};
export default SelectServices;
