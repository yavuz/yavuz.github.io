---
layout: post
title:  "Rassal Orman Algoritması"
date:   2018-10-01 23:00:00 +0300
categories: makine öğrenmesi
excerpt: Random Forest
image: random_forest1.jpg
tags: makineogrenmesi randomforest
twittersummary: summary_large_image
---
[Karar ağacı]({{ site.url }}/karar-agaclari/) algoritmasını hatırlarsak bir tane ağaç yapısı oluşturuyorduk. Daha sonra ağaç yapısı için bir kök ve değişkenlerin değerlerine göre dallar oluşturulup sonuca ulaşmaya çalışıyorduk. Elimizde olan veri setindeki değerleri random olarak kullanarak, bu ağaçlardan _n_ tane oluşturuyorsak buna rassal orman algoritması deniyor. Yani rasgele değerlere göre oluşturulmuş dalları olan ağaçlar bütünüdür. Buna da haliyle orman deniyor. Hem sınıflandırma, hem de regresyon için kullanılabilinir. Aşağıdaki resim biraz daha açıklayıcı olabilir.

![Random Forest]({{ site.images }}/random_forest1.jpg)

Algoritma o kadar çok ağaç yapısı oluşturur ki, çıkan sonuçlardan en iyi sonuçları elde etmeye yarar. Çıkan sonuçlar içinde oylama yapılır ve doğru dallar oluşturulur.

Rassal orman algoritması **topluluk öğrenmesi (ensemble learning)** metodlarından biri olarak geçer. Farklı algoritmaların sonucunda en uyumlu sonucu üretmek gibi düşünebilirsiniz.

![Random Forest]({{ site.images }}/random_forest2.jpg)

Yukarıda görüldüğü gibi n tane üretilen ağaçların oluşturduğu ormanın ağaçlarındaki en uygun yollar izlenerek en verimli sonuçlar elde edilir. Bunu daha büyük bir ağaç algoritmasına benzetebilirsiniz.

#### kaynaklar
* [Ensemble Learning to Improve Machine Learning Results](https://blog.statsbot.co/ensemble-learning-d1dcd548e936)
* [Architecture of the random forest model](https://www.researchgate.net/figure/Architecture-of-the-random-forest-model_fig1_301638643)
