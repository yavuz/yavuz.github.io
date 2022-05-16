---
layout: post
title:  "Bitcoin Nasıl Çalışır?"
date:   2022-02-05 02:40:44 +0300
categories: blockchain
excerpt: Blockchain Notları
image: assets/img/bitcoin_blockchain_2.jpg
tags: blockchain, bitcoin
twittersummary: summary_large_image
---

### Bitcoin nedir?

2008’de Satoshi Nakamoto isimli anonim biri veya birileri tarafından eşten eşe elektronik nakit sistemi diye teknik bir döküman yayınlanarak ortaya çıktı. Amaç merkeziyetsiz bir para birimi ortaya çıkarmaktı. 2008’de küresel bir kriz ortaya çıktıktan sonra bu fikri ortaya atıldı. Yayınlanan pdf dökümanının türkçe ve ingilizcesine aşağıdaki linklerden ulaşabilirsiniz.

- İngilizce ([https://bitcoin.org/bitcoin.pdf](https://bitcoin.org/bitcoin.pdf))
- Türkçe ([https://bctr.org/wp-content/uploads/2019/03/türkçe_bitcoin.pdf](https://bctr.org/wp-content/uploads/2019/03/t%C3%BCrk%C3%A7e_bitcoin.pdf))

Fikir Ekim 2008’de ortaya çıktan hemen sonra Ocak 2009’da çalışır ilk versiyonu yayınlandı. İlk versiyon yayınlandıktan sonra yazılan ilk bloğa “şansölye bankalar için ikinci kurtarma paketinin eşiğinde” gibi not düşüldüğü gözüküyor. Bitcoin toplam arzı 21 milyondur. Bütün bitcoin miktarı şu anlık dolaşımda değildir.

### Bitcoin Ağı

![Blocks]({{ site.images }}/bitcoin_blockchain_2.jpg){: .center-image }

Bitcoin aslında bazı çalışma prensiplerine sahip merkeziyetsiz bir blockchain ağıdır. Blockchain kriptografi kullanılarak yazılan blokların birbiri ile ilişkisinin olduğu dağıtık bir defter veya veritabanıdır diyebiliriz. Birbiri ile ilişkili bloklar sayesinde çifte harcama(double spending) sorunun önüne geçmeye çalışılmıştır.

Bitcoin ağındaki bütün işlemler bloklar haline getirilir ve daha sonra onaylanarak yazılır. Yazılabilmesi için ağdaki düğümlere ve madencilere ihtiyaç duyulmaktadır. Her blok birbiri ile ilişkilidir.

![Blocks]({{ site.images }}/bitcoin_blocks_1.jpg){: .center-image }

Bu ağın çalışma prensiplerini ve nelerden oluştuğunu tek tek açıklayalım.

### Cüzdan(Wallet)

Bitcoin gönderip, alabilmek için cüzdana ihtiyaç olmaktadır. Her cüzdanın bir adresi vardır. Herhangi birine bitcoin göndermek istediğimizde o adrese göndermemiz yeterli.

Cüzdan ağa bağlanıp işlem yapabilmek için iki anahtara ihtiyaç duyar. Bunlar birbiri ile ilişkisi olan özel anahtar(private key) ve genel anahtardır(public key). Özel anahtar rastgele karakterlerden oluşturulan şifreli bir yazıdır. Genel anahtar ise özel anahtardan türetilir. Genel anahtar dediğimiz aslında cüzdan adresimizdir. Örnek bir bitcoin adresi aşağıdaki gibidir.

[3KcTv3unnEAEbC3GoZv5F2hyj4RBqipnAt](https://www.blockchain.com/btc/address/3KcTv3unnEAEbC3GoZv5F2hyj4RBqipnAt)

Cüzdan oluşturmak isteyen kişi bunu sağlayan yazılımlarla bu sağlayabilir. Bunu isterse bu yapan bir websitesi([https://www.bitaddress.org/](https://www.bitaddress.org/)) aracılığıyla da yapabilir. Cüzdan oluşturulduktan sonra elinize özel ve genel anahtar geçer. Özel anahtarı kimseyle paylaşmamanız gerekiyor. Çünkü özel anahtar o cüzdanı kullanma yetkisi gibi düşünebilirsiniz. Genel anahtar ise başkalarıyla paylaşacağınız adresiniz.

Bu adrese bitcoin gönderildiğinde cüzdan sahibi aslında cüzdanına bir şey indirmiş olmaz. Sadece o adrese gönderilen bitcoini kullanabilme yetkisi onda olur. Birisi ona 2 bitcoin gönderdiyse ve 1 tanesini başka bir yere göndermek isterse bunu özel anahtar ile yapabilir.

### İşlemler(Transactions)

Bitcoin ağında yapılan bütün transferlere işlem(transaction) denir. Bu işlemler ağda bloklara yazılarak kaydedilir. A kullanıcısından B kullanıcına bir transfer yapılacaksa A kullanıcısı B kullanıcının genel anahtarına göndereceği tutarı yazar ve bunu bitcoin ağına gönderir. Bu işlem bitcoin ağında mempool denilen bir havuza gönderilir. Bu havuzda bekleyen işlemler vardır. Madenciler bu işlemleri sırayla değil dilerlerse kafalarına göre seçebilirler. Tabiki madenciler işlemler arasında en yüksek komisyon ücreti veren işlemleri seçmeye çalışırlar. Ortalama 2 bin tane gibi seçildikten sonra bir blok oluşturup o işlemleri o blokta onaylamaya çalışırlar.

Örnek bir işlemi görmek için buraya bakabilirsiniz.

[https://www.blockchain.com/btc/tx/8f030c01e8ec9975d757333ffb2ec98614bffa2e0f64545a0aa10f7b85ac5401](https://www.blockchain.com/btc/tx/8f030c01e8ec9975d757333ffb2ec98614bffa2e0f64545a0aa10f7b85ac5401)

### Bloklar(Blocks)

İşlemler(transactions) onaylanıp blockchaine yazılmak için bir blokta toplanır. Bunu bir defter gibi düşünebilirsiniz. İşlemler deftere yazılır. Daha sonra o defterin geçerli olabilmesi için içindeki işlemler onaylanması ve daha sonra defterin mühürlenip arşive kaldırılması gerekir. İşte burada mühürleme işlemini gerçekleştirmek için madencilere ihtiyaç duyuyoruz. Madenciler bize kısacası mühürü buluyorlar diyebiliriz. Bloklar bitcoin ağında her 10 dakika bir yazılır. Bu süre kısaltılamaz veya uzatılamaz.

Örnek bir blok incelemek için şu linkten bakabilirsiniz.

[https://www.blockchain.com/btc/block/000000000000000000032c561bcb922b0ffb4f72893295bbdea78bbc7f814a5a](https://www.blockchain.com/btc/block/000000000000000000032c561bcb922b0ffb4f72893295bbdea78bbc7f814a5a)

### Düğümler(Nodes)

![Nodes]({{ site.images }}/bitcoin_nodes_1.png){: .center-image }

Bitcoin ağı düğüm(node) adı verilen makineler mevcuttur. Bu makinelerde bitcoin core denilen yazılım çalışmaktadır.

Bu yazılımı bu [https://bitcoin.org/tr/indir](https://bitcoin.org/tr/indir) adresten indirebilirsiniz. Düğüm olarak ağa bağlanmak için şu ana kadar yazılmış bütün blokları indirmek gerekir. İndirmesi gerekilen değer şu anlık 388 GB gösteriyor. Son durum için buradan [https://www.blockchain.com/charts/blocks-size](https://www.blockchain.com/charts/blocks-size) kontrol edebilirsiniz.

Düğümler bu ağın yönetimi, bilgi akışını ve blockchain defterinin yönetimini sağlamaktadırlar. Her cüzdan veya madenciler bu ağa bağlanmak için en yakın düğüme bağlantı sağlarlar. Düğümler birbirleriyle iletişimi sel(flood) çalışma şeklinde ile sağlarlar.

Dünyadaki düğümlerin durumlarını görmek için buradan bakabilirsiniz. [https://bitnodes.io/](https://bitnodes.io/)

Düğümler için ayrıntılı bilgi => [https://bitcoin.org/en/full-node](https://bitcoin.org/en/full-node)

### Madenciler(Miners)

![Miners]({{ site.images }}/bitcoin_miners_1.jpg){: .center-image }

Onaylanması gereken blokları madenciler ürettiği bir sayı(nonce) ile onaylar. Bu sayı bulunmasına iş kanıtı(proof of work) denir. Bunun karşılığında ağdan bir ödül alırlar(block reward). Bu ödül her 4 senede bir yarıya düşer(bitcoin halving).  Şu anlık ödül her blok için 6.25 bitcoindir. Madenciler nonce değerini bulup ödülü kazandıklarında alınan ödülün herhangi bir girdisi olmaz. Bu işlemlere coinbase işlemi denir. Bloklar her 10 dakikada bir onaylandığı için 10 dakika bir ödül kazabilirler.

Dünya da iki madencininde aynı anda farklı blokları onayladıklarını ve bunu ağa bildirdiklerini varsaydığımız bir durum söz konusu olabilir. Eğer böyle bir şey olursa madenciler farklı blokları yazmaya devam edebilirler. Bu artık kendi aralarında bir yarışa sebebiyet verir. Bu yarış ortalama 6 blok kadar devam eder ve en sonunda madencinin biri bu yarışı kazanır. Kaybeden madencinin bloklarına yetim(orphan) bloklar ismi verilir ve silinmek zorunda kalır.

Madenciler blokların içindeki işlemler için komisyon ücreti kazanırlar. Blok ödülü ve komisyon ücretleri ile geçimlerini sağlarlar. Madenciler tek başlarına çalışmazlar. Artık madenci olmak isteyenler işlemci gücü ile madenci havuzu denilen gruplara dahil olurlar. Dahil oldukları gruptaki bütün makineler işlemci gücünü nonce değerini bulmak için harcarlar. Bu değer eğer sizin bulunduğuz havuzdaki makinelerden biri bulursa ödül ve komisyon ücretleri havuza gider. Bu havuzdaki makineler arasında bölüştürülür. Örnek bir havuz incelemek için [https://pool.btc.com/](https://pool.btc.com/) sitesini takip edebilirsiniz.

### Bitcoin Verileri Nasıl Yazılır?

Bitcoin ağında verileri nasıl yazıldı￼ğını anlamak için bir blockchain demosunu üstünden geçerek şu ana kadar yazdıklarımızı toparlayalım. Bu demoyu incelemek için [https://andersbrownworth.com/blockchain/distributed](https://andersbrownworth.com/blockchain/distributed) adresini ziyaret edebilirsiniz. Aşağıdaki resim verilen adresten anlatım için alınmıştır.

![Blockchain_Demo]({{ site.images }}/bitcoin_blockchain_demo.png){: .center-image }

Yukardaki görüntüde gözüktüğü üzere her bölüm bir blok oluyor. Data yazan bölümlere işlemler(transactions) eklenmesi gerekiyor. Bunlar A kullanıcısı B kullanıcısına 2 bitcoin gönderdi. C kullanıcısı D kullanıcısına 3 bitcoin gönderdi gibi veriler yazılıyor. Her işlem şifreleme sonucunda bir hash adresine sahip oluyor. Bu işlemlerin hash adresleri tek bir hash adresi oluşturacak şekilde kendi aralarında tekrar şifrelenerek devam ediyor. Buna Merkle ağacı(merkle root) deniyor.

![Merkle_Root]({{ site.images }}/bitcoin_merkle_root.png){: .center-image }

Bu işlemin sonucunda tek bir hash adresi data bölümüne yazdırılıyor. Şimdi dikkat edilmesi gereken noktalarda biri şudur. Her yeni blok bir önceki blokun hash adresini alarak bloğu kapatır. Bu özellik yüzünden blockzincir denilir. Eğer geçmiş herhangi bir bloğun verisi değiştirilirse önündeki bütün verilerin hashleri bozulmuş olacaktır.

Yukardaki demoya görüleceğe üzere bir önceki bloğunda hash adresi **prev** yazan bölümde gözüküyor. Şimdi madencilerin tam olarak ne yaptığını anlayacağız. Madencilere verilen görev şudur. Bu bloğu şifreleyip mühürleyeceğiz. Şifrelediğimde ortaya çıkacak hash adresinde örneğin 6 tane sıfır ile başlamalı. Bunu yapabilmek için şifrelenecek bütün veri ile **nonce** değeri şifrelendiğinde bunu yapabilirsin. Madenci bütün veriyi alır daha sonra nonce değerini türeterek hash değerini bulmaya çalışır. Eğer istenilen hash değerinin önündeki sıfır sayısı ne kadar çoksa bu değeri yakalamak o kadar zordur. Buna madencilerin zorluk derecesi denir. Madenciler bu rakamı bulduktan sonra en yakındaki düğüme ben bunu buldum diye bilgi verir. Düğüm bunu onayladıktan sonra en yakınındaki düğüme bilgi verir ve bütün ağ bu bilgiyi kabul edip yeni bloğu yazarlar. İşte bir blok böyle yazılır.

**Not:** Yazı güncellenmeye devam edilecektir.