# Geliştirici Rehberi

## Paket Sürümünü Yükseltme ve Yayınlama

### 1. Sürüm Yükseltme
```bash
# package.json dosyasındaki versiyonu güncelle
npm version patch  # küçük düzeltmeler için (1.0.9 -> 1.0.10)
# veya
npm version minor  # yeni özellikler için (1.0.9 -> 1.1.0)
# veya
npm version major  # büyük değişiklikler için (1.0.9 -> 2.0.0)
```

### 2. Build İşlemi
```bash
# Gerekli paketleri yükle
npm install

# Projeyi build et
npm run build
```

### 3. NPM'de Yayınlama
```bash
# NPM'e giriş yap
npm login

# Paketi yayınla
npm publish
```

### 4. GitHub'a Push
```bash
# Değişiklikleri stage'le
git add .

# Commit oluştur
git commit -m "v{VERSION}: Değişiklik açıklaması"

# Tag oluştur
git tag v{VERSION}

# Değişiklikleri ve tag'i push'la
git push origin main
git push origin v{VERSION}
```

## Önemli Notlar

1. Sürüm yükseltmeden önce tüm değişikliklerin test edildiğinden emin olun.
2. `package.json` ve `package-lock.json` dosyalarındaki sürüm numaralarının eşleştiğinden emin olun.
3. Her yeni sürüm için CHANGELOG.md dosyasını güncelleyin.
4. GitHub'a push yapmadan önce local branch'inizin güncel olduğundan emin olun.

## Örnek İş Akışı

```bash
# 1. Local branch'i güncelle
git pull origin main

# 2. Sürümü yükselt
npm version patch

# 3. Build al
npm run build

# 4. Test et
# ... testleri çalıştır ...

# 5. NPM'de yayınla
npm publish

# 6. GitHub'a push
git push origin main
git push origin v1.0.10  # Örnek versiyon
``` 