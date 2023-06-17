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
    details: 'Absolutely! We offer customizable service packages to meet your specific needs and preferences.',
  },
  {
    id: 3,
    title: 'How long does it take to complete a project?',
    details:
      'The quantity and complexity of the images involved determines the project completion time. Rest assured; we will meet your specified deadline for project submission.',
  },
  {
    id: 4,
    title: 'Are there any hidden fees?',
    details: 'No, our pricing is open and honest. There are no unstated costs. You pay the price that is displayed.',
  },
  {
    id: 5,
    title: 'What happens if I am not satisfied with the service?',
    details:
      'Customer satisfaction is our utmost priority. We offer unlimited revisions, so if you are unsatisfied with the editing, simply request a free correction and provide us with detailed instructions to rectify any mistakes.',
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
                    <Disclosure.Button className='flex w-full items-center gap-3 py-4 text-left text-sm font-medium border-b border-gray-500 focus-visible:outline-none'>
                      {open ? <FaMinus className='h-4 w-4' /> : <FaPlus className='h-4 w-4' />}
                      <span className='xl:text-lg font-medium'>{faq.title}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className='px-4 pt-4 pb-2 text-gray-600 '>{faq.details}</Disclosure.Panel>
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
          className='bg-secondary text-base xl:text-xl px-8 py-3 xl:py-4 capitalize text-white font-medium rounded-lg'
        >
          Request a custom quote
        </a>
      </div>
    </div>
  );
};
export default FAQSection;
