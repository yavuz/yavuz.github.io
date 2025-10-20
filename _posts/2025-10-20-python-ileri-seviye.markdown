---
layout: post
title:  "Python'da İleri Seviye Kavramlar"
date:   2024-04-22 02:40:44 +0300
categories: python
excerpt: "Python'da OOP, modüller, hata yönetimi ve sanal ortamlar gibi ileri seviye konuların detaylı incelemesi"
image: python_programming.jpg
tags: python programming
twittersummary: summary_large_image
---

# Python'da İleri Seviye Kavramlar

Bu makalede Python programlama dilinin önemli ve sık kullanılan kavramlarını detaylı bir şekilde inceleyeceğiz.

## 1. Nesne Yönelimli Programlama (OOP)

Python, nesne yönelimli programlamayı destekleyen güçlü bir dildir. OOP, kodunuzu daha düzenli, yeniden kullanılabilir ve sürdürülebilir hale getirir.

### Sınıf ve Nesne Kavramları

```python
class Araba:
    def __init__(self, marka, model, yil):
        self.marka = marka
        self.model = model
        self.yil = yil
    
    def bilgi_goster(self):
        return f"{self.yil} model {self.marka} {self.model}"

# Nesne oluşturma
araba1 = Araba("Toyota", "Corolla", 2023)
print(araba1.bilgi_goster())
```

### Kalıtım (Inheritance)

Kalıtım, bir sınıfın başka bir sınıfın özelliklerini ve metodlarını miras almasıdır. Bu sayede kod tekrarından kaçınır ve hiyerarşik sınıf yapıları oluşturabilirsiniz. Üst sınıfa (parent class) "base class" veya "superclass", alt sınıfa ise (child class) "derived class" veya "subclass" denir.

```python
class ElektrikliAraba(Araba):
    def __init__(self, marka, model, yil, batarya_kapasitesi):
        super().__init__(marka, model, yil)  # Üst sınıfın __init__ metodunu çağırıyoruz
        self.batarya_kapasitesi = batarya_kapasitesi
    
    def sarj_durumu(self):
        return f"Batarya kapasitesi: {self.batarya_kapasitesi} kWh"

# ElektrikliAraba, Araba sınıfının tüm özelliklerini miras alır
tesla = ElektrikliAraba("Tesla", "Model 3", 2023, 75)
print(tesla.bilgi_goster())  # Araba sınıfından gelen metod
print(tesla.sarj_durumu())   # ElektrikliAraba'ya özel metod
```

### Encapsulation (Kapsülleme)

Encapsulation (Kapsülleme), verileri ve metodları bir sınıf içinde gruplandırıp, dış dünyadan gizlemek anlamına gelir. Python'da değişken isimlerinin başına çift alt çizgi (`__`) ekleyerek private (özel) değişkenler oluşturabilirsiniz. Bu sayede verilerinizi istenmeyen değişikliklerden korursunuz ve sadece belirlediğiniz metodlar üzerinden erişim sağlarsınız.

```python
class BankaHesabi:
    def __init__(self, hesap_no, bakiye):
        self.hesap_no = hesap_no
        self.__bakiye = bakiye  # Private değişken (dışarıdan erişilemez)
    
    def para_yatir(self, miktar):
        if miktar > 0:
            self.__bakiye += miktar
            return f"{miktar} TL yatırıldı"
        return "Geçersiz miktar"
    
    def para_cek(self, miktar):
        if miktar > 0 and miktar <= self.__bakiye:
            self.__bakiye -= miktar
            return f"{miktar} TL çekildi"
        return "Yetersiz bakiye veya geçersiz miktar"
    
    def bakiye_goster(self):
        return self.__bakiye

# Kullanım
hesap = BankaHesapi("TR123456", 1000)
print(hesap.bakiye_goster())  # 1000
hesap.para_yatir(500)
print(hesap.bakiye_goster())  # 1500

# Doğrudan erişim denemesi hata verir
# print(hesap.__bakiye)  # AttributeError hatası
```

### Polymorphism (Çok Biçimlilik)

Polymorphism, farklı sınıfların aynı metod isimlerini kullanabilmesi ve her birinin kendi davranışını gösterebilmesidir.

```python
class Hayvan:
    def ses_cikar(self):
        pass

class Kedi(Hayvan):
    def ses_cikar(self):
        return "Miyav"

class Kopek(Hayvan):
    def ses_cikar(self):
        return "Hav hav"

class Inek(Hayvan):
    def ses_cikar(self):
        return "Möö"

# Polymorphism sayesinde aynı metodu farklı nesneler üzerinde çağırabiliriz
hayvanlar = [Kedi(), Kopek(), Inek()]

for hayvan in hayvanlar:
    print(hayvan.ses_cikar())
# Çıktı:
# Miyav
# Hav hav
# Möö
```

### Method Overriding (Metod Geçersiz Kılma)

Overriding, alt sınıfın üst sınıftan aldığı bir metodu kendi ihtiyacına göre yeniden tanımlamasıdır.

```python
class Calisan:
    def __init__(self, ad, maas):
        self.ad = ad
        self.maas = maas
    
    def bilgi_goster(self):
        return f"Çalışan: {self.ad}, Maaş: {self.maas} TL"
    
    def maas_hesapla(self):
        return self.maas

class Yonetici(Calisan):
    def __init__(self, ad, maas, bonus):
        super().__init__(ad, maas)
        self.bonus = bonus
    
    # bilgi_goster metodunu override ediyoruz
    def bilgi_goster(self):
        return f"Yönetici: {self.ad}, Maaş: {self.maas} TL, Bonus: {self.bonus} TL"
    
    # maas_hesapla metodunu override ediyoruz
    def maas_hesapla(self):
        return self.maas + self.bonus

# Kullanım
calisan = Calisan("Ahmet", 10000)
yonetici = Yonetici("Ayşe", 15000, 5000)

print(calisan.bilgi_goster())  # Calisan sınıfının metodu
print(yonetici.bilgi_goster())  # Override edilmiş metod

print(calisan.maas_hesapla())  # 10000
print(yonetici.maas_hesapla())  # 20000 (maaş + bonus)
```

### super() ile Üst Sınıf Metodunu Kullanma

```python
class Sekil:
    def __init__(self, renk):
        self.renk = renk
    
    def bilgi(self):
        return f"Renk: {self.renk}"

class Dikdortgen(Sekil):
    def __init__(self, renk, genislik, yukseklik):
        super().__init__(renk)  # Üst sınıfın __init__ metodunu çağırıyoruz
        self.genislik = genislik
        self.yukseklik = yukseklik
    
    def bilgi(self):
        # Üst sınıfın bilgi metodunu kullanıp üzerine ekleme yapıyoruz
        temel_bilgi = super().bilgi()
        return f"{temel_bilgi}, Genişlik: {self.genislik}, Yükseklik: {self.yukseklik}"
    
    def alan_hesapla(self):
        return self.genislik * self.yukseklik

dikdortgen = Dikdortgen("Mavi", 10, 5)
print(dikdortgen.bilgi())  # Renk: Mavi, Genişlik: 10, Yükseklik: 5
print(dikdortgen.alan_hesapla())  # 50
```

## 2. *args ve **kwargs

Python'da fonksiyonlara esnek sayıda argüman geçmek için kullanılan güçlü araçlardır.

### *args - Değişken Sayıda Pozisyonel Argüman

```python
def topla(*args):
    return sum(args)

print(topla(1, 2, 3))  # 6
print(topla(1, 2, 3, 4, 5))  # 15
```

### **kwargs - Değişken Sayıda İsimlendirilmiş Argüman

```python
def kullanici_bilgisi(**kwargs):
    for anahtar, deger in kwargs.items():
        print(f"{anahtar}: {deger}")

kullanici_bilgisi(ad="Ahmet", soyad="Yılmaz", yas=30, sehir="İstanbul")
```

### *args ve **kwargs Birlikte Kullanımı

```python
def gelismis_fonksiyon(zorunlu_param, *args, **kwargs):
    print(f"Zorunlu: {zorunlu_param}")
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

gelismis_fonksiyon("test", 1, 2, 3, isim="Ali", yas=25)
```

## 3. Lambda Fonksiyonları

Lambda, tek satırlık anonim fonksiyonlar oluşturmak için kullanılır. Özellikle map, filter ve sorted gibi fonksiyonlarla birlikte çok kullanışlıdır.

### Temel Lambda Kullanımı

```python
# Normal fonksiyon
def kare_al(x):
    return x ** 2

# Lambda ile aynı işlem
kare = lambda x: x ** 2
print(kare(5))  # 25
```

### Lambda ile Map, Filter, Sorted

```python
# Map ile kullanım
sayilar = [1, 2, 3, 4, 5]
kareler = list(map(lambda x: x ** 2, sayilar))

# Filter ile kullanım
cift_sayilar = list(filter(lambda x: x % 2 == 0, sayilar))

# Sorted ile kullanım
ogrenciler = [
    {"ad": "Ali", "not": 85},
    {"ad": "Ayşe", "not": 92},
    {"ad": "Mehmet", "not": 78}
]
sirali = sorted(ogrenciler, key=lambda x: x["not"], reverse=True)
```

## 4. Try-Except Hata Yönetimi

Hata yönetimi, programınızın beklenmedik durumlarla başa çıkmasını sağlar ve daha güvenilir kod yazmanıza yardımcı olur.

### Temel Try-Except Kullanımı

```python
try:
    sayi = int(input("Bir sayı girin: "))
    sonuc = 10 / sayi
    print(f"Sonuç: {sonuc}")
except ValueError:
    print("Lütfen geçerli bir sayı girin!")
except ZeroDivisionError:
    print("Sıfıra bölme hatası!")
except Exception as e:
    print(f"Beklenmeyen hata: {e}")
```

### Else ve Finally Kullanımı

```python
try:
    dosya = open("veri.txt", "r")
    icerik = dosya.read()
except FileNotFoundError:
    print("Dosya bulunamadı!")
else:
    print("Dosya başarıyla okundu")
    print(icerik)
finally:
    # Her durumda çalışır
    print("İşlem tamamlandı")
    if 'dosya' in locals():
        dosya.close()
```

### Özel Hata Oluşturma

```python
class YasHatasiException(Exception):
    pass

def yas_kontrol(yas):
    if yas < 18:
        raise YasHatasiException("18 yaşından küçükler giremez!")
    return True

try:
    yas_kontrol(15)
except YasHatasiException as e:
    print(e)
```

## 5. Modüller

Modüller, Python kodunuzu organize etmenin ve yeniden kullanmanın temel yoludur. Bir modül, basitçe `.py` uzantılı bir Python dosyasıdır.

### Kendi Modülünüzü Nasıl Yazarsınız?

Kendi modülünüzü oluşturmak çok basittir. Sadece bir Python dosyası oluşturun ve içine fonksiyonlar, sınıflar veya değişkenler yazın.

**Adım 1: Modül Dosyası Oluşturun**

`matematik_islemleri.py` adında bir dosya oluşturun:

```python
# matematik_islemleri.py

def topla(a, b):
    """İki sayıyı toplar"""
    return a + b

def cikar(a, b):
    """İki sayıyı çıkarır"""
    return a - b

def carp(a, b):
    """İki sayıyı çarpar"""
    return a * b

def bol(a, b):
    """İki sayıyı böler"""
    if b == 0:
        raise ValueError("Sıfıra bölme hatası!")
    return a / b

# Sabitler
PI = 3.14159
E = 2.71828

# Modül içinde test kodu (opsiyonel)
if __name__ == "__main__":
    print("Bu modül doğrudan çalıştırıldı")
    print(f"5 + 3 = {topla(5, 3)}")
```

**Adım 2: Modülü Başka Bir Dosyada Kullanın**

Aynı klasörde `ana_program.py` adında bir dosya oluşturun:

```python
# ana_program.py

# Yöntem 1: Tüm modülü içe aktarma
import matematik_islemleri

sonuc = matematik_islemleri.topla(10, 5)
print(f"Toplama: {sonuc}")
print(f"Pi sayısı: {matematik_islemleri.PI}")

# Yöntem 2: Belirli fonksiyonları içe aktarma
from matematik_islemleri import topla, cikar, PI

sonuc1 = topla(8, 2)
sonuc2 = cikar(8, 2)
print(f"Toplama: {sonuc1}, Çıkarma: {sonuc2}")
print(f"Pi: {PI}")

# Yöntem 3: Takma ad kullanma
import matematik_islemleri as mat

sonuc = mat.carp(4, 5)
print(f"Çarpma: {sonuc}")

# Yöntem 4: Her şeyi içe aktarma (önerilmez)
from matematik_islemleri import *
print(carp(3, 7))
```

### Modül Nasıl Eklenir (Harici Kütüphaneler)?

Python'da üç tür modül vardır:

**1. Dahili (Built-in) Modüller**: Python ile birlikte gelir

```python
import math
import datetime
import random
import os

# Kullanım
print(math.sqrt(16))  # 4.0
print(datetime.datetime.now())
print(random.randint(1, 10))
print(os.getcwd())  # Mevcut dizin
```

**2. Kendi Yazdığınız Modüller**: Yukarıda gördüğümüz gibi

**3. Üçüncü Parti Modüller**: pip ile yüklenir

```bash
# Komut satırından yükleme
pip install requests
pip install pandas
pip install numpy
```

Yükledikten sonra kullanın:

```python
import requests
import pandas as pd
import numpy as np

# requests kullanımı
response = requests.get("https://api.github.com")
print(response.status_code)

# pandas kullanımı
df = pd.DataFrame({"isim": ["Ali", "Ayşe"], "yas": [25, 30]})
print(df)
```

### Paket Yapısı ve Alt Klasörlerdeki Modülleri Kullanma

Projeniz büyüdükçe modüllerinizi klasörlere ayırmak isteyebilirsiniz. Python'da bir klasörü paket yapmak için içine `__init__.py` dosyası eklemeniz gerekir.

**Örnek Proje Yapısı:**

```
proje/
    ana_program.py
    matematik/
        __init__.py
        temel.py
        ileri.py
    veritabani/
        __init__.py
        baglanti.py
    yardimcilar/
        __init__.py
        metin.py
```

**matematik/temel.py:**
```python
def topla(a, b):
    return a + b

def cikar(a, b):
    return a - b
```

**matematik/ileri.py:**
```python
import math

def karekok(sayi):
    return math.sqrt(sayi)

def us_al(taban, us):
    return taban ** us
```

**matematik/__init__.py:**
```python
# Bu klasörün bir paket olduğunu belirtir
# İsterseniz boş bırakabilir veya import'ları buraya ekleyebilirsiniz
from .temel import topla, cikar
from .ileri import karekok, us_al

# Paket seviyesinde değişkenler
__version__ = "1.0.0"
```

**ana_program.py'de kullanım:**
```python
# Yöntem 1: Alt modülü doğrudan import etme
from matematik.temel import topla, cikar
from matematik.ileri import karekok

print(topla(5, 3))
print(karekok(16))

# Yöntem 2: Alt modülün tamamını import etme
from matematik import temel
from matematik import ileri

print(temel.topla(10, 5))
print(ileri.us_al(2, 3))

# Yöntem 3: Paket seviyesinden import (eğer __init__.py'de tanımladıysanız)
from matematik import topla, cikar, karekok

print(topla(7, 3))
print(karekok(25))

# Yöntem 4: Tüm paketi import etme
import matematik

print(matematik.topla(4, 6))  # __init__.py'de tanımlıysa çalışır
```

**yardimcilar/metin.py:**
```python
def buyuk_harfe_cevir(metin):
    return metin.upper()

def kelime_sayisi(metin):
    return len(metin.split())
```

**yardimcilar/__init__.py:**
```python
from .metin import buyuk_harfe_cevir, kelime_sayisi
```

Bu yapı sayesinde kodunuz daha organize ve yönetilebilir hale gelir.

### __name__ == "__main__" Nedir?

Bu satır, dosyanın doğrudan mı çalıştırıldığını yoksa modül olarak mı içe aktarıldığını kontrol eder:

```python
# hesap_makinesi.py

def topla(a, b):
    return a + b

# Bu kısım sadece dosya doğrudan çalıştırıldığında çalışır
if __name__ == "__main__":
    print("Hesap makinesi testi")
    print(topla(5, 3))
```

Bu sayede:
- `python hesap_makinesi.py` dediğinizde test kodu çalışır
- `import hesap_makinesi` dediğinizde test kodu çalışmaz, sadece fonksiyonlar yüklenir

## 6. Virtual Environment (Sanal Ortam)

Virtual environment, her proje için izole Python ortamları oluşturmanıza olanak tanır. Bu sayede farklı projelerde farklı paket sürümleri kullanabilirsiniz.

### Virtual Environment Oluşturma ve Kullanma

```bash
# Sanal ortam oluşturma
python -m venv myenv

# Windows'ta aktifleştirme
myenv\Scripts\activate

# Linux/Mac'te aktifleştirme
source myenv/bin/activate

# Sanal ortamdan çıkış
deactivate
```

### Neden Virtual Environment?

- **İzolasyon**: Her proje kendi bağımlılıklarına sahip olur
- **Sürüm Çakışmalarını Önleme**: Farklı projeler farklı paket sürümleri kullanabilir
- **Temiz Sistem**: Global Python kurulumunuzu kirletmezsiniz
- **Taşınabilirlik**: Projenizi kolayca başka ortamlara taşıyabilirsiniz

## 7. pip ve pipx

### pip - Python Paket Yöneticisi

pip, Python paketlerini yüklemek, güncellemek ve yönetmek için standart araçtır.

```bash
# Paket yükleme
pip install requests

# Belirli versiyon yükleme
pip install django==4.2.0

# Paket güncelleme
pip install --upgrade requests

# Paket kaldırma
pip uninstall requests

# Yüklü paketleri listeleme
pip list

# Paket bilgisi görüntüleme
pip show requests

# requirements.txt oluşturma
pip freeze > requirements.txt

# requirements.txt'ten yükleme
pip install -r requirements.txt
```

### pipx - Uygulama Kurulumu

pipx, Python uygulamalarını izole ortamlarda kurmak için kullanılır. pip'ten farkı, her uygulamayı kendi sanal ortamında çalıştırmasıdır.

```bash
# pipx kurulumu
pip install pipx
pipx ensurepath

# Uygulama kurulumu
pipx install black
pipx install flake8
pipx install poetry

# Uygulamayı çalıştırma
black my_script.py

# Yüklü uygulamaları listeleme
pipx list

# Uygulama güncelleme
pipx upgrade black

# Uygulama kaldırma
pipx uninstall black
```

### pip vs pipx

**pip kullanın:**
- Proje bağımlılıkları için
- Kütüphaneler için (requests, pandas, numpy)
- Virtual environment içinde çalışırken

**pipx kullanın:**
- Komut satırı araçları için (black, flake8, pylint)
- Global olarak kullanılacak uygulamalar için
- İzole kurulum gerektiren araçlar için

## Özet

Bu makalede Python'un temel ve ileri seviye kavramlarını inceledik:

1. **Nesne Yönelimli Programlama**: Kodunuzu daha organize ve sürdürülebilir hale getirir
2. **args ve kwargs**: Esnek fonksiyon parametreleri oluşturmanızı sağlar
3. **Lambda**: Kısa ve hızlı fonksiyonlar yazmanıza olanak tanır
4. **Try-Except**: Hata yönetimi ile daha güvenilir programlar yazarsınız
5. **Modüller**: Kod organizasyonu ve yeniden kullanılabilirlik sağlar
6. **Virtual Environment**: Proje izolasyonu ve temiz geliştirme ortamı sunar
7. **pip ve pipx**: Paket yönetimi ve araç kurulumu için vazgeçilmez araçlar

Bu kavramları öğrenmek ve uygulamak, Python'da profesyonel seviyede kod yazmanızı sağlayacaktır.