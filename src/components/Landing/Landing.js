import '../../components/Landing/Landing.css';
import Cubo from '../../assets/svg/CUBO LAPTOP png 2.svg'
import Circle from '../../assets/svg/Subtract.svg'
import Ellipse from '../../assets/svg/Ellipse 1 (1).svg'
import Semi from '../../assets/svg/Ellipse 2.svg'

function Landing() {
  return (
    < div className='landing'>
    < img className='cubobig' src={Cubo} alt = "Cubo"/> 
    < img className='smallcircle' src={Circle} alt = "Circle"/> 
    < img className='ellipse1' src={Ellipse} alt = "Ellipse"/> 
    < img className='bigsemi' src={Semi} alt = "Semi"/> 
    < div className='content' >
       Introducing you to <br/>the <span className = "colour" >Official </span>website<br/> of <span className = "colour"><b> TLE MEC.</b></span>
    </div>
    <div className='buttons'>
    <div className='btn1'> <i class="fa fa-phone"></i>   Contact</div>
    <div className='btn2'><i class="fa fa-group"></i>  Our Team</div>
    '</div>
      
    </div>
  );
}
export default Landing;