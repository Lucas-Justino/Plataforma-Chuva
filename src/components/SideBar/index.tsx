import Footer from "../Footer";
import Logo from "../Logo/SVGLogo";
import Main from "../Main";
import Navbar from "../NavBar";
import Resume from "../Resume";

export default function SideBar() {
    return (
        <>
            <div className="flex gap-0 ">
                <div className="drawer lg:drawer-open w-64">
                    <input id="my-drawer-2" className="drawer-toggle bg-orange-100" />
                    <div className="drawer-side border border-gray-300 shadow-md">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu min-h-full bg-white p-0 m-0 text-black w-64">
                            <div className="bg-orange-500 flex justify-center items-center h-24">
                                <span className="text-white text-xl">
                                    SLACA 2019
                                </span>
                            </div>
                            <Logo />
                            <li>
                                <a className="hover:bg-orange-100 border-b-2 border-gray-200 rounded-none">Apresentação</a>
                                <a className="hover:bg-orange-100 border-b-2 border-gray-200 rounded-none">Comitês</a>
                                <a className="hover:bg-orange-100 border-b-2 border-gray-200 rounded-none">Autores</a>
                                <a className="hover:bg-orange-100 border-b-2 border-gray-200 rounded-none">Eixos temáticos</a>
                                <a className="hover:bg-orange-100 border-b-2 border-gray-200 rounded-none">Trabalhos</a>
                                <a className="hover:bg-orange-100 border-b-2 border-gray-200 rounded-none">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex-grow gap-0 m-0 p-0">
                    <Navbar />
                    <Main />
                    <Resume />
                    <Footer />
                </div>
            </div>
        </>
    );
}
