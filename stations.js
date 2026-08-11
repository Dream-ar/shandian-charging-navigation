/*
 * 站点数据只在这里维护。
 * originalAmapUrl 永久保留原始高德分享链接。
 * poiId、longitude、latitude 均从原始分享链接的高德响应中取得，不按文字地址推测。
 * amapUrl 使用高德官方 URI API；若坐标无法可靠取得，应让 amapUrl 回退为 originalAmapUrl。
 */
window.STATIONS = [
  {
    id: "01",
    name: "闪电快充印象城超充站",
    area: "和平区",
    address: "和平路119号印象城地下停车场(金街地铁站D口步行240米)",
    originalAmapUrl: "https://surl.amap.com/mz28NmGLf0f",
    poiId: "B0KAXA5UBF",
    longitude: "117.19231009483336",
    latitude: "39.13032032051492",
    amapUrl: "https://uri.amap.com/navigation?to=117.19231009483336%2C39.13032032051492%2C%E9%97%AA%E7%94%B5%E5%BF%AB%E5%85%85%E5%8D%B0%E8%B1%A1%E5%9F%8E%E8%B6%85%E5%85%85%E7%AB%99&mode=car&policy=0&src=shandian_charging_navigation&callnative=1"
  },
  {
    id: "02",
    name: "闪电快充京福线超充站",
    area: "西青区",
    address: "西青区京福支线与丰泽道交叉口东北320米",
    originalAmapUrl: "https://surl.amap.com/mAOBl98LdRh",
    poiId: "B0L0RB4FOD",
    longitude: "117.04919949173926",
    latitude: "39.075190335925136",
    amapUrl: "https://uri.amap.com/navigation?to=117.04919949173926%2C39.075190335925136%2C%E9%97%AA%E7%94%B5%E5%BF%AB%E5%85%85%E4%BA%AC%E7%A6%8F%E7%BA%BF%E8%B6%85%E5%85%85%E7%AB%99&mode=car&policy=0&src=shandian_charging_navigation&callnative=1"
  },
  {
    id: "03",
    name: "闪电快充天津南站超充站",
    area: "西青区",
    address: "枫雅道96号",
    originalAmapUrl: "https://surl.amap.com/mCQxufg18cIp",
    poiId: "B0L2JM5Y0W",
    longitude: "117.05581381916997",
    latitude: "39.053690944179785",
    amapUrl: "https://uri.amap.com/navigation?to=117.05581381916997%2C39.053690944179785%2C%E9%97%AA%E7%94%B5%E5%BF%AB%E5%85%85%E5%A4%A9%E6%B4%A5%E5%8D%97%E7%AB%99%E8%B6%85%E5%85%85%E7%AB%99&mode=car&policy=0&src=shandian_charging_navigation&callnative=1"
  },
  {
    id: "04",
    name: "闪电快充东丽海月道超充站",
    area: "东丽区",
    address: "跃进北路与海月道交叉口南40米",
    originalAmapUrl: "https://surl.amap.com/mC0JwJ410eTp",
    poiId: "B0MB17W5AJ",
    longitude: "117.31503993272779",
    latitude: "39.111194716560334",
    amapUrl: "https://uri.amap.com/navigation?to=117.31503993272779%2C39.111194716560334%2C%E9%97%AA%E7%94%B5%E5%BF%AB%E5%85%85%E4%B8%9C%E4%B8%BD%E6%B5%B7%E6%9C%88%E9%81%93%E8%B6%85%E5%85%85%E7%AB%99&mode=car&policy=0&src=shandian_charging_navigation&callnative=1"
  },
  {
    id: "05",
    name: "闪电快充河西梅江超充站",
    area: "河西区",
    address: "环岛西路与上岛路交叉口南60米乾元地面停车场(入口)",
    originalAmapUrl: "https://surl.amap.com/mEhhzhg9gam",
    poiId: "B0K6J4UV4G",
    longitude: "117.21861988306044",
    latitude: "39.042164358294535",
    amapUrl: "https://uri.amap.com/navigation?to=117.21861988306044%2C39.042164358294535%2C%E9%97%AA%E7%94%B5%E5%BF%AB%E5%85%85%E6%B2%B3%E8%A5%BF%E6%A2%85%E6%B1%9F%E8%B6%85%E5%85%85%E7%AB%99&mode=car&policy=0&src=shandian_charging_navigation&callnative=1"
  },
  {
    id: "06",
    name: "闪电快充北辰高峰路超充站",
    area: "北辰区",
    address: "蓝岸森林菜市场地面停车场",
    originalAmapUrl: "https://surl.amap.com/mDnM5N01u61u",
    poiId: "B0L6YAI9OQ",
    longitude: "117.14866518974301",
    latitude: "39.214610989823605",
    amapUrl: "https://uri.amap.com/navigation?to=117.14866518974301%2C39.214610989823605%2C%E9%97%AA%E7%94%B5%E5%BF%AB%E5%85%85%E5%8C%97%E8%BE%B0%E9%AB%98%E5%B3%B0%E8%B7%AF%E8%B6%85%E5%85%85%E7%AB%99&mode=car&policy=0&src=shandian_charging_navigation&callnative=1"
  },
  {
    id: "07",
    name: "闪电快充北辰姚江路超充站",
    area: "北辰区",
    address: "天永道6号",
    originalAmapUrl: "https://surl.amap.com/mETf2ZsE0QO",
    poiId: "B0KGJ6UFYG",
    longitude: "117.18722194433211",
    latitude: "39.21212757969223",
    amapUrl: "https://uri.amap.com/navigation?to=117.18722194433211%2C39.21212757969223%2C%E9%97%AA%E7%94%B5%E5%BF%AB%E5%85%85%E5%8C%97%E8%BE%B0%E5%A7%9A%E6%B1%9F%E8%B7%AF%E8%B6%85%E5%85%85%E7%AB%99&mode=car&policy=0&src=shandian_charging_navigation&callnative=1"
  },
  {
    id: "08",
    name: "天津闪电快充西青全季酒店超充站",
    area: "西青区",
    address: "西青区悦雅国际西北门旁(昌凌路地铁站B口步行290米)",
    originalAmapUrl: "https://surl.amap.com/mFvdmJs1x8el",
    poiId: "B0L2YUV94H",
    longitude: "117.18313559889792",
    latitude: "39.05692975642261",
    amapUrl: "https://uri.amap.com/navigation?to=117.18313559889792%2C39.05692975642261%2C%E5%A4%A9%E6%B4%A5%E9%97%AA%E7%94%B5%E5%BF%AB%E5%85%85%E8%A5%BF%E9%9D%92%E5%85%A8%E5%AD%A3%E9%85%92%E5%BA%97%E8%B6%85%E5%85%85%E7%AB%99&mode=car&policy=0&src=shandian_charging_navigation&callnative=1"
  },
  {
    id: "09",
    name: "闪电快充翠海佳园超充站",
    area: "东丽区",
    address: "宏亮大街2号",
    originalAmapUrl: "https://surl.amap.com/mEAR1po80e8",
    poiId: "B0MBL5SHPE",
    longitude: "117.30741843581198",
    latitude: "39.140489672372205",
    amapUrl: "https://uri.amap.com/navigation?to=117.30741843581198%2C39.140489672372205%2C%E9%97%AA%E7%94%B5%E5%BF%AB%E5%85%85%E7%BF%A0%E6%B5%B7%E4%BD%B3%E5%9B%AD%E8%B6%85%E5%85%85%E7%AB%99&mode=car&policy=0&src=shandian_charging_navigation&callnative=1"
  },
  {
    id: "10",
    name: "闪电快充超级充电站(河西友谊路超充站·华为超充技术支持)",
    area: "河西区",
    address: "河西区马场街道新闻里社区友谊路2号停车场",
    originalAmapUrl: "https://surl.amap.com/mG7V030r5Fu",
    poiId: "B0KAL6B9MQ",
    longitude: "117.20299869775769",
    latitude: "39.09764175724889",
    amapUrl: "https://uri.amap.com/navigation?to=117.20299869775769%2C39.09764175724889%2C%E9%97%AA%E7%94%B5%E5%BF%AB%E5%85%85%E8%B6%85%E7%BA%A7%E5%85%85%E7%94%B5%E7%AB%99(%E6%B2%B3%E8%A5%BF%E5%8F%8B%E8%B0%8A%E8%B7%AF%E8%B6%85%E5%85%85%E7%AB%99%C2%B7%E5%8D%8E%E4%B8%BA%E8%B6%85%E5%85%85%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81)&mode=car&policy=0&src=shandian_charging_navigation&callnative=1"
  }
];
