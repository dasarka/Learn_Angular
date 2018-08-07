import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(
    backend: MockBackend, 
    options: BaseRequestOptions) {
    
  let auth_db =[
    {
      email:'das@domain.com',
      password:'1234',
      admin: true,
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFya2EgRGFzIiwiYWRtaW4iOnRydWV9.sq_vDL4a_HdZjUloqgfuolOlemqKmnCtfqeZZLNfhOc'
    },
    {
      email:'chitrak@domain.com',
      password:'1234',
      admin:false,
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkyIiwibmFtZSI6IkNIaXRyYWsiLCJhZG1pbiI6ZmFsc2V9.Z5RW9zmwA1DpQiS6U2RIYRWiuLCsCKZU24jK0KZtvIU'
    },
    {
      email:'indra@domain.com',
      password:'1234',
      admin:false,
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkzIiwibmFtZSI6IkluZHJhIiwiYWRtaW4iOmZhbHNlfQ.PVhvlsLshxK2byuaMuuB_ZxVZWBTqTFwATMW2flZfhg'
    },
  ];

  

  backend.connections.subscribe((connection: MockConnection) => {
    // We are using the setTimeout() function to simulate an 
    // asynchronous call to the server that takes 1 second. 
    setTimeout(() => {
      //
      // Fake implementation of /api/authenticate
      //
      if (connection.request.url.endsWith('/api/authenticate') &&
        connection.request.method === RequestMethod.Post) {
        let body = JSON.parse(connection.request.getBody());
        let authStatus=false;
        let token:string;
        for(let index=0; index< auth_db.length; index++){
          if (body.email === auth_db[index].email && body.password === auth_db[index].password) {
            token=auth_db[index].token;
            authStatus=true;
            break;
          }else{
            authStatus=false;
          }
        }
        if (authStatus) {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: { token: token }
           })));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200 })
          ));
        }
      }



       // 
       // Fake implementation of /api/orders
       //
       if (connection.request.url.endsWith('/api/orders') && 
           connection.request.method === RequestMethod.Get) {
          let validRequest=false;  
          let headerVal= connection.request.headers.get('Authorization');
        for(let index=0; index< auth_db.length; index++){
          if (headerVal === 'Bearer ' + auth_db[index].token) {
            validRequest= (auth_db[index].admin) ? true : false;
            break;
          }else{
            validRequest=false;
          }
        }

         if (validRequest) {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200, body: [1, 2, 3] })
         ));
       } else {
           connection.mockRespond(new Response(
             new ResponseOptions({ status: 401 })
           ));
       }
    }



    }, 1000);
  });

  return new Http(backend, options);
}

export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};