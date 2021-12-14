import api from '../../services/api';
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = localStorage.getItem('u');

    if (!json) {
        return null;
    }

    const user = JSON.parse(json);

    return user ?? null;
}

export async function LoginRequest(login: string, password: string) {
    try {
        const request = await api.post('/auth', { login, password });
        return request.data;
    } catch (error) {
        return null;
    }
}

export async function Logged() {
    const json = localStorage.getItem('u');
    if (!json) {
        return null;
    }

    const user = JSON.parse(json);

    if (user) {
        try {
            const request = await api.get('/user/' + user.id, user.token);
            // console.log(request.data)

            return request.data;
        } catch (error) {
            return null;
        }
    }
}

export async function getColumns() {
    const json = localStorage.getItem('u');
    if (!json) {
        return null;
    }

    const user = JSON.parse(json);

    if (user) {
        try {
            const request = await api.get('/columns/' + user.id, user.token);
            // console.log(request.data)

            return request.data;
        } catch (error) {
            return null;
        }
    }
    return null;
}

export async function editCard(title: string, description: string, tags: string, priority: string, cardId: string) {
    const json = localStorage.getItem('u');
    if (!json) {
        return null;
    }

    const user = JSON.parse(json);

    if (user) {
        try {
            const request = await api.put('/card/' + cardId, { title: title, description: description, tags: tags, priority: priority }, user.token,);
            return request.data;
        } catch (error) {
            return null;
        }
    }
    return null;
}

export async function deleteColumn(columnId: string) {
    const json = localStorage.getItem('u');
    if (!json) {
        return null;
    }

    const user = JSON.parse(json);

    if (user) {
        try {
            const request = await api.delete('/column/' + columnId, user.token,);
            return request.data;
        } catch (error) {
            return null;
        }
    }
    return null;
}

export async function createColumn(title: string) {
    const json = localStorage.getItem('u');
    if (!json) {
        return null;
    }

    const user = JSON.parse(json);

    if (user) {
        try {
            const request = await api.post('/column', { title: title, userId: user.id }, user.token,);
            return request.data;
        } catch (error) {
            return null;
        }
    }
    return null;
}

export async function editColumn(title: string, columnId: string) {
    const json = localStorage.getItem('u');
    if (!json) {
        return null;
    }

    const user = JSON.parse(json);

    if (user) {
        try {
            const request = await api.put('/column/' + columnId, { title: title }, user.token,);
            return request.data;
        } catch (error) {
            return null;
        }
    }
    return null;
}

export async function deleteCard(cardId: string) {
    const json = localStorage.getItem('u');
    if (!json) {
        return null;
    }

    const user = JSON.parse(json);

    if (user) {
        try {
            const request = await api.delete('/card/' + cardId, user.token,);
            return request.data;
        } catch (error) {
            return null;
        }
    }
    return null;
}

export async function createCard(title: string, description: string, tags: string, priority: string, columnId: string) {
    const json = localStorage.getItem('u');
    if (!json) {
        return null;
    }

    const user = JSON.parse(json);

    if (user) {
        try {
            const request = await api.post('/card', { title: title, description: description, tags: tags, priority: priority, columnId: columnId }, user.token,);
            return request.data;
        } catch (error) {
            return null;
        }
    }
    return null;
}