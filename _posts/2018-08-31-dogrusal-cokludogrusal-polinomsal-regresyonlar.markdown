---
layout: post
title:  "Doğrusal, Çoklu Doğrusal ve Polinomsal Regresyon"
date:   2018-08-31 00:54:00 +0300
categories: makine öğrenmesi
excerpt: Linear , Multilinear ve Polynominal Regression
image: multilinear_regression1.jpg
tags: makineogrenmesi denetimliogrenme regresyonlar
twittersummary: summary_large_image
---
## Doğrusal Regresyon (Linear Regression)
Doğrusal algoritma, regresyon konusuna iyi bir başlangıçtır.
Tahmin edilecek veriler ile değişkenlerin arasında doğrusal bir ilişki olduğunda linear regresyon algoritması işe yarayabilir.

Aşağıdaki grafikte x bizim değişkenimiz y ise sonuçlarımız olsun. Görüldüğü üzere **x** artıkça **y** de onla birlikte genel itibari ile artıyor.
Bu verileri grafik üzerine koyduğumuzda aralarındaki ilişkiyi anlayabilmek için bir çizgi çekebiliriz. Bu sayede bir sonraki x değeri için y verisinin ne olabileceği hakkında bir görüşümüz olmuş olur.

![]({{ site.images }}/linear_regression1.jpg){: .center-image }

Örnek vermek gerekirse x reklam sayısısı olsa y de satış sayısı. Bu sayede reklamlar arttıkça satışların arttığını görme imkanımız olabilir.

![]({{ site.images }}/linear_regression2.jpg){: .center-image }

Tabiki çizilecek çizgi bütün noktaları için hata payının en aza indirgenmişi olarak çizilmesi gerekiyor. Doğrusal algoritma bunu başarılı şekilde yapacaktır. Örnek çok daha fazla verinin bulunduğu bir grafik daha iyi açıklayacaktır.

## Çoklu Doğrusal Regresyonu (Multilinear Regression)
Çoklu doğrusal regresyon algoritmasında bir tane bağımlı ve yanındaki bir veya daha çok bağımsız değişkenin yorumlanmasında kullanılır. Doğrusal algoritma için verdiğimiz örnekte reklam sayıları ile satışlar arasındaki grafiği incelemiştik. Eğer bir de reklam ücretlerini eklediğimizi düşünelim. Örnek pahalı reklam verdiğimizde satışlara etkisini görmek isteyelim. Bu sefer grafik çizmek istediğimizde 2 boyutlu değil 3 boyut olmuş oluyor.

![]({{ site.images }}/multilinear_regression1.jpg){: .center-image }

Bu sefer arasındaki ilişki 3 boyutlu olarak çizmemiz gerekiyor ve yukardaki grafik ortaya çıkıyor.

## Polinomsal Regresyon (Polynomial Regression)
Elimizdeki veriler arasında eğer doğrusal bir ilişki yoksa modelimiz için polinomsal bir algoritma kullanırız. Örnek olarak elimizdeki verilerin çıktısı aşağıdaki gibi olsun.

![]({{ site.images }}/polynomial_regression1.jpg){: .center-image }

Böyle bir verinin, tahminleri için doğrusal regresyon gibi düz bir çizgi çekmemiz olmaz. Çünkü daha sonra tahmin edilmesi istediğimiz verinin hatalı olmasına sebebiyet verir. Onun için bu verilerin arasındaki en iyi ilişkiyi bulmak gerekir.

Örneğin bir yazılımcı olarak çalışan bir kişilerin deneyim ile maaşının arasındaki ilişkiyi çözmek isteyelim. x deneyim senesi, y ise maaşı olsun. 4. senesini doldurmuş bir yazılımcının maaşı birden arttığını görüyoruz. Bunu deneyimli bir yazılımcıdan deneyimsiz bir yazılımcıya kırılım yılı olarak da yorup maaşının arttığını düşünebiliriz.

#### kaynaklar
* [Linear Least Squares Regression with TensorFlow – Alexis Alulema](https://alexisalulema.com/2018/01/18/linear-least-squares-regression-with-tensorflow/)
* [Çok Değişkenli Doğrusal Regresyon (Multiple Linear Regression) – Veri Bilimcisi](https://veribilimcisi.com/2017/07/18/coklu-dogrusal-regresyon-nedir-multivariate-linear-regression/)
* [Fitting polynomial to data](http://www.astro.umd.edu/~cmbernard/matlab_website/ASTR121/labHubble/html/FitPoly.html)
