// Wire the whole creative to the ad-server clickTag exit.
(function () {
  var area = document.getElementById("clickArea");
  if (!area) return;
  area.addEventListener("click", function (e) {
    e.preventDefault();
    // window.open keeps it compatible across ad servers / preview environments
    window.open(window.clickTag, "_blank");
  });
})();
