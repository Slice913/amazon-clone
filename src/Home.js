import React from 'react'
import './Home.css'; 
import Product from "./Product";

function Home() {
    return (
        <div className='home'>
         <div className="home__container">
             <img
               className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""
              />
              <div className="home__row">
                  <Product 
                   id="123456678"
                   title="Trick Mirror: Reflections on Self-Delusion Hardcover – August 6, 2019" 
                   price={12.99}  
                   rating={3}
                   image='https://lithub.com/wp-content/uploads/2019/06/81ip353TUL-674x1024.jpg'
                  />
                  <Product
                    id="324235542"
                    title="Playstation 5| Experience lightning-fast loading, deeper immersion, & an all-new generation of PlayStation games."
                    price={599.99}
                    rating={4}
                    image="https://i5.walmartimages.com/dfw/4ff9c6c9-31b3/k2-_51449ab6-e992-4d7a-8481-526688bd6e86.v1.jpg"
                   />
              </div>

              <div className="home__row">
                 <Product
                  id="2234323"
                  title="XBOX SERIES X | Xbox Series X, our most powerful console ever made."
                  price={599.99}
                  rating={4}
                  image="https://compass-ssl.xbox.com/assets/85/8b/858b94d4-0ca6-4e74-ac9f-38565c49f2df.jpg?n=Xbox-Series-X_Image-0_1083x1400_02.jpg"
                   />
                  <Product 
                    id="4436536"
                    title="Sony - 85' Class X800H Series LED 4K UHD Smart TV"
                    price={1999.99}
                    rating={5}
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401046_sd.jpg;maxHeight=640;maxWidth=550"
                   />
                 <Product
                  id="5546546546"
                  title="Dyson Pure Cool TP01 purifying fan (white/silver)"
                  price={299.99}
                  rating={4}
                  image="https://dyson-h.assetsadobe2.com/is/image//content/dam/dyson/products/air-treatment/pure-cool/variant/air-quality-purifier-cool-link-tower-white-silver-variant-hero.jpg?$responsive$&cropPathE=mobile&fit=stretch,1&wid=640" 
                   />
                 <Product
                  id="764746476"
                  title="Ring Video Door Bell  | 2020 Edition"
                  price={99.99}
                  rating={5}
                  image="https://cdn.shopify.com/s/files/1/2393/8647/products/RVD_2ndGen_-VenetianBronze.jpg?v=1599535790"
                   />
              </div>

              <div className="home__row">
                 <Product
                  id="98878689"
                  title="RED Digital Cinema"
                  price={79500.99}
                  rating={5}
                  image="https://www.fullcompass.com/common/products/lgr/369178.jpg"
                   />
                 <Product 
                  id="68768767"
                  title="Kona American Roast Coffee"
                  price={55.99}
                  rating={3}
                  image="https://cdn.shopify.com/s/files/1/2101/4427/products/Bad_Ass_Coffee_American_Roast_Whole_1296x.jpg?v=1589637851"
                  />
                 <Product
                  id="244654654"
                  title="Sea Cow Giant Waterslide"
                  price={99.95}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/81UilI02MuL._AC_SX679_.jpg"
                   />
              </div>
            </div>
        </div>
    );
}

export default Home;
