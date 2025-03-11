import {
    useState,
    forwardRef,
    useImperativeHandle,
    useRef,
    useEffect,
} from "react";

const Title = forwardRef((props, ref) => {
    const [st, setSt] = useState({
        className: "text-2xl font-bold text-[rgb(50,19,95)] select-none",
        ...props,
    });
    useImperativeHandle(ref, () => ({ st, setSt }));
    return <div {...st}>{st.label}</div>;
});
export const H1Title = forwardRef((props, ref) => {
    const [st, setSt] = useState({
        className: "md:text-5xl/tight text-gray-800 mb-4",
        ...props,
    });
    let title = useRef();
    useImperativeHandle(ref, () => ({ st, setSt, title }));
    return <Title {...st} ref={title} />;
});
export const TitleWithSubtitle = forwardRef((props, ref) => {
    const [st, setSt] = useState({
        ...props,
        div: { className: "max-w-[50%] mx-auto" },
        p: { className: "text-gray-600 text-lg" },
    });
    let h1title = useRef();
    useImperativeHandle(ref, () => ({ st, setSt, h1title }));
    return (
        <div {...st.div}>
            <H1Title {...st.h1title} ref={h1title} />

            <p {...st.p}>{st.subtitle}</p>
        </div>
    );
});
export const Menu = forwardRef((props, ref) => {
    const [st, setSt] = useState({
        className: "text-gray-600 hover:text-purple-800",
        ...props,
    });
    useImperativeHandle(ref, () => ({ st, setSt }));
    return (
        <a href={st.hrefLink} className={st.className}>
            {st.label}
        </a>
    );
});
export const CButton = forwardRef((props, ref) => {
    const [st, setSt] = useState({
        className:
            "bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-purple-700 mx-2",
        ...props,
    });
    useImperativeHandle(ref, () => ({ st, setSt }));
    return <button {...st} />;
});
export const Header = forwardRef((props, ref) => {
    const [st, setSt] = useState({
        header: {
            className:
                "flex justify-between items-center p-4 bg-white shadow-md px-16",
        },
        title: { label: "LYNKLE" },
        nav: {
            className: "space-x-4",
        },
        menus: [
            { children: "Home", hrefLink: "#" },
            { children: "Pricing", hrefLink: "#" },
            { children: "Blogs", hrefLink: "#" },
        ],
        buttons: [{ children: "Log in" }, { children: "Sign up" }],
    });
    useImperativeHandle(ref, () => ({ st, setSt }));
    return (
        <header {...st.header}>
            <Title {...st.title} />
            <nav {...st.nav}>
                {st.menus.map((menu) => (
                    <Menu key={menu.children} {...menu} />
                ))}
            </nav>
            <div>
                {st.buttons.map((button) => (
                    <CButton key={button.children} {...button} />
                ))}
            </div>
        </header>
    );
});
export const Brands = forwardRef((props, ref) => {
    const [st, setSt] = useState({
        div1: {
            className: "text-2xl mt-16",
            label: "Trusted by industry leaders",
        },
        div2: { className: "flex justify-center" },
        img: { className: " w-[150px] mx-4 h-24" },
        ...props,
    });
    useImperativeHandle(ref, () => ({ st, setSt }));
    return (
        <>
            <div className={st.div1.className}>{st.div1.label}</div>
            <div {...st.div2}>
                {st.brands.map((brand) => (
                    <img
                        key={brand[1]}
                        src={brand[0]}
                        alt={brand[1]}
                        className={st.img.className}
                    />
                ))}
            </div>
        </>
    );
});
