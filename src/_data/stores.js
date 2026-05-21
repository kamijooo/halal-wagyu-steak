/**
 * 店舗データ定義(steak業態)
 * 新しい店舗を追加するときは、この配列に store オブジェクトを追加するだけ。
 * Eleventy が自動で /{region}/{slug}/index.html を生成します。
 */
module.exports = {
  brand: {
    domain: "steak.halal-food-wagyu.com",
    ga4_id: "G-HQ62CMRJKR",
    brand_name: "Halal Wagyu Steak & Burger",
    brand_slug: "steak"
  },

  stores: [
    {
      // ===== URL/識別 =====
      region: "tokyo",
      slug: "ginzatsukiji",

      // ===== 店名 =====
      name_full_en: "Japanese Food Wagyu Restaurant (Halal) Steak & Burger · 5W-Tokyo-Ginza",
      name_short: "5W-Tokyo-Ginza",
      name_cn: "5W-東京-銀座",

      // ===== 立地 =====
      city: "Ginza, Tokyo",
      station_en: "Ginza Station",
      address_en: "The Forme Ginza B1, 8-18-4 Ginza, Chuo-ku, Tokyo",
      address_postal: "104-0061",

      // ===== 連絡先 =====
      tel_display: "",
      tel_raw: "",

      // ===== 営業 =====
      hours: "10:00 – 1:00",
      hours_note: "Open Daily",

      // ===== 予約・地図 =====
      tablecheck_url: "https://www.tablecheck.com/ja/halal-steak-ginzatsukiji-5w-tokyo/reserve/message",
      maps_link: "https://maps.app.goo.gl/7NtBgFuTmbDSjf2r8",

      // ===== 評価 =====
      rating: "4.7",
      rating_source: "Google Review"
    }

    // ===== 2店舗目を追加するときはこの下にもう1つ { ... } を書くだけ =====
  ]
};
