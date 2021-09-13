 import styled from 'styled-components';

export const Container= styled.div`
 margin:auto;
 width:85%;
`
export const Profile_skills= styled.div`
padding: 50px 0;
overflow: hidden; 
`
export const Profile_= styled.div`
width: 50%;
float: left;
`
export const ProfileTitle= styled.h2`
font-size: 40px;
margin-bottom: 20px;
`
export const Profile_list= styled.ul`
list-style: none;
`
export const My= styled.span`
font-weight: normal;
`
export const Profile_list_item= styled.li`
margin-bottom: 8px
`
export const Profile_list_item_span= styled.span`
display: inline-block;
width:100%
font-weight: bold
`






// .profile_skills .profile .profile-list .profile-item span.web {
//     font-weight: normal;
//     color: #eb5424
// }
export const Skills_= styled.div`
display: inline-block;
width: 50%;
font-weight: bold
`

export const Skills_desc= styled.p`
font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px;
`




export const BoxType= styled.div`
overflow: hidden;
padding: 10px 0;
margin-bottom: 10px
`
export const Skille_title= styled.h2`
font-size: 40px;
margin-bottom: 20px;
`

export const Levele= styled.span`
float: right;
margin-right: 100px
`

export const Parent= styled.div`
height: 2px;
clear: both;
background: #f8f8f8;
position: relative;
top: 5px
`

export const Sp1= styled.span`
background: #eb5424;
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0;
width:${props=>props.level}
`





// .profile_skills .skills .bar .parent span.sp1 {
//     width: 100%;
// }

// .profile_skills .skills .bar .parent span.sp2 {
//     width: 90%;
// }

// .profile_skills .skills .bar .parent span.sp3 {
//     width: 80%;
// }

// .profile_skills .profile .profile-title,
// .profile_skills .skills .skills-title{
    // font-size: 40px; 
    // margin-bottom: 20px
// }

// .profile_skills .profile .profile-title span,
// .profile_skills .skills .skills-title span{
//     font-weight: normal;
// }

