const typed = document.querySelector(".type");

new Typewriter(typed, {
  loop: true,
  deleteSpeed: 40,
})
  .changeDelay(70)
  .typeString("<strong>Student</strong>")
  .pauseFor(300)
  .deleteChars("7")
  .typeString("<strong>Web Developer</strong>")
  .pauseFor(300)
  .deleteChars("13")
  .typeString("<strong>Game Developer</strong>")
  .pauseFor(300)
  .deleteChars("14")
  .start();
