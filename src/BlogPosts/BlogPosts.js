import React, { Component } from 'react'
import { fetchBlogPostServices } from "../services/blogPostServices";
import MaterialTable from "material-table";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
 class BlogPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id:"",
          title:"",
          userId:"",
          body:"",

        }
      
    }
  

    componentDidMount() {
        this.props.fetchBlogPostServices();
    }
    setDataInTable = (blogPostResponse) => {

        let localpost = [];
        let count = 0;
        for (let post of blogPostResponse) {
          let temppost = {};
          temppost.title =post.title;
          temppost.id =post.id;
          temppost.userId =post.userId;
          temppost.body =post.body;
            
          localpost.push(temppost);
        }
        return localpost;
      };
      setRowData = (rowData) => {
        const { history } = this.props;
  history.push({
    pathname: "/blogPost", 
    state: { title: rowData.title, id: rowData.id,userId: rowData.userId,body: rowData.body, } 
        });
      };
    render() {
       
        let data=[];
        data = this.setDataInTable(this.props.blogPostResponse);
        return (
            <>
              <MaterialTable
            columns={[
              {
                title: "ID",
                field: "id",
                hidden: true,
              },
              
              {
                title: "Blog Title",
                field: "title",
                 render: rowData =>{return <div onClick={()=>this.setRowData(rowData)}>{rowData.title}</div>}
              },
              
         
           
            ]}
            data={data}
            title="Blog Posts List"
            options={{
              search: true,
              paging: true,
              
              actionsColumnIndex: -1,
              exportButton: true, exportAllData: true ,
            //   editCellStyle: {
            //     width: "10px",
            //   },
              headerStyle: {
                backgroundColor: "rgb(245,245,248)",
                color: "black",
                zIndex: "0",
              },
            }}
            // actions={[
            //   {
            //     tooltip: "Edit Selected Users",
            //     icon: "edit",
            //     onClick: (event, rowData) => {
            //       this.handleModalShowHide();
            //       this.setRowData(rowData);
            //     },
            //   },
            // ]}
          />
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    blogPostResponse:state.fetchBlogPostsReducer.blogPosts,
    blogPostError:state.fetchBlogPostsReducer.error,
    
   
  });
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchBlogPostServices
    }, dispatch
  );
  
  export default 
    connect(mapStateToProps, mapDispatchToProps)(BlogPosts)
  ;