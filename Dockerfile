# 1. Base image
FROM node:20-bullseye

# 2. Çalışma dizini oluştur
WORKDIR /app

# 3. Bağımlılık dosyalarını kopyala ve yükle
COPY package*.json ./
RUN npm install

# 4. Uygulama dosyalarını kopyala
COPY . .

# 5. Vite dev server için dışa açılan port
EXPOSE 5173

# 6. Vite geliştirme sunucusunu başlat
CMD ["npm", "run", "dev", "--", "--host"]