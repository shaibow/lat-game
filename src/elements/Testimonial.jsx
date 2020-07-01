import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Publishing labels are a lot. We all know it. But when it comes to find a right match... You should have experiences in that. Lat Game helped us during this night mare process.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Sam</span> - Team Lead, Tommy dog studio.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Finding a proper game publisher and moving forward with them is a time consuming process. Lot's of effort is going to waste during this process. We are game developers not marketing experts, And Lat Game did a great job for us finding an excellent publisher for our game.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Saeed </span> - Game Developer.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-1.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-2.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;