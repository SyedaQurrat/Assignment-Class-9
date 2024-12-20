'use client';
import Card from '@/componenets/Card'

const CourseSection: React.FC = () => {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10">
      <h1 className="lg:text-4xl sm:text-4xl text-2xl text-sky-800 sm:text-left text-center text-main font-extrabold mt-10">
        Advanced Courses
      </h1>

      {/* First Row */}
      <div className="flex flex-wrap gap-5 mt-10">
        <div className="w-full sm:w-[100%] md:w-[48%]">
          <Card
            imageSrc="/images/core-img-4.jpg"
            altText="artificial intelligence"
            
          />
        </div>
        <div className="w-full sm:w-[100%] md:w-[48%]">
          <Card
            imageSrc="/images/core-img-5.jpg"
            altText="web 3 and metaverse" 
          />
        </div>
      </div>
      {/* Second Row */}
      <div className="flex flex-wrap gap-5 mt-10">
        <div className="w-full sm:w-[100%] md:w-[48%] lg:w-[30%]">
          <Card
            imageSrc="/images/core-img-6.jpg"
            altText="cloud-native computing"
          />
        </div>
        <div className="w-full sm:w-[100%] md:w-[48%] lg:w-[30%]">
          <Card
            imageSrc="/images/core-img-7.jpg"
            altText="ambient computing and IoT"
          />
        </div>
        <div className="w-full sm:w-[100%] md:w-[48%] lg:w-[30%]">
          <Card
            imageSrc="/images/core-img-8.jpg"
            altText="genomics and bioinformatics"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseSection;

