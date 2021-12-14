import { useAuth } from "../context/AuthProvider/useAuth"

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth();

    if (!auth.login) {
        return <h1>Você precisa estar logado.</h1>
    }

    return children;
};