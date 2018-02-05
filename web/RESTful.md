# RESTful APIs 
[Reference Article](https://codewords.recurse.com/issues/five/what-restful-actually-means)

### Key Words:
  * __REST__: Representational State Transfer; 'set of design principles for making network communication more scalable and flexible'
  * __server__: computer that has resources of interest
  * __client__: computer that wants to interact with the resources stored on the server 
    * example: browsing the web; own computer acts as client and sends HTTP request to server to access and manipulate information
  
  REST was coined in 2000 by Roy T. Fielding in *Architectural Styles and ther Design of Network-based Software*. This is not a protocol, but rather a set of principles related to networks.
  
#### Constraints 
* __Client-server__: network must be made up of clients and servers; even if clients and servers act like one another sometimes, REST requires this client-server relationship
  * in contrast to REST, event-based integration architecture
    * no 1:1 communication, only broadcasting and 'eavsdropping'
* __stateless__: servers and clients do not ened to keep track of each other's state; when not interacting, they do no know the other exists; each request is treated as a standalone event;

* __uniform interface__: common language betwen servers and clients; allows for modularity without breaking entire system; achieved through 4 sub-constraints:
  * *identification of resources*: must be a stable identifier across interactions; for the web, we use URIs to identify resources, and HTTP as the commuication protocol
    1. type something into address bar (HTTP GET request) to the URI that identifies that resource
    2. Receive response (200 means OK)
    3. if 200, then receive HTML document, and render document
  * *manipulation of resources through representations*: server has full control of resources, and is responsible for making changes; server takes requet as suggestion, but has ultimate control; usually as JSON object
  * *self-descriptive messages*: message that contains all the information needed for the recipient to understand it
    * Example: 
      * type something in search bar; browser sends HTTP request to server 
      `GET / HTTP/1.1 
      Host: www.example.com`
      * server sends back response with header, body, etc.
      `HTTP/1.1 200 OK
      Content-Type: text/html

      <!DOCTYPE html>
      <html>
        <head>
          <title>Home Page</title>
        </head>
        </body>
          <div>Hello World!</div>
          <a href= “http://www.recurse.com”> Check out the Recurse Center! </a>
          <img src="awesome-pic.jpg">
        </body>
      </html>`
  * *hypermedia*: data sent from the server to the client informing the client what they can do next
    * example: `<a href= “http://www.recurse.com”> Check out the Recurse Center! </a>`tells the client that if the user clicks the `a` tag, make a GET request to the specified URL 
    
* __Other Fielding Constraints__
  * *caching*: server responses should either be cacheable or non-cacheable
    * caching is when client stores previous responses received from server 
  * *layered systems*: can be more components other than just servers and clients
    * i.e.: proxies (helpful for load balancing and security checks), gateways (translates HTTP request into another protocol, propegates the request, and translates back to HTTP--useful if you need to make request from different type of server)
  * *code on demand*: only optional constraint; server may send executable code back to client (i.e.: <script> tag; fetches JS code, and runs on client machine)
  
## Summary
A RESTful system is meant to be flexible for different use cases, scalable to accommodate a large number of users and components, and adaptable over time.

Additional Resources:
[The RESTful Cookbook](http://restcookbook.com/)
[Book: RESTful Web APIs](http://restfulwebapis.org/)
[Roy T. Fielding’s Personal Blog](http://roy.gbiv.com/untangled/)
[Difference between URL and URI](https://danielmiessler.com/study/url_vs_uri/)