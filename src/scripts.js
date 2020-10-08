let server = {
  getFile: function (onSuccess) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        onSuccess(JSON.parse(this.responseText));
      }
    };
    xmlhttp.open("GET", "../dist/api/games/lists.json", true);
    xmlhttp.send();
  }
};
let Object = {
  titel: "",
  description: "",
  lists: [
    {
      id: "populara",
      title: "Popular",
      items: [
        {
          id: 1,
          title: "Copy Cat",
          provider: "NetEnt",
          image: "/resources/roundel-copy-cat.png"
        }
      ]
    }
  ]
};
server.getFile((d) => {});
let item = function (item) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let title = document.createElement("h4");
  div.id = item.id;
  div.setAttribute("provider", item.provider);
  img.src = item.image;
  title.innerHTML = item.title;
  div.append(img);
  div.append(title);

  return div;
};
let htmlrender = function (comp) {
  let div = document.createElement("div");
  let title = document.createElement("h3");
  title.innerHTML = comp.title;
  div.id = comp.id;
  div.append(title);
  div.append(comp.item);
};
