// JavaScript source code
import React, { Component } from "react";
import './my.css';
import mp from './01.mp3';
import mp1 from './02.mp3';
import mp2 from './03.mp3';
import mp3 from './04.mp3';



class Script1 extends Component {
    constructor() {
        super();

        this.state = {

            show4: false,
            show1: true,
            show2: true,
            show3: true,
            likeCounter: 0,
            likeCounter1: 0,
            likeCounter2: 0,
            likeCounter3: 0,
            add1: '',
        }
    }


    counter = () => {
        this.setState((prevState) => ({
            likeCounter: prevState.likeCounter + 1,

        }));
    };

    counter1 = () => {
        this.setState((prevState) => ({
            likeCounter1: prevState.likeCounter1 + 1,

        }));
    };
    counter2 = () => {
        this.setState((prevState) => ({
            likeCounter2: prevState.likeCounter2 + 1,

        }));
    };

    counter3 = () => {
        this.setState((prevState) => ({
            likeCounter3: prevState.likeCounter3 + 1,

        }));
    };


    render() {


        let { add1 } = this.state;

        
        return (
            <html>
                <body>
                    <div class="M1" >

                        <div class="My information" >

                            <center><h1>Play & Fill it </h1></center>
                        </div>
                    </div>

                    <div class="M2" >
                   
                        <center>
                            <input type="search" id="searchbtn" id="sbar" placeholder="Search a Song" />
                            
                            <button id="btns"  >Search</button>
                                                   <table>
                            
                            
                                {

                                    this.state.show1 ?
                                   <tr>

                                    <td >  <button id='btn1' onClick={this.counter}>
                                        {this.state.likeCounter} likes
                                    </button>
                            </td>
                    <td>
                        <h2>Mast Magan </h2>
                        <h4>2 State</h4>
                    </td>
                    <td>
                        <audio controls>
                                            <source src={mp} type="audio/ogg"/>
                        </audio>
                                            </td>
                                        </tr>
                                            : null
                        }
                                    <td>
                                        

                                    <button id="btn5" onClick={() => { this.setState({ show1: !this.state.show1 }) }}>{this.state.show1 ? 'Remove' : 'ADD'} Item</button>


                        </td>
                


                            
                                {

                                    this.state.show2 ?
                                   <tr>


                                    <td >  <button id="btn2" onClick={this.counter1}>
                                        {this.state.likeCounter1} likes
                                    </button>
                                    </td>
                                    <td>
                            <h2>Offo </h2>
                            <h4>2 State</h4>
                        </td>
                        <td>
                            <audio controls>
                                            <source src={ mp1} type="audio/ogg"/>

                            </audio>
                        </td>
                                        </tr>
                                        : null
                                }
                            <td>
                                    <button id="btn6" onClick={() => { this.setState({ show2: !this.state.show2 }) }}>{this.state.show2 ? 'Remove' : 'ADD'} Item</button>


                            </td>
                




                                {

                                    this.state.show3 ?
                                        <tr>

                                    <td >  <button id="btn3" onClick={this.counter2}>
                                        {this.state.likeCounter2} likes
                                    </button>
                                    </td>

                                    <td>
                                <h2>Locha-E-Ulfat</h2>
                                <h4>2 State</h4>
                            </td>
                            <td>
                                <audio controls>
                                            <source src={mp2} type="audio/ogg"/>

                                </audio>
                                </td>                                        </tr>
                            : null
                                }
                            <tr>
                                <button id="btn" onClick={() => { this.setState({ show3: !this.state.show3 }) }}>{this.state.show3 ? 'Remove' : 'ADD'} Item</button>


                            </tr>

                                
                                </table>
                            </center>
                        

                    </div>
                    <div class="M4">
                        {

                            this.state.show4 ?
                                     
                                   <table align="center">
                                                
                                    <button id="btn3" onClick={this.counter3}>
                                        {this.state.likeCounter3} likes
                                    </button>
                                  <td>
                                <h2>Chaandaniya</h2>
                                <h4>2 State</h4>
                                   </td>
                                 
                                    <td>
                                <audio controls>
                                            <source src={mp3} type="audio/ogg"/>

                                </audio>
                            </td>

                                </table>
                                : null
                        }
                                        


                        <button id="btn4" onClick={() => { this.setState({ show4: !this.state.show4 }) }}>{this.state.show4 ? 'Remove'  : 'ADD' } Item</button>
                       

                    </div>
                </body>
            </html>
                        );
    }
}
export default Script1;