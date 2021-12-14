import React from 'react'
function source(props) {
    const {step} = props;
    return (
        <div className="site-main main-process d-flex align-items-center">
        <div className="process-wrapper">
            <div className="main-step step-create-shop" data-step={step} style={{"--step":step}}>
                <div className="box-process-bar">
                    <div className="process-icon">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_67_711)">
                                <path d="M25.2651 21.9996L20.7076 17.4421L14.3271 19.2651L13.4156 19.2651C11.9025 19.2651 10.6811 20.4865 10.6811 21.9996C10.6811 23.5126 11.9025 24.7341 13.4156 24.7342L14.3271 24.7342L20.7076 26.5571L25.2651 21.9996ZM14.7257 17.2846C14.9758 17.4546 15.2927 17.4893 15.574 17.378C17.1531 16.7532 19.8386 16.1888 22.7583 15.8692C23.0548 15.8363 23.3165 15.661 23.4589 15.3983C23.7527 14.8585 23.3843 14.4261 23.3458 14.2999C23.2612 14.1308 21.2023 10.1501 15.2384 10.1501C10.7325 10.1501 10.6809 12.7733 10.6809 12.8846C10.6809 13.3885 11.0885 13.7962 11.5923 13.7961C13.1003 13.7962 14.3268 15.0228 14.3269 16.5307C14.3269 16.8323 14.4765 17.1146 14.7257 17.2846ZM23.4589 28.601C23.3165 28.3384 23.0548 28.163 22.7584 28.1301C19.7372 27.7989 17.122 27.2506 15.5821 26.6239C15.3008 26.51 14.9813 26.5429 14.7293 26.712C14.4783 26.882 14.327 27.1651 14.327 27.4686C14.327 28.9765 13.1004 30.2031 11.5925 30.2032C11.0886 30.2032 10.6809 30.6109 10.681 31.1147C10.681 31.2259 10.7326 33.8492 15.2385 33.8492C21.2025 33.8492 23.2614 29.8685 23.345 29.7003C23.3817 29.58 23.7527 29.139 23.4589 28.601ZM43.3128 22.5465C43.5498 22.2184 43.5498 21.7809 43.3128 21.4526C43.1671 21.2704 41.0523 18.5176 37.1147 16.3664L35.2917 21.9586L37.1147 27.6327C41.0523 25.4816 43.167 22.7288 43.3128 22.5465ZM30.7341 18.3536C28.7288 18.3536 27.0881 19.9943 27.0881 21.9996C27.0881 24.0231 28.7287 25.6457 30.7341 25.6457C32.7576 25.6457 34.3801 24.0231 34.3801 21.9996C34.3801 19.9943 32.7576 18.3536 30.7341 18.3536Z" fill="url(#paint0_linear_67_711)"></path>
                                <path d="M37.1147 16.3668C34.5442 14.9449 31.1899 13.7964 27.0881 13.7964C25.739 13.7964 24.1712 13.8875 22.567 14.0515C19.4861 14.3979 16.624 14.9995 14.9104 15.6923C14.564 15.8199 14.327 16.148 14.327 16.5309L14.327 19.2654L20.7076 19.2654C22.2207 19.2654 23.4421 20.4868 23.4421 21.9999C23.4421 23.5311 22.2389 24.7344 20.7076 24.7344H14.3271L14.3271 27.469C14.3271 27.8335 14.5458 28.1799 14.8921 28.3075C16.5875 29.0002 19.3768 29.6018 22.567 29.9482C24.1712 30.1122 25.7391 30.2035 27.0881 30.2035C31.1898 30.2035 34.5441 29.0549 37.1146 27.6329L37.1147 16.3668ZM30.7341 25.6459C28.7288 25.6459 27.0881 24.0234 27.0881 21.9999C27.0881 19.9946 28.7288 18.3539 30.7341 18.3539C32.7576 18.3539 34.3801 19.9946 34.3801 21.9999C34.3801 24.0234 32.7576 25.6459 30.7341 25.6459ZM8.86591 22.0089C8.86586 21.505 8.45822 21.0974 7.95441 21.0974L1.28931 21.0884C0.785462 21.0884 0.377776 21.4961 0.377818 21.9999C0.377862 22.5037 0.785507 22.9114 1.28931 22.9114L7.95441 22.9203C8.45826 22.9203 8.86595 22.5127 8.86591 22.0089ZM7.95441 24.7433H6.13142C5.62757 24.7433 5.21988 25.151 5.21992 25.6548C5.21992 26.1587 5.62761 26.5664 6.13142 26.5663L7.95441 26.5663C8.45822 26.5664 8.86595 26.1586 8.86591 25.6548C8.86586 25.151 8.45822 24.7434 7.95441 24.7433ZM6.13138 19.2743L7.95437 19.2743C8.45822 19.2743 8.86591 18.8666 8.86587 18.3628C8.86587 17.859 8.45818 17.4513 7.95437 17.4513L6.13138 17.4513C5.62757 17.4513 5.21984 17.859 5.21988 18.3628C5.21992 18.8666 5.62761 19.2743 6.13138 19.2743Z" fill="url(#paint1_linear_67_711)"></path>
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_67_711" x1="10.6849" y1="21.9973" x2="43.4896" y2="21.9973" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#ADDCFF"></stop>
                                    <stop offset="0.5028" stopColor="#EAF6FF"></stop>
                                    <stop offset="1" stopColor="#EAF6FF"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear_67_711" x1="0.38339" y1="21.9976" x2="37.1147" y2="21.9976" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#5558FF"></stop>
                                    <stop offset="1" stopColor="#00C0FF"></stop>
                                </linearGradient>
                                <clipPath id="clip0_67_711">
                                    <rect width="44" height="44" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <span className="process-bar">
                        <span className="process-bar-line"></span>
                        <span className="process-bar-dots"></span>
                    </span>
                </div>
                <div className="step-content text-center">
                    <div className="step-des step-1">
                        <h4 className="process-step-title">Đăng ký thành công, cửa hàng của bạn đã sẵn sàng hoạt động
                        </h4>
                        <p className="process-step-note">Bước 1/3: Đăng ký tài khoản</p>
                    </div>
                    <div className="step-des step-2">
                        <h4 className="process-step-title">Chờ một chút nhé, chúng tôi đang tạo cửa hàng của bạn</h4>
                        <p className="process-step-note">Bước 2/3: Khởi tạo cửa hàng của bạn</p>
                    </div>
                    <div className="step-des step-3">
                        <h4 className="process-step-title">Chờ một chút nhé, chúng tôi đang tạo cửa hàng của bạn</h4>
                        <p className="process-step-note">Bước 3/3: Áp dụng thiết lập cửa hàng</p>
                    </div>
                </div>

            </div>
        </div>
</div>
    )
}

export default source
