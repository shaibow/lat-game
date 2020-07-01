import React, { Component } from "react";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";

let TeamContent = [
    {
        images: '01',
        title: 'Sabine Juksa',
        designation: 'Founder',
        socialNetwork: [
            {
                icon: <FaFacebookF />,
                url: 'https://www.facebook.com/sabine.juksa'
            },
            {
                icon: <FaLinkedinIn />,
                url: 'https://www.linkedin.com/in/sabine-juksa-0b6056160/'
            },
        ]
    },
    {
        images: '02',
        title: 'Pooya Khoshbakht',
        designation: 'Marketing manager',
        socialNetwork: [
            {
                icon: <FaFacebookF />,
                url: 'https://www.facebook.com/profile.php?id=1377047413'
            },
            {
                icon: <FaLinkedinIn />,
                url: 'https://www.linkedin.com/in/pooyakhoshbakht/'
            },
        ]
    },
];


class Team extends Component{
    render(){
        const {column} = this.props;
        return(
            <React.Fragment>
                {TeamContent.map((value , i ) => (
                    <div className={`${column}`} key={i}>
                        <div className="team">
                            <div className="thumbnail">
                                <img src={`/assets/images/team/team-${value.images}.jpg`} alt="Blog Images"/>
                            </div>
                            <div className="content">
                                <h4 className="title">{value.title}</h4>
                                <p className="designation">{value.designation}</p>
                            </div>
                            <ul className="social-icon" >
                                {value.socialNetwork.map((social, index) =>
                                    <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        )
    }
}
export default Team;