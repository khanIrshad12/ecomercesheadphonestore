import { Product,HeroBanner,FooterBanner } from 'components';
import React from 'react';
import { client } from 'libs/client';

const Home = ({bannerData,product}) => {
  
  return (
    <>
    <HeroBanner  herobanner={bannerData.length && bannerData[0]} />
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speackers of many variations</p>
    </div>

    <div className='products-container'>
      {product?.map(product=><Product key='product._id' product={product} />)}
    </div>
    <FooterBanner footerbanner={bannerData && bannerData[0]} />
    </>
    
  )
};

export const getServerSideProps=async()=>{
  const query='*[_type == "product"]';
  const product= await client.fetch(query);

  const bannerQuery='*[_type == "banner"]';
  const bannerData= await client.fetch(bannerQuery);

  return {
    props:{product,bannerData}
  }
}

export default Home;