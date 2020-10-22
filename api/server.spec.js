const request = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');
const { expectCt } = require('helmet');
const testUser = { username: "casper", password: "boohoo"}

describe("register new user", () => {
    it("should return with status code of 201 when new user added", async () => {
        await db("user_table").truncate()
        const res = await request(server)
            .post("/api/auth/register")
            .send(testUser)
        expect(res.status).toBe(201)
    });
    it("should return a status of 500 with an invalid user", async () => {
        const res = await request(server)
            .post("/api/auth/register")
            .send({ user: "boohoo", password: "casper" })
        expect(res.status).toBe(500)
    });
});

describe("login with user", () => {
    it("should return a status code of 200 with successful login", async () => {
        const res = await request(server)
            .post("/api/auth/login")
            .send(testUser)
        expect(res.status).toBe(200)
    });
    it("should return a status code of 401 when given invalid user", async () => {
        const res = await request(server)
            .post("/api/auth/login")
            .send({ username: "test", password: "test" })
        expect(res.status).toBe(401)
    });
});