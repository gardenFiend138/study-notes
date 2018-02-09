# What Happens When You Type 'www.google.com' into the Search Bar?

[Resource](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)

1. Type www.google.com into address bar 
  * Key down events happen to get the characters into the address bar 
  * autocomplete kicks in depending on the browser 
  * enter keydown 
  * parse URL (protocol [http], resource)
  
2. Browser checks cache for DNS (Domain Name System) record to find corresponding IP address for google.com 
  * DNS is a DB that keeps record of URL and IP address it links to 
    * IP address belongs to the machine that hosts the server
    * Websites can be reached by their IP address alone--the point of DNS is to make it easier on the user 
  * Browser queries 4 caches to locate DNS 
    1. Browser cache 
    2. OS cache 
    3. Router cache 
    4. ISP (internet service provider-every one maintains own DNS server)
      * All these caches serve to improve data transfer time
      * These queries are done recursively; each one is checked, and if ths IP address is not found, an error message is returned, which initiates the next step 
3. If the requested URL is not in any of the caches, sub-step 4 from above is queried. The ISP DNS server will contact different servers and return the matching IP address to your browser. 
  * Requests are sent in small 'packets' of data 
  
__Domain Architecture__
![Domain Architecture](https://github.com/gardenFiend138/study-notes/blob/master/web/images/domain_architecture.png)
  
4. Browser initiates TCP connection with the server at that IP address (handshake)
  * a pattern of synchronizing(SYN) and acknowledging(ACK)
    1. client sends SYN packet to ask if it's open for new connections 
    2. If the server has open ports that can accept and initiate a new connection, sends response with SYN/ACK packet 
    3. Client receives SYN/ACK packet and sends back ACK packet 
    
    * Now we have established a TCP connection between the machines 
    
5. Browser sends HTTP request to server 
  * GET request is sent for the data at www.google.com
  * could be other method (POST/PATCH/DELETE) depending on what you're doing 
  * Request also has additional information in the header, such as: 
    * User Agent header 
    * what types of requests it'll accept (Accept Header)
    * connection headers asking the server to keep the TCP connection alive for additional requests 
    
6. Server handles request and sends back a response 
  * the server contains a web server which receives the request and passes it to a request handler to read and generate a response 
    * this reads the request, its headers, and cookies to see what's being requested and if it needs to update any information on the server 
    * assembles a response in a particular format (JSON, XML, HTML, etc)

7. The server sends out an HTTP response 
  * server response contains: 
    * HTML for the web page
    * status code 
      * 100s: informational message only 
      * 200s: success 
      * 300s: redirects client to other URL 
      * 400s: indicates error on client side 
      * 500s: indicates error on server side 
    * compression type (Content-Encoding)
    * how to cache the page (Cache-Control)
    * cookies to set 
    * privacy control 
    
8. The browser displays the HTML content (for HTML responses, which is most common)
  * bare bones HTML skeleton is rendered 
  * checks HTML tags and sends GET request for additional elements needed (images, stylesheets, JS files, etc)
  * statis files cached by browser so they don't need to be refetched next time you visit the page 
  * you see the full view of google.com rendered to your browser! 