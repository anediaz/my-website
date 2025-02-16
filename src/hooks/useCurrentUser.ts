import { generateUsername } from "unique-username-generator";
import { v4 as uuidV4 } from 'uuid';
import { useEffect } from 'react';
import { useLocalStorage } from "./useLocalStorage";

const CURRENT_USER_STORAGE_KEY = 'currentUser';


export const useCurrentUser = () => {
    const rumUser = window.DD_RUM.getUser();
    const [localStorageUser, setLocalStorageUser] = useLocalStorage(CURRENT_USER_STORAGE_KEY, null);

    // Handle user details in RUM
    useEffect(() => {
        if (!rumUser.id) {
            if (!localStorageUser) {
                const name = generateUsername("-");
                const newUser = {
                    id: uuidV4(),
                    name,
                    email: `${name}@email.com`
                }
                setLocalStorageUser(newUser)
                window.DD_RUM.setUser(newUser);
            }
            else {
                window.DD_RUM.setUser(localStorageUser);
            }
        }
        else {
            if (!localStorageUser) {
                window.DD_RUM.setUser(rumUser);
            }
        }
    }, []);
}