Quotes UI
=========

Purpose
-------

The purpose of this simple Web application is to play around with the
[Elm programming language](http://elm-lang.org/). The back-end API is written in
[Scala](http://www.scala-lang.org/) using
[Akka HTTP](http://doc.akka.io/docs/akka/2.4/scala/http/index.html).

Overview
--------

Five quotes are displayed on the page, refreshed every few seconds.

Running
-------

The Web application runs inside an NGINX Docker container with the RESTful API inside
another container.

1. Build the Docker image: `docker build -t quotes-ui .`
2. Start the Docker container: `docker run -it -p 8080:80 --name quotes-ui quotes-ui`
3. Test it by navigating to [http://localhost:8080/](http://localhost:8080/) in
   a Web browser.
