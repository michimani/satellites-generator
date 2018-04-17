satellites-generator
====
Web ページ上で環状に要素を配置するための補助的な js ライブラリ

# 使い方

```javascript
var sG = new SatellitesGenerator();
```


## method: generateCoordinate
環状には配置する各要素の座標を生成します。  
各オブジェクトは均等に配置されるものとします。

### パラメータ

```javascript
generateCoordinate(number, radius, base, options)
```

|  | 型 | 必須 | 説明 | 例 |
| --- | :---: | :---: | --- | --- |
| number | `number` | * | 配置する要素の数 | 6 |
| radius | `number` | * | 中心からの距離 (円の半径) | 30 |
| base | `json` | * | 中心の座標 | {x: 50, y: 200} |
| options | `json` | オプション (下記参照) | |


### オプション

- `startPos` {string}
    最初の要素の配置場所を指定します。  
    下記の 4つを指定できます。
    `top` , `bottom`, `right` , `left`  
    指定しない場合、または上記以外の値を指定した場合は、 `top` を指定したものとして動作します。

- `isReverse` {boolean}
    要素を配置する順番を指定します。  
    `true` を指定した場合、要素が **反時計回り** に配置されるように、座標を生成します。  
    何も指定しない、または `true` 以外を指定した場合は、 `false` が指定されたものとして動作します。（**時計回り**に配置されるように座標を生成します）

### 例

```javascript

var sG = new SatellitesGenerator();

let coordinates = sG.generateCoordinate(6, 30, {x: 50, y:200}, {isReverse: true});

console.log(coordinates);

/**

[
    {
        "x": 50,
        "y": 170
    },
    {
        "x": 24.019237886466847,
        "y": 185
    },
    {
        "x": 24.019237886466836,
        "y": 215
    },
    {
        "x": 49.99999999999999,
        "y": 230
    },
    {
        "x": 75.98076211353316,
        "y": 215
    },
    {
        "x": 75.98076211353316,
        "y": 185
    }
]


**/
```

生成された座標 `x` , `y` を、各要素のスタイル要素 `left` , `top` にそれぞれ指定します。