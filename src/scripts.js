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

server.getFile((data) => {
  A(data);
});

let A = function (obj) {
  let createItems = function (obja, items, component) {
    items.forEach((elm) => {
      obja.append(component(elm));
    });
  };
  let hr = document.createElement("hr");
  let group = document.createElement("div");
  let title = document.createElement("h2");
  let descrition = document.createElement("h3");
  title.innerHTML = obj.title;
  descrition.innerHTML = obj.description;
  group.append(title);
  group.append(hr);
  group.append(descrition);
  let B = function (comp) {
    let Cont = document.createElement("div");
    let title = document.createElement("h4");
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
    createItems(Cont, comp.items, C);
    return Cont;
  };
  createItems(group, obj.lists, B);
  document.querySelector("#main").append(group);
  // console.log(document.querySelector("#main"));
};

let historyProvider = {
  history: [],
  getHistory: function () {
    return this.history;
  },
  addHistory: function (data) {
    this.history.push(data);
  }
};
let elementHider = function (data) {
  // this function will hide all unamtched elements
  let elements = document.querySelector(".item");
  if (elements == typeof Array)
    elements.forEach((element) => {
      if (element.innerHTML !== data) {
        element.setAttribute("style", "display:none");
      } else {
        element.setAttribute("style", "display:block");
      }
    });
};
document.getElementById("search").addEventListener("click", (evt) => {
  let val = document.getElementById("searchTxt").value;
  if (val) elementHider(val);
  //fun("hello");
});
