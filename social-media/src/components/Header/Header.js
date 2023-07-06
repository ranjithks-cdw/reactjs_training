/**
 * @description Function to create header element
 * @returns header element
 * @author @ranjithks-cdw
 */
const Header = ({className, children}) => {
    return (
        <header className={className}>
            {children}
        </header>
    );
};

export default Header;