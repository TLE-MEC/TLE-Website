import cubo from './cubo.png';
import grid from './grid.png';
import circle from './circle.png';
import './Aboutus.css';


function Aboutus() {
  return (
    <div className="Aboutus" id='Aboutus'>
      <div className='flexbox'>
        <h1>ABOUT US</h1>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis hendrerit proin mattis fusce. Adipiscing integer ornare id nisl elit, elit. Diam aliquam sit pellentesque odio venenatis nisl matti</h4>
        <img className='circle' src={circle} />
        <div className='main-box'>
          <div className='box-1'>What do we do ?</div>
          <div className='box-2'><h6>Data Structures and Algorithms
            Competitive Programming</h6></div>
          <img className='cubo' src={cubo} />
          <img className='grid' src={grid} />
        </div>
      </div>

    </div>
  );
}

export default Aboutus;
