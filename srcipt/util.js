
// For Navigation List on Small Device versions
const navItems = document.querySelectorAll(".nav .d4 ul li");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("click").checked = false;
  });
});
