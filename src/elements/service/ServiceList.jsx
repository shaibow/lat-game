import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Finding proper publisher',
        description: 'We have a vast network of international game publishers. Regarding your game we investigate through our network and offer you a list of proper game publishers..'
    },
    {
        icon: <FiLayers />,
        title: 'Pre Publish Consultant',
        description: 'You don\'t have a second chance for first impression. So before contacting your selected publisher we help you to polish your game in order to fit the publisher criteria.'
    },
    {
        icon: <FiUsers />,
        title: 'Market research',
        description: 'We are experienced in game market, so we offer you a market research service in order to help you to define your next game focus.'
    },
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);

        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
