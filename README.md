
# Med Cabinet Node Backend

## Schema

# API Endpoints
Deployed to Heroku: https://med-cabinet-6.herokuapp.com/

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
  "user_id": 4
}
```
---

## Users
Method | URL | Description
-------|-----|------------
GET | /api/users | Returns an array of users
GET | /api/users/:id/strains | Returns an array strains for user ID
POST | /api/users/:id/strains | Adds a strain to user ID
PUT | /api/users/:id/strains/:strain_id | Updates strain for user ID
DELETE | /api/users/:id/strains/:strain_id |  Deletes strain from user ID

---
```
GET /api/users/:id/strains
```
#### Returns
```
{
    "strain_id": 2,
    "strain": "98-White-Widow",
    "type": "hybrid",
    "rating": 4.7,
    "effects": "relaxed, aroused, creative, happy, energetic",
    "flavor": "flowery, violet, diesel",
    "description": "The ‘98 Aloha White Widow is an especially potent cut of White Widow that has grown in renown alongside Hawaiian legends like Maui Wowie and Kona Gold. This White Widow phenotype reeks of diesel and skunk and has a rich earthy taste with intermittent notes of hash. Its buds are coated in trichomes, giving its dark foliage a lustrous glint to go along with its room-filling odor. This one-hitter-quitter uplifts the mind with mind-bending euphoria that materializes in the body as airy relaxation. ‘98 Aloha White Widow is available from Pua Mana 1st Hawaiian Pakalōlō Seed Bank.",
     "user_id": 4
}
```
---
```
POST /api/users/:id/strains
```
#### Receives
```
{
   "strain": "100-Og",
   "type": "hybrid",
   "rating": 4,
   "effects": "creative, energetic, tingly, euphoric, relaxed",
   "flavor": "earthy, sweet, citrus",
   "description": "$100 OG is a 50/50 hybrid strain that packs a strong punch. The name supposedly refers to both its strength and high price when it first started showing up in Hollywood. As a plant, $100 OG tends to produce large dark green buds with few stems. Users report a strong body effect of an indica for pain relief with the more alert, cerebral feeling thanks to its sativa side."
}
```
#### Returns
```
{
    "id": 7,
    "strain": "100-Og",
    "type": "hybrid",
    "rating": 4,
    "effects": "creative, energetic, tingly, euphoric, relaxed",
    "flavor": "earthy, sweet, citrus",
    "description": "$100 OG is a 50/50 hybrid strain that packs a strong punch. The name supposedly refers to both its strength and high price when it first started showing up in Hollywood. As a plant, $100 OG tends to produce large dark green buds with few stems. Users report a strong body effect of an indica for pain relief with the more alert, cerebral feeling thanks to its sativa side.",
    "user_id": 4
}
```
---
```
PUT /api/users/:id/strains/:strain_id
```
#### Receives
```
{
   "strain": "10000-Og",
}
```
#### Returns
```
{
    "strain_id": "7",
    "message": "Strain updated"
}
```
---
```
DELETE /api/users/:id/strains/:strain_id
```
#### Returns
```
{
    "strain_id": "7",
    "message": "Strain deleted"
}
```
