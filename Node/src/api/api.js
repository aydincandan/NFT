var axios=require('axios')

function randomFloatInrange(min,max){
  return Math.random()*(max-min)+min;
}

async function getNFTData() {
  try {
const apiKey=process.env.API_KEY;
console.log(apiKey)
    const response = await axios.get('https://api.opensea.io/api/v1/assets', {
      params: {
        order_direction: 'desc',
        offset: 0,
        limit: 100, 
      },
      headers: {
        'X-API-KEY': apiKey,
      },
    });

    const assets = response.data.assets;
    

    assets.forEach(asset => {
      const imageUrl = asset.image_url;
      const name = asset.name;
     if(name!=null && imageUrl!=null){
        console.log('Name:', name);
        console.log('Image URL:', imageUrl);
        console.log('Price:',randomFloatInrange(0,3).toFixed(2));
     }
      console.log('------------------------');
    });
  

  } catch (error) {
    console.error('Error:', error.message);
  }
}

getNFTData();