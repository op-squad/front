interface FeatureProps {
  name: string;
  description: string;
}

function Feature({ name, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center w-72 gap-4 text-center">
      <div className="w-40 h-40 rounded-full bg-black flex items-center justify-center mb-4">
        <p className="text-white text-7xl font-bold">L</p>
      </div>
      <h3 className="text-black text-4xl font-bold mb-2">{name}</h3>
      <p className="font-light text-center text-lg">{description}</p>
    </div>
  );
}

export default Feature;
