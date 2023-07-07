/**
 * @description Function to create main element
 * @returns Main element
 * @author @ranjithks-cdw
 */
const Main = ({className, children}) =>{
    return (
        <main className={className}>
            {children}
        </main>
    );
};

export default Main;