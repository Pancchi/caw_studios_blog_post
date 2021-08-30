import React, { Component } from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { fetchBlogCommentsServices } from "../services/blogPostServices";
 class singleBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:[],
        
        }
      
    }
    handleClick=(e,id)=>{
        e.preventDefault();
        this.props.fetchBlogCommentsServices(id)
        
     
    }
    componentDidUpdate(prevProps,prevState,snapShot){
        if(this.props.blogCommentsResponse!==prevProps.blogCommentsResponse){
          
            this.setState({
                comments:this.props.blogCommentsResponse
            })
        }
      

    }
    render() {
       let comment=this.state.comments
      let  data=this.props.location.state
        return (
            <>
                <br/>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-12"></div>
                    <div className="col-lg-6 col-md-12">
                    <Card className="text-center" >
  <Card.Header>Featured Blog Post {data.id}</Card.Header>
  <Card.Body>
    <Card.Title>{data.title}</Card.Title>
    <Card.Text>
    {data.body}
    </Card.Text>
    <Button variant="primary" onClick={(e)=>this.handleClick(e,data.id)}>See Comments</Button>
  
  </Card.Body>
</Card>
{comment.map((i)=>{
    return <>
    <Card style={{fontStyle:"oblique"}} key={i}>
    <Card.Title>Name</Card.Title> {i.name}<br/>
    <Card.Title>Email</Card.Title> {i.email}<br/>
    <Card.Title>Comment</Card.Title> {i.body}<br/></Card>
    </>
})}
                    </div>
                    <div className="col-lg-2 col-md-12"></div>
                </div>
             
            </>
        )
    }
}
const mapStateToProps = (state) => ({
     blogCommentsResponse:state.fetchBlogCommentsReducer.blogComments,
     blogCommentstError:state.fetchBlogCommentsReducer.error,
    
   
  });
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchBlogCommentsServices
    }, dispatch
  );
  
  export default 
    connect(mapStateToProps, mapDispatchToProps)(singleBlog)
  ;