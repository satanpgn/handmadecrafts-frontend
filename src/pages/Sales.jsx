

import React from 'react';

const products = [
  {
    id: 1,
    name: 'Handmade Paper Products ',
    image: 'https://www.holidify.com/images/cmsuploads/compressed/2019-04-22-14-01-53-1200x800_20190521084112.jpg',
    description: 'Handmade paper was introduced in Nepal by the Tibetan travellers who migrated into this region. The traditional process of making one of the oldest handicrafts in Nepal is by recycling waste paper and is a cumbersome technique. It has a very unique texture which allows natural ink to stay for a long time hence making preservation of writings permissible. It is vastly used for gifting and using as a reliable product to write on',
    price: 'NPR:180',
    colors: ['#4CAF50', '#9C27B0'],
  },
  {
    id: 2,
    name: ' Wood Craft ',
    image: 'https://www.holidify.com/images/cmsuploads/compressed/800px-Wood_Craft_Nepal_20190823165232.JPG',
    description: 'Situated in the foothills of the Himalayas, Nepal is lucky to have received the lush green forests and hardwood trees. Needless to mention, these trees are a source of valuable timber which is extensively used by the residents. Wooden craft has been a glory of Nepalese architecture from times immemorial. ',
    price: 'NPR: 4000 ',
    colors: ['#000000', '#FFFFFF'],
  },
  {
    id: 3,
    name: 'Khukuri (The Gurkha knife)',
    image: 'https://www.holidify.com/images/cmsuploads/compressed/Khukuri_20180622135255.jpg',
    description: 'Known for its unique slashing edge and style, this traditional knife of Nepal is used as both - a weapon as well as a tool. ',
    price: 'NPR: 800',
    colors: ['#E91E63', '#000000', '#FFFFFF'],
  },
  {
    id: 4,
    name: 'Dhaka Products ',
    image: 'https://www.holidify.com/images/cmsuploads/compressed/10692123155_f280b09785_b_20190823163516.jpg',
    description: 'One of the main appearances of Nepalese men that come to our mind is an ever-smiling face with a cute little ‘topi’(cap) on top. They are actually called Dhaka ko Topi meaning headgear. These ‘topis’ are made from cotton imported from Dhaka(Bangladesh). They are symbolic of the Nepalese culture and are also presented during Dashain and Tihar festivals. Nepal boasts of ‘Palpali Dhaka’ products like Shawls, handkerchiefs, ties and even table mats. A long time ago, Palpa was the only place to produce Dhaka clothes with shiny fabrics. However as time passed by, the other districts caught up too. Today they are sold widely throughout Nepal ranging from street-side stores to huge retailers.',
    price: 'NPR: 1000',
    colors: ['#E91E63', '#000000', '#FFFFFF'],
  },
  {
    id: 5,
    name: 'Rice Paper Products',
    image: 'https://www.holidify.com/images/cmsuploads/compressed/paperLINk_20180622140353.jpg',
    description: 'Super Lightweight Gaming Mouse',
    price: 'From $68.80',
    colors: ['#E91E63', '#000000', '#FFFFFF'],
  },
  {
    id: 6,
    name: 'Glass Beads',
    image: 'https://www.holidify.com/images/cmsuploads/compressed/5377038471_67478429bc_b_20190823171101.jpg',
    description: 'ou can even buy beads from the market and make your own necklace.Where: Shops and stores in Thamel, Asan market in Kathmandu or Baidam lakeside market in Pokhara.',
    price: 'NPR:500',
    colors: ['#E91E63', '#000000', '#FFFFFF'],
  },
  {
    id: 7,
    name: 'Felt Products',
    image: 'https://www.holidify.com/images/cmsuploads/compressed/800px-Wool_Felt_Sheets_20190823164104.jpg',
    description: 'Felt is said to be one of the oldest material for handicrafts of Nepal which find its use in a wide range of products starting from the automotive industry, art and design instruments as well as musical instruments. Felt products like handmade felt decoration, handmade felt balls, decorative slippers, felt mats are found on the streets of Nepal.',
    price: 'NPR: 5555',
    colors: ['#E91E63', '#000000', '#FFFFFF'],
  },
  {
    id: 8,
    name: ' Pashmina Products (The ‘Soft Gold’)',
    image: 'https://www.holidify.com/images/cmsuploads/compressed/9013810069_d3243e3dc2_b_20190520225609.jpg',
    description: 'The most sought after of all the handicrafts of Nepal, are Pashmina products that are also famous worldwide. The word Pashmina is taken from Persian language meaning “Made from wool”. Pashmina is a special type of Kashmiri (Locally pronounced as Cashmere) wool extracted and hand weaved resulting in a very fine texture. Pashmina products are famous both in Nepal as well as in Kashmir. Pashmina products are usually very high priced due to the rarity of Pashmina wool and the degree of expertise that goes into weaving it. Pashmina product ranges from scarves to sweaters and are sold widely in roadside stalls.',
    price: 'NPR: 5000',
    colors: ['#E91E63', '#000000', '#FFFFFF'],
  }

];

const ProductPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '1200px', margin: 'auto', backgroundColor: '#121212', color: 'white' }}>
      <h1 style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>Products</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {products.map(product => (
          <div key={product.id} style={{ flex: '1 0 30%', boxSizing: 'border-box', margin: '10px', textAlign: 'center', border: '1px solid #333', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s', backgroundColor: '#1e1e1e' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h2 style={{ fontSize: '18px', color: 'white', margin: '10px 0' }}>{product.name}</h2>
            <p style={{ fontSize: '16px', color: '#aaa', margin: '5px 0' }}>{product.description}</p>
            <p style={{ fontSize: '16px', color: 'white', margin: '5px 0' }}>{product.price}</p>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
              {product.colors.map((color, index) => (
                <span key={index} style={{ backgroundColor: color, width: '20px', height: '20px', borderRadius: '50%', display: 'inline-block', margin: '0 5px' }}></span>
              ))}
            </div>
            {/* <button style={{ padding: '10px 20px', backgroundColor: '#0073e6', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
              Buy Now
            </button> */}
          </div>
        ))}
      </div>      
    </div>
  );
};

export default ProductPage;

