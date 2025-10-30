---
layout: post
title:  "Elasticsearch: Modern Arama ve Analiz Motorunun Gücü"
date:   2025-10-25 09:00:44 +0300
categories: database search
excerpt: "Milyarlarca veriyi milisaniyede tarayan, full-text search ve analiz yetenekleriyle veri keşfini dönüştüren güçlü arama motoru."
image: elasticsearch-nedir.jpg
tags: elasticsearch search database nosql full-text analytics elk-stack
twittersummary: summary_large_image
---

![Cover]({{ site.images }}/elasticsearch-nedir.jpg)

### Milyarlarca veriyi milisaniyede tarayan, aramayı sıradan bir sorgudan öteye taşıyan güçlü bir veri keşif motoru.

## Elasticsearch Nedir?

Elasticsearch, metin tabanlı verileri **çok hızlı şekilde aramak, filtrelemek ve analiz etmek** için geliştirilmiş, açık kaynaklı bir arama ve analiz motorudur.  
Temelde, JSON formatında veri depolayan bir **NoSQL veritabanı** gibi davranır; ancak klasik veritabanlarından farkı, veriyi saklamak kadar **bulmayı da** merkeze almasıdır.

Elasticsearch, veriyi sadece kaydetmez, onu **anlamaya** çalışır. “Google gibi arama yapabilen bir veritabanı” olarak düşünebilirsin.

---

## Felsefesi: “Aramak, sadece sorgu çalıştırmak değildir”

Elasticsearch’ün arkasındaki fikir, **metin aramanın tam eşleşmeden ibaret olmaması** gerektiğidir.  
Kullanıcı “elma” yazdığında “elmalar” ya da “apple” sonuçlarını da bulmak ister.  
Elasticsearch bunu, **full-text search** ve **analizör** sistemiyle çözer.  
Metinleri parçalara ayırır (tokenize eder), köklerine indirger (stemming), büyük-küçük harf duyarlılığını kaldırır, eşanlamlıları ilişkilendirir.

Yani klasik SQL’in `WHERE name = ‘Elma’` sorgusunu, Elasticsearch’te “elma”, “elmalar”, “apple” gibi daha **anlamlı bir arama deneyimine** dönüştürür.

---

## Neden Bu Kadar Popüler?

- **Hızlıdır** → Veriyi ters indeks (inverted index) mantığıyla saklar. Bu sayede milyarlarca dökümanda bile milisaniyede sonuç verir.
- **Ölçeklenebilir** → Küme (cluster) yapısıyla yatayda kolayca büyür. Node eklemek kadar basit.
- **RESTful API ile çalışır** → Her şey HTTP üzerinden JSON formatında yapılır. Modern web projelerine kolayca entegre olur.
- **Ekosistemi güçlüdür** → Kibana (görselleştirme), Logstash (veri işleme) ve Beats (veri toplama) ile birlikte **Elastic Stack (ELK Stack)** oluşturur.
- **Kullanım alanı geniştir** → Arama motoru, log analizi, performans izleme, ürün öneri sistemleri ve veri keşfi gibi birçok senaryoda kullanılabilir.

---

## Nerelerde Kullanılır?

- **Uygulama Arama Sistemleri** → e-ticaret sitelerinde ürün arama (Amazon, Trendyol, Etsy)
- **Log Analizi ve İzleme** → DevOps ekipleri için (Kibana + Logstash kombinasyonu)
- **Veri Analitiği** → Anlamlandırılmış büyük veriler üzerinde sorgulama
- **Otomatik Tamamlama & Öneri Sistemleri** → Kullanıcının yazdığına göre akıllı öneriler
- **Güvenlik ve SIEM Sistemleri** → Log tabanlı güvenlik olaylarını tespit etme

---

## Gerçek Dünya Senaryoları

### 🛍️ E-Ticaret Arama Sistemleri (Amazon, Trendyol, Hepsiburada)

E-ticaret sitelerinde kullanıcı deneyiminin kalbi arama motorudur.  
Kullanıcı “siyah spor ayakkabı” yazdığında sistem:

- Benzer terimleri (“spor ayakkabısı”, “sneaker”) bulur,
- Fiyat, kategori, marka gibi filtreleri hızlı uygular,
- Popüler ürünleri ve önerileri öne çıkarır.

Elasticsearch burada:

- **Full-text search** ile anlamlı arama sağlar,
- **Fuzzy search** ile yazım hatalarını tolere eder,
- **Aggregations** ile filtreli ürün sayısı gibi bilgileri milisaniyede hesaplar.

---

### 🧾 Ürün ve Yorum Arama Sistemleri

Elasticsearch, kullanıcı yorumlarını veya ürün açıklamalarını hızlı aramak ve sıralamak için kullanılır.  
Örneğin:

- Yorumlar Elasticsearch’e indexlenir.
- Anahtar kelimeler, ürün adları, marka veya tarih gibi alanlara göre filtreleme yapılabilir.
- Böylece “en çok yorum yapılan ürünler” veya “belirli kelimeyi içeren yorumlar” gibi sorgular anında çalışır.

---

### ⚙️ Log Analizi (DevOps & Güvenlik)

Şirketler sunucu loglarını Logstash ve Beats ile Elasticsearch’e aktarır. Kibana üzerinden:

- Hata oranları,
- Sunucu yükü,
- Anormal trafik hareketleri

gibi veriler görselleştirilir.

Bu yapı, **ELK Stack** olarak bilinir ve sistem izleme, güvenlik (SIEM) ve uyarı sistemlerinde standart haline gelmiştir.

---

### 📊 Veri Analitiği ve Dashboard’lar

Büyük veri kümelerinde gerçek zamanlı analiz yapmak için Elasticsearch mükemmel bir çözümdür.  
Örneğin:

- Web trafiği, satış hacmi, kullanıcı davranışları gibi veriler toplanır,
- Kibana ile etkileşimli grafiklere dönüştürülür,
- Dashboard üzerinden canlı izleme yapılır.

---

### 🔍 İçerik Keşfi (Medya & Blog Platformları)

Medium, Reddit veya haber siteleri gibi platformlar Elasticsearch’ü kullanarak:

- İçerik etiketleme,
- Benzer yazı önerisi,
- Arama kutusunda otomatik tamamlama

gibi özellikler sunar.

---

## Sonuç

Elasticsearch, günümüzün veri yoğun dünyasında **hız, ölçeklenebilirlik ve anlamlı arama** ihtiyaçlarını karşılayan güçlü bir çözümdür.  
Klasik veritabanlarının ötesine geçerek, veriyi yalnızca depolamakla kalmaz — **anlamlandırır, ilişkilendirir ve erişimi hızlandırır.**

Bu özellikleri sayesinde:

- E-ticaret sitelerinde akıllı arama sistemlerinin,
- DevOps ekiplerinde log analizi süreçlerinin,
- Veri biliminde gerçek zamanlı dashboard’ların,
- İçerik platformlarında öneri sistemlerinin

temel yapı taşlarından biri haline gelmiştir.

Kısacası, **veriyi sadece saklamak değil, ondan içgörü üretmek istiyorsan.**

> Elasticsearch, aradığın motorun ta kendisidir.

---

### 📝 Dipnot: Elasticsearch ve Lisans Değişikliği

2021 yılında Elastic şirketi, Elasticsearch’ün lisans modelini **Apache 2.0**’dan **Server Side Public License (SSPL)** ve **Elastic License**’a geçirdi.  
Bu değişiklik, özellikle **bulut sağlayıcıların** ürünü ticari olarak kullanmasını sınırlamak amacıyla yapıldı.

Bu lisans değişikliğinden sonra **Amazon**, Elasticsearch’ün açık kaynak sürümünü temel alarak **OpenSearch** adında bağımsız bir proje başlattı.  
OpenSearch, tamamen **Apache 2.0 lisansı** ile açık kaynak kalmaya devam ediyor  
ve Elasticsearch’ün 7.10 sürümünden çatallanmış (fork) bir versiyonudur.

Kısaca:

> Elasticsearch → Elastic firmasının resmi, ticari sürümü  
> OpenSearch → Topluluk destekli, tamamen açık kaynak alternatifidir.
