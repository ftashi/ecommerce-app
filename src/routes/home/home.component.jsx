import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.components.jsx";
import fashionV2 from '../../assets/fashionV2.mp4'
import './home.component.styles.scss'
import Footer from "../../components/footer/footer.component.jsx";


const Home = () => {
  
   return (
     

    <div className="home-container">

      <div className='home-video-container'>

           <video src={fashionV2} autoPlay muted loop className="fashionVideo"/>

             <div className="home-text">
               <h1>CROWN</h1>
               <h2>Embrace Your Individuality</h2>
              </div>

        
         
      </div>
         <Directory/>
         <Outlet/>
         <Footer/>
       
     </div>
     
  
  );
};
export default Home