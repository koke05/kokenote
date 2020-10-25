---
title: "テストの記事タイトル02"
date: "2019-08-21"
category: gatsby
---
# 見出しh1
## 見出しh2
### 見出しh3

    let cody = new Object();//Object()オブジェクトを生成

    cody.living = true;
    cody.age = 33;
    cody.gender = 'male';

[blog](https://koke05.com/blog/)

![アイキャッチ画像](https://koke05.com/blog/wp-content/uploads/2020/09/blog_bunner0911.png "sample_image")

まずはpositionについてまとめていきます。

positionで指定できるのはstaticとabsoluteとrelativeとfixedです。

staticは初期値になります。配置方法を指定しません。top、bottom、left、rightは適用されません。ほとんど指定することはないかなと思います。

fixedはスクロールしても固定表示になります。

absoluteは絶対位置への配置となります。絶対位置と言ってもよくわからないと思います。移動するときの基準がウィンドウまたは親要素になります。他の要素を無視して左上(top:0、left:0)の位置になります。何もせずにabsoluteを指定するとページの一番左上に行ってしまいますね。

relativeはpositionを記述する前に配置されていた場所から移動します。元々の位置から指定された数値分動く感じですね。

absoluteとrelativeを実際に使う時
absoluteとrelativeで自由に要素を配置するときには、大体親要素を基準として子要素を動かしたいという時が多いです。自由に配置できるabsoluteだけで動かそうとすると一番左端に行ってしまい、位置の調整にもかなり時間が掛かってしまいますよね。親要素を基準にするには、まず親要素にrelativeを記述する必要があります。その後に子要素にabsoluteを記述すると、親要素の左上を基準として、子要素を配置することができます。少し複雑なデザインのサイトなどでは必ず使うことになると思うので是非とも覚えておきたいところです。

とりあえず親要素にrelative、子要素にabsoluteを記述するということを頭に入れておきます。