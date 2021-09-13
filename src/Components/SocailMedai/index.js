import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Social,SocialMedia,Ican,P,SpanMedia,Info2,Conainter,Creative,CreativeInfo,CreativeTitle,InfoDir,Span,InfoDesc,A} from './style'
 const SocailMedai = () => {
     const [socialMedai, setsocialMedai] = useState([]);
     useEffect(() => {
          axios.get('js/data.json').then(resposive=>setsocialMedai(resposive.data.social));
     },[])
    return (
        <div>
            <Creative >
                <Conainter >
                    <CreativeInfo >
                        <CreativeTitle ><Span>This is</Span> Me</CreativeTitle>
                           
                        <InfoDir >Creative Director</InfoDir>
                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <A >explicabo</A> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                        </p>
                        <InfoDesc >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                        </InfoDesc>
                    </CreativeInfo>
                </Conainter>
            </Creative>
    
         <SocialMedia class="social-media">
            
            {socialMedai.map(item=>{
                return(
                    <Social background={item.background} key={item.id} class="social face">
                <Ican className={item.icon}></Ican>
                <P>
                    <SpanMedia class="info1">{item.title}</SpanMedia>
                    <SpanMedia  style={{ marginBottom: "8px"}} class="info2">{item.body}</SpanMedia>
                </P>
            </Social>
                )
            })}
            
        </SocialMedia>
 </div>
       
    )
}
export default SocailMedai