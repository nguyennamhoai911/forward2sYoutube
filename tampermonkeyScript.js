// ==UserScript==
// @name         YouTube - Tua 2s thay vì 5s
// @namespace    https://youtube.com/
// @version      1.0
// @description  Thay đổi hành vi phím ← → trên YouTube để tua 2 giây thay vì 5 giây
// @author       bạn
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('keydown', function(e) {
        const video = document.querySelector('video');
        if (!video) return;

        const active = document.activeElement;
        if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable)) {
            return;
        }

        if (e.code === 'ArrowRight') {
            e.stopImmediatePropagation();
            e.preventDefault();
            video.currentTime += 2;
        }

        if (e.code === 'ArrowLeft') {
            e.stopImmediatePropagation();
            e.preventDefault();
            video.currentTime -= 2;
        }
    }, true);
})();
