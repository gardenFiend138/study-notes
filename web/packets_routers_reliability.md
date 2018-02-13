# Packets, Routers, & Reliability

[Kahn Academy Video](https://www.khanacademy.org/computing/computer-science/internet-intro/internet-works-intro/v/the-internet-packet-routers-and-reliability)

How does information get transferred from one computer to another? 
Paths may change during one interaction 
Data sent in packets (IP packets)
Data may be received out of order 
Packets also keep track of where they came from and where they're going 
Routers 'route' the packets; keep track of paths to destination IP; having different paths keeps the network fault tolerant, adding to reliability 

How does TCP come into play with all this? 
Transmission control protocol 
TCP sends back ACK for each packet, and checks to make sure that all packets have been received 

Redundancy adds to the scalability and stability of the internet 

