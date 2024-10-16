const UAT_URL = 'https://uat.your_domain.com/api';
const STAGING_URL = 'https://staging.your_domain.com/api';
const PRODUCTION_URL = 'https://api.themoviedb.org';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export default {
  /*** Define Staging/ Uat / Production / Image Base Url Below Here ***/
  BASE_URL: PRODUCTION_URL,
  IMAGE_URL: IMAGE_URL,

  /*** Define All End Points Url Below Here ***/
  MOVIES_URL: '3/discover/movie?',
  SEARCH_MOVIES_URL: '3/search/movie?',
};