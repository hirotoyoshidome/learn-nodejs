## install

```
sudo apt install -y nodejs npm
sudo npm install n -g
sudo n stable
sudo apt purge -y nodejs npm
exec $SHELL -l
node -v
```

## exec

```
node server.js
```

```
http://localhost:3000/
```

## docker

```
docker build -t my_node:latest .
docker run --rm -it my_node:latest /bin/sh
node server.js
```
