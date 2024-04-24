import icon1 from '../assets/icons/1.png';
import icon2 from '../assets/icons/2.png';
import icon3 from '../assets/icons/3.png';
import icon4 from '../assets/icons/4.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export const SubBanner = () => {
  AOS.init()
  return (
    <div data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1500" className='flex items-center bg-[#ECEAE3] max-sm:flex-col rounded-b-lg mb-8'>

      <div className="card ">
        <div className="card-body">
          <img src={icon1} alt="icon" className='size-10'/>
          <h1>Awesome Aroma</h1>
          <p>You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
      </div>
      <div className="card ">
        <div className="card-body">
          <img src={icon2} alt="icon" className='size-10'/>
          <h1>High Quality</h1>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>
      </div>
      <div className="card ">
        <div className="card-body">
          <img src={icon3} alt="icon" className='size-10'/>
          <h1>Pure Grades</h1>
          <p>The coffee is made of the green coffee beans which you will love</p>
        </div>
      </div>
      <div className="card ">
        <div className="card-body">
          <img src={icon4} alt="icon" className='size-10'/>
          <h1>Proper Roasting</h1>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>

    </div>
  );
};
