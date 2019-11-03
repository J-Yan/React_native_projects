import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer Xr5i3Wcl2z4gnAg7cDNLT-38iNUcutdxKqTxQc4F1TQW0zI3x_PvlPlW_mMNiOkjX4GnX8pm4sqr-njFaR-IPs9cXBZhiFvGIIg3UH5gMeLeydKlXdSvy2eQrEKvXXYx '
  }
});

//yelp.get('/search')
