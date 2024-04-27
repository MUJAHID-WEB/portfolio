import ecom_userpanel from "../assets/projects/ecom_userpanel.webp";
import ecom_admin from "../assets/projects/ecom_admin.webp";
import agency from "../assets/projects/devfirm.webp";
import portfolio from "../assets/projects/portfolio.webp";
import userapp from "../assets/projects/lize_user_app.webp";

const workData = [
    {
      title: "eCommerce Website (User Panel)",
      imageUrl: ecom_userpanel,
      videoUrl: 'https://youtu.be/DGRraBmGH5M?si=La4zSAK9fwvPWyra',
      workLink: "https://ktoro-ecom.vercel.app/",
      tech: "Next.Js | TypeScript | Tailwind CSS | Internationalization (i18n) Routing (Arabic and English language) | Swiper Slider | Context API and so on.",
      description: 'The Time to Interactive (TTI) is measured at 842ms (0.84 seconds), representing good user experience for browsing.'
    },
    {
      title: "eCommerce Website (Admin Dashboard)",
      imageUrl: ecom_admin,
      videoUrl:'https://youtu.be/xE0j42-Y7MM?si=fjLgjqdm094xQSga',
      workLink: "https://ktoro-v3-admin-nextjs.vercel.app/",
      tech: "Next.Js | TypeScript | Tailwind CSS | Context API.",
      description: 'It achieves a 100% score in both performance and structure according to GTmetrix tests. With a Time to Interactive (TTI) of just 389ms (0.38 seconds), the dashboard is exceptionally responsive and efficient for administrative use.'
    },
    {
      title: "Software Agency Website",
      imageUrl: agency,
      workLink: "https://devfirmltd.com/",
      tech: "Employed Next.Js, Redux, TypeScript, Tailwind CSS, and JavaScript, while seamlessly integrating various APIs.",
      description: 'Engineered a Job Board System enabling agencies to publish job listings and efficiently manage applications.'
    },
    {
      title: "Portfolio Website",
      imageUrl: portfolio,
      workLink: "https://mujahidul.me/",
      tech: "React.Js, Tailwind CSS, React-scroll, Framer Motion, Bootstrap, react-type-animation.",
      description: 'The performance rate increased by 14.29% and 11.39% respectively when using WebP images instead of PNG images. Deployment on shared hosting using PNG images resulted in a performance rate of 56. Transitioning to WebP images increased the performance rate to 64, representing a 14.29% improvement.Deployment on Vercel achieved a performance rate of 79 with PNG images.Switching to WebP images boosted the performance rate to 88, indicating an 11.39% increase.'
    },
    {
      title: "Lize Transport User App",
      imageUrl: userapp,
      videoUrl: "https://www.youtube.com/watch?v=0E7T8SucIwI&list=PLGvMJNsJkgKpbGlwG0YNV5UwNc8_A6ixa&index=2&ab_channel=MD.MUJAHIDULISLAM",
      tech: "Flutter, flutter_zoom_drawer, carousel_slider, page_transition, flutter_screenutil.",
      description: 'Developed a comprehensive booking system for Chartered Plane, Helicopter, and Cargo, including trip schedule management. Empowered users to effortlessly book planes and helicopters for business trips or other purposes. Admins gained the ability to efficiently manage employees, reducing complexity by 72% and minimizing manual interventions.'
    },

  ];

  export default workData;