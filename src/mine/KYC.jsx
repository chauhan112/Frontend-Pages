import bank from "../assets/bank.png";

const VerifyIcon = () => {
    return (
        <svg
            className="w-7"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
        </svg>
    );
};

const Navigation = () => {
    return (
        <div className="bg-dark w-[30%] h-[100%] p-4">
            <div className="flex justify-center items-center gap-4 mt-8 ml-4">
                <img src={bank} alt="bank logo" className="w-20" />
                <div className="text-2xl font-semibold text-white">
                    Trishan Bank Limited
                </div>
            </div>

            <button className="text-white flex items-center w-full gap-2 p-4 font-bold text-left transition ease-in rounded-md bg-primary hover:bg-secondary mt-16 ">
                <VerifyIcon />
                <span className="text-white">KYC Verification</span>
            </button>
        </div>
    );
};

const Header = () => {
    return <div>KYC Verification</div>;
};
const ContentArea = () => {
    return (
        <div className="w-full flex flex-col">
            <Header />
            {/* <Form /> */}
        </div>
    );
};

export const KYC = () => {
    return (
        <div className="flex w-full h-[100vh]">
            <Navigation />
            <ContentArea />
        </div>
    );
};
