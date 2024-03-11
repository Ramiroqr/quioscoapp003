import { useRouter } from "next/router";

const pasos = [
    { paso: 1, nombre: "Menú", url: "/"},
    { paso: 2, nombre: "Resumen", url: "/resumen"},
    { paso: 3, nombre: "Datos y Total", url: "/total "}
];

const Pasos = () => {
    const router = useRouter();

  return (
    <>
        <div className="flex justify-between mb-5">
            {pasos.map(paso =>(
                <button 
                    className="text-2xl font-bold bg-indigo-600 hover:bg-indigo-800 text-white px-7 py-2 rounded"
                    key={paso.paso}
                    onClick={() => router.push(paso.url)}
                >
                    {paso.nombre}
                </button>
            ))}
        </div>
    </>
  )
}

export default Pasos;