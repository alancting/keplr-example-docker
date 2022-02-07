const { SigningCosmosClient } = require("@cosmjs/launchpad");

document.addEventListener("DOMContentLoaded", function (event) {
  const cosmJS = new SigningCosmosClient(
    "https://node-cosmoshub-3.keplr.app/rest",
    "a",
    "b"
  );
  console.log("cosmJS", cosmJS);
});
