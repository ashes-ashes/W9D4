const FollowToggle = require("./follow_toggle.js");

$( () => {
  Array.from($("button.follow-toggle")).forEach((button) => {
      new FollowToggle(button);
    }
  );
});