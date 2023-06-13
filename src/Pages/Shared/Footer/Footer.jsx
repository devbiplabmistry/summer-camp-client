
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content grid sm:grid-cols-2 lg:grid-cols-3">
            <div>
                <h3 className="font-[allura] text-4xl">contempo <br /> <span className="font-[roboto]">Dance school</span></h3> 
            </div>
            <div>
                <span className="footer-title">Contacts</span>
                <a className="link link-hover">102 Elgin Road</a>
                <a className="link link-hover">Kolkata,  700059</a>
                <a className="link link-hover">contempo@dance_studio.com</a>
                <a className="link link-hover">1-002-448-568</a>
            </div>
            <div>
                <span className="footer-title">Open Hours</span>
                <a className="link link-hover">Monday 11am-7pm</a>
                <a className="link link-hover">Monday 11am-7pm</a>
                <a className="link link-hover">Saturday 10am-6pm</a>
                <a className="link link-hover">Sunday 11am-6pm</a>
            </div>
            <div>
                <span className="footer-title">About</span>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Contacts</a>
            </div>
            <div className="mx-auto">
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;