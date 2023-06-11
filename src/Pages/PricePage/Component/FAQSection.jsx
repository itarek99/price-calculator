import { Disclosure } from '@headlessui/react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const faqs = [
  {
    id: 1,
    title: 'What payment methods do you accept?',
    details:
      'We accept payment through credit card, PayPal, and bank transfer. Our payment methods are secure and easy to use.',
  },
  {
    id: 2,
    title: 'Can I customize my service package?',
    details:
      'We accept payment through credit card, PayPal, and bank transfer. Our payment methods are secure and easy to use.',
  },
  {
    id: 3,
    title: 'How long does it take to complete a project?',
    details:
      'We accept payment through credit card, PayPal, and bank transfer. Our payment methods are secure and easy to use.',
  },
  {
    id: 4,
    title: 'Are there any hidden fees?',
    details:
      'We accept payment through credit card, PayPal, and bank transfer. Our payment methods are secure and easy to use.',
  },
  {
    id: 5,
    title: 'What happens if I am not satisfied with the service?',
    details:
      'We accept payment through credit card, PayPal, and bank transfer. Our payment methods are secure and easy to use.',
  },
];

const FAQSection = () => {
  return (
    <div className={`faq-section `}>
      <div className='pt-16'>
        <h1 className='text-center text-4xl font-bold '>FAQ</h1>
      </div>

      <div className='max-w-3xl mx-auto mt-6 xl:mt-12 px-3'>
        <div className='w-full'>
          <div className='mx-auto w-full p-2'>
            {faqs.map((faq) => (
              <Disclosure key={faq.id}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full items-center gap-3 py-4 text-left text-sm font-medium border-b border-gray-500'>
                      {open ? <FaMinus className='h-4 w-4' /> : <FaPlus className='h-4 w-4' />}
                      <span className='xl:text-lg font-medium'>{faq.title}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>{faq.details}</Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>

      <div className='text-center mt-12 xl:mt-20 pb-20'>
        <a
          href='https://clippingpathca.com/get-a-quote/'
          className='bg-secondary text-xl px-8 py-4 capitalize text-white font-medium rounded-lg'
        >
          Request a custom quote
        </a>
      </div>
    </div>
  );
};
export default FAQSection;
