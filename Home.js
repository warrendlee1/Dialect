import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileWord } from '@fortawesome/free-solid-svg-icons'
import Divider from '@material-ui/core/Divider';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const feedData = [
    {
        title: "The Art of War",
        author:"Warren Lee",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        file: "https://essayspirit.com/wp-content/uploads/2019/07/leadership-style-essay-1-638.jpg",

    },
];

export default class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            fileId: null,
        }

    }
    render() {
        if(this.state.fileId != null) {
            return (
                <div style = {{backgroundColor: "#e8e8e8",  }}>
                    <div style = {{ height: 905, marginLeft: "21.25%",display:"flex", flexDirection:"row", marginRight:"21.25%",  }}>
                        <div style = {{ width: "65%", height: "96%", marginTop: "1%",}}>
                            <Card style = {{height: "100%", overflowY: 'scroll',   }}>   
                                <FontAwesomeIcon 
                                    onClick = { () => {
                                        this.setState({fileId: null})
                                        }
                                    } 
                                    icon={faChevronLeft} size = "2x" color = "darkgray" weight = "light"
                                    style = {{marginLeft: "3%", marginTop: "3%",
                                    }}
                                />
                                <img src = {feedData[this.state.fileId].file} alt = "file" style = {{width: "97%",}}/>
                            </Card>
                        </div>
                        <div style = {{width: "35%", height: "96%", marginLeft: "1%", marginTop: "1%", }}>
                            <Card style = {{height: "100%"}}>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>Comments</Typography>
                                </CardContent>

                            </Card>
                        </div>
                    </div>
                </div>
            );
        }
        return ( 
            <div style = {{backgroundColor: "#e8e8e8",  }}>
                <div style = {{ height: 905, marginLeft: "21.25%",display:"flex", flexDirection:"row", marginRight:"21.25%",  }}>
                    <div style = {{ width: "65%", height: "96%", marginTop: "1%",}}>
                        <Card style = {{height: "100%", overflowY: 'scroll',   }}>
                            <CardContent style = {{marginLeft:"3%", }}>
                                <Typography color="textSecondary" gutterBottom>Latest</Typography>
                            </CardContent> 
                            {
                                feedData.map((item,index) =>(
                                    <div boxShadow={0} style = {{ marginLeft: "3%", marginBottom: "3%", height: "20%", borderColor: "gray",display:"flex", flexDirection:"row" }}>
                                        <div style = {{ marginLeft: "3%", marginRight: "10%", }}>
                                            <div onClick={ () => {
                                                this.setState({fileId: index})
                                                }
                                                }>
                                                <div style = {{display: 'flex',  flexDirection:'row'}}>
                                                    <Typography style = {{ fontSize: 26, fontWeight: "bold" ,  }}>
                                                        {item.title}
                                                    </Typography>
                                                    <FontAwesomeIcon icon={faFileWord} size = "1x" style = {{marginLeft: "1%",}}/>
                                                </div>                                            
                                            </div>
                                            <Typography style = {{fontStyle:"italic", marginBottom: "2%"}}>
                                                by {item.author}
                                            </Typography>
                                            <Typography style = {{ fontSize: 14,  }}>
                                                {item.description}
                                            </Typography>
                                            <Divider light style = {{marginTop: "4%",}}/>
                                        </div>
                                    </div>
                                ))
                            }
                        </Card>
                    </div>
                    <div style = {{width: "35%", height: "96%", marginLeft: "1%", marginTop: "1%", }}>
                        <Card style = {{height: "100%"}}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Comments</Typography>
                            </CardContent>

                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}