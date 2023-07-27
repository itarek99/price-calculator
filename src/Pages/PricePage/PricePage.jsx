import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import dotMatrix from '../../assets/dotMatrix.svg';
import ellipse from '../../assets/ellipse.svg';
import fileFormat from '../../data/fileFormat';
import services from '../../data/services';
import CTASection from './Component/CTASection';
import CustomQuote from './Component/CustomQuote';
import FAQSection from './Component/FAQSection';
import Heading from './Component/Heading';
import ImageQuantity from './Component/ImageQuantity';
import SelectDifficulty from './Component/SelectDifficulty';
import SelectServices from './Component/SelectServices';
import TurnaroundTime from './Component/TurnaroundTime';
import UploadFile from './Component/UploadFile';

import emailjs from '@emailjs/browser';

const PricePage = () => {
  const [activity, setActivity] = useState({
    services: 'pending',
    difficulty: 'inactive',
    time: 'inactive',
    quantity: 'inactive',
    files: 'inactive',
  });
  const [selectedService, setSelectedService] = useState(services[0]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedFileFormat, setSelectedFileFormat] = useState(fileFormat[0]);
  const [difficulty, setDifficulty] = useState('basic');
  const [selectedPlan, setSelectedPlan] = useState({});
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');
  const [totalImage, setTotalImage] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setSelectedPlan(selectedService.difficulty ? selectedService.difficulty[difficulty].pricing[2] : null);
  }, [selectedService, difficulty]);

  // Paypal Code

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: (selectedPlan.price * totalImage).toFixed(2),
          },
        },
      ],
      application_context: {
        shipping_preference: 'NO_SHIPPING',
      },
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      toast.success('Payment Successful.');
      const { payer, purchase_units, status } = details;
      emailjs.send(
        'pricing_service',
        'pricing_template',
        {
          payer_email: payer.email_address,
          reply_to: email || payer.email_address,
          name: name,
          email: email,
          payer_name: payer.name.given_name + ' ' + payer.name.surname,
          transaction_ID: purchase_units[0].payments.captures[0].id,
          status,
          service: selectedService.name,
          difficulty: difficulty.charAt(0).toUpperCase() + difficulty.slice(1),
          time: selectedPlan.time,
          price: selectedPlan.price,
          returnFileType: selectedFileFormat.name,
          imageUrl: imageUrl,
          message: message,
          totalImage: totalImage,
          totalPrice: (selectedPlan.price * totalImage).toFixed(2),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
    });
  };
  const onError = () => {
    toast.error('Something Went Wrong.');
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
      }}
    >
      <Heading />
      <main className='font-roboto relative bg-[#F7F9FF] xl:bg-gradient-to-r from-[#FCFCFC] from-[39.5%]  via-[#F7F9FF] via-[38%] to-[#F7F9FF] to-100% pb-16 pt-12'>
        <div className='container mx-auto px-4 xl:px-0'>
          <div>
            <h2 className='text-3xl font-bold'>Get Your Estimate</h2>
            <div className='flex xl:ml-8 mt-2'>
              <div className='hidden xl:block mt-2.5 mr-1'>
                <svg xmlns='http://www.w3.org/2000/svg' width='70' height='12' fill='none' viewBox='0 0 71 12'>
                  <path
                    stroke='#2B74B8'
                    d='M.784 11.37C4.321 7.285 14.92-.464 29.02 1.21c17.624 2.095 21.454 13.884 40.837 4.853'
                  />
                </svg>
              </div>
              <p className='text-sm text-gray-700 '>
                We Ensure You The{' '}
                <span className='bg-[#FC2E9D] text-white py-1 px-0.5 relative rounded-sm'>
                  Best Quality & Rate
                  <span className='absolute top-[98%] left-8'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='27' height='14' fill='none' viewBox='0 0 27 14'>
                      <path
                        fill='#FC2E9D'
                        d='M.86 12.928C1.932 8.986 2.41 2.833 2.517 0H27C17.903 6.619-.21 16.87.86 12.928Z'
                      />
                    </svg>
                  </span>
                </span>
              </p>
            </div>
          </div>
          <SelectServices
            setImageLoaded={setImageLoaded}
            activity={activity}
            setActivity={setActivity}
            services={services}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
          {selectedService.difficulty ? (
            <>
              <SelectDifficulty
                imageLoaded={imageLoaded}
                setImageLoaded={setImageLoaded}
                activity={activity}
                setActivity={setActivity}
                selectedService={selectedService}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
              />
              <TurnaroundTime
                activity={activity}
                setActivity={setActivity}
                difficulty={difficulty}
                selectedService={selectedService}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
              />
              <ImageQuantity
                activity={activity}
                setActivity={setActivity}
                totalImage={totalImage}
                setTotalImage={setTotalImage}
                selectedService={selectedService}
                selectedPlan={selectedPlan}
              />
              <UploadFile
                name={name}
                email={email}
                imageUrl={imageUrl}
                message={message}
                selectedFileFormat={selectedFileFormat}
                selectedService={selectedService}
                difficulty={difficulty}
                totalImage={totalImage}
                selectedPlan={selectedPlan}
                setName={setName}
                activity={activity}
                setEmail={setEmail}
                setMessage={setMessage}
                setImageUrl={setImageUrl}
                setActivity={setActivity}
                setSelectedFileFormat={setSelectedFileFormat}
                createOrder={createOrder}
                onApprove={onApprove}
                onError={onError}
              />
            </>
          ) : (
            <CustomQuote />
          )}
        </div>

        <div className='hidden xl:block absolute top-0 right-0'>
          <img src={dotMatrix} alt='dot matrix' />
        </div>
        <div className='absolute top-48 right-0'>
          <img src={ellipse} alt='bg ellipse' />
        </div>
        <div className='hidden xl:block bg-bottom-shape absolute bottom-0 right-0 bg-gradient-to-r from-[#FEE6F9] h-[540px] xl:h-full xl:max-h-[680px] w-full xl:w-[60.5%]'></div>
      </main>
      <FAQSection />
      <CTASection />
      <ToastContainer style={{ zIndex: 999999 }} />
    </PayPalScriptProvider>
  );
};
export default PricePage;
