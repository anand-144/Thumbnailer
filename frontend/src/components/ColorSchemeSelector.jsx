import { colorSchemes } from "../assets/assets";

const ColorSchemeSelector = ({ value, onChange }) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-zinc-500">
        Color Scheme
      </label>

      <div className="grid grid-cols-6 gap-3">
        {colorSchemes.map((scheme) => (
          <button
            key={scheme.id}
            type="button"
            onClick={() => onChange(scheme.id)}
            title={scheme.name}
            className={`relative rounded-lg transition-all ${
              value === scheme.id ? "ring-4 ring-rose-500" : ""
            }`}
          >
            <div className="flex h-10 rounded-lg overflow-hidden">
              {scheme.colors.map((color, i) => (
                <div
                  key={i}
                  className="flex-1"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </button>
        ))}
      </div>

      <p className="text-xs text-zinc-400">
        Selected:{" "}
        {colorSchemes.find((s) => s.id === value)?.name || "None"}
      </p>
    </div>
  );
};

export default ColorSchemeSelector;
