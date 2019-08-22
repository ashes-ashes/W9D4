const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

$( () => {
  Array.from($("button.follow-toggle")).forEach((button) => {
      new FollowToggle(button);
    }
  );
  Array.from($("nav.users-search")).forEach((nav) => {
    new UsersSearch(nav);
  });
});