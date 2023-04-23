import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {
constructor(){
  super()
  this.state={
    // userDetails:[]
  }
}
// componentDidMount(){
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(res=>res.json())
//   .then(data=>this.setState(()=>{
//     return {userDetails:data}
//   }))
// }


render(){
  console.log(this.state.userDetails)

  return (
    <div className="App">
      <header className='header'>
        <nav className='nav-bar'>
        <logo className='Logo'>EDYODA <span className='span'>Explore Categories</span>
        <div className='stories'>Stories</div></logo>
        <p className='para2'>Edyoda is a learning and knowledge <br/>sharing platform for techies </p>
        <button className='button'> <a href='https://www.edyoda.com/'>Go to Main Website</a> </button>
        </nav>
      </header>
      <main className='main'>
        <div className='filter-section'>
          <h4 className='latest'>Latest Posts</h4>
          <p className='filters'> <i class="fa fa-filter" style={{fontSize:"20px",color:"blue"}}></i> Filter by Category</p>
          <ul className='li'>
            <li><a href='#'>All</a></li>
            <li><a href='#'>Artificial Intelligance</a></li>
            <li><a href='#'>Cloud Computing</a></li>
            <li><a href='#'>DevOps</a></li>
            <li><a href='#'>Programming Languages</a></li>
            <li><a href='#'>Mobile Application Development</a></li> 
            <li><a href='#'>Technology and Tools</a></li>
            <li><a href='#'>Get a Job in a Tech Company</a></li>
            <li><a href='#'>Others</a></li>
          </ul>

          <div className='card-section' >
          <div className='card1'>
        <div className='image-section'>
        <img className='img' src='https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg' ></img>
        <h4 className='About'>Fresh  Graduate or IT professional Looking f...</h4>
        <h6>Arman Ahmed <span>| 05 jul 2019</span></h6>
        <p className='image-para'>If you are a fresh graduate -or new to IT-looking for the next job,you need to read this.The last couple of years zekeLabs gave me a unique opportunity to...</p>
        </div>
        </div>


                 <div className='card1'>
        <div className='image-section'>
        <img className='img' src='https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg' ></img>
        <h4 className='About'>Introducing you all to EdYoda - www.edyoda.com...</h4>
        <h6>Arman Ahmed <span>| 05 jul 2019</span></h6>
        <p className='image-para'>Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of....</p>
        </div>
        </div>


                 <div className='card1'>
        <div className='image-section'>
        <img className='img' src='https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg' ></img>
        <h4 className='About'>From identity crisis to the Success Story - The DevOps revolution!...</h4>
        <h6>Kalyan Mahalingam <span>| 05 jul 2019</span></h6>
        <p className='image-para'>DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations...</p>
        </div>
        </div>

        

          </div>
          <div className='card-section-2' >
          <div className='card1'>
        <div className='image-section'>
        <img className='img' src='https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg' ></img>
        <h4 className='About'>Typical day of Data Scientist - An insider story!...</h4>
        <h6>Saurav Ghosh <span>| 05 jul 2019</span></h6>
        <p className='image-para'>I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right -
          Big Data and Data Science are the foundation of all the trends that ...</p>
        </div>
        </div>


                 <div className='card1'>
        <div className='image-section'>
        <img className='img' src='https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg' ></img>
        <h4 className='About'>Amazon Web Services (AWS) Cloud Day -...</h4>
        <h6>Kalyan Mahalingam <span>| 05 jul 2019</span></h6>
        <p className='image-para'>It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels...</p>
        </div>
        </div>


                 <div className='card1'>
        <div className='image-section'>
        <img className='img' src='https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg' ></img>
        <h4 className='About'>EdYoda Meetup #01 : A Date with Cloud...</h4>
        <h6>Ashish Pandey <span>| 05 jul 2019</span></h6>
        <p className='image-para'>I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the...</p>
        </div>
        </div>

        

          </div>
    


        </div>
 
      </main>
     

    </div>
  );
}
  
}

export default App;
