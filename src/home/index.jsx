import React from "react";
import { useStateAPI } from "../api";
import Profile from "../component/profile";

const  Home = () => {

  const profileResult = useStateAPI(
    "https://www.instagram.com/lacorgi/?__a=1&max_id=endcursor"
  );

  if (!profileResult) {
    return <p>Loading....</p>;
  }
  const result = profileResult.user;
  const {
    username,
    profile_pic_url,
    biography,
    external_url,
    edge_followed_by,
    edge_follow,
    edge_owner_to_timeline_media,
  } = result;

  return (
    <>
      {result && (
        <Profile
          name={username}
          profile={profile_pic_url}
          biography={biography}
          external_url={external_url}
          follow_count={edge_followed_by.count}
          following_count={edge_follow.count}
          posts={edge_owner_to_timeline_media.edges}
          post_count={edge_owner_to_timeline_media.count}
        />
      )}
    </>
  );
}

export default Home;
