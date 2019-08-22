const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle');
class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find("input");
    this.$ul = this.$el.find("ul");
    this.handleInput();

  }

  handleInput() {
    this.$input.on('keyup', (e) => {

      APIUtil.searchUsers(this.$input.val())
      .then(success => {
        this.renderResults(success);
      });
    });
  }

  renderResults(users) {
    console.log(users);
    this.$ul.empty();
    users.forEach( user => {

      let $li = $('<li>');
      let $a = $(`<a href="/users/${user.id}">`);
      $a.append(`${user.username}`);
      $li.append($a);
      this.$ul.append($li);
      

      let $button = $('<button>').addClass('follow-toggle');
      new FollowToggle($button, {
        userID: user.id,
        followState: user.followed
      });
      $li.append($button);
    });
  }
}

module.exports = UsersSearch;