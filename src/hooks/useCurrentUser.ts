import { generateUsername } from "unique-username-generator";
import { useEffect } from 'react';
import { useLocalStorage } from "./useLocalStorage";

const CURRENT_USER_STORAGE_KEY = 'currentUser';

export const useCurrentUser = () => {
    const [localStorageUser, setLocalStorageUser] = useLocalStorage(CURRENT_USER_STORAGE_KEY, null);

    useEffect(() => {
        if (!localStorageUser) {
            const name = generateUsername("-");
            const newUser = { id: crypto.randomUUID(), name, email: `${name}@anon.com` };
            setLocalStorageUser(newUser);
            window.DD_RUM?.setUser(newUser);
        } else {
            window.DD_RUM?.setUser(localStorageUser);
        }
    }, []);
};
