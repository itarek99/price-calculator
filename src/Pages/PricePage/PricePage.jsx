import { useEffect, useState } from 'react';
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

const PricePage = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [difficulty, setDifficulty] = useState('basic');
  const [selectedPlan, setSelectedPlan] = useState({});
  const [uploadedPhoto, setUploadedPhoto] = useState();
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');
  const [totalImage, setTotalImage] = useState(0);

  useEffect(() => {
    setSelectedPlan(selectedService.difficulty ? selectedService.difficulty[difficulty].pricing[0] : null);
  }, [selectedService, difficulty]);

  const handlePlaceOrder = () => {
    const orderInfo = {
      selectedService,
      difficulty,
      selectedPlan,
      uploadedPhoto,
      imageUrl,
      message,
      totalImage,
      totalPrice: selectedPlan.price * totalImage,
    };

    console.log(orderInfo);
  };

  return (
    <>
      <Heading />
      <main className='mt-12 bg-[#4360b8] xl:bg-gradient-to-r from-[#FCFCFC] from-[38%]  via-[#F7F9FF] via-[38%] to-[#3e5dbb] to-100% py-16 xl:mt-20 '>
        <div className='container mx-auto px-4 xl:px-0'>
          <div>
            <h2 className='text-3xl font-bold'>Get Your Estimate</h2>
            <p className='text-sm text-gray-700'>We Ensure You The Best Quality & Rate</p>
          </div>
          <SelectServices
            services={services}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
          {selectedService.difficulty ? (
            <>
              <SelectDifficulty
                selectedService={selectedService}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
              />
              <TurnaroundTime
                difficulty={difficulty}
                selectedService={selectedService}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
              />
              <ImageQuantity
                totalImage={totalImage}
                setTotalImage={setTotalImage}
                selectedService={selectedService}
                selectedPlan={selectedPlan}
              />
              <UploadFile
                handlePlaceOrder={handlePlaceOrder}
                setImageUrl={setImageUrl}
                setUploadedPhoto={setUploadedPhoto}
                setMessage={setMessage}
              />
            </>
          ) : (
            <CustomQuote />
          )}
        </div>
      </main>
      <FAQSection />
      <CTASection />
    </>
  );
};
export default PricePage;
