---
layout: post
title:  "Karar Ağaçları (Decision Tree)"
date:   2018-09-13 02:00:00 +0300
categories: makine öğrenmesi
excerpt: Decision Tree Regression - Classification
image: decision_tree1.jpg
tags: makineogrenmesi decisiontree
twittersummary: summary_large_image
---
Karar ağacı algoritması hem regresyon için hem sınıflandırma için kullanabiliriz. İsminden anlaşılacağı üzere bir ağaç yapısı söz konusudur. Kökten başlayarak aşağıya doğru düğümler oluşur. Bu düğümler verideki bazı aralıklara göre belirlenir.  Aşağıda görülen basit bir karar ağacı yapısıdır.

![Decision Tree]({{ site.images }}/decision_tree1.jpg)

Verimizin bir düzlem de dağıldığını düşünelim. Daha sonra verimizi en uygun sınıflandırma yapacak şekilde kısımlara bölelim veya sınırlandıralım. Örnek soldaki grafik gibi sınırlar çizdik diyelim. Bu sınırları bir ağaç yapısına dönüştürmek istediğimizde sağdaki ağaç yapısı ortaya çıkıyor. Bundan sonra örnek bir veriyi işlemek istediğimizde bu ağaç yapısından geçerek bize ne olduğu hakkında bilgi verecektir.

Örneğin x1=2 ve x2=4 verilerini giriş yaptığımızda bu ağaç yapısına göre bize bu değerlerin mavi renge denk geldiğini bize söyleyecektir.

Daha fazla verimiz oldukça ağaç yapısı değişecektir. Belki çok daha fazla dallara ayrılabilir. Bu da algoritmanın çok daha fazla sınırlandırmalar çizmesi demektir. Sınıflandırma yaparken çok daha güzel sonuçlar verecekken, regresyon yapıldığında çok fazla sınırlar çizebilir. Çizdiği sınırlar içerisinde gelen değerlerin ortalama vs. değerini vereceği için regresyon yerine sınıflandırma(classification) problemlerinin çözümünde daha çok kullanılır.

Sınırların çizilmesinde ilk önce entropi hesapları yapılır. Daha sonra information gain veya gibi index ölçütleri ile sınır çizgiler çizilmiş olur.

Karar ağaçlar ismi gibi daha çok karar mekanizmalarında kullanılır. Örnek bir hastalığın belirlenmesinde, kredi kartı verilmeden kişinin profiline karar verilmesinde veya alışveriş sitelerinde kullanıcının profiline göre satın alıp almayacağını tahmin etmek gibi. Sıkça karşılaştığımız tavsiye algoritmalarında da kullanılmaktadır.

### kaynaklar
* [Classification and regression trees - Semantic Scholar](https://www.semanticscholar.org/paper/Classification-and-regression-trees-Loh/0ce4e33a66a354b431fd9ca0cad65f2e528c1f11)
* [Karar Ağacı Öğrenmesi(Decision Tree Learning) – Yazılıma Giriş](https://yazilimagiris.com/2017/11/karar-agaci/)
