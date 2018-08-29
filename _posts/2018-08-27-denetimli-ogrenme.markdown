---
layout: post
title:  "Denetimli öğrenme (Supervised learning)"
date:   2018-08-27 00:04:00 +0300
categories: makine öğrenmesi
excerpt: Regresyon (Regression) ve Sınıflandırma (Classification)
image: classification_regression1.jpg
tags: makineogrenmesi denetimliogrenme
---
Makine öğrenmesi daha önce bahsettiğimiz gibi elimizdeki veriyi kullanarak anlamlı bir veri çıkarmak diyebiliriz.

Veri setinin içinde sonuçlarda var diyelim. Bu verilere göre oluşturduğumuz modele göre de yeni verilerin tahmin ediliyorsak bu öğrenme biçimine denetimli öğrenme denir.

Kısaca örneklemek gerekirse elimizde böyle bir veri olduğunu varsayalım;

| **yas** 	| **boy** 	| **kilo** 	| **cinsiyet** |
| 20  	| 185 	|  85  	|   erkek  	|
| 30  	| 164 	|  55  	|   kadın  	|
| 40  	| 170 	|  80  	|   erkek  	|
| 25  	| 170 	|  57  	|   kadın  	|
| 23  	| 175 	|  73  	|   erkek  	|
| 60  	| 160 	|  60  	|   erkek  	|
| 17  	| 170 	|  80  	|   erkek  	|
| 28  	| 172 	|  62  	|   kadın  	|
| 44  	| 166 	|  58  	|   kadın  	|

Bunlar tamamen rastgele yazdığım veriler. Elimizdeki yaş, boy, kilo verilerine göre cinsiyet tahmini yapabilmesini istiyoruz diyelim. Karar ağacı(decision tree) algoritmasını kullandığımızı varsayalım. Böyle bir veri setini makineye öğrenmesi için verdiğimizde genel itibari ile veriyi iki parçaya bölmemiz gerekiyor(partitioning).

* **Eğitim Verisi:** Makinenin öğrenmesi için verinin bir kısmını al ve bunları karar ağacı algoritmasına göre incele. Daha sonra bir tahmin de bulunması gerekirse bu veriler üstünden tahmin yürütmüş olacaktır.

* **Test Verisi:** Eğitim verisini karar ağacı algoritmasından geçirdikten sonra tahminlerin doğruluğunu test etmek için bir kısım veriyide bu bölüme ayırırız. Örnek eğitim verisi için %70 kısım ayrılıyorken test için %30’luk bir kısım ayrılır. Ve makine öğrenimi tamamladıktan sonra bu test verisiyle testini yapıp doğruluk oranını yükseltmeyi amaçlar.

Denetimli öğrenme problemleri ikiye ayrılır;
1. Regresyon (Regression)
2. Sınıflandırma (Classification)

![]({{ site.images }}/classification_regression1.jpg){: .center-image }

### Regresyon (Regression)
Sayısal çözümleme yapılır. Sayısal değerler verilir ve bu sayısal değerler arasındaki ilişkiye göre bir matematiksel fonksiyon oluşturulur. Daha sonra gelen verilere göre sonuç tahmin edilir. Regresyon eldeki verileri görselleştirdiğimizde verilerin arasındaki ilişkinin eğrisini çizmek olarak da düşünebiliriz.

![]({{ site.images }}/regression1.jpg){: .center-image }

Örnekler;
* Bir evin büyüklüğü ve lokasyonu verildiğinde fiyatının tahmini.
* Bir firmanın reklam giderleri satışları nasıl etkilediği

Bazı regresyon algoritmaları;
* Doğrusal Regresyon (Linear Regression)
* Çoklu doğrusal Regresyon (Multilinear Regression)
* Polinomsal Regresyon (Polynominal Regression)
* Lojistik Regresyon (Logistic Regression)
* Karar Ağacı Regresyonu (Decision Tree Regression)
* Rastgele Ormanlar Regresyonu (Random Forest Regression)
* Destek Vektör Regresyonu (Support Vector Regression)


### Sınıflandırma (Classification)
Verilerin algoritmalar sayesinde sınıflandırması veya kategorilere ayrılması işlemine denir.

![]({{ site.images }}/classification1.jpg){: .center-image }

Örnekler;
* Elma, portakalları rengi ve büyüklüğüne göre ayırt edilmesi
* Sıcaklık, nem, rüzgârı değerleri verilerek havanın güneşli, yağmurlu vs. tahmin edilmesi
* Bir mailin spam veya spam olmadığını çözümlemek

Bazı sınıflandırma algoritmaları;
* Naif Bayes Sınıflandırılması (Naive Bayes Classifier)
* Kara Ağacı Sınıflandırılması (Decision Tree Classifier)
* KNN / K - En Yakın Komşu (K-nearest neighborhood)
* Destekçi Vektör Makinesi (Support Vector Machine)

#### kaynaklar
* [Makine Öğrenmesi Eğlencelidir! - Medium](https://medium.com/deep-learning-turkiye/makine-%C3%B6%C4%9Frenmesi-e%C4%9Flencelidir-b9d50aad3a62)
* [Denetimli Öğrenme (Supervised Learning) - Veri Bilimcisi](https://veribilimcisi.com/2017/07/12/denetimli-ogrenme/)
