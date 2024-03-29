interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center  shadow-lg bg-[#2c2c2cf2] justify-center z-50">
                    <div className="bg-white w-[545px] py-6 rounded-lg relative ">
                        <button
                            onClick={onClose}
                            className="absolute top-0 right-0 m-10 text-black hover:text-gray-300 "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
