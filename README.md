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
```
POST /api/auth/login
```
#### Receives

```
{
  "username": "username",
  "password": "password"
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
```
---
```
POST /api/auth/register
```
#### Receives

```
{
  "username": "username",
  "password": "password",
  "email": "username@gmail.com",
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
```
---
## Strains
Method | URL | Description
-------|-----|------------
GET | /api/strains | Returns an array of cannabis strains
PATCH | /api/strains/:id/save | Saves a cannabis strain to user profile
PATCH | /api/strains/:id/release | Deletes a saved cannabis strain from user profile

---
```
GET /api/strains
```
#### Returns
```
{
  "id": 1, 
  "strain": '100-Og', 
  "type": 'hybrid', 
  "rating": 4.0, 
  "effects": 'creative, energetic, tingly, euphoric, relaxed', 
  "flavor": 'earthy, sweet, citrus', 
  "description": '$100 OG is a 50/50 hybrid strain that packs a strong punch. The name supposedly refers to both its strength and high price when it first started showing up       in Hollywood. As a plant, $100 OG tends to produce large dark green buds with few stems. Users report a strong body effect of an indica for pain relief with the more         alert, cerebral feeling thanks to its sativa side.'
}
```
