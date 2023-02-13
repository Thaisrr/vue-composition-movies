import {getToken} from "@/helpers/Authentication";

export const TokenInterceptor = (request) => {
    const token = getToken();
    if(!token) return request;
    const req = request.clone();
    req.headers.set('Authorization', `Bearer ${token}` );
    return req;
};
