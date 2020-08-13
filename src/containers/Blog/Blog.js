import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state={
        posts:[],
        id:null
    }
    componentDidMount(){
     axios.get('http://get-presso.us-east-1.elasticbeanstalk.com/Customer/status')
          .then(response=>
            {
                const slicept=response.data.slice(0,4);
                const updatedResp=slicept.map(slicept=>{
                    return{
                        ...slicept,
                    author:'karl'
                    }
                      }
                )
                this.setState({posts:updatedResp})
                console.log(this.state.posts);
            }
            )
    }
    ClickHandler=(id)=>{
       this.setState({id:id});
    }
    render () {
     
        const posts=this.state.posts.map
        (post=>
            {return <Post key={post.STATUS_ID} title={post.CONTROLLER_MODE} author={post.author} clicked={()=>this.ClickHandler(post.STATUS_ID)}/>});
        return (
            <div>
                <section className="Posts">
                   {posts}
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost id={this.state.id} val={this.state.posts}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;