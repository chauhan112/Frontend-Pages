const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="text-2xl font-bold text-purple-800">LYNKLE</div>
            <nav className="space-x-4">
                <a href="#" className="text-gray-600 hover:text-purple-800">
                    Home
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-800">
                    Pricing
                </a>
                <button className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700">
                    Login
                </button>
            </nav>
        </header>
    );
};

export const LynklePage = () => {
    return (
        <div className="font-sans bg-gray-50">
            {/* Header */}
            <Header />
            {/* Hero Section */}
            <section className="text-center py-16 bg-white">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Create your digital business card in seconds
                </h1>
                <button className="bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
                    Get started free
                </button>
                <div className="flex justify-center space-x-6 mt-8">
                    {["DELTA", "NETFLIX", "IBM", "HSBC", "Berkeley"].map(
                        (brand) => (
                            <img
                                key={brand}
                                src={`https://via.placeholder.com/100x40?text=${brand}`}
                                alt={brand}
                                className="h-10"
                            />
                        )
                    )}
                </div>
            </section>

            {/* Feature: First Impression */}
            <section className="py-16 flex flex-col md:flex-row items-center justify-center bg-gray-50">
                <div className="md:w-1/2 p-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Leave a lasting first impression
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Create free personalized digital business cards to
                        elevate your networking. Try free!
                    </p>
                    <button className="bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
                        Get started free
                    </button>
                </div>
                <div className="md:w-1/2 p-6">
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <div className="bg-yellow-400 text-center py-2 rounded-t-lg">
                            <span className="text-purple-800 font-semibold">
                                LYNKLE
                            </span>
                        </div>
                        <div className="p-4 text-center">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Profile"
                                className="w-24 h-24 rounded-full mx-auto"
                            />
                            <h3 className="text-xl font-bold mt-2">
                                Emily Johnson
                            </h3>
                            <p className="text-gray-600">
                                Certified Marketing Professional
                            </p>
                            <p className="text-gray-600">Contact Details</p>
                            <p className="text-gray-600">
                                📧 emily.johnson@email.com
                            </p>
                            <p className="text-gray-600">📞 +1 234 567 8900</p>
                            <p className="text-gray-600">
                                🌐 www.emilyjohnson.com
                            </p>
                        </div>
                    </div>
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
