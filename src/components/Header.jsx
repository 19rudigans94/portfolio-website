import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 p-4 shadow-md">
            <nav className="container mx-auto flex justify-center">
                <ul className="flex space-x-6 text-white text-lg">
                    <li><Link to="/" className="hover:text-gray-300 hover:underline">Главная</Link></li>
                    <li><Link to="/about" className="hover:text-gray-300 hover:underline">Обо мне</Link></li>
                    <li><Link to="/projects" className="hover:text-gray-300 hover:underline">Проекты</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-300 hover:underline">Контакты</Link></li>
                    <li><Link to="/login" className="hover:text-gray-300 hover:underline">Вход</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
