import {
    useRef,
    useEffect,
    forwardRef,
    useState,
    useImperativeHandle,
} from "react";
import {
    Header,
    FirstImpression,
    IntroPage,
    TitleWithSubtitle,
    linkCss,
} from "../Components";

const imageText = (title, subtitle, imgLink) => {
    return {
        section: {
            className:
                "py-4 flex flex-row-reverse items-center justify-between bg-gray-50",
        },
        div: { className: "flex flex-col" },
        title: {
            h1title: {
                label: title,
                className: "text-3xl font-bold text-gray-800 mb-4",
            },
            subtitle: subtitle,
            p: {
                className: "text-gray-600 mb-4",
            },
            div: {
                className: "w-[90%]",
            },
        },
        cbutton: [
            {
                children: "Get started free",
                href: "/sign-up",
                className: linkCss.outline,
            },
        ],
        img: {
            div: {
                className: "text-center md:w-1/2 rounded-lg",
            },
            img: {
                src: imgLink,
                alt: "social image",
            },
        },
    };
};

const textImage = (title, subtitle, imgLink) => {
    return {
        section: {
            className:
                "py-4 flex flex-row items-center justify-center bg-gray-50",
        },
        div: { className: "flex flex-col" },
        title: {
            h1title: {
                label: title,
                className: "text-4xl text-gray-800 mb-4",
            },
            subtitle: subtitle,
            p: {
                className: "text-gray-600 mb-4 text-xl",
            },
            div: {
                className: "w-[90%]",
            },
        },
        cbutton: [
            {
                children: "Get started free",
                href: "/sign-up",
                className: linkCss.outline,
            },
        ],
        img: {
            img: {
                src: imgLink,
                alt: "social image",
            },
        },
    };
};

const headerSubheader = (title, subtitle) => {
    return {
        h1title: {
            label: title,
            className: "font-bold text-4xl mb-4",
        },
        subtitle: subtitle,
        p: {
            className: "text-gray-600 mb-4 w-[50%] text-center",
        },
        div: {
            className: "flex flex-col items-center",
        },
    };
};

export const LynklePage = () => {
    let ref = useRef();
    useEffect(() => {
        console.log(ref.current);
    }, []);

    return (
        <div className="font-sans bg-gray-50">
            <Header />
            <IntroPage ref={ref} />
            <FirstImpression />
            {/* Feature: Seamlessly Share */}
            <FirstImpression
                {...imageText(
                    "Seamlessly share, instantly connect",
                    "Share your details with anyone, anywhere. Compatible with Apple Wallet, Google Wallet, and more.",
                    "https://lynkle.com/landing/share-anywhere.svg"
                )}
            />
            <TitleWithSubtitle
                {...headerSubheader(
                    "Lynkle Pro",
                    "Unlock advanced branding controls, seamless lead collection, private card sharing, automated email signatures, card engagements and much more."
                )}
            />
            <FirstImpression
                {...textImage(
                    "Grow your network on auto-pilot",
                    "Effortlessly collect leads, grow your network, and build your mailing list.",
                    "https://lynkle.com/landing/generate-leads.svg"
                )}
            />
            <FirstImpression
                {...imageText(
                    "Sync with Google or Outlook",
                    "Connect your Google or Outlook account to automatically add new leads to your address book.",
                    "https://lynkle.com/landing/sync-contacts.svg"
                )}
            />
            <FirstImpression
                {...textImage(
                    "Stay on brand",
                    "Instantly convert your digital business card to an on-brand email signature that works on all major email clients.",
                    "https://lynkle.com/_next/image?url=%2Flanding%2Femail-signature.png&w=1920&q=100"
                )}
            />
            <FirstImpression
                {...imageText(
                    "Best-in-class privacy",
                    "Keep full control of your privacy with private card sharing—only those you select can access your Lynkle card by sharing an expiring link. This link automatically refreshes in your Apple Wallet, Google Wallet, or the Lynkle Send screen.",
                    "https://lynkle.com/landing/private-card-sharing.svg"
                )}
            />
            <TitleWithSubtitle
                {...headerSubheader(
                    "Lynkle Teams",
                    "With Lynkle Teams, you'll enjoy all the premium features and security of a Lynkle Pro plan, but with more ways to collaborate and communicate as a team."
                )}
            />
            <FirstImpression
                {...textImage(
                    "Team cards for everyone",
                    "Beautiful, consistent digital business cards tailored to your brand for your whole team.",
                    "https://lynkle.com/landing/team-cards.svg"
                )}
            />
            <FirstImpression
                {...imageText(
                    "Card templates",
                    "Update designs, information, or branding across all cards instantly with powerful, flexible templates for every team in your organization.",
                    "https://lynkle.com/landing/card-templates.svg"
                )}
            />
            <FirstImpression
                {...textImage(
                    "Centralized team contacts",
                    "Capture and manage every lead from every team member in one unified view. Automatically sync new leads with your CRM.",
                    "https://lynkle.com/landing/team-contacts.svg"
                )}
            />
            <FirstImpression
                {...imageText(
                    "Simple billing and user management",
                    "Add or remove users, handle billing, and oversee your team's cards from one hassle-free dashboard.",
                    "https://lynkle.com/landing/billing-management.svg"
                )}
            />
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
