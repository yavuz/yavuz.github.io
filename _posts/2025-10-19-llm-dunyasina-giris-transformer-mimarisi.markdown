---
layout: post
title:  "LLM Dünyasına Giriş: Transformer Mimarisi"
date:   2025-10-19 02:40:44 +0300
categories: ai
excerpt: "Transformer mimarisinin detaylı incelemesi: Encoder, Decoder, Self-Attention ve Positional Encoding"
image: transformer-mimarisi-cover.jpg
tags: ai llm nlp transformer attention
twittersummary: summary_large_image
---

![Cover]({{ site.images }}/transformer-mimarisi-cover.jpg)

### Giriş

Transformer mimarisi, 2017 yılında Ashish Vaswani ve ekibinin “Attention is All You Need” makalesiyle tanıtıldı. Bu yapı, RNN ve LSTM gibi sıralı modellerin yavaşlığını ve uzun bağımlılıkları öğrenmedeki zorluklarını ortadan kaldırarak doğal dil işleme (NLP) alanında devrim yarattı. Günümüzde GPT, BERT, T5 ve benzeri tüm büyük dil modelleri bu mimariyi temel alır.

![Image1]({{ site.images }}/transformer-mimarisi-1.png)

### Transformer'ın Temel Mantığı

Transformer mimarisi 2017’de “Attention is All You Need” makalesiyle tanıtıldı. Bu yapı, RNN ve LSTM gibi sıralı modellerin dezavantajlarını ortadan kaldırdı ve NLP’de devrim yarattı. Günümüzde GPT, BERT, T5 gibi büyük dil modelleri de temelde Transformer üzerine kurulu.

Transformer, dizilerdeki öğeleri **eşzamanlı** işler. Bu, onu RNN’lerden çok daha hızlı yapar.  Ana yenilik **attention (dikkat) mekanizmasıdır**: Her kelime, diğer tüm kelimelere bakarak “hangi kelimelere daha çok dikkat etmeliyim?” sorusuna cevap verir. Böylece bağlam, özne, nesne, zaman, duygu gibi ilişkiler öğrenilir.

### Mimari Yapı

![Image3]({{ site.images }}/transformer-mimarisi-3.png)

Transformer iki ana bileşenden oluşur:

#### 🧩 **Encoder**
- Girdi dizisini işler.
- Her kelimeye **embedding** uygulanır.
- Ardından **positional encoding** eklenir (kelimenin cümledeki konum bilgisini taşır).
- **Self-Attention** katmanları ile her kelimenin diğerleriyle ilişkisi hesaplanır.
- Sonuçlar **Feed Forward Network (FFN)** katmanına aktarılır.

#### 🧠 **Decoder**
- Encoder çıktısını alır.
- Kendi önceki çıktılarıyla **masked self-attention** uygular (geleceği görmez).
- Encoder’dan gelen bilgiyle **encoder-decoder attention** kurar.
- Son katmanda olasılıksal çıktı üretir (ör: bir sonraki kelime).


### Embedding Katmanı

- Kelime veya token’ları sayılara çevirir.
- Her kelime anlamını taşıyan bir vektör haline gelir.
```
“Merhaba” → [0.25, 0.71, -0.33, ...]
“Dünya”  → [0.30, 0.65, -0.40, ...]
```
- Model bu vektörleri eğitim sırasında öğrenir.
- Ardından **positional encoding** ile konum bilgisi eklenir.


### Positional Encoding

- Modelin sıralama bilgisini alması gerekir.
- Her kelimeye pozisyonu belirten bir vektör eklenir.
- Bu bilgi sinüs ve kosinüs fonksiyonlarıyla üretilir.
- Böylece model kelime sırasi ve anlamını doğru şekilde işler.

### Self-Attention Katmanı

- Transformer’ın en kritik kısmı.
- Her kelimenin cümledeki diğer kelimelerle olan ilişkisini bulmaya çalışır.
- Hem encoder’da hem decoder’da bulunur.
- Birden fazla self-attention işlemi bir araya gelince **Multi-Head Attention** oluşur.
- Model anlam, zaman, bağlam gibi birçok ilişkiyi aynı anda öğrenir.

Self-Attention’da embedding’den gelen veri üzerinde üç ana vektör hesaplanır:
- **Q (Query):** Hangi kelimelere dikkat etmeliyim?
- **K (Key):** Diğer kelimeler için ne kadar önemliyim?
- **V (Value):** Benim anlamım nedir?

👉 **Q** soruyu sorar  
👉 **K** cevabı belirler  
👉 **V** bilgiyi taşır

Bu üçü birlikte çalışarak modelin kelimeler arasındaki ilişkileri anlamasını sağlar.
Tüm bu işlemler — Q, K, V oluşturma → skor hesaplama → softmax → ağırlıklı ortalama — Self-Attention katmanının içinde gerçekleşir.

![Image2]({{ site.images }}/transformer-mimarisi-2.png)

### Bağlamsal İlişki Örneği

Örneğin “kedi” ve “balık” kelimeleri embedding ile vektörlere dönüştürülür. Self-Attention bunlar arasındaki ilişkiyi inceler. “Kedi balıkla ilişkili mi?” sorusunu Q ve K çarpımıyla bulur. Eğer ilişki yüksekse, model “kedi”nin anlamını “balık”tan gelen bilgiyle günceller. Model kelimeler arasındaki **bağlamsal ilişkileri** böylece öğrenir.

### ✅ Kısa Özet

- **Embedding:** Kelimeleri sayılara çevirir.
- **Positional Encoding:** Sıra bilgisini ekler.
- **Self-Attention:** Kelimeler arasındaki ilişkileri bulur.
- **Decoder:** Öğrenilen bilgilere göre yanıt üretir.

### 🍏 Sonuç

Transformer mimarisi, derin öğrenme tarihinde bir dönüm noktası olmuştur.
RNN ve LSTM modellerinin sıralı yapısına göre çok daha hızlı ve verimli çalışarak dilin bağlamsal yapısını çözmeyi başarmıştır.

**Self-Attention** mekanizması sayesinde model, cümledeki her kelimenin diğerleriyle olan ilişkisini anlayabilir.
Bu sayede metinleri, anlamı kaybetmeden paralel biçimde işler.

Günümüzde GPT, BERT, T5 gibi dev modellerin başarısının temelinde Transformer yapısı vardır.
Kısacası Transformer, sadece bir mimari değil, modern yapay zekânın dil anlama yeteneğinin çekirdeğidir.



### Kaynaklar

- [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
- [Transformer Mimarisi Türkçe Anlatım Part 1: Embeddings](https://medium.com/@i_konak/transformer-mimarisi-t%C3%BCrk%C3%A7e-anlat%C4%B1m-part-1-embeddings-d5a658058a02)
- [Transformer Mimarisi Türkçe Anlatım Part 2: Self-Attention](https://medium.com/@i_konak/transformer-mimarisi-t%C3%BCrk%C3%A7e-anlat%C4%B1m-part-2-self-attention-ab5e5eec32f)
- [Transformer Mimarisi Türkçe Anlatım Part 3: Transformer'a Adım Adım](https://medium.com/@i_konak/transformer-mimarisi-t%C3%BCrk%C3%A7e-anlat%C4%B1m-part-3-transformera-ad%C4%B1m-ad%C4%B1m-6b19f5cde5ae)
