import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@ist/navigationbar",
  app: () => System.import("@ist/navigationbar"),
  activeWhen: ["/signup"],
});

registerApplication({
  name: "@ist/signup",
  app: () => System.import("@ist/signup"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
