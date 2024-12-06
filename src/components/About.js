import React from 'react';
//countup
import CountUp from 'react-countup';
//intsersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';
//To add link to contact 
import { Link } from 'react-scroll';
import Button from './Button';

// bg-slate-800
// bg-stone-700
//#AA4465
//#3D0814

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  // mix-blend-exclusion
  return (
    <section className='section sm:bottom-2 bg-cyan-950' id="about" ref={ref}>
      <div className="container md:mx-auto md:flex md:justify-center">

        <div className='flex flex-col items-center align-middle justify-center lg:flex-row
        lg:items-center h-screen lg:space-x-[2vw] md:p-4'>
          {/* {img} */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat md:h-[90vh] md:w-[70vw]
            bg-center visible w-full m-auto">
            {/* <Image src={MyImage} alt="" className="max-w-[40vw]" fluid /> */}
          </motion.div>
          {/* {text} */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 xl:leading-9 md:mt-10">
            <h2 className='h2 text-accent text-5xl lg:text-[5vh] font-tertiary'>Meet me</h2>
            <h4 className='h4 mb-4 lg:text-[2.5vh]'>I'm a Frontend Engineer with almost 4 years of experience.</h4>

            <p className='text-base font-extralight xl:text-[2vh] xl:leading-9 xl:w-[700px]'>

            My professional focus centers on leveraging React and Next.js to create innovative, visually compelling &nbsp;
              <span className='text-yellow-400'>frontend designs with a strong emphasis on responsiveness.</span> I am experienced in
              <span className='text-yellow-400'> cross-platform development</span>, and have a keen interest in exploring the intricacies of 
              <span className='text-yellow-400 '> full-stack development. </span>
              Additionally, I specialize in integrating
              <span className='text-yellow-400'>  Headless CMS solutions such as Strapi, Sanity, and Contentful </span> to manage content effectively.
              I am proficient in utilizing  <span className='text-yellow-400'> Firebase, Firestore database, and storage services  </span> to enhance data management and storage capabilities within applications.
              <span className='sm:hidden md:visible'> Currently, I'm building projects in Next.js, React.js, and Node.js. Let's collaborate and create something amazing together!</span>

            </p>
            <br />


            {/* {stats} */}
            <div className="flex gap-x-2 lg:gap-x-10 mb-12">

              <div>
                <div className="md:text-[30px] font-semibold text-gradient mb-2">
                  {inView ? <CountUp start={0} end={52} duration={3} /> : 52}
                  +
                </div>
                <div className="font-primary text-xs tracking-[2px] text-gray-500">
                  Months of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="md:text-[30px] font-semibold text-gradient mb-2">
                  {inView ? <CountUp start={0} end={78} duration={3} /> : 78}
                  +
                </div>
                <div className="font-primary text-xs tracking-[2px] text-gray-500">
                  Github  <br />
                  Repositories
                </div>
              </div>

              <div className='invisible md:visible'>
                <div className="md:text-[30px] font-semibold text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : 12}
                  +
                </div>
                <div className="font-primary text-xs tracking-[2px] text-gray-500">
                  Technologies <br />
                  Mastered and still learning
                </div>
              </div>

            </div>
            <div className="hidden md:flex md:gap-x-8 md:items-center md:mb-5">
              <Link to="contact" activeClass='active'>
        
                <Button btnText="Say 'Hi'!" />
              </Link>
              <a href="https://drive.google.com/file/d/1TRIbdf5kMjlmmRGnv0M8q5N2-_0oJfbO/view?usp=sharing" target="_blank" rel="noreferrer">
            
                <Button btnText='Resume' />
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


