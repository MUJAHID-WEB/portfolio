import React from 'react';
import { Link } from 'react-scroll';

//images
import Logo from '../assets/mujahid.png'
import Image from 'react-bootstrap/Image'
import Button from './Button';

const Header = () => {
  return (
    <header className="py-5 w-full" id="header">

      <div className="mx-20">
        <div className="flex justify-center md:justify-between items-center align-middle">
          {/* {button} */}
          <Link to="contact" activeClass='active'>

            <Button btnText='Contact Me' />
          </Link> 


          <div className="h-[10vh] w-[20vh] invisible md:visible hover:scale-125 duration-300
          cursor-pointer flex align-middle items-center justify-end">
            <Link to="about"
              activeClass='active' className=''>
              <Image src={Logo} alt="name" className='max-w-[80px] rounded-full' color='white' />
            </Link>
          </div>


        </div>
      </div>
    </header>
  );
};

export default Header;

//  sign_img_color