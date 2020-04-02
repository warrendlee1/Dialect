import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const feedData = [
    {
        title: "Essay1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ,
        essayLink: "https://essayspirit.com/wp-content/uploads/2019/06/History-essay-example.jpg",
        id:"0001",
    },
    {
        title: "Essay2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ,
        essayLink: "https://essayspirit.com/wp-content/uploads/2019/06/History-essay-example.jpg",
        id:"0002",
    },
    {
        title: "Essay3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ,
        essayLink: "https://essayspirit.com/wp-content/uploads/2019/06/History-essay-example.jpg",
        id:"0003",
    },
    {
        title: "Essay4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ,
        essayLink: "https://essayspirit.com/wp-content/uploads/2019/06/History-essay-example.jpg",
        id:"0004",
    },
    {
        title: "Essay5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ,
        essayLink: "https://essayspirit.com/wp-content/uploads/2019/06/History-essay-example.jpg",
        id:"0005",
    },
    {
    title: "Essay6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ,
    essayLink: "https://essayspirit.com/wp-content/uploads/2019/06/History-essay-example.jpg",
    id:"0006",
    }
];

export default class Home extends React.Component{

    render() {
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
                                    <div boxShadow={0} style = {{ marginLeft: "3%", marginBottom: "5%", height: "20%", borderColor: "gray",display:"flex", flexDirection:"row" }}>
                                        <img href = "google.com" style = {{height: "80%" , marginLeft: "3%", marginTop: "3%", marginBottom: "auto" }} src={item.essayLink} alt = "poop"/>
                                        <div style = {{ marginTop: "3%", marginLeft: "3%", marginRight: "10%", }}>
                                            <Typography style = {{ fontSize: 24, fontWeight: "bold" ,  }}>
                                                {item.title}
                                            </Typography>
                                            <Typography style = {{ fontSize: 12,  }}>
                                                {item.description}
                                            </Typography>
                                            <Typography style = {{fontSize: 10,}}>
                                                    {item.id}
                                            </Typography>
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
        )
    }
}