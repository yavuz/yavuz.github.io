---
layout: post
title:  "Laravel Rehberi"
date:   2025-10-23 09:00:44 +0300
categories: php web
excerpt: "Laravel'e hızlı bir giriş yapmak için önemli konulara dair rehber"
image: laravel-rehberi.webp
tags: php laravel web api rest backend mvc
twittersummary: summary_large_image
---

![Cover]({{ site.images }}/laravel-rehberi.webp)


# Laravel 12: Başlangıç Seviyesi Pratik Rehber

## İçindekiler
1. [Laravel Nedir?](#laravel-nedir)
2. [Kurulum](#kurulum)
3. [İlk Projeniz](#ilk-projeniz)
4. [Routes (Yönlendirme)](#routes)
5. [Controllers (Kontrolörler)](#controllers)
6. [Views (Görünümler)](#views)
7. [Database (Veritabanı)](#database)
8. [Models (Modeller)](#models)
9. [CRUD İşlemleri](#crud-islemleri)
10. [Form İşlemleri](#form-islemleri)
11. [Kimlik Doğrulama](#kimlik-dogrulama)

---

## Laravel Nedir?

Laravel, PHP ile web uygulamaları geliştirmek için kullanılan modern ve kullanıcı dostu bir framework'tür. Temiz kod yazmanızı sağlar ve birçok hazır özellik sunar.

### Neden Laravel?

- **Kolay Öğrenilir**: Anlaşılır dokümantasyon ve topluluk desteği
- **Hızlı Geliştirme**: Hazır araçlar ve yapılar
- **Güvenli**: Built-in güvenlik özellikleri
- **Modern**: Güncel PHP standartları

---

## Kurulum

### Gereksinimler

- PHP 8.2 veya üzeri
- Composer (PHP paket yöneticisi)

### Composer Kurulumu

Windows, Mac veya Linux için [getcomposer.org](https://getcomposer.org/) adresinden indirin.

### Laravel Projesi Oluşturma

```bash
# Yöntem 1: Laravel Installer ile (önerilen)
composer global require laravel/installer
laravel new blog

# Yöntem 2: Composer ile direkt
composer create-project laravel/laravel blog

# Proje klasörüne girin
cd blog

# Geliştirme sunucusunu başlatın
php artisan serve
```

Tarayıcınızda `http://localhost:8000` adresini açın. Laravel hoş geldin sayfasını göreceksiniz!

---

## İlk Projeniz

### Proje Yapısı

```
blog/
├── app/              # Uygulama kodu
│   ├── Http/
│   │   └── Controllers/  # Controller'lar
│   └── Models/       # Veritabanı modelleri
├── config/           # Konfigürasyon dosyaları
├── database/         # Veritabanı işlemleri
├── public/           # Halka açık dosyalar (index.php)
├── resources/        # Views, CSS, JS
│   └── views/        # Blade şablonları
├── routes/           # Route tanımları
│   └── web.php       # Web route'ları
└── .env              # Ortam değişkenleri
```

### .env Dosyası Ayarları

```env
APP_NAME=Blog
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=blog
DB_USERNAME=root
DB_PASSWORD=
```

### Veritabanı Oluşturma

MySQL'de yeni bir veritabanı oluşturun:

```sql
CREATE DATABASE blog;
```

---

## Routes (Yönlendirme)

Route'lar, URL'leri uygulama kodunuza bağlar. `routes/web.php` dosyasında tanımlanır.

### Basit Route Örnekleri

```php
<?php
// routes/web.php

use Illuminate\Support\Facades\Route;

// Ana sayfa
Route::get('/', function () {
    return view('welcome');
});

// Hakkımda sayfası
Route::get('/hakkimda', function () {
    return 'Hakkımda sayfası';
});

// Parametreli route
Route::get('/merhaba/{isim}', function ($isim) {
    return "Merhaba, $isim!";
});

// Opsiyonel parametre
Route::get('/kullanici/{isim?}', function ($isim = 'Misafir') {
    return "Hoş geldin, $isim!";
});
```

### Route İsimlendirme

```php
Route::get('/iletisim', function () {
    return view('iletisim');
})->name('iletisim');

// Başka bir yerde kullanımı
$url = route('iletisim'); // /iletisim
```

---

## Controllers (Kontrolörler)

Controller'lar, route mantığını organize etmenizi sağlar.

### Controller Oluşturma

```bash
php artisan make:controller PostController
```

### Basit Controller Örneği

```php
<?php
// app/Http/Controllers/PostController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    // Tüm gönderileri listele
    public function index()
    {
        return view('posts.index');
    }
    
    // Tek gönderi göster
    public function show($id)
    {
        return view('posts.show', ['id' => $id]);
    }
    
    // Yeni gönderi formu
    public function create()
    {
        return view('posts.create');
    }
}
```

### Route'larda Controller Kullanımı

```php
<?php
// routes/web.php

use App\Http\Controllers\PostController;

Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{id}', [PostController::class, 'show']);
Route::get('/posts/create', [PostController::class, 'create']);
```

### Resource Controller (Hepsi Bir Arada)

```bash
php artisan make:controller PostController --resource
```

```php
// Tek satırda tüm CRUD route'ları
Route::resource('posts', PostController::class);

// Bu şu route'ları oluşturur:
// GET    /posts              - index   (liste)
// GET    /posts/create       - create  (form)
// POST   /posts              - store   (kaydet)
// GET    /posts/{id}         - show    (göster)
// GET    /posts/{id}/edit    - edit    (düzenle formu)
// PUT    /posts/{id}         - update  (güncelle)
// DELETE /posts/{id}         - destroy (sil)
```

---

## Views (Görünümler)

View'lar, kullanıcıya gösterilen HTML sayfalarıdır. `resources/views` klasöründe `.blade.php` uzantısıyla kaydedilir.

### Basit View Oluşturma

**resources/views/merhaba.blade.php**
```blade
<!DOCTYPE html>
<html>
<head>
    <title>Merhaba</title>
</head>
<body>
    <h1>Merhaba, Laravel!</h1>
</body>
</html>
```

```php
// Route'da kullanımı
Route::get('/merhaba', function () {
    return view('merhaba');
});
```

### View'a Veri Gönderme

```php
// Controller'da
public function show()
{
    $baslik = 'Laravel Öğreniyorum';
    $yazar = 'Ahmet Yılmaz';
    
    return view('post', [
        'baslik' => $baslik,
        'yazar' => $yazar
    ]);
    
    // Veya compact kullanarak
    return view('post', compact('baslik', 'yazar'));
}
```
**resources/views/post.blade.php**
```blade
<!DOCTYPE html>
<html>
<head>
    <title>{% raw %}{{ $baslik }}{% endraw %}</title>
</head>
<body>
    <h1>{% raw %}{{ $baslik }}{% endraw %}</h1>
    <p>Yazar: {% raw %}{{ $yazar }}{% endraw %}</p>
</body>
</html>
```


### Blade Template Engine Temelleri

```blade

{% raw %}{{-- Değişken yazdırma --}}
<h1>{{ $baslik }}</h1>

{{-- If-Else --}}
@if($sayi > 10)
    <p>Sayı 10'dan büyük</p>
@else
    <p>Sayı 10'dan küçük veya eşit</p>
@endif

{{-- Döngü --}}
@foreach($posts as $post)
    <article>
        <h2>{{ $post->title }}</h2>
        <p>{{ $post->content }}</p>
    </article>
@endforeach

{{-- Boş kontrol --}}
@forelse($posts as $post)
    <p>{{ $post->title }}</p>
@empty
    <p>Gönderi bulunamadı.</p>
@endforelse{% endraw %}
```

### Layout Kullanımı

```blade
{% raw %}{{-- resources/views/layouts/app.blade.php --}}
<!DOCTYPE html>
<html>
<head>
    <title>@yield('title', 'Blog')</title>
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <nav>
        <a href="/">Ana Sayfa</a>
        <a href="/posts">Gönderiler</a>
        <a href="/iletisim">İletişim</a>
    </nav>
    
    <main>
        @yield('content')
    </main>
    
    <footer>
        <p>&copy; 2025 Blog</p>
    </footer>
</body>
</html>{% endraw %}
```

```blade
{% raw %}{{-- resources/views/posts/index.blade.php --}}
@extends('layouts.app')

@section('title', 'Tüm Gönderiler')

@section('content')
    <h1>Blog Gönderileri</h1>
    
    @foreach($posts as $post)
        <article>
            <h2>{{ $post->title }}</h2>
            <p>{{ $post->content }}</p>
        </article>
    @endforeach
@endsection{% endraw %}
```

---

## Database (Veritabanı)

### Migration (Tablo Oluşturma)

```bash
# posts tablosu için migration oluştur
php artisan make:migration create_posts_table
```

```php
<?php
// database/migrations/2025_xx_xx_create_posts_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id(); // otomatik artan ID
            $table->string('title'); // başlık
            $table->text('content'); // içerik
            $table->boolean('published')->default(false); // yayında mı?
            $table->timestamps(); // created_at ve updated_at
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
```

```bash
# Migration'ı çalıştır (tabloyu oluştur)
php artisan migrate
```

### Kolon Tipleri

```php
$table->id();                  // Auto-increment ID
$table->string('name');        // VARCHAR
$table->string('name', 100);   // VARCHAR(100)
$table->text('description');   // TEXT
$table->integer('age');        // INTEGER
$table->boolean('active');     // BOOLEAN
$table->date('birth_date');    // DATE
$table->timestamps();          // created_at, updated_at
```

---

## Models (Modeller)

Model, veritabanı tablonuzu temsil eden PHP sınıfıdır.

### Model Oluşturma

```bash
# Basit model
php artisan make:model Post

# Migration ile birlikte
php artisan make:model Post -m
```

### Basit Model Örneği

```php
<?php
// app/Models/Post.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    // Tabloda hangi alanlar doldurulabilir
    protected $fillable = ['title', 'content', 'published'];
    
    // Veya hangilerinin doldurulması engellenmeli
    // protected $guarded = ['id'];
}
```

### Model ile Veritabanı İşlemleri

```php
use App\Models\Post;

// Yeni kayıt ekleme
$post = new Post();
$post->title = 'İlk Gönderim';
$post->content = 'Bu benim ilk blog gönderim.';
$post->save();

// Veya
$post = Post::create([
    'title' => 'İkinci Gönderim',
    'content' => 'Bu da ikinci gönderim.',
    'published' => true
]);

// Tüm kayıtları getirme
$posts = Post::all();

// Tek kayıt bulma
$post = Post::find(1); // ID'ye göre
$post = Post::where('published', true)->first();

// Güncelleme
$post = Post::find(1);
$post->title = 'Güncellenmiş Başlık';
$post->save();

// Silme
$post = Post::find(1);
$post->delete();
```

---

## CRUD İşlemleri

Bir blog sistemi için eksiksiz CRUD örneği.

### Controller

```php
<?php
// app/Http/Controllers/PostController.php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // Tüm gönderileri listele
    public function index()
    {
        $posts = Post::latest()->get(); // En yeniden eskiye
        return view('posts.index', compact('posts'));
    }
    
    // Yeni gönderi formu
    public function create()
    {
        return view('posts.create');
    }
    
    // Yeni gönderiyi kaydet
    public function store(Request $request)
    {
        // Doğrulama
        $request->validate([
            'title' => 'required|max:255',
            'content' => 'required|min:10'
        ]);
        
        // Kaydet
        Post::create($request->all());
        
        // Yönlendir
        return redirect()->route('posts.index')
            ->with('success', 'Gönderi başarıyla oluşturuldu!');
    }
    
    // Tek gönderiyi göster
    public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }
    
    // Düzenleme formu
    public function edit(Post $post)
    {
        return view('posts.edit', compact('post'));
    }
    
    // Güncelleme
    public function update(Request $request, Post $post)
    {
        $request->validate([
            'title' => 'required|max:255',
            'content' => 'required|min:10'
        ]);
        
        $post->update($request->all());
        
        return redirect()->route('posts.show', $post)
            ->with('success', 'Gönderi güncellendi!');
    }
    
    // Silme
    public function destroy(Post $post)
    {
        $post->delete();
        
        return redirect()->route('posts.index')
            ->with('success', 'Gönderi silindi!');
    }
}
```

### Routes

```php
<?php
// routes/web.php

use App\Http\Controllers\PostController;

Route::resource('posts', PostController::class);
```

### Views

```blade
{% raw %}{{-- resources/views/posts/index.blade.php --}}
@extends('layouts.app')

@section('content')
    <h1>Tüm Gönderiler</h1>
    
    <a href="{{ route('posts.create') }}">Yeni Gönderi</a>
    
    @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif
    
    @foreach($posts as $post)
        <article>
            <h2>{{ $post->title }}</h2>
            <p>{{ Str::limit($post->content, 100) }}</p>
            <a href="{{ route('posts.show', $post) }}">Oku</a>
            <a href="{{ route('posts.edit', $post) }}">Düzenle</a>
        </article>
    @endforeach
@endsection{% endraw %}
```

```blade
{% raw %}{{-- resources/views/posts/create.blade.php --}}
@extends('layouts.app')

@section('content')
    <h1>Yeni Gönderi</h1>
    
    @if($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    
    <form action="{{ route('posts.store') }}" method="POST">
        @csrf
        
        <div>
            <label>Başlık:</label>
            <input type="text" name="title" value="{{ old('title') }}" required>
        </div>
        
        <div>
            <label>İçerik:</label>
            <textarea name="content" required>{{ old('content') }}</textarea>
        </div>
        
        <div>
            <label>
                <input type="checkbox" name="published" value="1">
                Yayınla
            </label>
        </div>
        
        <button type="submit">Kaydet</button>
    </form>
@endsection{% endraw %}
```

```blade
{% raw %}{{-- resources/views/posts/edit.blade.php --}}
@extends('layouts.app')

@section('content')
    <h1>Gönderiyi Düzenle</h1>
    
    <form action="{{ route('posts.update', $post) }}" method="POST">
        @csrf
        @method('PUT')
        
        <div>
            <label>Başlık:</label>
            <input type="text" name="title" value="{{ old('title', $post->title) }}" required>
        </div>
        
        <div>
            <label>İçerik:</label>
            <textarea name="content" required>{{ old('content', $post->content) }}</textarea>
        </div>
        
        <div>
            <label>
                <input type="checkbox" name="published" value="1" 
                    {{ $post->published ? 'checked' : '' }}>
                Yayınla
            </label>
        </div>
        
        <button type="submit">Güncelle</button>
    </form>
    
    <form action="{{ route('posts.destroy', $post) }}" method="POST" 
          onsubmit="return confirm('Emin misiniz?')">
        @csrf
        @method('DELETE')
        <button type="submit">Sil</button>
    </form>
@endsection{% endraw %}
```

---

## Form İşlemleri

### CSRF Koruması

Laravel, tüm POST formlarında CSRF token gerektirir:

```blade
{% raw %}<form method="POST" action="/kaydet">
    @csrf
    <!-- form alanları -->
</form>{% endraw %}
```

### Method Spoofing

HTML formları sadece GET ve POST destekler. PUT, PATCH, DELETE için:

```blade
{% raw %}<form method="POST" action="/posts/1">
    @csrf
    @method('PUT')
    <!-- form alanları -->
</form>{% endraw %}
```

### Validation (Doğrulama)

```php
// Controller'da
public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|max:255',
        'email' => 'required|email|unique:users',
        'age' => 'required|integer|min:18',
        'content' => 'required|min:10'
    ]);
    
    // $validated verisi temizdir, kullanılabilir
}
```

### Türkçe Hata Mesajları

```php
$request->validate([
    'title' => 'required|max:255',
], [
    'title.required' => 'Başlık alanı zorunludur.',
    'title.max' => 'Başlık en fazla 255 karakter olabilir.'
]);
```

### Eski Değerleri Koruma

```blade
{% raw %}<input type="text" name="title" value="{{ old('title') }}">{% endraw %}
```

### Hataları Gösterme

```blade
{% raw %}@error('title')
    <div class="error">{{ $message }}</div>
@enderror{% endraw %}
```

---

## Kimlik Doğrulama

Laravel, kullanıcı kayıt ve giriş sistemi için hazır çözümler sunar.

### Laravel Breeze (Basit ve Hızlı)

```bash
# Breeze'i yükle
composer require laravel/breeze --dev

# Kurulum (Blade + Tailwind)
php artisan breeze:install blade

# Asset'leri derle
npm install
npm run dev

# Veritabanını hazırla
php artisan migrate
```

Bu komutlar otomatik olarak şunları ekler:

- Kayıt sayfası
- Giriş sayfası
- Şifre sıfırlama
- Email doğrulama
- Profil sayfası

### Kullanıcı Kontrolü

```php
// Controller'da
use Illuminate\Support\Facades\Auth;

// Giriş yapmış mı?
if (Auth::check()) {
    // Kullanıcı giriş yapmış
}

// Mevcut kullanıcıyı al
$user = Auth::user();
$userId = Auth::id();

// Blade'de
@auth
    <p>Hoş geldin, {% raw %}{{ Auth::user()->name }}{% endraw %}</p>
@endauth

@guest
    <a href="/login">Giriş Yap</a>
@endguest
```

### Route Koruma

```php
// Sadece giriş yapmış kullanıcılar
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::resource('posts', PostController::class);
});

// Sadece misafirler
Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'show']);
    Route::get('/register', [RegisterController::class, 'show']);
});
```

### Controller'da Auth Kullanımı

```php
public function store(Request $request)
{
    // Mevcut kullanıcının ID'si
    $userId = auth()->id();
    
    Post::create([
        'title' => $request->title,
        'content' => $request->content,
        'user_id' => $userId
    ]);
}

// Veya
public function store(Request $request)
{
    $request->user()->posts()->create([
        'title' => $request->title,
        'content' => $request->content,
    ]);
}
```

---

## Pratik İpuçları

### Artisan Komutları

```bash
# Route'ları listele
php artisan route:list

# Cache temizle
php artisan cache:clear
php artisan config:clear
php artisan view:clear

# Yardım
php artisan help migrate
php artisan list
```

### Debugging

```php
// Değişkeni dump et ve devam et
dump($degisken);

// Dump et ve dur
dd($degisken);

// Birden fazla değişken
dd($var1, $var2, $var3);
```

### .env Değişkenlerini Kullanma

```php
// .env dosyasında
APP_NAME="Blog Sitem"
ADMIN_EMAIL=admin@example.com

// Kod içinde
$appName = env('APP_NAME');
$adminEmail = env('ADMIN_EMAIL', 'varsayilan@ornek.com');
```

### String Helper'ları

```php
use Illuminate\Support\Str;

// İçeriği kısalt
Str::limit($text, 100);

// Slug oluştur
Str::slug('Laravel Öğreniyorum'); // laravel-ogreniyorum

// Rastgele string
Str::random(10);

// Büyük/küçük harf
Str::upper($text);
Str::lower($text);
Str::title($text);
```

---

## Sonuç

Bu rehber size Laravel'in temellerini öğretmek için hazırlamaya çalıştım. Öğrendiklerinizi pekiştirmek için kendi blog projenizi geliştirmeye çalışın:

1. Laravel kurulumu yapın
2. Veritabanı bağlantısını ayarlayın
3. Post modeli ve migration'ı oluşturun
4. CRUD işlemlerini tamamlayın
5. Authentication ekleyin
6. Kendi özelliklerinizi geliştirin

### Daha Fazla Öğrenmek İçin

- [Laravel Resmi Dokümantasyonu](https://laravel.com/docs)
- [Laracasts Video Eğitimleri](https://laracasts.com)