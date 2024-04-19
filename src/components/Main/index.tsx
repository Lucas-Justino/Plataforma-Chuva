import { FaDownload } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { SiDoi } from "react-icons/si";
import Video from "../CardVideo";

const Main = () => {
    return (
        <div>
            <div className="bg-white h-20 flex justify-between pt-2">
                <div className="p-4">
                    <span className="text-orange-500 font-bold">
                        Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP
                    </span>
                </div>
                <div className="bg-white w-96 flex-col">
                    <div className="flex justify-around mr-2">
                        <button className="btn border-none bg-orange-500 w-40">
                            <FaDownload color="white" size={20} />
                            <span className="text-white">
                                Download
                            </span>
                        </button>
                        <button className="btn border-none bg-orange-500 w-24">
                            <IoMdStar color="white" size={30} />
                        </button>
                        <button className="btn border-none bg-orange-500 w-24">
                            <SiDoi size={30} color="white" />
                        </button>
                    </div>
                    <div className="bg-white w-96 flex justify-center items-center">
                        <span className="text-orange-400 font-semibold text-lg">
                            COMO CITAR ESSE TRABALHO?
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-4 h-px120 flex justify-around">
                <div className="bg-white h-full w-3/5 p-4">
                    <Video />
                </div>
                <div className="bg-white h-full border border-gray-200 w-80">
                    <div className="flex-col">
                        <div className="bg-orange-100 h-16 w-full">
                            <p className="font-bold text-xl p-4 text-slate-800 border border-gray-300 shadow-md">   
                                Detalhes
                            </p>
                        </div>
                        <div className="text-slate-800 p-4">
                            <div className="mb-5">
                                <span>
                                    Tipo de Apresentação:
                                </span>
                                <span className="font-semibold">
                                    Pôster
                                </span>
                                <br />
                                <span>
                                    Eixo temático:
                                </span>
                                <span className="font-semibold">
                                    Alimentação e saúde (AS)
                                </span>
                                <br />
                                <span>
                                    Palavras-chaves:
                                </span>
                                <span className="font-semibold">
                                    Alimentos funcionais, alimentação escolar.
                                </span>
                                <br />
                            </div>
                            <div>
                                <p className="font-semibold">
                                    Autores:
                                </p>
                                <p>
                                    Galileo Galilei¹
                                </p>
                                <p>
                                    Berta Lange de Morretes²
                                </p>
                                <p>
                                    Isaac Newton³
                                </p>
                                <p>
                                    Cesar Lattes¹
                                </p>
                                <p>
                                    Stephen Hawking⁴
                                </p>
                            </div>
                            <div className="mt-6">
                                <p>
                                ¹Universidade Estadual de Campinas
                                </p>
                                <p>
                                ²Universidade de São Paulo
                                </p>
                                <p>
                                ³Instituto Nacional de Pesquisas Espaciais
                                </p>
                                <p>
                                ⁴Universidade Federal do Rio de Janeiro
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;