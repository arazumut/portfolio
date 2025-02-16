$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "§arazumut<br/>" +
      "><span class='caret'>$</span> job: Full Stack Developer<br/> ^100" +
      "><span class='caret'>$</span> skills: Backend development, Mobile Development, AI Train<br/> ^100" +
      "><span class='caret'>$</span> hobbies: DEVELOPMENT!<br/> ^300" +
      "><span class='caret'>$</span> alias: Umut<br/> ^300" +
      "><span class='caret'>$</span> Welcome: WELCOME TO K. UMUT ARAZ ' S PORTFOLIO<br/> ^300"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
