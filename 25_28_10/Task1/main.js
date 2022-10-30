async function renderPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);

  const input = document.getElementById("posts");
  const div = document.getElementById("info");

  input.addEventListener("change", function () {
    div.innerHTML =
      "<strong>User: </strong>" +
      data[input.value]["userId"] +
      "," +
      "<strong>Id:</strong> " +
      data[input.value]["id"] +
      "," +
      "<strong>Title: </strong>" +
      data[input.value]["title"] +
      "," +
      "<strong>Body: </strong>" +
      data[input.value]["body"];
  });
}

try {
  renderPosts();
} catch (e) {
  logger(e.massage);
}
