(function () {
  "use strict";

  var SITE_URL = "https://dream-ar.github.io/shandian-charging-navigation/";
  var SMS_BODY = "闪电快充天津充电站导航：\n\n"
    + SITE_URL
    + "\n\n点击链接即可选择充电站并进行导航。";
  var stations = Array.isArray(window.STATIONS) ? window.STATIONS : [];
  var searchInput = document.getElementById("station-search");
  var stationList = document.getElementById("station-list");
  var stationCount = document.getElementById("station-count");
  var emptyState = document.getElementById("empty-state");
  var clearSearchButton = document.getElementById("clear-search");
  var smsShareButton = document.getElementById("sms-share");
  var copyLinkButton = document.getElementById("copy-link");
  var shareStatus = document.getElementById("share-status");
  var couponToggle = document.getElementById("coupon-toggle");
  var couponRules = document.getElementById("coupon-rules");
  var couponToggleText = document.getElementById("coupon-toggle-text");

  function toggleCouponRules() {
    var shouldExpand = couponRules.hidden;

    couponRules.hidden = !shouldExpand;
    couponToggle.setAttribute("aria-expanded", String(shouldExpand));
    couponToggleText.textContent = shouldExpand ? "收起规则" : "查看规则";
  }

  function isIOS(userAgent) {
    return /iPad|iPhone|iPod/i.test(userAgent || "");
  }

  function buildSmsUri(userAgent) {
    var separator = isIOS(userAgent) ? "&" : "?";
    return "sms:" + separator + "body=" + encodeURIComponent(SMS_BODY);
  }

  function showShareStatus(message, state) {
    shareStatus.textContent = message;
    if (state) {
      shareStatus.dataset.state = state;
    } else {
      shareStatus.removeAttribute("data-state");
    }
  }

  function copyWithFallback() {
    var textArea = document.createElement("textarea");
    var copied = false;

    textArea.value = SITE_URL;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0, textArea.value.length);

    try {
      copied = document.execCommand("copy");
    } catch (error) {
      copied = false;
    }

    document.body.removeChild(textArea);
    return copied;
  }

  function copyNavigationLink() {
    function reportCopyResult(copied) {
      showShareStatus(
        copied ? "导航链接已复制" : "请手动复制导航链接：" + SITE_URL,
        copied ? "" : "error"
      );
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(SITE_URL).then(function () {
        reportCopyResult(true);
      }, function () {
        reportCopyResult(copyWithFallback());
      });
      return;
    }

    reportCopyResult(copyWithFallback());
  }

  function openSmsApp() {
    var pageWasHidden = false;
    var fallbackTimer;

    function detectPageHidden() {
      if (document.hidden) {
        pageWasHidden = true;
      }
    }

    function cleanupDetection() {
      document.removeEventListener("visibilitychange", detectPageHidden);
      window.removeEventListener("pagehide", detectPageHidden);
    }

    document.addEventListener("visibilitychange", detectPageHidden);
    window.addEventListener("pagehide", detectPageHidden);

    fallbackTimer = window.setTimeout(function () {
      cleanupDetection();
      if (!pageWasHidden) {
        showShareStatus("请复制导航链接后通过短信发送", "error");
      }
    }, 1800);

    try {
      window.location.href = buildSmsUri(navigator.userAgent);
    } catch (error) {
      window.clearTimeout(fallbackTimer);
      cleanupDetection();
      showShareStatus("请复制导航链接后通过短信发送", "error");
    }
  }

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
  smsShareButton.addEventListener("click", openSmsApp);
  copyLinkButton.addEventListener("click", copyNavigationLink);
  couponToggle.addEventListener("click", toggleCouponRules);
}());
