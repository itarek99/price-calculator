import { useEffect, useState } from 'react';
import services from '../../data/services';
import CTASection from './Component/CTASection';
import FAQSection from './Component/FAQSection';
import Heading from './Component/Heading';
import ImageQuantity from './Component/ImageQuantity';
import SelectDifficulty from './Component/SelectDifficulty';
import SelectServices from './Component/SelectServices';
import TurnaroundTime from './Component/TurnaroundTime';
import UploadFile from './Component/UploadFile';
// #
const PricePage = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [difficulty, setDifficulty] = useState('basic');
  const [selectedPlan, setSelectedPlan] = useState({});

  useEffect(() => {
    setSelectedPlan(selectedService.pricing[difficulty][0]);
  }, [selectedService, difficulty]);

  return (
    <>
      <Heading />
      <main className='mt-12 bg-[#F7F9FF] xl:bg-gradient-to-r from-[#FCFCFC] from-[38%]  via-[#F7F9FF] via-[38%] to-[#F7F9FF] to-100% py-16 xl:mt-20'>
        <div className='container mx-auto px-4 '>
          <div>
            <h2 className='text-3xl font-bold'>Get Your Estimate</h2>
            <p className='text-sm text-gray-700'>We Ensure You The Best Quality & Rate</p>
          </div>
          <SelectServices
            services={services}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
          <SelectDifficulty difficulty={difficulty} setDifficulty={setDifficulty} />
          <TurnaroundTime
            difficulty={difficulty}
            selectedService={selectedService}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
          <ImageQuantity selectedPlan={selectedPlan} />
          <UploadFile />
        </div>
      </main>
      <FAQSection />
      <CTASection />
    </>
  );
};
export default PricePage;
