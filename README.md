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

## npm

* create package.json

```
npm init
```

* install & create lock file

```
npm install
```

* install with lock file

```
npm ci
```

* postscript package info to packeage.json

```
npm install {packageName} --save
or
npm i {packageName} -S
```

* install package throgh path

```
npm install -g {packageName}
```

* run build(scripts tasks)

```
npm run {taskName}
ex)
npm run start
```


## MEMO
* browserify refer node_modules library. 
