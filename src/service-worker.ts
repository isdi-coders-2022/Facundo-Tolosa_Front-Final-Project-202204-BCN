/// <reference lib="webworker" />

import { BackgroundSyncPlugin } from "workbox-background-sync";
import { clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst, NetworkFirst, NetworkOnly } from "workbox-strategies";

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

const bgSyncPlugin = new BackgroundSyncPlugin("myQueueName", {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
  ({ url }) =>
    url.origin === "https://facundo-tolosa-final-project-back.onrender.com",
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "DELETE"
);

registerRoute(
  ({ url }) =>
    url.origin === "https://facundo-tolosa-final-project-back.onrender.com",
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "PUT"
);

registerRoute(
  ({ url }) =>
    url.origin === "https://facundo-tolosa-final-project-back.onrender.com",
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "POST"
);
