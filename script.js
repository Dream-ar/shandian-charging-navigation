(function () {
  "use strict";

  var stations = Array.isArray(window.STATIONS) ? window.STATIONS : [];
  var searchInput = document.getElementById("station-search");
  var stationList = document.getElementById("station-list");
  var stationCount = document.getElementById("station-count");
  var emptyState = document.getElementById("empty-state");
  var clearSearchButton = document.getElementById("clear-search");

  function normalize(value) {
    return String(value || "")
      .toLocaleLowerCase("zh-CN")
      .replace(/\s+/g, "");
  }

  function isValidStation(station) {
    return station && station.id && station.name && station.address
      && (station.amapUrl || station.originalAmapUrl);
  }

  function getNavigationUrl(station) {
    return station.amapUrl || station.originalAmapUrl;
  }

  function createTextElement(tagName, className, text) {
    var element = document.createElement(tagName);
    element.className = className;
    element.textContent = text;
    return element;
  }

  function createStationCard(station) {
    var card = document.createElement("article");
    var body = document.createElement("div");
    var number = createTextElement("div", "station-card__number", station.id);
    var content = document.createElement("div");
    var topLine = document.createElement("div");
    var name = createTextElement("h3", "", station.name);
    var area = createTextElement("span", "station-card__area", station.area || "天津");
    var address = createTextElement("p", "station-card__address", station.address);
    var link = document.createElement("a");

    card.className = "station-card";
    card.dataset.stationId = station.id;
    card.dataset.search = normalize([station.name, station.area, station.address].join(" "));

    body.className = "station-card__body";
    content.className = "station-card__content";
    topLine.className = "station-card__topline";

    link.className = "nav-button";
    link.href = getNavigationUrl(station);
    link.dataset.navigationSource = station.amapUrl ? "amap-uri" : "original-share";
    link.textContent = "高德导航";
    link.setAttribute("aria-label", "打开" + station.name + "的高德导航");

    topLine.appendChild(name);
    topLine.appendChild(area);
    content.appendChild(topLine);
    content.appendChild(address);
    body.appendChild(number);
    body.appendChild(content);
    card.appendChild(body);
    card.appendChild(link);

    return card;
  }

  function render(list) {
    var fragment = document.createDocumentFragment();

    stationList.textContent = "";
    list.forEach(function (station) {
      fragment.appendChild(createStationCard(station));
    });
    stationList.appendChild(fragment);

    stationCount.textContent = list.length === stations.length
      ? "共 " + stations.length + " 个站点"
      : "找到 " + list.length + " 个站点";
    emptyState.hidden = list.length !== 0;
  }

  function filterStations() {
    var keyword = normalize(searchInput.value);
    var filtered = stations.filter(function (station) {
      var searchableText = normalize([station.name, station.area, station.address].join(" "));
      return !keyword || searchableText.indexOf(keyword) !== -1;
    });

    render(filtered);
  }

  stations = stations.filter(isValidStation);
  render(stations);

  searchInput.addEventListener("input", filterStations);
  searchInput.addEventListener("search", filterStations);
  clearSearchButton.addEventListener("click", function () {
    searchInput.value = "";
    filterStations();
    searchInput.focus();
  });
}());
