---
layout: post
title:  "LLM Dünyasına Giriş"
date:   2025-10-18 02:40:44 +0300
categories: ai
excerpt: "LLM'lerin ne olduğu, nasıl çalıştiği ve Transformer mimarisinin temellerini keşfedin"
image: llm-dunyasina-giris-cover.jpg
tags: ai llm nlp transformer
twittersummary: summary_large_image
---

![Cover]({{ site.images }}/llm-dunyasina-giris-cover.jpg)

### LLM Nedir?

LLM, yani **Large Language Model** (Büyük Dil Modeli), yapay zeka tabanlı bir sistemdir ve devasa miktarda metin verisiyle eğitilirler. Bu modeller, doğal dil işleme (NLP) görevlerinde kullanılır. Mesela, metin yazma, çeviri yapma, metni özetleme ya da sorulara cevap verme gibi birçok alanda kullanılabilirler.


### LLM Nasıl Çalışır?

LLM’ler, temelde bir kelimeden sonra hangi kelimenin geleceğini tahmin etme prensibiyle çalışır. Milyarlarca parametreye sahip sinir ağları dildeki kalıpları, yapıları ve anlamları öğrenir. 
Eğitim sırasında internetteki makaleler, kitaplar, web siteleri ve diğer metinlerden oluşan devasa veriyi analiz ederler.

Bu modeller **Transformer** adında özel bir mimariyi kullanır. Transformer, metnin farklı bölümleri arasındaki ilişkileri anlamak için **dikkat mekanizması** (attention mechanism) kullanır. Bu sayede bir cümledeki kelimelerin bağlamsal anlamlarını kavrayabilirler.

**Attention mekanizması** 2017 yılında Google’ın yayınladığı ["Attention Is All You Need"](https://en.wikipedia.org/wiki/Attention_Is_All_You_Need) makalesinde tanıtıldı. Transformer mimarisi NLP modellerinde yeni bir yaklaşım sundu. Önceden kullanılan RNN ve LSTM modellerinin kısıtlarına çözüm getirdi.



#### “Attention is All You Need” Makalesi

2017’de **Ashish Vaswani** liderliğindeki ekip, transformer modelini tanıtan makaleyi yayımladı. Ana katkıları:

- **Self-Attention Mekanizması:** Bir cümlenin her kelimesinin diğer tüm kelimelerle olan ilişkisini eşzamanlı olarak değerlendirme yöntemi. Bu, kelimeler arasındaki bağlamı daha iyi anlamayı sağladı.
- **Paralel İşleme:** Transformer’lar metni sıralı değil, tüm kelimeleri aynı anda işleyebildiği için eğitim daha hızlı oldu.
- **Ölçeklenebilirlik:** Attention mekanizması büyük veriyle çalışmak için daha uygun bir yapı sundu.



### Akış

![Akış]({{ site.images }}/llm-dunyasina-giris-akis.jpg){: .center-image }

LLM’ler, metnin anlamını insan gibi “anlamaz”, sadece olasılıklara göre en mantıklı kelimeyi tahmineder. Bu tahminler EOS (“end of sentence”) noktasına kadar sürer.

Bir LLM, metni şu temel adımlarla işler:

- **Tokenizer ile Metni Parçalama:** Girdi metni, küçük parçalara (token) ayrılır.
- **Vektöre Çevirme (Embedding):** Tokenlar sayısal vektörlere dönüştürülür.
- **Attention Mekanizması:** Vektörler arasındaki ilişkiler analiz edilir.
- **Yanıt Üretimi:** Model bağlama göre çıktı üretir.

Örneğin “Merhaba Dünya“ dediğimizde bunu ilk başta tokenlarına parçalanıyor. “Mer“, “ha“, “ba“, “Dün”, “ya“ gibi parçalara ayrılıyor. Örnek test etmek için buraya bakabilirsiniz. LLM’ler farklı token yapısını sahip olabilir. Tokenlara bölündükten sonra bu girdileri vektör değerlerine çeviriyor.
```
Mer => [0.23, -0.15, 0.67, ..., 0.12]
ha => [0.03, 0.25, 0.17, ..., 0.14]
```
gibi vektör verilerine çevriliyor. Aşağıdaki resimde örnek olarak görebilirsiniz.
![Token Vektörleri]({{ site.images }}/llm-dunyasina-giris-sentences.jpg){: .center-image }

Burada önemli olan bir şey her token bir sonraki tokenın aslında birer girdisi diyebiliriz. Bir tokendan sonra gelen tokenların hesaplamaları yapılır ve en yüksek olasılık değeri olan token tahmin edilir.

Bu hesaplamayı görselleştirmesini görmek için burayı ziyaret edebilirsiniz.

![Token İlişkileri]({{ site.images }}/llm-dunyasina-giris-token.webp){: .center-image }


### Transformer Katmanları

Transformer iki ana kısımdan oluşur: **Encoder** ve **Decoder**  
Encoder metni anlar, Decoder ise yeni metin üretir.

- **Encoder:** Kelimeler arasındaki ilişkileri “attention” mekanizmasıyla öğrenir. Model cümledeki bağlantıları bulmaya çalışır ve bu bilgiyi birkaç katmandan geçirerek derinleştirir.
- **Decoder:** Bu anlamı kullanarak cevap oluşturur. Örneğin “Merhaba” yazınca, model mantıklı devamı “dünya” olarak tahmin eder.
- **Pozisyon Bilgisi:** Transformer kelime sırasını bilemediği için, her kelimeye bir pozisyon değeri eklenir.


### Sonuç

LLM’ler, dilin yapısını istatistiksel olarak öğrenen fakat insan gibi “anlamayan” modellerdir. Transformer mimarisiyle metinler arasındaki ilişkileri daha doğru kurabiliyorlar. Sohbet botları, çeviri sistemleri ve metin analiz araçları bu temelin üzerine kurulu.

Yani, 2017’deki “Attention Is All You Need” makalesiyle başlayan olay, yapay zekanın dil alanındaki ilerlemesini şekillendirdi. LLM’ler her geçen gün daha hızlı ve daha doğal hale geliyor.

Bu yazı LLM dünyasına kısa bir girişti. Yeni detaylar geldikçe makale güncellenecek. Serinin devamı için abone olmayı/takip etmeyi unutma! Sonraki yazı: ["Transformer Mimarisi"](https://yavuzyildirim.substack.com/p/llm-dunyasna-giris-transformer-mimarisi)
