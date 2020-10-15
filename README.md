# Med Cabinet Node Backend

## Schema

# API Endpoints
Deployed to Heroku??:

All endpoints receive and return JSON

## Auth
Method | URL | Description
-------|-----|------------
POST | /api/auth/login | Login endpoint for registered users
POST | /api/auth/register | Register endpoint for new users

---

POST /api/auth/login

#### Receives

```
{
  "username": "username",
  "password": "password
}

```
#### Returns
```
{
  "id": 1,
  "username": "username",
  "password": "password",
  "email": "username@gmail.com",
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6IkFsaWNlIiwiZW1haWwiOiJhbGljZUBnbWFpbC5jb20iLCJyb2xlcyI6WyJTVFVERU5UIl0sImlhdCI6MTU5MjYxMTQyNSwiZXhwIjoxNTkyNjE4NjI1fQ.WsufM68xVT-DcEbfyOBFwq_VC-6Xjr5wc4-ktgO3mxo"
}
