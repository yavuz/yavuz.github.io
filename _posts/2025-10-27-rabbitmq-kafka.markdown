---
layout: post
title:  "RabbitMQ ve Kafka: Mesaj Kuyruğundan Veri Akışına Giden Yol"
date:   2025-10-27 09:00:44 +0300
categories: messaging architecture
excerpt: "RabbitMQ ve Kafka arasındaki farklar, kullanım senaryoları ve hangisini ne zaman tercih etmen gerektiği."
image: rabbitmq-kafka.jpg
tags: rabbitmq kafka messaging event-streaming microservices architecture message-queue
twittersummary: summary_large_image
---

![Cover]({{ site.images }}/rabbitmq-kafka.jpg)

### RabbitMQ ile başlayan mesajlaşma serüveni, Kafka’nın gelişiyle veri akışının yeni çağına dönüştü. Peki bu iki sistem ne işe yarıyor, farkları neler ve hangisini seçmelisin?

## Giriş

Modern sistemlerde servisler artık doğrudan birbirine bağlı çalışmıyor.  
Bir servis diğerine veri gönderecekse, bu iletişimi araya bir “mesaj aracı” koyarak yönetmek daha güvenli ve esnek olur.  
İşte bu görevi **RabbitMQ** ve **Apache Kafka** üstlenir.  
İkisi de mesaj taşır, ama **amaçları ve mimarileri farklıdır.**

---

## 🐰 RabbitMQ: “Bu işi yap”

![RabbitMQ]({{ site.images }}/rabbitmq.webp)

*RabbitMQ logosu — mesaj kuyruğu mimarisi için kullanılan popüler çözüm.*

### 🕰️ Tarihçe

RabbitMQ, **2007 yılında** Londra merkezli **LShift** şirketi tarafından geliştirildi.  
Daha sonra **VMware** tarafından satın alındı ve şu anda **Pivotal Software (VMware Tanzu)** ekosisteminin bir parçasıdır.

O dönemde amaç, **AMQP (Advanced Message Queuing Protocol)** standardını açık kaynak bir şekilde uygulayan, güvenilir bir mesaj kuyruğu sistemi oluşturmaktı.

Bugün **Erlang** dilinde yazılmış, dayanıklı ve üretim ortamlarında sıkça kullanılan bir sistemdir.

### ⚙️ Nasıl Çalışır?

RabbitMQ bir **mesaj kuyruğu (message queue)** mantığıyla çalışır:

1. **Producer** (örneğin sipariş servisi) → Mesajı gönderir.
2. **RabbitMQ** → Mesajı kuyruğa ekler.
3. **Consumer** (örneğin e-posta servisi) → Kuyruktan mesajı alır ve işler.
4. Mesaj işlenince kuyruktan silinir.

> RabbitMQ, “yapılacak işler listesi” gibi davranır: gönder, sıraya al, işle, sil.

### 🧩 Özellikleri

- **Kuyruk tabanlı iletişim:** Mesajlar sırayla işlenir.
- **Güvenilir teslim:** Mesaj kaybolmaz, onaylanana kadar saklanır.
- **Routing desteği:** Mesajları farklı kuyruklara yönlendirme imkânı.
- **Çoklu protokol desteği:** AMQP, MQTT, STOMP gibi protokollerle uyumlu.
- **Kolay kurulum:** Docker ile birkaç dakikada ayağa kaldırılabilir.

### 🧰 Kullanım Senaryoları

- Arka plan görevleri (e-posta, PDF, bildirim gönderimi)
- Mikroservisler arası komut aktarımı (“ödeme yap”, “sipariş oluştur”)
- Kullanıcıyı bekletmeden arkada işlem yürütme

---

## 🌀 Apache Kafka: “Bu olay gerçekleşti”

![Apache Kafka]({{ site.images }}/kafka.webp)

### 🕰️ Tarihçe

Apache Kafka, **2011 yılında LinkedIn** tarafından geliştirildi.  
O dönemde LinkedIn, saniyede yüz binlerce olayı (örneğin tıklama, paylaşım, giriş) işleyemiyordu.  
Klasik kuyruk sistemleri yetersiz kalınca, “büyük hacimli, sürekli veri akışı” için yeni bir sistem tasarlandı.

Kafka daha sonra **2012’de Apache Software Foundation** tarafından açık kaynak yapıldı.  
Bugün Kafka’nın ana geliştiricileri **Confluent** şirketi altında çalışıyor (Kafka’yı geliştiren orijinal LinkedIn ekibi tarafından kuruldu).

### ⚙️ Nasıl Çalışır?

Kafka, bir **event streaming (olay akışı)** platformudur.  
Veriler silinmez, diske yazılır ve birden fazla tüketici tarafından bağımsız olarak okunabilir.

1. **Producer** → “Yeni sipariş oluşturuldu” olayını Kafka’ya yazar.
2. **Kafka** → Bu olayı bir **topic** içinde saklar.
3. **Consumer’lar** (örneğin e-posta, stok, analitik servisleri) → Bu topic’ten olayı okur.

> Kafka, “yaşanan olayların kronolojik günlüğü” gibidir.

### 🧩 Özellikleri

- **Kalıcı depolama:** Mesajlar diskte tutulur, hemen silinmez.
- **Birden fazla okuyucu:** Aynı olay farklı servislerce kullanılabilir.
- **Replay:** Geçmiş olaylar yeniden işlenebilir.
- **Yüksek performans:** Saniyede milyonlarca mesaj işleyebilir.
- **Dağıtık yapı:** Cluster halinde kolayca ölçeklenir.

### 🧰 Kullanım Senaryoları

- Log toplama ve analiz
- Gerçek zamanlı veri işleme
- IoT cihazlarından gelen sürekli veri akışı
- Event-driven (olay odaklı) sistemler
- Büyük veri entegrasyonu

---

![RabbitMQ vs Kafka Karşılaştırma]({{ site.images }}/rabbitmq-kafka-tablo.png)

*Şekil: RabbitMQ ile Kafka arasındaki temel farkların karşılaştırma tablosu.*

## 🎯 Hangisini Ne Zaman Kullanmalı?

### 🐰 RabbitMQ kullan eğer:

- Basit iş kuyruğuna ihtiyacın varsa
- Mesaj bir kez işlenecekse
- Orta hacimli trafik varsa
- Hızlı kurulum istiyorsan

### 🌀 Kafka kullan eğer:

- Olayları kaydetmek istiyorsan
- Aynı mesajı birçok servis okuyacaksa
- Gerçek zamanlı analiz veya log toplama gerekiyorsa
- Yüksek hacimli veri işliyorsan

### 💡 İkisini Birlikte Kullanmak

Bazı sistemlerde **RabbitMQ ve Kafka birlikte** kullanılır:

- **Kafka:** Tüm olayları kaydeder (örnek: “sipariş oluşturuldu”)
- **RabbitMQ:** Bu olaylardan doğan görevleri yerine getirir (“e-posta gönder”, “fatura oluştur”)

Böylece hem geçmiş kayıt tutulur, hem de anlık işler yönetilir.

---

## Sonuç

- **RabbitMQ** → “Yapılacak işi sıraya koyar ve tamamlanınca siler.”
- **Kafka** → “Gerçekleşen olayları kaydeder, isteyen herkes okur.”

Başlangıçta RabbitMQ daha kolay öğrenilir.  
Ama sistem büyüyüp veri akışı karmaşıklaştıkça Kafka devreye girer.

---
