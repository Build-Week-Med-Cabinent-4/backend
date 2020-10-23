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

describe("get users returns", () => {
    it("should return a 200 status code", async () => {
        const res = await request(server)
            .get("/api/users")
            expect(res.status).toBe(200)
    });
    
    it("should return a status code of 500 when failed to get users", async () => {
        const res = await request(server)
            .get("/api/userss")
        expect(res.status).toBe(404)
    });
});

describe("get user by id", () => {
    it("should return a 200 status code", async () => {
        const res = await request(server)
            .get("/api/users/1")
            expect(res.status).toBe(200)
    });
    
    it("should return a status code of 404 if user was not found", async () => {
        const res = await request(server)
            .get("/api/users/23")
        expect(res.status).toBe(404)
    });
});

describe("delete user", () => {
    it("should return a 200 status code", async () => {
        const res = await request(server)
            .delete("/api/users/1")
            expect(res.status).toBe(200)
    });
    
    it("should return a status code of 404 if user was not found", async () => {
        const res = await request(server)
            .delete("/api/users")
        expect(res.status).toBe(404)
    });
});


