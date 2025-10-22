---
layout: post
title:  "Python Flask Rehberi"
date:   2025-10-21 12:40:44 +0300
categories: python web
excerpt: "Flask'e hızlı bir giriş yapmak için önemli konulara dair rehber"
image: flask-rehberi.webp
tags: python flask web api rest backend
twittersummary: summary_large_image
---

![Cover]({{ site.images }}/flask-rehberi.webp)


## 📘 Flask Nedir?

Flask, **Python ile web uygulamaları geliştirmek** için kullanılan, hafif (micro) bir web framework’tür.  
Yani sana hem **web sitesi** hem de **API** yazma imkânı verir.

### Avantajları:
- Basit ve esnek yapı  
- Gerektiğinde genişletilebilir (örnek: SQLAlchemy, JWT, Blueprint)  
- Küçük projelerden büyük sistemlere kadar uygundur  


## ⚙️ Kurulum

İsterseniz önce sanal ortam oluşturabilirsiniz.  
Bir klasöre gittikten sonra:

```bash
python -m venv venv
source venv/bin/activate
```
ve sonra;

```bash
pip install Flask
```

## 🚀 İlk Flask Uygulama (hello.py)

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Merhaba, Flask!"

if __name__ == '__main__':
    app.run(debug=True)
```
Bu dosyayı kaydedip çalıştırın;

```bash
python hello.py
```

Sonra tarayıcıdan şu adrese git:
http://127.0.0.1:5000

Ekranda “Merhaba Flask!” yazısını göreceksin.

## 🌐 Route Nedir?
Route, bir URL’nin hangi fonksiyonu çalıştıracağını belirler.
Yani kullanıcı belirli bir adrese girdiğinde hangi içeriğin döneceğini sen belirlersin.

Örnek bir dosya;

```python
from flask import Flask

app = Flask(__name__)

@app.route(”/”)
def home():
    return “Ana Sayfa”

@app.route(”/hakkinda”)
def about():
    return “Hakkında Sayfası”

@app.route(”/iletisim”)
def contact():
    return “İletişim Sayfası”

if __name__ == “__main__”:
    app.run(debug=True)
```
Bu örnekte:

- / → “Ana Sayfa”
- /hakkinda → “Hakkında Sayfası”
- /iletisim → “İletişim Sayfası” döner.

Değişken URL Parametreleri

Bazı sayfalar dinamik olabilir:

```python
@app.route(”/kullanici/<isim>”)
def kullanici(isim):
    return f”Merhaba, {isim.capitalize()}!”
```

Tarayıcıda http://127.0.0.1:5000/kullanici/yavuz yazarsan:
“Merhaba, Yavuz!” sonucu gelir.

## 📦 Flask’ta request Nesnesi
Flask, gelen verileri okumak için request nesnesini sağlar:
```python
from flask import Flask, request

app = Flask(__name__)

@app.route(”/merhaba”, methods=[”GET”, “POST”])
def merhaba():
    if request.method == “POST”:
        isim = request.form.get(”isim”)
        return f”Merhaba, {isim}!”
    return ‘’‘
        <form method=”POST”>
            <input name=”isim” placeholder=”İsmini yaz”>
            <button type=”submit”>Gönder</button>
        </form>
    ‘’‘

if __name__ == “__main__”:
    app.run(debug=True)
```
### 🧠 Nasıl Çalışır?
GET isteği → form sayfasını gösterir.

POST isteği → kullanıcı formu gönderdiğinde veriyi alır ve ekrana yazar.

🔸 Alternatif: JSON Verisi (API için)
```python
@app.route(”/api”, methods=[”POST”])
def api():
    data = request.get_json()
    return {”mesaj”: f”Merhaba {data[’isim’]}”}
```
Bu örnekte JSON gönderirsen:
```json
{
    "isim": "Yavuz"
}
```
Cevap olarak:
```json
{
    "mesaj": "Merhaba Yavuz"
}
```
## 🧩 Jinja2 Nedir?
Flask, HTML sayfalarını dinamik hale getirmek için Jinja2 adlı bir şablon motoru kullanır.
Bu sayede Python verilerini HTML içine kolayca yerleştirebilirsin.

### Klasör Yapısı
Flask şablonları varsayılan olarak templates klasöründe bulunur.
Yani şöyle bir yapı kur:

```
proje/
 ├── app.py
 └── templates/
      └── index.html
```

🔹 app.py

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route(”/”)
def home():
    isim = “Yavuz”
    return render_template(”index.html”, isim=isim)

if __name__ == “__main__”:
    app.run(debug=True)
```
🔹 templates/index.html

```html
<!DOCTYPE html>
<html>
<head>
    <title>Flask Şablon</title>
</head>
<body>
    <h1>Merhaba {{ isim }}!</h1>
    <p>Flask ve Jinja2 harika bir ikili 🚀</p>
</body>
</html>
```

### 🤝 Flask ile Veritabanı Bağlantısı
Küçük projeler için genelde SQLite + SQLAlchemy kullanılır.

**Kurulum**

```bash
pip install flask_sqlalchemy
```

**Basit Yapı**

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config[”SQLALCHEMY_DATABASE_URI”] = “sqlite:///veritabani.db”
db = SQLAlchemy(app)

# Model (Tablo)
class Kullanici(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    isim = db.Column(db.String(50), nullable=False)

# İlk tabloyu oluştur
with app.app_context():
    db.create_all()

@app.route(”/”)
def index():
    kullanicilar = Kullanici.query.all()
    return “<br>”.join([k.isim for k in kullanicilar])

if __name__ == “__main__”:
    app.run(debug=True)
```

## 📐 Blueprint ile Modüller Yapı
Flask’te Blueprint, uygulamanızı modüler parçalara ayırmanızı sağlayan bir yapıdır. Büyük projeleri organize etmek için kullanılır.

### Neden Blueprint?
Tek bir app.py dosyasında yüzlerce route yazmak yerine, uygulamanızı mantıksal bölümlere ayırırsınız:

* auth (giriş/kayıt)
* blog (blog işlemleri)
* admin (yönetim paneli)

**Basit Örnek**

**Proje Yapısı:**
```
myapp/
├── app.py
├── auth/
│   ├── __init__.py
│   └── routes.py
└── blog/
    ├── __init__.py
    └── routes.py
```
**auth/routes.py:**

```python
from flask import Blueprint, render_template

auth_bp = Blueprint(’auth’, __name__, url_prefix=’/auth’)

@auth_bp.route(’/login’)
def login():
    return “Login sayfası”

@auth_bp.route(’/register’)
def register():
    return “Kayıt sayfası”
```
**blog/routes.py:**

```python
from flask import Blueprint

blog_bp = Blueprint(’blog’, __name__, url_prefix=’/blog’)

@blog_bp.route(’/’)
def index():
    return “Blog anasayfa”

@blog_bp.route(’/post/<int:id>’)
def post(id):
    return f”Blog yazısı {id}”
```
**app.py:**
```python
from flask import Flask
from auth.routes import auth_bp
from blog.routes import blog_bp

app = Flask(__name__)

# Blueprint’leri kaydet
app.register_blueprint(auth_bp)
app.register_blueprint(blog_bp)

@app.route(’/’)
def home():
    return “Ana sayfa”

if __name__ == ‘__main__’:
    app.run(debug=True)
```
* /auth/login → auth blueprint
* /blog/post/5 → blog blueprint
* / → ana uygulama
Her modül kendi route’larını, template’lerini ve static dosyalarını yönetir. Kod daha temiz ve bakımı kolay olur!

## 🚌 Flask ile RESTful API
Örneğin kitap ekle, güncelle ve silme yapabileceğimiz küçük bir API.

```python
from flask import Flask, jsonify, request

app = Flask(__name__)

# Örnek veri (normalde veritabanından gelir)
kitaplar = [
    {’id’: 1, ‘baslik’: ‘Python Öğreniyorum’, ‘yazar’: ‘Ahmet Yılmaz’, ‘yil’: 2023},
    {’id’: 2, ‘baslik’: ‘Flask ile Web’, ‘yazar’: ‘Ayşe Kaya’, ‘yil’: 2024},
    {’id’: 3, ‘baslik’: ‘REST API Geliştirme’, ‘yazar’: ‘Mehmet Demir’, ‘yil’: 2024}
]

# Tüm kitapları getir (GET)
@app.route(’/api/kitaplar’, methods=[’GET’])
def tum_kitaplar():
    return jsonify({’kitaplar’: kitaplar, ‘toplam’: len(kitaplar)})

# Tek kitap getir (GET)
@app.route(’/api/kitaplar/<int:id>’, methods=[’GET’])
def kitap_getir(id):
    kitap = next((k for k in kitaplar if k[’id’] == id), None)
    if kitap:
        return jsonify(kitap)
    return jsonify({’hata’: ‘Kitap bulunamadı’}), 404

# Yeni kitap ekle (POST)
@app.route(’/api/kitaplar’, methods=[’POST’])
def kitap_ekle():
    veri = request.get_json()
    
    yeni_kitap = {
        ‘id’: len(kitaplar) + 1,
        ‘baslik’: veri.get(’baslik’),
        ‘yazar’: veri.get(’yazar’),
        ‘yil’: veri.get(’yil’)
    }
    
    kitaplar.append(yeni_kitap)
    return jsonify(yeni_kitap), 201

# Kitap güncelle (PUT)
@app.route(’/api/kitaplar/<int:id>’, methods=[’PUT’])
def kitap_guncelle(id):
    kitap = next((k for k in kitaplar if k[’id’] == id), None)
    
    if not kitap:
        return jsonify({’hata’: ‘Kitap bulunamadı’}), 404
    
    veri = request.get_json()
    kitap[’baslik’] = veri.get(’baslik’, kitap[’baslik’])
    kitap[’yazar’] = veri.get(’yazar’, kitap[’yazar’])
    kitap[’yil’] = veri.get(’yil’, kitap[’yil’])
    
    return jsonify(kitap)

# Kitap sil (DELETE)
@app.route(’/api/kitaplar/<int:id>’, methods=[’DELETE’])
def kitap_sil(id):
    global kitaplar
    kitap = next((k for k in kitaplar if k[’id’] == id), None)
    
    if not kitap:
        return jsonify({’hata’: ‘Kitap bulunamadı’}), 404
    
    kitaplar = [k for k in kitaplar if k[’id’] != id]
    return jsonify({’mesaj’: ‘Kitap silindi’}), 200

if __name__ == ‘__main__’:
    app.run(debug=True)
```
**Test etmek için:**

```bash
# Tüm kitapları listele
curl http://localhost:5000/api/kitaplar

# Tek kitap getir
curl http://localhost:5000/api/kitaplar/1

# Yeni kitap ekle
curl -X POST http://localhost:5000/api/kitaplar \
  -H “Content-Type: application/json” \
  -d ‘{”baslik”:”Yeni Kitap”,”yazar”:”Ali Veli”,”yil”:2025}’

# Kitap güncelle
curl -X PUT http://localhost:5000/api/kitaplar/1 \
  -H “Content-Type: application/json” \
  -d ‘{”baslik”:”Güncellenmiş Başlık”}’

# Kitap sil
curl -X DELETE http://localhost:5000/api/kitaplar/2
```
## 🚨Global Hata Ekleme
Bazı sunucu hata kodları için şunlar eklenebilir.

```python
# Global Error Handlers
@app.errorhandler(404)
def not_found(error):
    return jsonify({’hata’: ‘Endpoint bulunamadı’}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({’hata’: ‘Sunucu hatası’}), 500

@app.errorhandler(400)
def bad_request(error):
    return jsonify({’hata’: ‘Geçersiz istek’}), 400
```

Buraya kadar yazılanlar temel konular. Pratik yaptıkça daha iyi anlayacak ve tecrübe kazanacaksınız.

