import {describe, expect, it} from '@jest/globals'
import { UserManager } from '../user-manager';
import { Request, Response } from 'express';


type TestUserSchema = {
    req: Request,
    res: Response
};

const prepUserSchema = (
    username: string,
    password: string,
    email: string
): TestUserSchema => {
    const req = {
        body: {
            username,
            password,
            email
        }
    } as Request;

    const res = { 
        json: (token: { token: string }) => {
            console.log(token);
            expect(token).toBeTruthy();
        },
        status: (code: number) => {},
        end: (cb?: () => void) => {}
    } as Response;

    return { req, res };
};

describe('basic user registration', () => {
    const { req, res } = prepUserSchema('hello', 'hi', '123@email.com');

    it('should create a new user', async () => {
        await UserManager.register(req, res, () => {});
    });

    it('should login existing user', async () => {
        await UserManager.login(req, res, () => {});
    });
});
