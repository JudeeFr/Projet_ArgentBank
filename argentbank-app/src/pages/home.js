import React  from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import Service from '../components/service';
import Footer from '../components/footer';
import icon1 from '../assets/img/icon-chat.png';
import icon2 from '../assets/img/icon-money.png';
import icon3 from '../assets/img/icon-security.png';

export default function Home() {

  return (
    <div>
      <div>
        <Header/>
      </div>    
      <div>
        <div>
          <Banner/>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          
          <Service  
          title="You are our #1 priority" 
          src={icon1}
          content="Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes."
              />
              
          <Service  
          title="More savings means higher rates" 
          src={icon2}
          content="The more you save with us, the higher your interest rate will be!"
              />
          <Service  
          title="Security you can trust" 
          src={icon3}
          content=" We use top of the line encryption to make sure your data and money
          is always safe."
              />
        </section>
      </div>
 
      <footer >
        <Footer/>
      </footer>  
    </div>
  );
}

