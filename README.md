# Baza Leków - Aplikacja Webowa

Prosta aplikacja webowa do prezentacji danych o lekach z pliku PDF.

## Wymagania

- Python 3.8+
- pip (menedżer pakietów Pythona)

## Instalacja

1. Sklonuj repozytorium
2. Zainstaluj wymagane pakiety:
```bash
pip install -r requirements.txt
```

## Konfiguracja

1. Skopiuj plik `.env.example` do `.env`:
```bash
cp .env.example .env
```

2. Edytuj plik `.env` i ustaw odpowiednie wartości:
- `SECRET_KEY` - klucz szyfrowania sesji
- `DATABASE_URL` - URL do bazy danych
- `FLASK_ENV` - środowisko (development/production)
- `PORT` - port na którym ma działać aplikacja

## Uruchomienie w trybie developerskim

```bash
export FLASK_ENV=development
python app.py
```

## Uruchomienie w trybie produkcyjnym

1. Upewnij się, że wszystkie zmienne środowiskowe są poprawnie ustawione w pliku `.env`
2. Uruchom aplikację używając gunicorn:
```bash
gunicorn app:app
```

## Deployment

### Heroku
1. Zainstaluj Heroku CLI
2. Zaloguj się do Heroku:
```bash
heroku login
```
3. Stwórz nową aplikację:
```bash
heroku create nazwa-aplikacji
```
4. Ustaw zmienne środowiskowe:
```bash
heroku config:set SECRET_KEY=twoj-tajny-klucz
heroku config:set FLASK_ENV=production
```
5. Wypchnij kod do Heroku:
```bash
git push heroku main
```

### Własny serwer
1. Skonfiguruj serwer nginx jako reverse proxy
2. Użyj supervisord do zarządzania procesem gunicorn
3. Ustaw odpowiednie zmienne środowiskowe
4. Uruchom aplikację używając gunicorn

## Funkcjonalności

- Wyświetlanie listy wszystkich leków
- Wyszukiwanie leków po nazwie lub grupie terapeutycznej
- Wyświetlanie szczegółowych informacji o wybranym leku
- Responsywny interfejs dostosowany do urządzeń mobilnych

## Struktura projektu

- `app.py` - główny plik aplikacji Flask
- `templates/` - szablony HTML
- `requirements.txt` - lista zależności
- `Procfile` - konfiguracja dla Heroku
- `.env` - zmienne środowiskowe
- `drugs.db` - baza danych SQLite (tworzona automatycznie) 