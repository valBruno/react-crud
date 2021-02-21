import { authenticationService } from '@/_services';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.token.token) {
        return { Authorization: `Bearer ${currentUser.token.token}` };
    } else {
        return {};
    }
}