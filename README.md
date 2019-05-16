# Сервис юридического учета.

Предназначен для выявления родственных связей участников судебных процессов.

## Установка клиента.

### Клонируем

    git clone git@github.com:zdimon/dj-loyer.git
    cd dj-loyer/ng-prj
    
### Устанавливаем зависимости.

    npm install
    
### Копируем настройки

    cp src/app/_global.ts src/app/global.ts
    
### Собираем 

    ng build --prod
    
### Старт сервера

    ./node_modules/http-server/bin/http-server dist/ng-prj
