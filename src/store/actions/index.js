export const SELECT_CHANNEL = "SELECT_CHANNEL";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

const MY_API_KEY = "b50dbdbc7c4f400aa3ea8defc2957bc6";


export const getChannel = (channel) => ({
  type:SELECT_CHANNEL,
  channel
});

export const requestPosts = () => ({
});

export const receivedPosts = (json) => ({
  type:RECEIVE_POSTS,
  json:json.articles
});

export  function  fetchPosts(channel) {
 
 return async function (dispatch) {
    const url=`https://newsapi.org/v2/top-headlines?sources=${channel}&apiKey=${MY_API_KEY}`

    const response = await fetch(url );
    const jsonResponse = await response.json();
   console.log(jsonResponse)
    try {
      
      if (jsonResponse.status==='ok') {
      
        dispatch(receivedPosts(jsonResponse))
        
      }
    }
    catch { console.error(`Error`); }
    ;
  }
  
  }


  

