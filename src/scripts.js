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

server.getFile((d) => {
  A(d);
});

let A = function (obj) {
  let createItems = function (obja, items, component) {
    items.forEach((elm) => {
      obja.append(component(elm));
    });
    console.log(obja);
  };

  let group = document.createElement("div");
  let title = document.createElement("h2");
  let descrition = document.createElement("h3");
  title.innerHTML = obj.title;
  descrition.innerHTML = obj.description;
  group.append(title);
  group.append(descrition);
  let B = function (comp) {
    console.log("from comp ", comp);
    let Cont = document.createElement("div");
    let title = document.createElement("h3");
    title.innerHTML = comp.title;
    Cont.id = comp.id;

    let C = function (item) {
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
    Cont.append(title);
    Cont.append(comp.item);
    createItems(Cont, comp.items, C);
    return Cont;
  };
  createItems(group, obj.lists, B);
  document.querySelector("#main").append(group);
  console.log(document.querySelector("#main"));
};
