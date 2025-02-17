/**
 * QCObjects SDK 1.0
 * ________________
 *
 * Author: Jean Machuca <correojean@gmail.com>
 *
 * Cross Browser Javascript Framework for MVC Patterns
 * QuickCorp/QCObjects is licensed under the
 * GNU Lesser General Public License v3.0
 * [LICENSE] (https://github.com/QuickCorp/QCObjects/blob/master/LICENSE.txt)
 *
 * Permissions of this copyleft license are conditioned on making available
 * complete source code of licensed works and modifications under the same
 * license or the GNU GPLv3. Copyright and license notices must be preserved.
 * Contributors provide an express grant of patent rights. However, a larger
 * work using the licensed work through interfaces provided by the licensed
 * work may be distributed under different terms and without source code for
 * the larger work.
 *
 * Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
 *
 * Everyone is permitted to copy and distribute verbatim copies of this
 * license document, but changing it is not allowed.
*/
"use strict";
const version = "0.0.1";
const appName = "QCObjects";
const cacheName = `qcobjects-app-${appName}-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
	"/",
	".dockerignore",
	".project",
	"CNAME",
	"CODE_OF_CONDUCT.md",
	"CONTRIBUTING.md",
	"Dockerfile",
	"LICENSE.txt",
	"QCObjects.js",
	"README.md",
	"README.pdf",
	"README.rst",
	"_config.yml",
	"config-example.json",
	"doc/README.rst",
	"doc/css/index.css",
	"doc/css/prism-okaidia.css",
	"doc/css/snippet.css",
	"doc/css/theme.css",
	"doc/img/ALPHA-RISE.png",
	"doc/img/QCObjects-CLI-AMP.gif",
	"doc/img/QCObjects-Components-Layout.gif",
	"doc/img/QCObjects-Docker-Playground.gif",
	"doc/img/QCObjects-Quick-Start.gif",
	"doc/img/components.gif",
	"doc/img/home/bg_hr.png",
	"doc/img/home/blacktocat.png",
	"doc/img/home/icon_download.png",
	"doc/img/home/sprite_download.png",
	"doc/img/icons/icon-128x128.png",
	"doc/img/icons/icon-144x144.png",
	"doc/img/icons/icon-152x152.png",
	"doc/img/icons/icon-192x192.png",
	"doc/img/icons/icon-384x384.png",
	"doc/img/icons/icon-512x512.png",
	"doc/img/icons/icon-72x72.png",
	"doc/img/icons/icon-96x96.png",
	"doc/index.rst",
	"doc/js/prism-okaidia.js",
	"doc/test_service_response.html",
	"docker-compose.test.yml",
	"example1.html",
	"example2-routing.html",
	"favicon.ico",
	"index.html",
	"index.rst",
	"manifest.json",
	"package-lock.json",
	"package.json",
	"qcobjects_01.png",
	"spec/support/jasmine.json",
	"spec/testsSpec.js",
	"src/cl.quickcorp.components.js",
	"src/cl.quickcorp.controller.js",
	"src/cl.quickcorp.effects.js",
	"src/cl.quickcorp.js",
	"src/cl.quickcorp.model.js",
	"src/cl.quickcorp.tools.js",
	"src/cl.quickcorp.view.js",
	"templates/components/page1.html",
	"templates/components/page2.html",
	"templates/components/pwa.tpl.html",
	"templates/components/snippet.tpl.html",
	"templatesample.html"])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
