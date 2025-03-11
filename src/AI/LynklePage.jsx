import { useRef, useEffect } from "react";
import { Header, TitleWithSubtitle, Brands, CButton } from "../Components";
export const LynklePage = () => {
    let ref = useRef();

    useEffect(() => {
        document.title = "LYNKLE | Digital Business Card";
        console.log(ref);
        ref.current.setSt({
            ...ref.current.st,
            img: { className: " w-[150px] mx-4 h-24" },
        });
    }, []);

    let brands = [
        [
            "https://lynkle.com/landing/trusted-by/rolls-royce.svg",
            "Rolls Royce logo",
        ],
        [
            "https://lynkle.com/landing/trusted-by/delta-airlines.svg",
            "Delta Airlines logo",
        ],
        [
            "https://lynkle.com/landing/trusted-by/roberto-cavalli.svg",
            "Roberto Cavalli logo",
        ],
        ["https://lynkle.com/landing/trusted-by/ibm.svg", "HSBC logo"],
        [
            "https://lynkle.com/landing/trusted-by/ucla.svg",
            "UCLA Berkeley logo",
        ],
    ];
    return (
        <div className="font-sans bg-gray-50">
            <Header />
            <section className="text-center py-16 bg-white h-screen ">
                <TitleWithSubtitle
                    {...{
                        h1title: {
                            label: "Create your digital business card in seconds",
                        },
                        subtitle:
                            "Instantly share who you are with anyone, anywhere.",
                    }}
                />

                <CButton>Get started free</CButton>
                <Brands brands={brands} ref={ref} />
            </section>

            {/* Feature: First Impression */}
            <section className="py-16 flex flex-col md:flex-row items-center justify-center bg-gray-50 ">
                <div className="md:w-1/2 p-6">
                    <h2 className="text-4xl text-gray-800 mb-4">
                        Leave a lasting first impression
                    </h2>
                    <p className="text-gray-600 mb-4 text-xl">
                        Create free personalized digital business cards to
                        elevate your networking. Try free!
                    </p>
                    <CButton>Get started free</CButton>
                </div>

                <div className="shadow-lg text-center md:w-1/4 rounded-lg">
                    <img
                        src="https://lynkle.com/landing/card-shot.svg"
                        alt="Profile"
                        className="mx-auto"
                    />
                </div>
            </section>

            {/* Feature: Seamlessly Share */}
            <section className="py-16 text-center bg-white">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Seamlessly share, instantly connect
                </h2>
                <p className="text-gray-600 mb-4">
                    Share your details with anyone, anywhere. Compatible with
                    Apple Wallet, Google Wallet, and more.
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                    {["facebook", "whatsapp", "youtube", "qr"].map((icon) => (
                        <img
                            key={icon}
                            src={`https://via.placeholder.com/40?text=${icon}`}
                            alt={icon}
                            className="w-10 h-10"
                        />
                    ))}
                </div>
                <button className="bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-purple-700 mt-4">
                    Get started free
                </button>
            </section>

            {/* Feature: LYNKLE Pro */}
            <section className="py-16 flex flex-col md:flex-row items-center justify-center bg-gray-50">
                <div className="md:w-1/2 p-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        LYNKLE Pro
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Unlock branding, analytics, lead collection, private
                        card sharing, active email signature, integrations, and
                        more.
                    </p>
                    <button className="bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
                        Get started free
                    </button>
                </div>
                <div className="md:w-1/2 p-6">
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-xl font-bold">
                            Share your details with Leo
                        </h3>
                        <p className="text-gray-600">📧 leo.smith@email.com</p>
                        <p className="text-gray-600">📞 +1 234 567 8900</p>
                        <button className="bg-purple-800 text-white px-4 py-2 rounded-lg mt-4 hover:bg-purple-700">
                            Share now
                        </button>
                    </div>
                </div>
            </section>

            {/* Feature: Sync with Google or Outlook */}
            <section className="py-16 text-center bg-white">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Sync with Google or Outlook
                </h2>
                <p className="text-gray-600 mb-4">
                    Connect your Google or Outlook account to sync contacts, add
                    to address book.
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                    <img
                        src="https://via.placeholder.com/40?text=Google"
                        alt="Google"
                        className="w-10 h-10"
                    />
                    <img
                        src="https://via.placeholder.com/40?text=Outlook"
                        alt="Outlook"
                        className="w-10 h-10"
                    />
                </div>
                <button className="bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-purple-700 mt-4">
                    Get started free
                </button>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    What our customers say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
                    {[
                        {
                            name: "Jennifer H.",
                            role: "Marketing Manager",
                            text: "LYNKLE has transformed how I network. The digital cards are easy to share and look professional!",
                        },
                        {
                            name: "Steven P.",
                            role: "Entrepreneur",
                            text: "I love the analytics feature! It helps me track who views my card and follow up effectively.",
                        },
                        {
                            name: "Amanda L.",
                            role: "Sales Executive",
                            text: "The best part is the seamless integration with my Google contacts. Saves me so much time!",
                        },
                    ].map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full mr-2"
                                />
                                <div>
                                    <h3 className="font-bold">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-600">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Frequently asked questions
                </h2>
                <div className="max-w-3xl mx-auto px-6">
                    {[
                        "How much do LYNKLE digital business cards cost?",
                        "How do I share my digital business card?",
                        "Can I share my LYNKLE card with someone who isn’t a LYNKLE user?",
                        "Do I need to download the app?",
                        "How do I update my LYNKLE card?",
                    ].map((question, index) => (
                        <div key={index} className="border-b py-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {question}
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-gray-50 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Contact us
                </h2>
                <p className="text-gray-600 mb-4">
                    Need help? Reach out at{" "}
                    <a
                        href="mailto:support@lynkle.io"
                        className="text-purple-800"
                    >
                        support@lynkle.io
                    </a>
                </p>
                <div className="flex justify-center space-x-4">
                    {["Company", "Resources"].map((section) => (
                        <div key={section}>
                            <h3 className="font-bold text-gray-800">
                                {section}
                            </h3>
                            <ul className="text-gray-600">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-purple-800"
                                    >
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-purple-800"
                                    >
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-purple-800"
                                    >
                                        Link 3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <p className="text-gray-600 mt-8">© 2023 LYNKLE Inc.</p>
            </footer>
        </div>
    );
};
