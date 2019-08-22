
const APIUtil = {

  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      followee_id: id,
      dataType: 'JSON'
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      followee_id: id,
      dataType: 'JSON'
    });
  }
};

module.exports = APIUtil;