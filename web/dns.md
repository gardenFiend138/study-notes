# DNS (Domain Name System)

[DNS Resource Article](https://medium.freecodecamp.org/the-domain-name-system-dns-is-the-backbone-of-the-internet-heres-how-it-all-works-5706d0afa0fa)

__DNS__: architecture for how to pair a domain name with an IP address 

1. A user asks their browser to visit freecodecamp.com
2. The browser queries a DNS Resolver (usually their ISP) “where’s freecodecamp.com?”
3. DNS Resolver queries the Root servers (which have a big important list that keeps this information) “where is .COM?” Replies with Verisign.
4. DNS Resolver then queries Verisign — “where is freecodecamp.com?” Verisign replies with the nameservers ns1.cloudflare.com and the IP address 192.168.178.1
  * _substeps for this_:
    * query 
    * root servers 
    * TLD name server 
    * domain's name server 
    * website appears 
5. Hosting servers are queried with the IP address. “Give me the files for IP address 192.168.178.1 (please)”
6. Website files are delivered and rendered on the page so user can learn to code…or whatever they were doing.

This is all possible due to the protocols and policies that have been created. 

* IP addresses => IANA (Internet Assigned Numbers Authority)
* provides technical operations of vital DNS resources && defines policies for how the 'names and numbers' of the internet should run => ICANN (Internet Corporation for Assigned Names and Numbers) 