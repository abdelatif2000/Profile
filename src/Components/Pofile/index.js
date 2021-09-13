import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Container,ProfileTitle,Profile_,Profile_skills,Profile_list,Profile_list_item,Profile_list_item_span,Skills_,Skills_desc,BoxType,My,Skille_title,Levele,Parent,Sp1} from './style';

 const Profile = () => {
     const [infrormation, setinfrormation] = useState([]);
     const [ALLskills, setskills] = useState([]);
     useEffect(() => {
         axios.get('js/data.json').then(resposive=>setskills(resposive.data.skills));
         axios.get('js/data.json').then(resposive=>setinfrormation(resposive.data.myProfile)).then(console.log(infrormation));
        
     }, [])
    return (
        <Profile_skills >
        <Container>
            <Profile_ >
                <ProfileTitle><My>My </My>Profile</ProfileTitle>
                <Profile_list >
                    {infrormation.map(item=>{
                        return(
                            <Profile_list_item>
                                <Profile_list_item_span>{item.name}</Profile_list_item_span>
                                   {item.Value_}  
                            </Profile_list_item>
                        )
                    })}
                </Profile_list>
            </Profile_>
            
            <Skills_ >
                <Skille_title >Some <My>skills</My></Skille_title>
                <Skills_desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </Skills_desc>
                 {ALLskills.map(item=>{
                     return (
                        <BoxType >
                        <span >{item.tecnology}</span>
                        <Levele >{item.level}</Levele>
                        <Parent >
                            <Sp1 level={item.level} ></Sp1>
                        </Parent>
                    </BoxType>
                     )
                 })}
            </Skills_>
    </Container>
    </Profile_skills>
    )
}
export default Profile
