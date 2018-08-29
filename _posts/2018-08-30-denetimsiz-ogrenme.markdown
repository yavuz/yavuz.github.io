---
layout: post
title:  "Denetimsiz öğrenme (Unsupervised learning)"
date:   2018-08-30 00:04:00 +0300
categories: makine öğrenmesi
excerpt: Kümeleme (Clustering) ve Birliktelik Kuralları (Association Rule Mining)
image: clustering1.jpg
tags: makineogrenmesi denetimsizogrenme
twittersummary: summary_large_image
---
Veri kümesi ile çıktıların olmadığı öğrenme metodudur. Veri kümesindeki verileri yorumlayarak ortak noktaları bulmak ve bunları kümeleştirme işlemi yapılarak anlamlı bir veri elde edebilmektir.

Örnek;
* Evlerin büyüklüğü ve yerleri bilgisi paylaşıldığında bunun hakkında verilerilerin yorumlanması.
* Bir alışveriş sitesinde alınan bir ürünün yanında kullanıcıların alabileceği diğer ürünlerin tavsiye olarak belirlenmesi.

### 1. Kümeleme (Clustering)
Verilerin yakınlık, uzaklık, benzerlik gibi ölçütlere göre analiz edilerek sınıflara ayrılmasına kümeleme denir.

![]({{ site.images }}/clustering1.jpg){: .center-image }

**K-Ortalama Kümeleme (K-means Clustering)**

K-Ortalama algoritması bir kümeleme algoritmasıdır. Buradaki "K" kaç kümeye ayrılacağını temsil eder. Örnek 2 dediğimizi varsayarsak
elimizdeki veride ortak 2 tane merkez nokta bulunmaya çalışılır. Ortak noktalar bulunduktan sonra diğer veriler yakında olduğu noktaya
göre kümelenir. Ortak noktalar en verimli şekili alana kadar bu algoritma devam eder. Aşağıdaki görsel biraz daha iyi anlamaya yardımcı olabilir.

![]({{ site.images }}/k_means_clustering1.jpg){: .center-image }

### 2. Birliktelik Kuralları (Association Rule Mining)
Elimizdeki verilerin aralarındaki birliktelik ilişkisi çözmeye yönelik algoritmadır. Çok sık alışveriş takiplerinde kullanılır. Örnek bir ürünü alan kullanıcıların yanında aldıkları ürünlerin yoğunluğuna göre diğer kullanıcılara ürün tavsiye edilmesi gibi.

**Apriori Algoritması**

Birliktelik kurallarının algoritmalarından biridir. Kısacası “müşteriler hangi ürünleri birlikte alıyorlar?” sorusunu cevabını vermeye çalışır. Müşterilerin aldığı ürünlerin birlikteliğini inceleyerek bir sonraki müşteri aynı ürünü aldığında tavsiye algoritması çalıştırarak ona tavsiye edilecek ürünlerin listesini çıkarır. *"Priori"* anlamı *"önce"* anlamına gelir ve kendinden önceki ürünlerin durumuna göre sonuçlar çıkarır. Örnek aşağıdaki tabloda her bir müşterinin sepetlerinin listesi;

| işlem 	| sepet                	|
|:-----:	|----------------------	|
|   1   	| elma, armut, çilek   	|
|   2   	| ekmek, süt           	|
|   3   	| ekmek, çikolata      	|
|   4   	| ekmek                	|
|   5   	| elma, ekmek          	|
|   6   	| ekmek, süt, çilek    	|
|   7   	| elma, çilek          	|
|   8   	| elma, armut          	|
|   9   	| ekmek, süt, çikolata 	|
|   10  	| ekmek, süt           	|

Bu veriler tamamen rastgele yazdığım verilerdir. Bakıldığında genellikle ekmek alanların çoğunlukla süt aldıkları da görülüyor. O zaman ekmek ile sütlerin yakın yere koyulması mantıklı olabilir. Bu sayede başka müşteriler geldiklerinde daha fazla satış yapılabilir. Birliktelik kurallarının apriori algoritması bu sonuçları ortaya çıkarır ve satışların yükselmesi söz konusu olabilir.

Örnekler;
* E-ticaret alışveriş sitelerinde tavsiye algoritması sayesinde ürünler satılması
* Film, kitap vb. ürünlerde kullanıcının bir sonraki tercihinin tahmin edilmesi

#### kaynaklar
* [Denetimsiz Öğrenme (Unsupervised Learning) – Veri Bilimcisi](https://veribilimcisi.com/2017/07/12/denetimsiz-ogrenme/)
* [Introduction to K-means Clustering – Dileka Madushan – Medium](https://medium.com/@dilekamadushan/introduction-to-k-means-clustering-7c0ebc997e00)
