/// <reference lib="webworker" />

import { clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst, NetworkFirst } from "workbox-strategies";

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst()
);

registerRoute(
  ({ url }) =>
    url.origin === "https://facundo-tolosa-final-project-back.onrender.com",
  new NetworkFirst({
    cacheName: "api-responses",
  }),
  "GET"
);
