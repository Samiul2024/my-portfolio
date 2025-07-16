import samiul from '../../public/samiul.jpg';
export default function About() {

  const name=<h3 className='font-semibold text-3xl'>MD. Samiulla Hossen</h3>
  return (
    <div className="text-center p-6">
       <img
        src={samiul}
        alt="Md. Samiulla Hossen"
        className="mx-auto w-40 h-48 rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300"
      />
      <h2 className="text-3xl font-bold mb-4">Hi,</h2>
      <p>
       I'm{name} a MERN Stack Front-End Developer passionate about building fast, accessible, and beautiful web apps.
      </p>
    </div>
  );
}
