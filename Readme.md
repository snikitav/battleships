Battleships Under Construction

for typescript:

- npm install -g typescript

- then tsc file.ts

gulp makes typescript
make makes typescript

sudo add-apt-repository ppa:fkrull/deadsnakes

sudo apt-get update

sudo apt-get install python3.5

sudo apt-get install python3-pip

sudo pip3 install virtualenv

at root dir:
virtualenv --no-site-packages --distribute -p /usr/bin/python3.5 --prompt="(<project_name>)" <venv_name>

source venv/bin/activate

pip3 install aiohttp

sudo apt-get install gunicorn

gunicorn simple:my_web_app --bind localhost:8080 --worker-class aiohttp.worker.GunicornWebWorker

ngnix

server {
    listen 80;
    server_name battleships.local;
    # root /home/vagrant/battleships/front;
    # index index.html index.htm;

    location / {
        proxy_pass         http://127.0.0.1:8080;
         proxy_redirect     off;
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Host $server_name;
    }

    location /ws {
        proxy_pass http://127.0.0.1:8080/ws;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        }
    }
