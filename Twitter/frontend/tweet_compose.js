
const APIUtil = require("./api_util.js");


class TweetCompose {
  constructor(el) {
    this.$el = $(el);
    this.submit();
  }

  submit() {
    this.$el.on("submit", (e) => {
      e.preventDefault();
      let contents = $el.serializeJSON();
      APIUtil.createTweet(contents)
      .then(this.handleSuccess());
    });
  }

  clearInput() {
    let $inputs = $(":input");
    $inputs.each.val("");
  }

  handleSuccess() {
    
  }
}