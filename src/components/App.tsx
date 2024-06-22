import { ColorDropper } from './ColorDropper/ColorDropper';

export const App: React.FC = () => {
    return (
        <div className="app">
            <ColorDropper />
        </div>
    );
};

App.displayName = 'App';