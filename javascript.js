const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is a text content";

container.appendChild(content);

const para = document.createElement("p");
para.classList.add("paragraph");
para.textContent = "This is red text";
para.setAttribute("style","color:red");

container.appendChild(para);

const heading = document.createElement("h3");
heading.classList.add("heading-3");
heading.textContent = "This is a blue h3";
heading.setAttribute("style", "color:blue");

container.appendChild(heading);