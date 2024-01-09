import AddTodo from './components/AddTodo';
import ThemeToggleButton from './components/ThemeToggleButton';
import Todos from './components/Todos';

function App() {
  return (
    <div className="w-full my-32">
      <div className="flex-center">
        <h1 className="text-xl mt-2 mb-2">Theme Toggler</h1>
        <ThemeToggleButton />
        <h2 className="text-xl mt-2 mb-2">Welcome to Todo App</h2>
        <AddTodo />
        <Todos />
      </div>
      <footer>
        <p className="text-center mt-16">
          Made with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>{' '}
          by{' Abhishek Dixit'}
        </p>
      </footer>
    </div>
  );
}

export default App;
