// ==UserScript==
// @name        InstaSynchP Emote Names
// @namespace   InstaSynchP
// @description Show emote names when hovering over the image

// @version     1
// @author      Zod-
// @source      https://github.com/Zod-/InstaSynchP-Emote-Names
// @license     GPL-3.0

// @include     http://*.instasynch.com/*
// @include     http://instasynch.com/*
// @include     http://*.instasync.com/*
// @include     http://instasync.com/*
// @grant       none
// @run-at      document-start

// @require     https://greasyfork.org/scripts/5647-instasynchp-library/code/InstaSynchP%20Library.js
// ==/UserScript==

function EmoteNames(version) {
    this.version = version;
}

EmoteNames.prototype.executeOnce = function () {
    console.log('hey');
    events.on('AddMessage', function (ignore, message) {
        //check all <img> in case there can be more in the future
        $('#chat-messages > :last-child span:last-child img').each(function () {
            for (var emote in window.$codes) {
                if (window.$codes.hasOwnProperty(emote) &&
                    window.$codes[emote].contains($(this).attr('src'))) {
                    $(this).attr('title', emote);
                }
            }
        });
    });
};

window.plugins = window.plugins || {};
window.plugins.emoteNames = new EmoteNames("1");
