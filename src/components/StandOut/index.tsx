
import React from 'react';

import "./index.css";



const StandOut: React.FC = () => { 
    return(
        <div className = "stand-out-container">
            <h1 className = "stand-out-heading">Why Vibrer Stands Out?</h1>

            <div className = "stand-out-feature">
                <div className="stand-out-feature-item">
                        <img src="https://res.cloudinary.com/doimdc1vv/image/upload/v1736392909/yg7j9czoum1ll7mqgyqp.png" alt="feature" className = "icon"/>
                         <div className = "stand-out-feature-content">
                            <h3 className="stand-out-feature-heading">500 + Collections</h3>
                            <p className = "stand-out-feature-description">Our journey begins with a comprehensive understanding of your unique style and space requirements</p>
                    </div>
                </div>
                <div className="stand-out-feature-item">
                        <img src="https://s3-alpha-sig.figma.com/img/1ada/b27a/0bee11f475e8fd0393fd197b03d089b7?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ensw1XuTP-i-HlxS9yCpXE9f-pwSvr7zxSUj4F4zvuB5mHMyMv~N9hYftjIA8331jHETv0fWnz6gLDU7g6bAnluENGhx2IcVKPFdahL-PmU48i-pbNJprOACoERwcsb9yiXjXPtpS5abkacyIomyD5dBB1PdWHk48YLGxGWv8DJSDLS07Em573wCFBXPHgj1a7c009ETwt9gkHC87WxS2-x3AQ2CFtiMGiMkaH1qeyY8XlnRqO9hbPbnOX04T2wWl8OyiQxjc1AUrH2PjvXVvHmD0MbaXd5V3NVDcY5pGui8Dv7SvDuNFdAX3DusggsgBg-6UI~kFXigmGwtXSL8IA__" alt="feature" className = "fabric-icon icon"/>
                         <div className = "stand-out-feature-content">
                            <h3 className="stand-out-feature-heading">300 + Fabrics</h3>
                            <p className = "stand-out-feature-description">Our journey begins with a comprehensive understanding of your unique style and space requirements</p>
                    </div>
                </div>
            <div className="stand-out-feature-item">
                    <img src="https://res.cloudinary.com/doimdc1vv/image/upload/v1736392909/jtvcv0dcdlg4efkznmzf.png" alt="feature" className = "icon"/>
                     <div className = "stand-out-feature-content">
                        <h3 className="stand-out-feature-heading">Top-notch Quality</h3>
                        <p className = "stand-out-feature-description">Our journey begins with a comprehensive understanding of your unique style and space requirements</p>
                </div>
            </div>

            <div className="stand-out-feature-item">
                    <img src="https://res.cloudinary.com/doimdc1vv/image/upload/v1736392775/zt1a4bsi4joolo7bf92i.png" alt="feature" className = "icon"/>
                     <div className = "stand-out-feature-content">
                        <h3 className="stand-out-feature-heading">Colour and Length customization</h3>
                        <p className = "stand-out-feature-description">Our journey begins with a comprehensive understanding of your unique style and space requirements</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default StandOut;