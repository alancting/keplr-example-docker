# Keplr Example (wrapped with Docker)

## How to start
1. Start the application
  ```
  $ docker-compose build
  $ docker-compose up
  ```

## Build with webpack

### Build assets
```
$ docker exec study-keplr-example npm run build
```

### Build assets with watch
```
$ docker exec study-keplr-example npm run build-watch
```