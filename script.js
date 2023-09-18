function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./img/perna.longa_1_-removebg-preview-removebg-preview.png"
    )
  } else {
    img.setAttribute("src", "./img/avatar@2x.png")
  }
}
