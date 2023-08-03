import React from 'react';
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import Badge from '@/components/badge/Badge';

type List = {
  id:string,
  title:string,
  type:string,
  company:string,
  location:string,
  start:string,
  end:string
}

const About:React.FC = () => {
  const listExp:Array<List> = [
    {
      id:'1',
      title:'Frontend Web Developer',
      type:'Fulltime',
      company:'Company Name Here',
      location:'Bengaluru',
      start:'Sep 2021',
      end:'Dec 2022'
    },
    {
      id:'2',
      title:'Frontend Web Developer',
      type:'Fulltime',
      company:'Company Name Here',
      location:'Bengaluru',
      start:'Sep 2021',
      end:'Dec 2022'
    }
  ];

  const listEducation:Array<List> = [
    {
      id:'1',
      title:'Frontend Web Developer',
      type:'Fulltime',
      company:'Company Name Here',
      location:'Bengaluru',
      start:'Sep 2021',
      end:'Dec 2022'
    },
    {
      id:'2',
      title:'Frontend Web Developer',
      type:'Fulltime',
      company:'Company Name Here',
      location:'Bengaluru',
      start:'Sep 2021',
      end:'Dec 2022'
    }
  ];

  const _renderList = (item:List) => {
    return (
      <div className='abs-list mb-5' key={item.id}>
        <div className='d-flex align-items-center justify-content-between mb-2'>
          <h2>{item.title}</h2>
          <Badge 
            text={item.type}
            color='#018C0F'
            backgroundColor='#D7FFE0'
            borderRadius={12}
            px='28px'
            py='6px'
            fontSize='0.75rem'
            fontWeight='600'
          />
        </div>
        <div className='d-flex align-items-center justify-content-between'> 
          <div className='abs-comp-loc'>
            <div className='me-3'>
              <FaBuilding color="#706c6c"/>
              <span className='ms-2'>{item.company}</span>
            </div>
            <div className='me-3'>
              <FaMapMarkerAlt color="#706c6c"/>
              <span className='ms-2'>{item.location}</span>
            </div>
          </div>
          <div className='align-items-center'>
            <FaCalendarAlt color="#706c6c" />
            <span className='ms-2'>{item.start} - {item.end}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className='abs'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-5'>
            <h1 className='text-title mb-5'>About Me</h1>
            <p className='text-primary abs-desc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 mb-5'>
            <h1 className='text-title mb-5'>Work Experience</h1>

            {listExp.map(item => {
              return _renderList(item)
            })}
            
          </div>
          <div className='col-md-12'>
            <h1 className='text-title mb-5'>Education</h1>
            {listEducation.map(item => {
              return _renderList(item)
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;