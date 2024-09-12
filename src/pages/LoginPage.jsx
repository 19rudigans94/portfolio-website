import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const { login, isAuthenticated, logout } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Простейшая проверка полей
        if (username === 'admin' && password === 'password') {
            login();
            setError('');
        } else {
            setError('Неверный логин или пароль');
        }
    };

    if (isAuthenticated) {
        return (
            <div className="container mx-auto my-8">
                <h1 className="text-2xl font-bold mb-4">Вы уже вошли в систему</h1>
                <button
                    onClick={logout}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                    Выйти
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-2xl font-bold mb-4">Вход в систему</h1>

            {error && <p className="text-red-600 mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                    <label htmlFor="username" className="block mb-2 text-lg">Логин</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        placeholder="Введите логин"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block mb-2 text-lg">Пароль</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        placeholder="Введите пароль"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Войти
                </button>
            </form>
        </div>
    );
};

export default LoginPage;