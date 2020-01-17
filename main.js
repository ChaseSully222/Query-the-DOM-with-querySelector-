const articleHeader = document.querySelector(".article__header");
articleHeader.textContent = "Welcome to the Chase blog";

const articleHeaderClass = document.querySelectorAll(".article__header");
articleHeaderClass.classlist = "article__header important";

const dashedEl = document.querySelector(".dashed");
dashedEl.classList.remove("dashed")

const articleFooterEl = document.querySelector(".article__footer");
articleFooterEl.classList.add("goldenrod");

