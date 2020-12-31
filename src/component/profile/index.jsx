import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './index.css'
import { Link } from 'react-router-dom'


const Index = ({ name , profile , biography, external_url , follow_count, following_count,posts }) => {
    return (
        <>
             <div className="container wrapper">
        <div className="row">
          <div className="col s6 m3 offset-s3" style={{ border:'1px solid red;'}}>
              <Avatar
                      src={profile}
                      size={100}
                      round={true}
                      style={{ height: '170px', width: '170px' }}
                    />
          </div>
          <div className="col m6  offset-s1 offset-m1">
            <div className="row" style={{ marginTop:"20px"}}>
                <div className="col m12">
                  <span>
                    {name}
                  </span>
                </div>
            </div>
            <div className="row">

              <div className="col m12 pff">
                <div className="pword">110 <b>post</b></div>
                <div className="pword">{follow_count} <b>follower</b></div>
                <div className="pword">{following_count} <b>following</b></div>
              </div>
              
              
            </div>

            <div className="row">
                  <div className="col m12">
                    <span>
                      {biography}
                    </span>
                  </div>
            </div>
            <div className="row">
                  <div className="col m12">
                    <span>
                      <a href={external_url}>{external_url}</a>
                    </span>
                  </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container wrapper">
        <div className="row">
          <p>
            more posts from <b>{name}</b>
          </p>
        </div>
        <div className="row">
        {
                  posts.map((item) => (
                    <Link
                    data-testid="location"
                    to={`${process.env.PUBLIC_URL}/detail/${item.node.shortcode}`}
                    key={item.node.id}
                  >
                    <div className="col m4" >
                    
                        <div className="post-image">
                        <img
                            src={item.node.display_url}
                            alt=""
                            width="100%"
                            height="250px"
                            alt=""
                            className="responsive"
                        />
                        <div className="post-icon">
                            <svg
                            aria-label="Like"
                            class="_8-yf5 "
                            fill="#FFFFFF"
                            height="20"
                            viewBox="0 0 48 48"
                            width="20"
                            >
                            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                            &nbsp;
                            <span class="text">{item.node.edge_liked_by.count} </span>  &nbsp; &nbsp; &nbsp;
                            <svg
                            aria-label="Comment"
                            class="_8-yf5 "
                            fill="#ffffff"
                            height="20"
                            viewBox="0 0 48 48"
                            width="20"
                            >
                            <path
                                clip-rule="evenodd"
                                d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                                fill-rule="evenodd"
                            ></path>
                            </svg>&nbsp;
                            <span class="text">{item.node.edge_media_to_comment.count}</span> 
                        </div>
                        </div>
                    
                    </div>
            </Link>
          ))
        }
        </div>
      </div>
            
        </>
    )
}

export default Index
