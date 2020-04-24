# Mozilla IOT Webthing Client example

This example demonstrates the connection of a websocket (ws) client to the "webthing"-server. The "webthing"-server has a websocket channel for each "thing". If a websocket subscribes to the "thing" it get's notified by a change of a "thing`s" property.

But if just one websocket connected to a "thing" and you terminate the node process with "ctrl+c" the the following error occurs:

```sh
(node:2144) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 close listeners added to [Server]. Use emitter.setMaxListeners() to increase limit
```

The process is as follows:

0.) Install the npm dependencies as follows
```sh
$ npm intsall
```

1.) Start the webthing server either via node or npm script in a terminal as follows
```
$ node index.js
OR
$ npm run server
```

2.) Start the http-server which servers the client via [http://localhost:8888](http://localhost:8888) in another terminal as follows
```
$  npm run client
```

3.) Open the browser at [http://localhost:8888](http://localhost:8888)

4.) Terminate the terminal from (1) with "ctrl+c"

5.) See the error after some seconds

6.) Close the browser (or tab) from (3) an the node process from (1) ends