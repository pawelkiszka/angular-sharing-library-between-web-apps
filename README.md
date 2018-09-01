## Angular - one library used by 4 different web apps - example of polymorphism

Description: 
Common-lib is a library shared between 4 different web projects (for the needs of this tutorial, named webApp1, webApp2, 
webApp3 and webApp4). 

What common library does - it provides authentication service and user context service, but each of them only in one,
default version. What's most important - user context service has dependency of authentication service (it receives 
authentication service in constructor), so user context service can't live without authentication service.
Some web apps want to use the default versions of services, but others would like to use eg. use only default version of 
user context service, and implementation of default authentication service .

How the needs of each web app look like:
1) WebApp1:
- would like to use default user context service
- is happy with default authentication service
2) WebApp2:
- would like to use different user context service, default one does not suit it needs at all
- is happy with default authentication service
3) WebApp3:
- would like to use default user context service
- default authentication service does not suit it needs at all, it would like to use different implementation
4) WebApp4:
- likes default user context service, but there are small bits missing - so it uses composition pattern to create it's own
implementation
- likes also default authentication service, but there are also small bits missing - as with user context service, this 
web app is using composition to overcome this problem 

Implementation shows how the problem was solved using polymorphism and InjectionTokens

### How to run examples:
- `npm install`
- `npm run serve-all`

To access each webapp, go to:
- `localhost:4201` to access webApp1
- `localhost:4202` to access webApp2
- `localhost:4203` to access webApp3
- `localhost:4204` to access webApp4
