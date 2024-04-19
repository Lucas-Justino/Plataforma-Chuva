import Icone1 from "../Icone1";
import Icone2 from "../Icone2";
import Icone3 from "../Icone3";
import { IoMdAdd } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";



const Resume = () => {
    return (
        <div className="p-4">
            <div className="collapse bg-white">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title text-xl font-medium bg-orange-100 rounded-none text-black">
                    Resumo
                </div>
                <div className="collapse-content text-black m-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione corporis id dolore incidunt ducimus eos sunt facilis tenetur neque, autem tempora pariatur molestias deleniti ex, error ut eius veniam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione corporis id dolore incidunt ducimus eos sunt facilis tenetur neque, autem tempora pariatur molestias deleniti ex, error ut eius veniam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione corporis id dolore incidunt ducimus eos sunt facilis tenetur neque, autem tempora pariatur molestias deleniti ex, error ut eius veniam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione corporis id dolore incidunt ducimus eos sunt facilis tenetur neque, autem tempora pariatur molestias deleniti ex, error ut eius veniam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione corporis id dolore incidunt ducimus eos sunt facilis tenetur neque, autem tempora pariatur molestias deleniti ex, error ut eius veniam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione corporis id dolore incidunt ducimus eos sunt facilis tenetur neque, autem tempora pariatur molestias deleniti ex, error ut eius veniam.</p>
                </div>
            </div>
            <div className="collapse bg-white">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium bg-orange-100 rounded-none text-black">
                    Discussões
                </div>
                <div className="collapse-content text-black m-4">
                    <div className="flex justify-center text-orange-500 font-bold text-xl">
                        Compartilhe suas ideias ou dúvidas com os autores!
                    </div>
                    <div className="mt-10 flex justify-center gap-12">
                        <div>
                            <Icone1 />
                        </div>
                        <div>
                            <Icone2 />
                        </div>
                        <div>
                            <Icone3 />
                        </div>
                    </div>
                    <div className="flex justify-center text-black m-4">
                        Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!
                    </div>
                    <div className="flex justify-center m-4">
                        <button className="btn bg-orange-500 text-white">
                            <IoMdAdd color="white" size={30} />
                            Criar Tópico
                        </button>
                    </div>
                    <div className="border border-gray-300 shadow-md p-4">
                        <p className="text-orange-500 font-semibold">
                            Assunto da pergunta aparece aqui
                        </p>
                        <p className="font-semibold text-sm mt-3">
                            Carlos Henrique Santos
                        </p>
                        <p className="mt-3">
                            Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...
                        </p>
                        <div className="flex justify-start gap-5">
                            <button>
                                <IoMdMore color="orange" size={40} />
                            </button>
                            <button className="bg-orange-400 w-10 h-6 mt-2 flex justify-center items-center">
                                <FaHeart color="white" />
                            </button>
                            <span className="flex justify-center items-center">
                                1 like
                            </span>
                            <span className="flex justify-center items-center">
                                1 resposta
                            </span>
                        </div>
                    </div>
                    <div className="border border-gray-300 shadow-md p-4 mt-6">
                        <p className="text-orange-500 font-semibold">
                            Assunto da pergunta aparece aqui
                        </p>
                        <p className="font-semibold text-sm mt-3">
                            Carlos Henrique Santos
                        </p>
                        <p className="mt-3">
                            Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...
                        </p>
                        <div className="flex justify-start gap-5">
                            <button>
                                <IoMdMore color="orange" size={40} />
                            </button>
                            <button className="bg-orange-400 w-10 h-6 mt-2 flex justify-center items-center">
                                <FaHeart color="white" />
                            </button>
                            <span className="flex justify-center items-center">
                                1 like
                            </span>
                            <span className="flex justify-center items-center">
                                1 resposta
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;