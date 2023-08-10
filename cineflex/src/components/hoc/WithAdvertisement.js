import { Component } from "react";

/**
 * @description HOC component for advertisement
 * @returns EnhancedComponent
 */
const WithAdvertisement = (OriginalComponent) => {
    class EnhancedComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                timer: undefined,
                message: undefined,
                showAd: false,
                showNotification: false,
                adAlreadyDisplayed: false
            }
        };

        // Method to display content for given time
        displayContent = (adTimer, time, message) => {
            this.setState({timer: adTimer - time, message: message, showNotification: true});
        };

        // Method to display ad for given time
        displayAd = (time, message) => {
            this.setState({timer: time, message, showAd: true, showNotification: true, adAlreadyDisplayed: true});
        }

        // Method to stop displaying ad
        stopAd = () => {
            this.setState({message: undefined, showAd: false, showNotification: false});
        }

        render() {
            return (
                <OriginalComponent {...this.props} {...this.state} displayContent={this.displayContent} displayAd={this.displayAd} stopAd={this.stopAd}/>
            );
        }
    }
    
    return EnhancedComponent;
};

export default WithAdvertisement;