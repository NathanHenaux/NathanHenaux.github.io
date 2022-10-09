const typed = document.querySelector(".type");

new Typewriter(typed, {
  loop: true,
  deleteSpeed: 40,
})
  .changeDelay(70)
  .typeString("<strong>Student</strong>")
  .pauseFor(300)
  .deleteChars("7")
  .typeString("<strong>Junior Web Developer</strong>")
  .pauseFor(300)
  .deleteChars("20")
  .typeString("<strong>Junior Game Developer</strong>")
  .pauseFor(300)
  .deleteChars("21")
  .start();
