 import { Component } from 'react';
import {WorkStyle,Container,WorkTitle,Span,ContainerWork,ContainerTitle,Line,PartDesc} from './style';
import axios from 'axios'


  class Work extends Component {
      state={
          works:[]
      }
      componentDidMount() {
          axios.get('js/data.json').then(resposive=>this.setState({works:resposive.data.works}) );
      }
      
      render(){
        return (
            <WorkStyle >
                <Container >
                    <WorkTitle ><Span>My</Span> Work</WorkTitle>
                      {this.state.works.map(item=>{
                           return ( <ContainerWork first={item.id} key={item.id} >
                            <i className={item.icon_name}></i>
                            <ContainerTitle >{item.title}</ContainerTitle>
                            <Line ></Line>
                            <PartDesc>
                              {item.body}
                            </PartDesc>
                           </ContainerWork>)
                      })}
                </Container>
            </WorkStyle>
        )
      }
  }

export default Work