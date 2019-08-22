
const APIUtil = require("./api_util.js");

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userID = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === "following" || this.followState === "unfollowing") {
      this.$el.prop("disabled", true);
    } else {
      if (this.followState === true) {
        this.$el.text("Unfollow!");
      } else {
        this.$el.text("Follow!");
      }
      this.$el.prop("disabled", false);
    }
  }

  handleClick() {
    this.$el.on("click", (e) => {
      e.preventDefault();
      if (!this.followState) {
        this.followState = "following";
        this.render();
        APIUtil.followUser(this.userID).then( result => {
          this.followState = true;
          this.render();
        });
      } else {
        this.followState = "unfollowing";
        this.render();
        APIUtil.unfollowUser(this.userID).then( result => {
          this.followState = false;
          this.render();
        });
      }
    });
  }

}

module.exports = FollowToggle;