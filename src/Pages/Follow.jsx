import image1 from '../assets/cups/Rectangle 9.png';
import image2 from '../assets/cups/Rectangle 10.png';
import image3 from '../assets/cups/Rectangle 11.png';
import image4 from '../assets/cups/Rectangle 12.png';
import image5 from '../assets/cups/Rectangle 13.png';
import image6 from '../assets/cups/Rectangle 14.png';
import image7 from '../assets/cups/Rectangle 15.png';
import image8 from '../assets/cups/Rectangle 16.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export const Follow = () => {
  AOS.init();
  return (
    <div className='my-16'>
      <div className='text-center mb-5'>
      <h4>Follow Us Now</h4>
      <h1 className='text-5xl font-rancho font-bold'>Follow on Instagram</h1>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div data-aos="zoom-out-right"
    data-aos-easing="ease-in-out"
    data-aos-duration="1500">
          <img src={image1} alt="" />
        </div>
        <div data-aos="zoom-out-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
          <img src={image2} alt="" />
        </div>
        <div data-aos="zoom-out-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
          <img src={image3} alt="" />
        </div>
        <div data-aos="zoom-out-left"
    data-aos-easing="linear"
    data-aos-duration="1500">
          <img src={image4} alt="" />
        </div>
        <div data-aos="zoom-out-right"
    data-aos-easing="linear"
    data-aos-duration="1500">
          <img src={image5} alt="" />
        </div>
        <div data-aos="zoom-out-up"
    data-aos-easing="linear"
    data-aos-duration="1500">
          <img src={image6} alt="" />
        </div>
        <div data-aos="zoom-out-up"
    data-aos-easing="linear"
    data-aos-duration="1500">
          <img src={image7} alt="" />
        </div>
        <div data-aos="zoom-out-left"
    data-aos-easing="linear"
    data-aos-duration="1500">
          <img src={image8} alt="" />
        </div>
      </div>
    </div>
  );
};
