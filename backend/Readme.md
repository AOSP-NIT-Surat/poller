## BACKEND API ENDPOINTS

 * Register End Point

    **Request Type** - POST

    **/api/user/register** - To register a new user.

    While making the post request to register user use the format 
    ``` 
    {
    "name":"NameOfThePerson",
    "email":"EmailofThePerson",
    "password":"PasswordProvided"
    }
    ```
    On successfull Registration it returns a status of 200 with a message **"Successfully Registered User!"**

    <br />

 * Login End Point
    
    **Request Type** - POST

    **/api/user/login** - To Login a new user.

    While making the post request to login use the format 
    ``` 
    {
    "email":"EmailofThePerson",
    "password":"PasswordProvided"
    }
    ```
    On successfull Login it returns the JWT token. **"Successfully Registered User!"**

<br />

### Token Verified

If some private routes are declared,i.e, they can only be used by the users that are logged in then add the middleware using the file **VerifyToken.js**. It uses the JWT token while verifying so please so to it that the token is provided.


