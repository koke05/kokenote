---
title: "three.js備忘録"
date: "2020-10-26"
category: three.js
---

# 読み込んでから実行
    window.addEventListener('load', init);
    function init(){
    // 処理
    }
# レンダラー
シーンは3D空間のことでオブジェクトや光源を置く場所
    let renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.myCanvas')
    });

# 画面サイズに合わせる
    onResize();
        window.addEventListener('resize',onResize);

        function onResize(){
            let width = window.innerWidth;
            let height = window.innerHeight;

            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(width, height);

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }

# カメラ
どの視点から作った3Dのオブジェクトを見るかを設定する。画角、アスペクト比、描画開始距離、描画終了距離の4つの情報を引数として渡す。
    let camera = new THREE.PerspectiveCamera(45, 900 / 600);

# マテリアル
物体の質感設定のこと。見た目を決めるマテリアルを指定すると色や画像、陰影の割り当て、ライティングの反射などを適用できる。代表的なマテリアルとして「単色塗りのマテリアル」と「画像を使ったマテリアル」の二種類がある。両方とTHREE.MeshStandardMaterialクラスを使う。

## 単色塗りのマテリアル
    let material = new THREE.MeshStandardMaterial({color: 0xFF0000});

## 画像を使ったマテリアル
    // 画像を読み込む
    const loader = new THREE.TextureLoader();
    const texture = loader.load('imgs/earthmap1k.jpg');
    // マテリアルにテクスチャを設定
    const material = new THREE.MeshStandardMaterial({
    map: texture
    });

# ライティング
ライティングがないと陰影はなく画面が真っ暗となり、3Dの質感がわからないため、必ず必要になってきます。ライトの位置と方向を指定し平行に到達する光として使用できる平行光源と空間全体を照らす環境光源がある。

## 平行光源
平行光源はTHREE.DirectionalLightクラスを使用する

    let directionalLight = new THREE.DirectionalLight(0xFFFFFF);
    directionalLight.position.set(1, 1, 1);
    // シーンに追加
    scene.add(directionalLight);

## 環境光源
環境光源はTHREE.AmbientLightクラスを使用する

    let AmbientLight = new THREE.AmbientLight(0x999999);
    // シーンに追加
    scene.add(AmbientLight);

#　ジオメトリ
ジオメトリは形状のことで球体や立方体など用意されているクラスファイルを使えば基本的な形状を3Dで表現できる。

## 球体
THREE.SphereGeometryクラスを使用する

    let geometry = new THREE.SphereGeometry( 300, 30, 30 );
    let material = new THREE.MeshStandardMaterial( {color: 0xFF0000} );
    let sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );

## 立方体
THREE.BoxGeometryクラスを使用する

    let geometry = new THREE.BoxGeometry( 300, 30, 30 );
    let material = new THREE.MeshStandardMaterial( {color: 0xFF0000} );
    let sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );

## 平面体
THREE.PlaneGeometryクラスを使用する

    let geometry = new THREE.PlaneGeometry( 300, 30, 30 );
    let material = new THREE.MeshStandardMaterial( {color: 0xFF0000} );
    let sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );

## 円柱
THREE.ConeGeometryクラスを使用する

    let geometry = new THREE.ConeGeometry(200,500,8);
    let material = new THREE.MeshStandardMaterial( {color: 0xFF0000} );
    let sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );

## ドーナツ型
THREE.CylinderGeometryクラスを使用する

    let geometry = new THREE.CylinderGeometry(200,200,500,100);
    let material = new THREE.MeshStandardMaterial( {color: 0xFF0000} );
    let sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
