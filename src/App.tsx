import colors from './colors.json';

const App = () => {
    return (
        <div className="container mx-auto p-4 bg-slate-900">
            <h1 className="text-3xl font-bold text-center mb-8">🎨 Colors</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {colors.map(color => (
                    <div key={color.hex} className="rounded-lg shadow-lg p-4 bg-slate-950">
                        <div className="w-full h-24 rounded-md mb-4" style={{ backgroundColor: `#${color.hex}` }} />
                        <h2 className="text-xl font-semibold mb-2">{color.name}</h2>
                        <h3 className="text-md font-semibold mb-4">#{color.hex}</h3>
                        <div className="space-y-4">
                            {color.comp.map(comp => (
                                <div key={comp.hex} className="flex items-center">
                                    <div className="w-10 h-10 rounded-full mr-2" style={{ backgroundColor: `#${comp.hex}` }} />
                                    <span className="text-sm font-semibold">{comp.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
