import SideImage from '../../assets/images/side.png';
import LoginForm from './LoginForm';

function LandingPage() {
  return (
    <div className="flex  w-full  flex-row items-center justify-center min-h-screen">
      <div className=" side-img  min-w-min min-h-screen flex w-full">
        <img src ={SideImage}  alt="Image of eduken " className='login-img' />
      </div>
      <div className=" form  w-full min-w-min min-h-screen flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}

export default LandingPage;
