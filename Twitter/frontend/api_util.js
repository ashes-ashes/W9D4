
const APIUtil = {

  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'JSON'
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'JSON'
    });
  },

  searchUsers: (queryVal) => {
    return $.ajax({
      url: '/users/search',
      method: 'GET',
      data: {
        query: queryVal
      },
      dataType: 'JSON'
    });
  },

  createTweet: (data) => {
    return $.ajax({
      url: '/tweets',
      methor: 'POST',
      data: data,
      dataType: 'JSON'
    });
  }
};

module.exports = APIUtil;