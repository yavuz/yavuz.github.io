---
layout: post
title:  "Destek Vektör Regresyonu ve Destek Vektör Makineleri"
date:   2018-09-10 02:00:00 +0300
categories: makine öğrenmesi
excerpt: Support Vector Regression (SVR) - Support Vector Machines (SVM)
image: support_vector_machines1.jpg
tags: makineogrenmesi destekvektor
twittersummary: summary_large_image
---

Destek vektör algoritması ilk başta sınıflandırma için çıkmış bir algoritma olmasına rağmen regresyon içinde kullanılmaktadır. Bu iki model sayesinde bazı veri problemlerinin çözümü sağlanmaktadır.

Elimizdeki veriler için her zaman doğrusal modeller kullanamayız. Bu gibi durumlarda başka algoritmalar ile elimizdeki verileri anlamlaştırmaya çalışırız. Bunlardan birisi de destek vektör algoritmalarıdır. Kısaca regresyon ve sınıflandırma için kullanılan iki modeli bulunmaktadır.

## Destek Vektör Regresyonu (Support Vector Regression - SVR)
<mark>Destek vektör regresyonu uyguladığımızda, çizeceğimiz aralığın maksimum noktayı içerisine almasını sağlamaktır. Bu çizilen maksimum aralıkların kestiği noktalara destek noktaları denir.</mark>

Verilerimizin dağılımını aşağıdaki gibi varsayalım.

![Support Vector Regression]({{ site.images }}/support_vector_regression1.jpg){: .center-image }

Verimizde bu çizdiğimiz çizgi doğrusal olabilir ancak farklı metodlar kullanarak eğriler çizmemizde mümkündür. Yani doğrusal SVR var olduğu gibi doğrusal olmayan SVR’de vardır. Bunun için SVR modeli uygulanırken Radial Basis Function (RBF) metodu ile birlikte uygulandığında doğrusal olmayan bir aralık çizmiş oluruz.

![Support Vector Regression]({{ site.images }}/support_vector_regression2.jpg)
Sağda doğrusal, solda ise doğrusal olmayan bir destek vektör regresyonu görülmektedir.

Diğer algoritmalardan farkını anlamak için aşağıdaki grafiğe bakabilirsiniz. Doğrusal ve polinomsal modeller eldeki veriler için bir çizgi çizmiş ancak destek vektör algoritmasının çizdiği çizgi çok daha verimli gözüküyor.

![Support Vector Regression]({{ site.images }}/support_vector_regression3.jpg)

Yukarıda bahsettiğimiz RBF metodu ile uygulanmış bir destek vektör regresyonu

## Destek Vektör Makineleri (Support Vector Machines - SVM)
Destek vektör algoritmasının ilk çıkış amacının sınıflandırma(classification) olduğundan bahsetmiştik. Bu algoritmaya destek vektör makineleri deniyor ve kısaca SVM olarak geçmektedir.

<mark>SVM algoritması iki grup şeklinde oluşmuş verilerin, birbirlerini ayırması için paralel en uzak çizgiyi çizmesidir.</mark>

![Support Vector Machines]({{ site.images }}/support_vector_machines1.jpg)

Grafik düzlemin görüldüğü üzere elimizde iki grup veri var ve biz bunları etiketleyerek sınıflandırma yapmak istiyoruz. Destek vektör makine algoritması uygulandığında ortadan geçen paralel çizgiyi elde etmiş oluruz. Bu sayede elimizdeki veriler ve gelecek veriler için sınıflandırma yapabilecek durumda oluruz. Grafikteki çizilen paralel aralığın kestiği noktalar destek noktalarıdır.

SVM algoritması internette araştırıldığında başta biyoloji alanında, görüntü işlemede ve bir çok bilim dalındaki verilerin sınıflandırılmasında uygulandığı görülüyor.

#### kaynaklar
* [Example of linear support vector regression. - Download Scientific Diagram](https://www.researchgate.net/figure/Example-of-linear-support-vector-regression_fig1_323588842)
* [Mapping a non-linear SVR into feature space and its ε -insensitive loss - Download Scientific Diagram](https://www.researchgate.net/figure/Mapping-a-non-linear-SVR-into-feature-space-and-its-e-insensitive-loss-setting-55_fig1_267275657)
* [Support Vector Regression (SVR) using linear and non-linear kernels — scikit-learn 0.19.2 documentation](http://scikit-learn.org/stable/auto_examples/svm/plot_svm_regression.html)
* [Support Vector Machine (SVM) Tutorial: Learning SVMs From Examples](https://www.kdnuggets.com/2017/08/support-vector-machines-learning-svms-examples.html)
