import React from 'react'
import { useStateAPI } from '../api'
import Profile from '../component/profile'


function Index() {
  // const [profileImage, setProfileImage] = useState("")
  const profileResult = useStateAPI('https://www.instagram.com/lacorgi/?__a=1&max_id=endcursor')
  console.log(profileResult)
  // setProfileImage(profileResult.data.graphql.user.profile_pic_url)
  // console.log(profileImage)
  return (
    <>
    
      <Profile 
        name = {profileResult.name}
        profile = {profileResult.profile}
        biography = {profileResult.biography}
        external_url = {profileResult.external_url}
        follow_count = {profileResult.follow_count}
        following_count = {profileResult.following_count}
        posts = {profileResult.posts}
      />
     
    </>
  )
}

export default Index
