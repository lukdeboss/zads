

<details>
<summary>Lista rozwiazania</summary>
<p>If your browser supports this e<br>lement, it should allow you to expand and collapse these details.</p></details>




<button> to jest guzi </button>

<p> costam sobie tutaj jest</p>
<p > a to nie powinno byc widac </p>


1. costam na najwyszycm pozioe [linkx][1]
    1. a to na nizzmy
    1. to jeszcze nizszym
    1. a to caliem
1. asdfsdf adfsa
1. asdfasdf
    1. sadfasd


[1]: https://www.onet.pl "idmobile"

to niby jakos tam dziala ale nie prawidlowo



* implementation for July
    * Mulesoft
        * mulesoft VPC
            * NAT IP with interface to the World
            * Fortigate VPN via Equinix
            * VM1-3 boxes for mulesoft, VM approach
            * K8S cluster - K8 approach
            * MPLS - physical Equinix connection
    * Saleforce
    * Stackdriver implementation
        * native .SD.
        * Nagios integration




* task order July
    * Mulesoft architecture (Luk)
    * Fortigate monitoring via SNMP (Luk)
    * Stackdriver (Tim)


### tickets
* mulesoft implementation
    * [V2-816](https://idmobile.atlassian.net/browse/V2-816), [V2-2214](https://idmobile.atlassian.net/browse/V2-2214)
      Create CLI implementation for AMC Deploy to static VM





<br>
<br>


### end-to-end mule implementation
parent ticket [V2-816](https://idmobile.atlassian.net/browse/V2-816)
na razie tam sa 4 etapy, 2 zrobione a 2 do zrobienia

#### creating network for mulesoft
ticket [V2-1096](https://idmobile.atlassian.net/browse/V2-1096)
see gocd pipeline tf-sandobx-mule-gke



#### building end-to-end pipeline

 [V2-2214](https://idmobile.atlassian.net/browse/V2-2214)

Mehedi napisal na slacku komendy do wykonania:
anypoint-cli --username=${username} --password=${password} --environment=${environment} 

runtime-mgr standalone-application deploy ${host-name} ${app-name} "package-material/${app-name}-LATEST.zip"

<br>
<br> 
lllllllllllllllllllllllllllllllll  

. kontynuacja numerowania
jezeli numerowanie nie jest prawidlowo nalezy zrobic 4 spacje indentacji dla ogranicznikow elementu ktory przeszkadza w numerowaniu
np. 
1. coseta
```
tekst
```
1. costam
nie bedzie prawidlowo numerowal 1. 2. itd ... bo blok tekstowy to zmowydikuje
aby zadzialalo prawidlowo naelezy zrobic
1. asdf
    ```  ( 4x indentacja)
tekst
    ```
1. sadfasdfasd

teraz numerowanie powinno byc ok.



    
to sa przyklady tworzenia zageszczonych list w md    
wpisac  do procedury   



* to jest item gorne
    * to jest item 1gl
    * to jest tez ten sam
* to nastepny
    * to jest cossssss
        * to glebiej o jeden
            * to bedzie nastepne
        * a to troche wyzszy 
+ asdfsad 
    1. asdfasdf
    1. asdfasdf
    1. asdfasdf
+ asdfasdf

lit 
[dokumentacja](https://commonmark.org/help/)

1. to sobie costam pisze
1. to tez sobie pisze
    1. to asdfiasdfadf
    1. to asdfiasdfadf
1. asdfasdf

1.1. to pietro nizej

1.1. to tez nizej

1.1.1. to bardzo nizeje

1.1.1. adafdsf adf
