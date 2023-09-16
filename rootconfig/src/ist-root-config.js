import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@ist/navigationbar",
  app: () => System.import("@ist/navigationbar"),
  activeWhen: ["/sign-up"],
});

registerApplication({
  name: "@ist/signup",
  app: () => System.import("@ist/signup"),
  activeWhen: ["/sign-up"],
});

// registerApplication({
//   name: "@ist/styleguide",
//   app: () => System.import("@ist/styleguide"),
//   activeWhen: ["/"],
// });

// start({
//   urlRerouteOnly: true,
// });

System.import("@ist/styleguide").then(() => {
  start();
});
