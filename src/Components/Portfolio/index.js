import React,{useState,useEffect} from 'react'
import axios from 'axios'

import {PortfolioStyle,PortfolioStyleTitle,Span,PortfoportfolioList,PortfolioListItem,BoxPhoto,Img,Overlay,BoxSpan} from "./style";


 const Portfolio = () => {
    const [skills, setskills] = useState([]);
    useEffect(() => {
        axios.get('js/data.json').then(resposive=>setskills(resposive.data.portfolio));
    },[]);
    return (
        <PortfolioStyle >
            <PortfolioStyleTitle ><Span>My</Span> Portfolio</PortfolioStyleTitle>
            <PortfoportfolioList >
                <PortfolioListItem active >All</PortfolioListItem>
                <PortfolioListItem >HTML</PortfolioListItem>
                <PortfolioListItem >Photoshop</PortfolioListItem>
                <PortfolioListItem >Wordpress</PortfolioListItem>
                <PortfolioListItem >Mobile</PortfolioListItem>
            </PortfoportfolioList>
             {skills.map(item=>{
                 return(  
                 <div key={item}>
                 <BoxPhoto>
                     <Img src={item.image} alt="" />
                     <Overlay >
                         <BoxSpan>
                             Show Image
                         </BoxSpan>
                     </Overlay>
                 </BoxPhoto>
                </div>)
             })}
     </PortfolioStyle>
    )
}

export default Portfolio