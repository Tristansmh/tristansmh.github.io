<script>
  const lock = document.getElementById("lockscreen");
  const enterBtn = document.getElementById("enterBtn");

  function unlock() {
    lock.classList.add("hidden");
  }

  enterBtn.addEventListener("click", unlock);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      unlock();
    }
  });
</script>
