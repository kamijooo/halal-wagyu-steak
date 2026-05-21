# Halal Wagyu Steak & Burger LP

業態: **Halal Wagyu Steak & Burger**
ドメイン: `steak.halal-food-wagyu.com`
GA4測定ID: `G-HQ62CMRJKR`

Eleventy(11ty)製の静的サイト。1つのテンプレ + 店舗データから、全店舗ページを自動生成する。

## ⚠️ 重要: 画像フォルダ名は `assets/`(他業態は `image/`)

この業態だけ、画像配置先は `src/assets/` です。テンプレ内も全部 `/assets/...` を参照しています。
他業態(`japanese-burger`, `sandwich`)は `src/image/` を使うので混同しないように。

## ディレクトリ

```
.
├── .eleventy.js              ← Eleventy設定
├── package.json
├── vercel.json               ← Vercel設定
├── src/
│   ├── _data/stores.js       ← 業態設定と店舗データ
│   ├── store.njk             ← 全店舗共通のページテンプレ
│   └── assets/               ← 画像・動画(配信)
└── _site/                    ← ビルド成果物
```

## ローカルで動かす

```bash
npm install
npm run dev
# → http://localhost:8080/tokyo/ginzatsukiji/
```

## 店舗を追加する手順

`src/_data/stores.js` の `stores` 配列に1つオブジェクトを追加するだけ。

## GA4の計測内容

すべてのイベントに `store_name`, `store_area`, `brand` を付与している。

### カスタムイベント
- `reserve_click`(Reserveボタン): hero, access, footer
- `directions_click`(Get Directionsボタン): hero, access, footer

## UTM付きURL

**Googleマップのプロフィール用:**
```
https://steak.halal-food-wagyu.com/tokyo/ginzatsukiji/?utm_source=google-maps-hp&utm_medium=organic&utm_campaign=profile
```

**Google広告のウェブサイトボタン用:**
```
https://steak.halal-food-wagyu.com/tokyo/ginzatsukiji/?utm_source=google-ads-website&utm_medium=cpc&utm_campaign=store
```
