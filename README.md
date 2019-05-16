# Сервис юридического учета.

Предназначен для выявления родственных связей участников судебных процессов.

## Инструменты

-  Django
    
-  REST Framework

-  Angular

## Установка клиента.

### Клонируем

    git clone git@github.com:zdimon/dj-loyer.git
    cd dj-loyer/ng-prj
    
### Устанавливаем зависимости.

    npm install
    sudo npm install -g @angular/cli
    
### Копируем настройки

    cp src/app/_global.ts src/app/global.ts
    
### Собираем 

    ng build --prod
    
### Старт сервера

    ./node_modules/http-server/bin/http-server dist/ng-prj
