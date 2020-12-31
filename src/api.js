import React from "react";

const API = async (url, abortSignal) => {
    const response = await fetch(url, { signal: abortSignal });
    return response.json();
  };

export const useStateAPI = (url) => {
    const [value, setValue] = React.useState({
      name:'',
      profile:'',
      biography:'',
      external_url:'',
      follow_count:0,
      following_count:0,
      posts:[]
    })
    React.useEffect(() => {
      // This is the abort controller that will cancel the fetch if the component was unmounted
      const controller = new AbortController();
      const signal = controller.signal;
  
      let mounted = true;
  
      const fetchData = async () => {
        try {
          const data = await API(url, signal);
          setValue({
            name : data.graphql.user.username,
            profile : data.graphql.user.profile_pic_url,
            biography : data.graphql.user.biography,
            external_url : data.graphql.user.external_url,
            follow_count : data.graphql.user.edge_followed_by.count,
            following_count : data.graphql.user.edge_follow.count,
            posts : data.graphql.user.edge_owner_to_timeline_media.edges
          })
        
        } catch (e) {
            console.log(e)
        }
      };
      // it will fetch data only on mount so that
      if (mounted) {
        fetchData();
      }
  
      return () => {
        mounted = false;
        controller.abort();
      };
    }, [url]);

    return value;
  };


//   Detail


export const useDetailAPI = (url) => {
    const [value, setValue] = React.useState({
       display_url:'',
       profile:'',
       username:'',
       comment:[],
       like_count:0
    })
    React.useEffect(() => {
      // This is the abort controller that will cancel the fetch if the component was unmounted
      const controller = new AbortController();
      const signal = controller.signal;
  
      let mounted = true;
  
      const fetchData = async () => {
        try {
          const data = await API(url, signal);
          setValue({
            display_url: data.graphql.shortcode_media.display_url,
            profile: data.graphql.shortcode_media.owner.profile_pic_url,
            username: data.graphql.shortcode_media.owner.username,
            comment: data.graphql.shortcode_media.edge_media_to_parent_comment.edges,
            like_count: data.graphql.shortcode_media.edge_media_preview_like.count
          })
        
        } catch (e) {
            console.log(e)
        }
      };
      // it will fetch data only on mount so that
      if (mounted) {
        fetchData();
      }
  
      return () => {
        mounted = false;
        controller.abort();
      };
    }, [url]);

    return value;
  };
  