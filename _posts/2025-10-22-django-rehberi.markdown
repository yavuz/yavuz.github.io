---
layout: post
title:  "Django Rehberi"
date:   2025-10-22 12:40:44 +0300
categories: python web
excerpt: "Django'ya hızlı bir giriş yapmak için önemli konulara dair rehber"
image: django_rehberi.png
tags: python django web api rest backend
twittersummary: summary_large_image
---

![Cover]({{ site.images }}/django_rehberi.png)


# Giriş

Django, Python programlama dili ile yazılmış, açık kaynaklı ve ücretsiz bir web framework’üdür.  
“Mükemmeliyetçiler için son teslim tarihi olan web framework’ü” sloganıyla bilinen Django, hızlı geliştirme, güvenlik ve ölçeklenebilirlik sunar.

---

## Django’nun Temel Mimarisi

Django, uygulama katmanlarını net şekilde ayırarak temiz bir yapı sunar.

### 1. MVT (Model-View-Template) Mimarisi

Django, MVC (Model-View-Controller) mimarisinin bir varyasyonu olan MVT desenini kullanır:

- **Model:** Veritabanı yapısını ve iş mantığını temsil eder  
- **View:** İş mantığını işler ve template’e veri gönderir  
- **Template:** Kullanıcının gördüğü HTML sayfalarını oluşturur

### 2. ORM (Object-Relational Mapping)

Django’nun en güçlü özelliklerinden biri ORM sistemidir. SQL sorguları yazmak yerine Python kodu ile veritabanı işlemlerini gerçekleştirmenizi sağlar:

```python
# SQL yazmak yerine:
# Tüm aktif kullanıcıları getirir
users = User.objects.filter(is_active=True)
```

### 3. Admin Paneli

Django, otomatik olarak oluşturulan ve tamamen özelleştirilebilir bir admin arayüzü sunar.  
Bu özellik, içerik yönetimi ve veritabanı işlemleri için hazır bir çözüm sağlar.

---

## Django Projesi Başlatma

### Kurulum ve İlk Adımlar

```bash
# Django kurulumu
pip install django

# Yeni proje oluşturma
django-admin startproject myproject

# Uygulama oluşturma
python manage.py startapp myapp
```

---

## Proje ve Uygulama Yapısı

- `django-admin startproject` → Yeni proje oluşturur.  
- `python manage.py startapp` → Yeni uygulama başlatır.  
- `settings.py` → Proje ayarlarını içerir.  
- `urls.py` → URL yönlendirmelerini yönetir.  
- `views.py` → İş mantığı ve HTTP yanıtlarını içerir.

---

## Model Oluşturma ve Veritabanı İşlemleri

Django’da model oluşturmak oldukça basittir:

```python
from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title
```

Migration işlemleri ile veritabanı değişikliklerini yönetebilirsiniz:

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## URL Yönlendirme ve View’lar

### URL Yapılandırması

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('article/<int:pk>/', views.article_detail, name='article_detail'),
]
```

### Function-Based ve Class-Based Views

Django iki tür view sunar.  
Function-based view’lar daha basit işlemler için, class-based view’lar ise daha karmaşık ve tekrar kullanılabilir yapılar için idealdir.

---

## Template Sistemi

Django’nun template sistemi, HTML içinde Python benzeri bir sözdizimi kullanmanıza olanak tanır:

{% raw %}
```html
{% extends 'base.html' %}

{% block content %}
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
    
    {% for comment in comments %}
        <div>{{ comment.text }}</div>
    {% endfor %}
{% endblock %}
```
{% endraw %}

---

## Yönetim Paneli (Admin)

Django’nun güçlü admin paneli, modelleri otomatik olarak yönetim arayüzüne ekler.

```python
from django.contrib import admin
from .models import Product

admin.site.register(Product)
```

---

## Django ORM ve Sorgular

```python
Product.objects.all()
Product.objects.filter(price__gt=100)
Product.objects.create(name="Kalem", price=15)
```

---

## Django REST Framework (DRF)

Modern API geliştirmek için güçlü bir eklentidir.

```python
from rest_framework import serializers, viewsets
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
```

---

## Güvenlik ve Kimlik Doğrulama

- CSRF koruması  
- XSS önleme  
- Kullanıcı yönetimi (`django.contrib.auth`)  
- Token tabanlı kimlik doğrulama (DRF ile)

---

## Sonuç

Django, hem basit projeler hem de büyük ölçekli uygulamalar için ideal bir framework’tür.  
Hız, güvenlik ve esneklik sunar.  
Doğru mimariyle kullanıldığında uzun vadede sürdürülebilir bir altyapı sağlar.  
Django, geliştiricilere sadece bir framework değil, güçlü bir **ekosistem** sunar.
