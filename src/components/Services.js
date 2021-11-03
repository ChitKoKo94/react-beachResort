import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail, FaHiking, FaBeer, FaShuttleVan} from "react-icons/fa"

export default class Services extends Component {
    state = {
        services:[
            {
                icon: <FaCocktail/>,
                title: "free cocktails",
                info: 'Lorem. welcome to welcome to make me make me make me I run I jog new macbook pro'
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: 'Lorem. welcome to welcome to make me make me make me I run I jog new macbook pro'
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free shuttle",
                info: 'Lorem. welcome to welcome to make me make me make me I run I jog new macbook pro'
            },
            {
                icon: <FaBeer/>,
                title: "Strongest beer",
                info: 'Lorem. welcome to welcome to make me make me make me I run I jog new macbook pro'
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
