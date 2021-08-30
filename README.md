<p align="center">
  
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Apache_kafka.png/64px-Apache_kafka.png" alt="kafka">
  
<img src="https://www.instana.com/media/01_INSTANA_IconSet_Rabbit.svg" alt="rabbitMQ" width="26%" height="120px">
    
<img src="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png" alt="Docker" width="20%" height="120px">
</p>

<h3 align="center"KAFKA & RabbitMQ Micro-Services Integration - NodeJS</h3>

<div align="right">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div> 

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#author)

<br>

## 🧐 About <a name = "about"></a>

* Purpose of this project was build a micro-services integration to learn use KAFKA and RabbitMQ with nodeJS, user do request to theoretically get a certificate, kafka producer sends a message to kafka consumer, it generate the certified and return it, kafka consumer also send a message to RabbitMQ queue with certified information which is consumed and a email theoretically is sended warning user his certificate is ready!
<br>
<br>

<hr>
<br>

## 🏁 Getting Started <a name = "getting_started"></a>
<br>

### Installing
```
git clone https://github.com/NathanCotrim/Kafka-RabbitmQ-NodeJS.git
```

or - (GitHub CLI)

```
gh repo clone NathanCotrim/Kafka-RabbitmQ-NodeJS
```
<br>

## Unix OS:
if you have not one of these dependencies: nodeJS, docker and docker-compose, execute install.sh shell script:
```
sh _install.sh 
``` 

<br>

## 🎈 Usage <a name="usage"></a> 
<br>

### Running
with all dependencies already, execute _run.sh shell script:
```
sh _run.sh
```
All Micro-Services will execute in background, to stop they just press C^!

<br>

This command up all containers, to stop they execute: 
```
sudo docker-compose down
```

and rebuilt with:
```
sudo docker-compose up -d
```

<br>
<hr>
<br>

### To do the request:
```
curl http://localhost:3000/certificate -X POST
```
<br>
<hr>
<br>

### You can manage KAFKA and RabbitMQ at:

<br>

#### RabbitMQ:
```
http://localhost:15672/
```

<br>

#### Username = admin
#### Password = admin

<br>
<hr>
<br>

#### KAFKA:

```
http://localhost:19000/
```

<br>
<hr>
<br>


#### OBS: After you run, a file named nohup.out will be created at api folder, in there all api logs will appear!
<img src="https://raw.githubusercontent.com/NathanCotrim/Kafka-RabbitmQ-NodeJS/assets/Screenshot%20from%202021-08-04%2008-36-08.png" alt="Project logo"></a>

<br>
<hr>
<br>

#### If RabbitMQ queue do not auto create, you can do it at 'http://localhost:15672/':
<img src="https://raw.githubusercontent.com/NathanCotrim/Kafka-RabbitmQ-NodeJS/assets/Screenshot.png" width="100%" alt="Project logo"></a>

<hr>

<img src="https://raw.githubusercontent.com/NathanCotrim/Kafka-RabbitmQ-NodeJS/assets/Screenshot%20(1).png" width="100%" alt="Project logo"></a>

<hr>

<img src="https://raw.githubusercontent.com/NathanCotrim/Kafka-RabbitmQ-NodeJS/assets/Screenshot%20(2).png" width="100%" alt="Project logo"></a>

<br>
<hr>
<br>

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Docker](https://www.docker.com/) - Containers 
- [Docker-Compose](https://docs.docker.com/compose/) - Containers-Group 

<br>

## ✍️ Author - <a name = "author">Nathan Cotrim - MIT License</a>

